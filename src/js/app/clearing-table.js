/*

---
title: Clearing table module
name: clearing-table-module
category: Javascript
---

 */
define(['jquery', 'app/google-docs', 'app/searchables', 'app/utils'], function ($, GOOGLEDOC, SEARCHABLE, UTILS) {

  var $window = $(window);
  var docID = '1M6mKYo2YAyIuEbePfFXWKaTKM7mZrM9f5eB-G43c';
  var backupDoc = 'http://www.york.ac.uk/static/data/clearing/2016.json';
  var letterLimit = 3;
  var searchLimit = 20;
  var trimAndAdd = function (numbers) {
    var output = '';
    $.each(numbers, function (i, v) {
      var vt = v.trim();
      if (i == numbers.length - 1 && i !== 0) output+= ' or ';
      output+= '<a class="c-clearing-table__phone-number" href="tel:'+vt+'">'+vt+'</a>';
      if (i < numbers.length - 2) output+= ', ';
    });
    return output;
  };

  var CLEARINGTABLE = function (options) {

    if (!options.container) return false;

    this.type = options.type || 'Both';
    this.subject = options.subject || 'All';
    this.container = options.container;
    this.data = [];
    this.letters = [];
    this.dataLoaded = false;
    this.letterCount = 0;
    this.id = setTimeout(null, 0);
    // Make up an ID if there isn't one
    if (!this.container.attr('id')) {
      this.container.attr('id', 'clearing-container-'+this.id);
    }
    this.container.addClass('c-clearing-container');
    this.table = $('<table>').addClass('c-clearing-table');
    this.table.attr('id', 'clearing-table-'+this.id);

    var t = new GOOGLEDOC({
      id: docID,
      backup: backupDoc
    });

    var that = this;

    $window.on('data.loaded', function (e, id, data) {
      if (id === docID && that.dataLoaded === false) {

        // Only load it once, even if there's more than one table on a page!
        that.dataLoaded = true;

        // Filter by subject
        if (that.subject !== 'All') {
          $.grep(data, function(a) {
            if (a.Subject === that.subject) that.data.push(a);
          });
        } else {
          that.data = data;
        }

        // Sort course title then Qualification
        that.data.sort(function (a, b) {
          if (a['Title of course'] === b['Title of course']) {
            return (a['Qualification earned'] > b['Qualification earned']) ? 1 : -1 ;
          }
          return (a['Title of course'] > b['Title of course']) ? 1 : -1 ;
        });

        var currentLetter = false;
        for (var i = 0; i < that.data.length; i++) {

          var thisCourse = that.data[i];

          // Add letter headers and update letter count
          var thisLetter = thisCourse['Title of course'].substr(0,1);
          if (thisLetter !== currentLetter) {
            that.letters.push(thisLetter);
            that.letterCount++;
            that.addHeaderRow(thisLetter);
            currentLetter = thisLetter;
          }

          // Add the row to the table?
          var addRow = false;
          if (that.type === 'Both') addRow = true;
          if (that.type === 'UK/EU' && thisCourse['Home/EU'] === 'y') addRow = true;
          if (that.type === 'International' && thisCourse['International'] === 'y') addRow = true;
          if (addRow === true) {
            that.addCourseRow(thisCourse);
          }

        }

        // Add table to container
        that.container.append(that.table);
        $(window).trigger('content.updated');

        if (that.data.length > searchLimit) {
          // Make table searchable
          that.makeSearchable();
        }

        // Grid layout for toggle/A to Z
        var g = $('<div>').addClass('o-grid');
        var gr = $('<div>').addClass('o-grid__row').appendTo(g);
        that.container.prepend(g);

        // Add toggle switch if type is 'Both'
        if (that.type === 'Both') {
          var t = that.createToggle();
          var gb1 = $('<div>').addClass('o-grid__box o-grid__box--half');
          gb1.append(t);
          gr.append(gb1);
          // Click UK/EU toggle
          var ukeuToggle = $('#clearing-table-'+that.id+'-toggle-input-ukeu');
          ukeuToggle.click();
        }

        // Add A to Z or remove header rows
        if (that.letterCount < letterLimit) {
          // Remove letter headers
          that.table.find('.c-clearing-table__letter-header').remove();
        } else {
          // Add A-Z links
          var ul = that.createLetterLinks();
          var gb2 = $('<div>').addClass('o-grid__box o-grid__box--half');
          gb2.append(ul);
          gr.append(gb2);
        }

      }

    });

    // Update A to Z when search updates
    this.table.on('search.updated', { that: that }, this.updateAtoZ);

    console.info(this);

  };

  CLEARINGTABLE.prototype.updateAtoZ = function(e) {
    console.log('Search updated');
    var that = e.data.that;
    var atozRows = that.table.find('.c-clearing-table__letter-header');
    atozRows.each(function(i, row) {
      var $row = $(row);
      console.log($row.text());
      var courseRows = $row.nextUntil('.c-clearing-table__letter-header');
      console.log(courseRows.hasClass('is-off'));
      console.log(courseRows.hasClass('is-hidden'));
    });
  };

  CLEARINGTABLE.prototype.createToggle = function() {
    var f = $('<form>').attr({
      'action': '#'+this.table.attr('id'),
      'method': 'get'
    }).addClass('c-form c-form--panel').on('submit', function(e) {
      e.preventDefault();
    });
    var fs = $('<fieldset>');
    var fe = $('<div>').addClass('c-form__element');
    var inputName = 'clearing-table-'+this.id+'-toggle-input';
    var fl = $('<label>').addClass('c-form__label')
                         .attr('for', inputName)
                         .text(this.label);
    var fg = $('<div>').addClass('c-form__element-group').attr('id', inputName);
    var fi_ukeu = $('<input>').addClass('c-form__radio')
                              .attr({'type': 'radio', 'id': inputName+'-ukeu', 'name': inputName })
                              .val('ukeu')
                              .on('change', { that: this }, this.checkTable);
    var fl_ukeu = $('<label>').addClass('c-form__label')
                              .attr({'for': inputName+'-ukeu'})
                              .text('Courses for UK/EU students');
    var fi_intl = $('<input>').addClass('c-form__radio')
                              .attr({'type': 'radio', 'id': inputName+'-intl', 'name': inputName })
                              .val('international')
                              .on('change', { that: this }, this.checkTable);
    var fl_intl = $('<label>').addClass('c-form__label')
                              .attr({'for': inputName+'-intl'})
                              .text('Courses for International students');

    // Join it all together
    fg.append(fi_ukeu, '&nbsp;', fl_ukeu, '<br>', fi_intl, '&nbsp;', fl_intl);
    fe.append(fl, fg);
    fs.append(fe);
    f.append(fs);

    return f;
  };

  CLEARINGTABLE.prototype.checkTable = function(e) {
    var $this = $(this);
    var that = e.data.that;
    var type = $this.val();
    // Get right table to update
    var formTarget = $this.parents('form').attr('action');
    var thisTable = $(formTarget);
    // Get all course rows
    var courseRows = thisTable.find('.c-clearing-table__course');
    courseRows.each(function(i, row) {
      var $row = $(row);
      $row.toggleClass('is-off', !$row.data(type));
      //var e = jQuery.Event('keyup', { data: { that: that.searchable } });
      //that.searchable.checkTable(e);
    });
  };

  CLEARINGTABLE.prototype.createLetterLinks = function() {
    var listId = 'clearing-table-'+this.id+'-atoz';
    var ul = $('<ul>').addClass('c-atoz__nav-list').attr('id', listId);
    var tableId = this.table.attr('id');
    $.each(this.letters, function(i, letter) {
      // Check target exists first
      var letterId = '#'+tableId+'-'+letter.toUpperCase();
      var headerRow = $(letterId);
      if (headerRow.length > 0) {
        var li = $('<li>').addClass('c-atoz__nav-item');
        var a = $('<a>').addClass('c-atoz__nav-link').attr('href', letterId).text(letter);
        li.append(a);
        ul.append(li);
        // Add 'Back to top' link to headers
        var topLink = $('<a>').addClass('c-clearing-table__top-link')
                              .attr('href', '#'+listId)
                              .text('Back to top');
        headerRow.append(topLink);
      }
    });
    return ul;
  };

  CLEARINGTABLE.prototype.makeSearchable = function() {
    this.container.addClass('js-searchable');
    this.searchable = new SEARCHABLE({
      container: this.table,
      header: '.c-clearing-table__letter-header',
      caseSensitive: false,
      label: 'Enter course title, keywords or UCAS code'
    });
  };

  CLEARINGTABLE.prototype.addCourseRow = function(course) {

    var numbers = trimAndAdd(course['Phone number(s)'].split(','));
    var isAdjustmentOnly = false;
    if (course['Adjustment only'] === 'y') {
      isAdjustmentOnly = true;
    } else if (course['Adjustment only'] === 'h' && (this.type === 'Home/EU' || this.type === 'Both')) {
      isAdjustmentOnly = true;
    } else if (course['Adjustment only'] === 'i' && (this.type === 'International' || this.type === 'Both')) {
      isAdjustmentOnly = true;
    }
    var courseCell =$('<td>')
    var courseCellContent = '<p class="c-clearing-table__title"><a href="'+course['Link to course page']+'">'+course['Title of course']+' ('+course['Qualification earned']+')</a></p>'+
      '<ul class="u-two-columns">'+
      '<li class="c-clearing-table__entry-requirements"><strong>'+course['Entry requirements']+'</strong> or equivalent tarrif points required';

      if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) {
        courseCellContent+= '    <br>';
        courseCellContent+= '    <small class="c-clearing-table__bullets">Must include: ';
      }
      if (course['Bullet 1']) courseCellContent+= course['Bullet 1'];
      if (course['Bullet 2']) courseCellContent+= '; '+course['Bullet 2'];
      if (course['Bullet 3']) courseCellContent+= '; '+course['Bullet 3']+'';
      if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) courseCellContent+= '</small>';

      courseCellContent+= '</li>'+
      '<li class="c-clearing-table__ucas-code">UCAS code '+course['UCAS code']+'</li>'+
      '<li class="c-clearing-table__course-length">'+course['Course length']+'</li>'+
      '<li class="c-clearing-table__phone-numbers">Call '+numbers+' to apply</li>';
    if (isAdjustmentOnly === true) courseCellContent+= '<li class="c-clearing-table__adjustment-only">Adjustment places only</li>';
    courseCellContent+= '</ul>';
    courseCell.html(courseCellContent);
    var courseRow = $('<tr>').addClass('c-clearing-table__course');
    courseRow.append(courseCell);
    if (this.type === 'UK/EU' || this.type === 'Both') {
      courseRow.attr('data-ukeu', course['Home/EU'] === 'y' ? 'true' : 'false');
    }
    if (this.type === 'International' || this.type === 'Both') {
      courseRow.attr('data-international', course['International'] === 'y' ? 'true' : 'false');
    }
    this.table.append(courseRow);
  };

  CLEARINGTABLE.prototype.addHeaderRow = function(letter) {
    //console.log('Add header row for '+letter.toUpperCase());
    var rowId = this.table.attr('id')+'-'+letter.toUpperCase();
    var headerCell = $('<th>').text(letter.toUpperCase()).attr('id', rowId);
    var headerRow = $('<tr>').addClass('c-clearing-table__letter-header').append(headerCell);
    this.table.append(headerRow);
  };

  return CLEARINGTABLE;

});
