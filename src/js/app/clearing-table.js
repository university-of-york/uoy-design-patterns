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
  var letterLimit = 5;
  var searchLimit = 20;
  var trimAndAdd = function (numbers) {
    var output = '';
    $.each(numbers, function (i, v) {
      var vt = v.trim();
      var vl = vt.replace(' ', '').replace('(0)', '');
      if (i == numbers.length - 1 && i !== 0) output+= ' or ';
      output+= '<a class="c-clearing-table__phone-number" href="tel:'+vl+'">'+vt+'</a>';
      if (i < numbers.length - 2) output+= ', ';
    });
    return output;
  };
  var makeLink = function(dept, courseCount) {
    var link = './'+dept.Department.toLowerCase().replace(/,/g, '').replace(/\s/g, '-');
    var a;
    if (dept.Department === dept.Subject) {
      // Link is Subject name
      a = $('<a>').addClass('c-clearing-list__link')
                  .attr('href', link)
                  .text(dept.Subject);
    } else {
      // Link is Department name
      l = $('<a>').addClass('c-clearing-list__link')
                  .attr('href', link)
                  .text(dept.Department);
      a = dept.Subject+' (see '+l.prop('outerHTML')+')';
    }
    var li = $('<li>').addClass('c-clearing-list__item')
                      .attr('data-department', dept.Subject)
                      .append(a);
    // Add markers to UK/EU-only or International-only departments
    if (courseCount['UK/EU'] === 0) {
      // International courses only
      li.addClass('is-international-only');
      li.append('&nbsp;<small class="c-clearing-list__comment">Places for international students only</small>');
    } else if (courseCount.International === 0) {
      // UK/EU courses only
      li.addClass('is-ukeu-only');
      li.append('&nbsp;<small class="c-clearing-list__comment">Places for UK/EU students only</small>');
    }
    return li;
  };

  var CLEARINGTABLE = function (options) {

    if (!options.container) return false;

    this.type = options.type || 'Both';
    this.department = options.department || 'All';
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

        // Filter by department
        if (that.department !== 'All') {
          $.grep(data, function(a) {
            if (a.Department === that.department) that.data.push(a);
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
            return (a.Subject > b.Subject) ? 1 : -1 ;
          }
        });

        var currentLetter = false;
        var currentCourse = false;
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

          // Department layout
          } else if (that.layout === "Departments") {

            // Set up subject counts
            if (typeof that.courseCount[thisCourse.Subject] === 'undefined') {
              that.courseCount[thisCourse.Subject] = {
                'UK/EU': 0,
                'International': 0
              };
            }
            // Count UK/EU and Intl courses
            if (thisCourse['Home/EU'] === 'y') that.courseCount[thisCourse.Subject]['UK/EU']++;
            if (thisCourse.International === 'y') that.courseCount[thisCourse.Subject].International++;

            if (thisCourse.Subject !== currentCourse.Subject) {

              // Make link with previous course
              if (currentCourse !== false && (that.courseCount[currentCourse.Subject]['UK/EU'] > 0 || that.courseCount[currentCourse.Subject].International > 0)) {
                var li = makeLink(currentCourse, that.courseCount[currentCourse.Subject]);
                that.list.append(li);
              }
              currentCourse = thisCourse;
            }
            if (i === that.data.length - 1) {
              if (currentCourse.Subject !== false && (thisCourse.Subject['UK/EU'] > 0 || thisCourse.Subject.International > 0)) {
                var lastLi = makeLink(thisCourse, that.courseCount[thisCourse.Subject]);
                that.list.append(lastLi);
              }
            }
          }

        }

        // Course layout
        if (that.layout === 'Courses') {
          // Add table to container
          that.container.append(that.table);
          $(window).trigger('content.updated');

          if ((that.courseCount['UK/EU'] > searchLimit) || (that.courseCount.International > searchLimit)) {
            // Make table searchable
            that.makeSearchable();
          }

          // Grid layout for toggle/A to Z
          var g = $('<div>').addClass('o-grid');
          var gr = $('<div>').addClass('o-grid__row').appendTo(g);
          that.container.prepend(g);

          if ((that.courseCount['UK/EU'] === 0) && (that.courseCount.International === 0)) {

            var noCourseBox = $('<div>').addClass('o-grid__box o-grid__box--full');
            var noCourseBoxContent = that.createPanel('<p>There are no vacancies in this department for September 2016. <a href="//www.york.ac.uk/study/undergraduate/courses/all">Explore your options for 2017 entry.</a></p>');
            noCourseBox.append(noCourseBoxContent);
            gr.append(noCourseBox);

          } else {

            // Add toggle switch if type is 'Both' (and there are some courses to toggle!)
            if (that.type === 'Both') {
              var gb1 = $('<div>').addClass('o-grid__box o-grid__box--half');
              var boxContent = '';
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

          }

          // Click UK/EU toggle
          var ukeuToggle = $('#clearing-table-'+that.id+'-toggle-input-ukeu');
          ukeuToggle.click();

        } else {

          // Add list to container
          that.container.append($('<h3>').text('Vacancies by subject area'));
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
    var fg_ukeu = $('<div>').addClass('c-form__radio-group');
    var fi_ukeu = $('<input>').addClass('c-form__radio')
                              .attr({'type': 'radio', 'id': inputName+'-ukeu', 'name': inputName })
                              .val('ukeu')
                              .on('change', { that: this }, this.checkTable);
    var fl_ukeu = $('<label>').addClass('c-form__label')
                              .attr({'for': inputName+'-ukeu'})
                              .text('Courses for UK/EU students');
    var fg_intl = $('<div>').addClass('c-form__radio-group');
    var fi_intl = $('<input>').addClass('c-form__radio')
                              .attr({'type': 'radio', 'id': inputName+'-intl', 'name': inputName })
                              .val('international')
                              .on('change', { that: this }, this.checkTable);
    var fl_intl = $('<label>').addClass('c-form__label')
                              .attr({'for': inputName+'-intl'})
                              .text('Courses for International students');

    // Join it all together
    fg_ukeu.append(fi_ukeu, '&nbsp;', fl_ukeu);
    fg_intl.append(fi_intl, '&nbsp;', fl_intl);
    fe.append(fl, fg_ukeu, fg_intl);
    fs.append(fe);
    f.append(fs);

    return f;
  };

  CLEARINGTABLE.prototype.createPanel = function(panelContent) {
    var p = $('<div>').addClass('c-alert c-alert--info');
    var pc = $('<div>').addClass('c-alert__content').appendTo(p);
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
    var courseCellContent = '<p class="c-clearing-table__title"><a href="'+course['Link to course page']+'">'+course['Qualification earned']+' '+course['Title of course']+'</a></p>'+
      '<ul class="u-two-columns">';

    console.log(course['No grades']);

    if (course['No grades'] !== '') {

        courseCellContent+= '<li class="c-clearing-table__entry-requirements">'+course['No grades']+'</li>';

    } else if (course['Entry requirements'] !== '') {

        courseCellContent+= '<li class="c-clearing-table__entry-requirements"><strong>'+course['Entry requirements']+'</strong> or equivalent tariff points from three A levels. Other qualifications are also accepted.';

        if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) {
          courseCellContent+= '    <br>';
          courseCellContent+= '    <small class="c-clearing-table__bullets">Must include: ';
        }
        if (course['Bullet 1']) courseCellContent+= course['Bullet 1'];
        if (course['Bullet 2']) courseCellContent+= '; '+course['Bullet 2'];
        if (course['Bullet 3']) courseCellContent+= '; '+course['Bullet 3']+'';
        if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) courseCellContent+= '</small>';

        courseCellContent+= '</li>';
      }
      courseCellContent+= '<li class="c-clearing-table__ucas-code">UCAS code '+course['UCAS code']+'</li>'+
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
    var rowId = this.table.attr('id')+'-'+letter.toUpperCase();
    var headerCell = $('<th>').text(letter.toUpperCase()).attr('id', rowId);
    var headerRow = $('<tr>').addClass('c-clearing-table__letter-header').append(headerCell);
    this.table.append(headerRow);
  };

  return CLEARINGTABLE;

});
