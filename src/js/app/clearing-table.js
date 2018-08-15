/*

---
title: Clearing table module
name: clearing-table-module
category: Javascript
---

 */

/*
 * Downloading a backup Fusion Table JSON file
 * Essentially, you can visit the API url below using the data table ID and API key
 * https://www.googleapis.com/fusiontables/v2/query?sql=SELECT%20*%20FROM%20[TABLE ID]&key=[API KEY]
 *
 * Then save it as a JSON file and upload to /static/data/clearing
 */

define(['jquery', 'app/google-docs', 'app/searchables', 'app/utils', 'app/modal-link'],
  function ($, GOOGLEDOC, SEARCHABLE, UTILS, MODALLINK) {

  var $window = $(window);
  var clearingData = window.PL_DATA.clearingData;
  var docID = clearingData.docID;
  var backupDoc = clearingData.backupDoc;
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
    var link = './'+dept.Department.toLowerCase().replace(/:/g, '').replace(/,/g, '').replace(/\s/g, '-');
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
    this.showRequirements = options.showRequirements;
    this.course = options.course || false;
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

      // need to empty this only if we've NOT got a course panel layout.
      // this will prevent the default content being replaced
      if(this.layout !== 'Course panel') {
          this.container.empty();
      }

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
      this.modalLink = false;
    } else if (this.layout === 'Course panel') {
      this.panel = $('<div>').addClass('c-panel c-panel--highlight').attr({'role':'alert'});
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

          var tempData = [];
          $.grep(data, function(a) {
              if(a['Home/EU'].toLowerCase() === 'y' ||
                  a.International.toLowerCase() === 'y') {
                  tempData.push(a);
              }
          });

          data = tempData;

        if (that.department !== 'All') {
          // Filter by department
          $.grep(data, function(a) {
            if (a.Department === that.department) that.data.push(a);
          });
        } else if (that.course !== false) {
          // Filter by course
          $.grep(data, function(a) {
            if (a['UCAS code'] === that.course) that.data.push(a);
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
          var inClearing = false;
        for (var i = 0; i < that.data.length; i++) {

          var thisCourse = that.data[i];

          // Course layout
          if (that.layout === 'Courses') {

            // Count UK/EU and Intl courses
            if (thisCourse['Home/EU'].toLowerCase() === 'y') that.courseCount['UK/EU']++;
            if (thisCourse.International.toLowerCase() === 'y') that.courseCount.International++;

            // Add the row to the table?
            var addRow = false;
            if (that.type === 'Both' && (thisCourse['Home/EU'].toLowerCase() === 'y' || thisCourse.International.toLowerCase() === 'y')) addRow = true;
            if (that.type === 'UK/EU' && thisCourse['Home/EU'].toLowerCase() === 'y') addRow = true;
            if (that.type === 'International' && thisCourse.International.toLowerCase() === 'y') addRow = true;
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

          // Course panel layout
          } else if (that.layout === "Course panel" && that.inClearing(thisCourse)) {

              // empty the container
              that.container.empty();
              // set the 'inClearing' value so that the modal gets triggered later on
              inClearing = true;

            var panelContent = $('<div>').addClass('c-panel__content');
            that.modalLink = $('<a>').attr(
                {
                    'href': '#modal-content-'+that.id,
                    'class': 'c-btn c-btn--medium js-modal--scroll'
                }).text('Find out more');


            panelContent.append('<h3>Clearing and adjustment 2018</h3>');
            panelContent.append('<p><strong>Places are available on this course through clearing and adjustment</strong></p>');
            panelContent.append($('<p>').append(that.modalLink));

            var modalContent = $('<div>').addClass('is-hidden').attr({'id':'modal-content-'+that.id});

            // Course title
            modalContent.append('<h2>'+thisCourse['Qualification earned']+' '+thisCourse['Title of course']+'</h2>');

            // Availability text
            modalAvailabilityText = 'Clearing and adjustment places are available for <strong>';

            if (thisCourse['Home/EU'].toLowerCase() === 'y') modalAvailabilityText+= 'UK/EU students';
            if (thisCourse['Home/EU'].toLowerCase() === 'y' && thisCourse.International.toLowerCase() === 'y') modalAvailabilityText+= ' and ';
            if (thisCourse.International.toLowerCase() === 'y') modalAvailabilityText+= 'international students';

            modalAvailabilityText = '</strong>';

            modalContent.append('<p>'+modalAvailabilityText+'</p>');

            if(that.showRequirements) {
                modalContent.append('<h3>Entry requirements</h3>');
                if (thisCourse['No grades'] !== '' || thisCourse['Entry requirements'] !== '') {
                    var entryReqText = '';
                    if (thisCourse['No grades'] !== '') {

                        entryReqText += thisCourse['No grades'];

                    } else if (thisCourse['Entry requirements'] !== '') {

                        entryReqText += '<strong>' + thisCourse['Entry requirements'] + '</strong> or equivalent tariff points from three A levels. Other qualifications are also accepted.';
                    }
                    modalContent.append('<p>' + entryReqText + '</p>');
                }

                if (thisCourse['Bullet 1'] || thisCourse['Bullet 2'] || thisCourse['Bullet 3']) {
                    var modalBullets = $('<ul>');
                    if (thisCourse['Bullet 1']) {
                        modalBullets.append('<li>' + thisCourse['Bullet 1'] + '</li>');
                    }
                    if (thisCourse['Bullet 2']) {
                        modalBullets.append('<li>' + thisCourse['Bullet 2'] + '</li>');
                    }
                    if (thisCourse['Bullet 3']) {
                        modalBullets.append('<li>' + thisCourse['Bullet 3'] + '</li>');
                    }
                    modalContent.append('<p>Must include:</p>');
                    modalContent.append(modalBullets);
                }
            }
            
            var numbers = trimAndAdd(thisCourse['Phone number(s)'].split(','));
              var modalBullets1 = $('<ul>');
              var modalBullets2 = $('<ol>');


              modalContent.append('<h3>Call our hotline</h3>');
              modalContent.append('<p>To apply call <a href="tel:+441904 234868">01904 234868</a></p>');
              modalContent.append('<p>Opening hours:</p>');

              modalBullets1.append('<li>16 - 17 August - 8am - 6pm</li>');
              modalBullets1.append('<li>18 - 19 August - 10am - 2pm</li>');
              modalBullets1.append('<li>20 - 24 August - Monday to Friday, 9am - 5pm</li>');
              modalContent.append(modalBullets1);

              modalContent.append('<p>Places fill up fast, so don\'t delay - give us a call and tell us why you want to apply.</p>');
              modalContent.append('<p>Before you call us</p>');

              modalBullets2.append('<li>Research the course(s) you\'re interested in and be ready to tell us why you want to apply.</li>');
              modalBullets2.append('<li>Pick up your results and make sure you meet the entry requirements. We\'ll need the details of your results in order to make our decision.</li>');
              modalBullets2.append('<li>Have your UCAS ID number to hand and a number we can call you back on.</li>');
              modalBullets2.append('<li>If your first language is not English you must also provide evidence of your <a href="https://www.york.ac.uk/study/undergraduate/applying/entry/english-language/">English language ability.</a></li>');
              modalContent.append(modalBullets2);

            that.panel.append(panelContent);
            that.panel.append(modalContent);

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
            if (thisCourse['Home/EU'].toLowerCase() === 'y') that.courseCount[thisCourse.Subject]['UK/EU']++;
            if (thisCourse.International.toLowerCase() === 'y') that.courseCount[thisCourse.Subject].International++;

            if (thisCourse.Subject !== currentCourse.Subject) {

              // Make link with previous course
              if (currentCourse !== false && (that.courseCount[currentCourse.Subject]['UK/EU'] > 0 || that.courseCount[currentCourse.Subject].International > 0)) {
                var li = makeLink(currentCourse, that.courseCount[currentCourse.Subject]);
                that.list.append(li);
              }
              currentCourse = thisCourse;
            }
            if (i === that.data.length - 1) {
              if (currentCourse.Subject !== false && (that.courseCount[currentCourse.Subject]['UK/EU'] > 0 || that.courseCount[currentCourse.Subject].International > 0)) {
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
            var noCourseBoxContent = that.createPanel(clearingData.noCourseMessage);
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

          //console.log(that.container, that.container.outerHeight());
          $(window).trigger('content.updated', ['clearing-table', that]);

        // Course panel layout
        } else if (that.layout === "Course panel" && inClearing) {

          that.container.append(that.panel);
          console.log(that.container, that.container.outerHeight());
          $(window).trigger('content.updated', ['clearing-table', that]);

          new MODALLINK({
            link: that.modalLink
          });

        // Department layout
        } else if (that.layout === "Departments") {

          // Add list to container
          that.container.append($('<h3>').text('Vacancies by subject area'));
          that.container.append(that.list);

          //console.log(that.container, that.container.outerHeight());
          $(window).trigger('content.updated', ['clearing-table', that]);

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

  CLEARINGTABLE.prototype.inClearing = function(courseToCheck) {
      return (courseToCheck['Home/EU'].toLowerCase() === 'y' ||
          courseToCheck.International.toLowerCase() === 'y');
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
    if (course['Adjustment only'].toLowerCase() === 'y') {
      isAdjustmentOnly = true;
    } else if (course['Adjustment only'].toLowerCase() === 'h' && (this.type === 'Home/EU' || this.type === 'Both')) {
      isAdjustmentOnly = true;
    } else if (course['Adjustment only'].toLowerCase() === 'i' && (this.type === 'International' || this.type === 'Both')) {
      isAdjustmentOnly = true;
    }
    var courseCell =$('<td>');
    var courseCellContent = '<p class="c-clearing-table__title"><a href="'+course['Link to course page']+'">'+course['Qualification earned']+' '+course['Title of course']+'</a></p>'+
      '<ul class="u-two-columns">';

    //console.log(course['No grades']);

      if(this.showRequirements) {
          if (course['No grades'] !== '') {

              courseCellContent += '<li class="c-clearing-table__entry-requirements">' + course['No grades'] + '</li>';

          } else if (course['Entry requirements'] !== '') {

              courseCellContent += '<li class="c-clearing-table__entry-requirements"><strong>' + course['Entry requirements'] + '</strong> or equivalent tariff points from three A levels. Other qualifications are also accepted.';

              if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) {
                  courseCellContent += '    <br>';
                  courseCellContent += '    <small class="c-clearing-table__bullets">Must include: ';
              }
              if (course['Bullet 1']) courseCellContent += course['Bullet 1'];
              if (course['Bullet 2']) courseCellContent += '; ' + course['Bullet 2'];
              if (course['Bullet 3']) courseCellContent += '; ' + course['Bullet 3'] + '';
              if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) courseCellContent += '</small>';

              courseCellContent += '</li>';
          }
      }

      courseCellContent+= '<li class="c-clearing-table__ucas-code">UCAS code '+course['UCAS code']+'</li>'+
      '<li class="c-clearing-table__course-length">'+course['Course length']+'</li>'+
      '<li class="c-clearing-table__phone-numbers">' + clearingData.callToApplyText.replace('{0}', numbers) + '</li>';
    if (isAdjustmentOnly === true) courseCellContent+= '<li class="c-clearing-table__adjustment-only">Adjustment places only</li>';
    courseCellContent+= '</ul>';
    courseCell.html(courseCellContent);
    var courseRow = $('<tr>').addClass('c-clearing-table__course');
    courseRow.append(courseCell);
    if (this.type === 'UK/EU' || this.type === 'Both') {
      courseRow.attr('data-ukeu', course['Home/EU'].toLowerCase() === 'y' ? 'true' : 'false');
    }
    if (this.type === 'International' || this.type === 'Both') {
      courseRow.attr('data-international', course.International.toLowerCase() === 'y' ? 'true' : 'false');
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
