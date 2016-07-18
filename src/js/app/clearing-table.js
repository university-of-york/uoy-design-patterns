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
  var makeLink = function(dept) {
    var link = '../'+dept.toLowerCase().replace(/,/g, '').replace(/\s/g, '-');
    var a = $('<a>').addClass('c-clearing-list__link')
                    .attr('href', link)
                    .text(dept);
    var li = $('<li>').addClass('c-clearing-list__item')
                      .attr('data-department', dept)
                      .append(a);
    return li;
  };

  var CLEARINGTABLE = function (options) {

    if (!options.container) return false;

    this.type = options.type || 'Both';
    this.subject = options.subject || 'All';
    this.layout = options.layout || 'Courses';
    this.container = options.container;
    this.data = [];
    this.dataLoaded = false;
    this.courseCount = {};
    this.id = setTimeout(function(){}, 0);
    // Make up an ID if there isn't one
    if (!this.container.attr('id')) {
      this.container.attr('id', 'clearing-container-'+this.id);
    }
    this.container.addClass('c-clearing-container');

    if (this.layout === 'Courses') {
      this.courseCount['UK/EU'] = 0;
      this.courseCount.International = 0;
      this.letters = [];
      this.letterCount = 0;
      this.table = $('<table>').addClass('c-clearing-table');
      this.table.attr('id', 'clearing-table-'+this.id);
      // Update A to Z when search updates
      this.table.on('search.updated', { that: this }, this.updateAtoZ);
    } else if (this.layout === 'Departments') {
      this.list = $('<ul>').addClass('c-clearing-list');
    }

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
          if (that.layout === 'Courses') {
            if (a['Title of course'] === b['Title of course']) {
              return (a['Qualification earned'] > b['Qualification earned']) ? 1 : -1 ;
            }
            return (a['Title of course'] > b['Title of course']) ? 1 : -1 ;
          } else {
            return (a.Department > b.Department) ? 1 : -1 ;
          }
        });

        var currentLetter = false;
        var currentDepartment = false;
        for (var i = 0; i < that.data.length; i++) {

          var thisCourse = that.data[i];

          // Course layout
          if (that.layout === 'Courses') {

            // Count UK/EU and Intl courses
            if (thisCourse['Home/EU'] === 'y') that.courseCount['UK/EU']++;
            if (thisCourse.International === 'y') that.courseCount.International++;

            // Add the row to the table?
            var addRow = false;
            if (that.type === 'Both' && (thisCourse['Home/EU'] === 'y' || thisCourse.International === 'y')) addRow = true;
            if (that.type === 'UK/EU' && thisCourse['Home/EU'] === 'y') addRow = true;
            if (that.type === 'International' && thisCourse.International === 'y') addRow = true;
            if (addRow === true) {
              // Add letter headers and update letter count
              var thisLetter = thisCourse['Title of course'].substr(0,1);
              if (thisLetter !== currentLetter) {
                that.letters.push(thisLetter);
                that.letterCount++;
                that.addHeaderRow(thisLetter);
                currentLetter = thisLetter;
              }
              that.addCourseRow(thisCourse);

            }

          } else if (that.layout === "Departments") {

            // Set up departmental counts
            if (typeof that.courseCount[thisCourse.Department] === 'undefined') {
              that.courseCount[thisCourse.Department] = {
                'UK/EU': 0,
                'International': 0
              };
            }
            // Count UK/EU and Intl courses
            if (thisCourse['Home/EU'] === 'y') that.courseCount[thisCourse.Department]['UK/EU']++;
            if (thisCourse.International === 'y') that.courseCount[thisCourse.Department].International++;

            if (thisCourse.Department !== currentDepartment) {

              // Make link with previous course
              if (currentDepartment !== false && (that.courseCount[currentDepartment]['UK/EU'] > 0 || that.courseCount[currentDepartment]['UK/EU'] > 0)) {
                var li = makeLink(currentDepartment);
                that.list.append(li);
              }
              if (i === that.data.length - 1) {
                var lastLi = makeLink(thisCourse.Department);
                that.list.append(lastLi);
              }
              currentDepartment = thisCourse.Department;
            }
          }

        }

        // Course layout
        if (that.layout === 'Courses') {
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

          // Add toggle switch if type is 'Both' (and there are some courses to toggle!)
          if (that.type === 'Both') {
            var gb1 = $('<div>').addClass('o-grid__box o-grid__box--half');
            var boxContent;
            if (that.courseCount['UK/EU'] !== 0 && that.courseCount.International !== 0) {
              boxContent = that.createToggle();
            } else if (that.courseCount.International > 0) {
              boxContent = that.createPanel('<p>The following courses only have places available for International students.</p>');
            } else if (that.courseCount['UK/EU'] > 0) {
              boxContent = that.createPanel('<p>The following courses only have places available for UK/EU students.</p>');
            }
            gb1.append(boxContent);
            gr.append(gb1);
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

          // Click UK/EU toggle
          var ukeuToggle = $('#clearing-table-'+that.id+'-toggle-input-ukeu');
          ukeuToggle.click();

        } else {

          // Add markers to UK/EU-only or International-only departments
          console.log(that.courseCount);
          // Add list to container
          that.container.append(that.list);
          $(window).trigger('content.updated');
        }

      }

    });

    console.info(this);

  };

  CLEARINGTABLE.prototype.updateAtoZ = function(e) {
    var that = e.data.that;
    var atozRows = that.table.find('.c-clearing-table__letter-header');
    atozRows.each(function(i, row) {
      var $row = $(row);
      var hideHeader = true;
      var courseRows = $row.nextUntil('.c-clearing-table__letter-header');
      var headerId = $row.children('th').attr('id');
      var atozLink = $('.c-atoz__nav-link[href="#'+headerId+'"]').parent();
      $row.show();
      atozLink.show();
      courseRows.each(function(j, courseRow) {
        if (hideHeader === false) return;
        var $courseRow = $(courseRow);
        if (!$courseRow.hasClass('is-off') && !$courseRow.hasClass('is-hidden')) {
          hideHeader = false;
        }
        if (j === courseRows.length - 1 && hideHeader === true) {
          $row.hide();
          atozLink.hide();
        }
      });
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

  CLEARINGTABLE.prototype.createPanel = function(panelContent) {
    var p = $('<div>').addClass('c-panel');
    var pc = $('<div>').addClass('c-panel__content').appendTo(p);
    pc.html(panelContent);
    return p;
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
    });
    var ev = jQuery.Event('keyup', { data: { that: that } });
    that.updateAtoZ(ev);
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
    var courseCell =$('<td>');
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
      courseRow.attr('data-international', course.International === 'y' ? 'true' : 'false');
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
