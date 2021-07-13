/*

---
title: Clearing table module
name: clearing-table-module
category: Javascript
---

 */

/*
 * Downloading a backup clearing data file
 * Essentially, you can visit the API url below using the sheet ID
 * https://spreadsheets.google.com/feeds/list/[sheetId]/1/public/values?alt=json
 *
 * Then save it as a JSON file and upload to /static/data/clearing/[yyyy].json
 */

define(['jquery', 'app/searchables', 'app/utils', 'app/modal-link'],
  function ($, SEARCHABLE, UTILS, MODALLINK) {

  // Toggle this value to enable/disable clearing info on course search results pages
  var courseSearchClearingFeatures_default = true;
  
  // Toggle this to control whether or not the online application URLs should be shown on course pages
  var disableApplyButton = false;

  // Toggle this to control whether or not clearing-adjusted entry requirements will be shown on course pages
  var disableEntryRequirements = true;

  // Toggle this to control whether or not course page promo panels will be updated
  var disablePromoPanel = false;

  // We'll use this to check for things to override/test
  var queryArgs = new URLSearchParams( window.location.search );
  
  // Override default with a query arg
  var clearingTest = queryArgs.get( 'clearingtest' );

  var courseSearchClearingFeatures = ( clearingTest || courseSearchClearingFeatures_default );

  // Overridable time to consider as now
  var nowParts = queryArgs.get( 'now' );
  // Get our current date/time
  var now = ( nowParts && clearingTest ) ? new Date( new Date( nowParts ).toLocaleString( "en-US" , { timeZone: "Europe/London" } ) ).valueOf() : Date.now();

  var $window = $(window);
  var clearingData = window.PL_DATA.clearingData;
  var sheetId = clearingData.sheetId;
  var backupDoc = clearingData.backupDoc;
  var letterLimit = 5;
  var searchLimit = 20;

  var CLEARINGTABLE = function (options) {

    if (!options.container) return false;

    // This will be used in various places
    // ⚠ Requires updating each year!
    this.clearingYear = clearingData.year;

    this.type = options.type || 'Both';
    this.department = options.department || 'All';
    this.subject = options.subject || 'All';
    this.layout = options.layout || 'Courses';

    // Skip out now if we've disabled this layout, unless we're in test mode
    if( !queryArgs.get( 'clearingtest' ) )
    {
      if( disableEntryRequirements && this.layout == 'Entry requirements' ) return;
      if( disablePromoPanel && this.layout == 'Course panel' ) return;
      if( disableApplyButton && this.layout == 'Apply button' ) return;
    }

    this.showRequirements = ( options.showRequirements && !disableEntryRequirements );
    
    this.differentYear = options.differentYear;
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

    if (this.layout === 'Courses') {
      this.courseCount = { 'UK': 0 , 'International': 0 };
      this.letters = [];
      this.letterCount = 0;
      this.table = $('<table>').addClass('c-clearing-table');
      this.table.attr('id', 'clearing-table-'+this.id);
      // Update A to Z when search updates
      this.table.on('search.updated', { that: this }, this.updateAtoZ);
    } else if (this.layout === 'Departments') {
      this.modalLink = false;
    } else if (this.layout === 'Course panel') {
      this.panel = $('<div>').addClass('c-panel c-panel--highlight');
    }

    // Get our clearing data (triggers data.loaded on success)
    this.fetchData( 'https://spreadsheets.google.com/feeds/list/' + sheetId + '/1/public/values?alt=json' , backupDoc );

    var that = this;

    $window.on('data.loaded', function (e, id, data) {
      if (id === sheetId && that.dataLoaded === false) {

        // Only load it once, even if there's more than one table on a page!
        that.dataLoaded = true;

        // Filter out courses _not_ in clearing
        var tempData = [];

        $.grep(data, function(a) {

          if(
            a.Home.toLowerCase() === 'y' ||
            a.International.toLowerCase() === 'y' ||
            a[ 'Adjustment only home' ].toLowerCase() === 'y' ||
            a[ 'Adjustment only international' ].toLowerCase() === 'y'
          ) {
            tempData.push(a);
          }
        });

        data = tempData;

        // Filter by other options

        if (that.department !== 'All') {
          // Filter by department
          $.grep(data, function(a) {
            if (a.Department === that.department) that.data.push(a);
          });
        } else if (that.subject !== 'All') {
          // Filter by subject
          $.grep(data, function(a) {
            var subjects = a.Subject.split( '|' );
            if( subjects.indexOf( that.subject ) !== -1 ) that.data.push(a);
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
            return (a.Department > b.Department) ? 1 : -1 ;
          }
        });

        var currentLetter = false;
        var currentCourse = false;
        var inClearing = false;
        for (var i = 0; i < that.data.length; i++) {

          var thisCourse = that.data[i];

          // Course layout
          if (that.layout === 'Courses') {

            // Count UK and Intl courses
            if ( thisCourse.Home.toLowerCase() === 'y' || thisCourse['Adjustment only home'].toLowerCase() === 'y' ) that.courseCount.UK++;
            if ( thisCourse.International.toLowerCase() === 'y' || thisCourse['Adjustment only international'].toLowerCase() === 'y' ) that.courseCount.International++;

            // Add the row to the table?
            var addRow = false;

            if(
                ( that.type === 'Both' && ( thisCourse.Home.toLowerCase() === 'y' || thisCourse.International.toLowerCase() === 'y' || thisCourse['Adjustment only home'].toLowerCase() === 'y' || thisCourse['Adjustment only international'].toLowerCase() === 'y' ) ) ||
                ( that.type === 'UK' && ( thisCourse.Home.toLowerCase() === 'y' || thisCourse['Adjustment only home'].toLowerCase() === 'y' ) ) ||
                ( that.type === 'International' && ( thisCourse.International.toLowerCase() === 'y' || thisCourse['Adjustment only international'].toLowerCase() === 'y' ) )
            ) addRow = true;

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

            // set the 'inClearing' value so that the content gets swapped out
            // and the modal gets triggered (if applicable) later on
            inClearing = true;

            that.panel.append( that.coursePanelContent( thisCourse ) );
            that.panel.append( that.coursePanelModalContent( thisCourse ) );
            
            // Also replace the content of the entry requirements footer with
            // the same content as the modal (current year only!)
            if( !that.differentYear ) $( '#entry-footer' ).html( that.getPanelContent( 'modal' , thisCourse ) );

          // Department layout
          } else if (that.layout === "Departments") {

            // Extract our subjects
            var subjects = thisCourse.Subject.split( "|" );

            // Add subject(s) to our global list if it doesn't already exist
            for( var s = 0 ; s < subjects.length ; s++ ) {

              var subject = subjects[ s ];

              // Initialise subject course counters
              if( that.courseCount[ subject ] == undefined ) {

                that.courseCount[ subject ] = {
                  'UK': 0,
                  'International': 0,
                  'Adjustment UK': 0,
                  'Adjustment International': 0
                };
              }

              // Count UK and Intl courses
              if (thisCourse.Home.toLowerCase() === 'y') that.courseCount[ subject ].UK++;
              if (thisCourse.International.toLowerCase() === 'y') that.courseCount[ subject ].International++;
              if (thisCourse['Adjustment only home'].toLowerCase() === 'y') that.courseCount[ subject ]['Adjustment UK']++;
              if (thisCourse['Adjustment only international'].toLowerCase() === 'y') that.courseCount[ subject ]['Adjustment International']++;

            }

          }

        }

        // Course layout
        if (that.layout === 'Courses') {

          // Add table to container
          that.container.empty();
          that.container.append(that.table);

          if ((that.courseCount.UK > searchLimit) || (that.courseCount.International > searchLimit)) {
            // Make table searchable
            that.makeSearchable();
          }

          // Grid layout for toggle/A to Z
          var g = $('<div>').addClass('o-grid');
          var gr = $('<div>').addClass('o-grid__row').appendTo(g);
          that.container.prepend(g);

          if ((that.courseCount.UK === 0) && (that.courseCount.International === 0)) {

            var noCourseBox = $('<div>').addClass('o-grid__box o-grid__box--full');
            var noCourseBoxContent = that.createPanel(clearingData.noCourseMessage);
            noCourseBox.append(noCourseBoxContent);
            gr.append(noCourseBox);

          } else {

            // Add toggle switch if type is 'Both' (and there are some courses to toggle!)
            if (that.type === 'Both') {
              var gb1 = $('<div>').addClass('o-grid__box o-grid__box--half');
              var boxContent = '';
              if (that.courseCount.UK !== 0 && that.courseCount.International !== 0) {
                boxContent = that.createToggle();
            } else if (that.courseCount.International > 0) {
                boxContent = that.createPanel('<p>The following courses only have places available for International students.</p>');
              } else if (that.courseCount.UK > 0) {
                boxContent = that.createPanel('<p>The following courses only have places available for UK students.</p>');
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

          // Click UK toggle
          var ukToggle = $('#clearing-table-'+that.id+'-toggle-input-uk');
          ukToggle.click();

          //console.log(that.container, that.container.outerHeight());
          $(window).trigger('content.updated', ['clearing-table', that]);

        // Original course panel if not in clearing
        } else if (that.layout === "Course panel" && !inClearing) {
            
          that.container.fadeIn().css( 'visibility' , 'visible' );
            
        // Course panel layout
        } else if (that.layout === "Course panel" && inClearing) {

          that.container.append(that.panel);
          that.container.fadeIn().css( 'visibility' , 'visible' );

          // console.log(that.container, that.container.outerHeight());
          $(window).trigger('content.updated', ['clearing-table', that]);

          // Set up our modal link if present
          // (it won't be if differentYear is true)
          var modalLink = that.container.find( '.js-modal' );
          if( modalLink.length > 0 ) {
            new MODALLINK({
              link: modalLink
            });
          }

          // Department layout
          } else if (that.layout === "Departments") {

            // Create our list
            that.list = $('<ul>').addClass('c-clearing-list');

            // Create each list item from subjects
            var subjectKeys = Object.keys( that.courseCount ).sort();

            for( var subjectKey = 0 ; subjectKey < subjectKeys.length ; subjectKey++ ) {

              var subjectName = subjectKeys[ subjectKey ];
              
              // Skip if the subject field is blank
              if( subjectName == '' ) continue;

              // Make sure there's at least one course to show
              if( parseInt( that.courseCount[ subjectName ].UK ) + parseInt( that.courseCount[ subjectName ].International ) + parseInt( that.courseCount[ subjectName ]['Adjustment UK'] ) + parseInt( that.courseCount[ subjectName ]['Adjustment International'] ) > 0 ) {
                that.list.append( that.makeLink( subjectName , that.courseCount[ subjectName ] ) );
              }

            }

          // Add list to container
          that.container.empty();
          that.container.append($('<h3>').text('Vacancies by subject area'));
          that.container.append(that.list);

          //console.log(that.container, that.container.outerHeight());
          $(window).trigger('content.updated', ['clearing-table', that]);

        // Course search results
        } else if (that.layout === "Course search" && courseSearchClearingFeatures ) {

          // --------------------------------------------------
          // First add filtering option

          var checked = false;

          if( window.localStorage ) {
            checked = ( localStorage.getItem( 'course-search-in-clearing-only' ) !== 'false' );
          }

          var showAllCoursesButton = $( '#showAllCourses' );
          var filterToggle = $( '<label style="display:inline-block; padding:0.45rem 0; white-space:nowrap;"><input type="checkbox"'+( checked ? ' checked' : '' )+'> Show courses in clearing only</label>' );

          // Insert our toggle after the button
          showAllCoursesButton.after( filterToggle );

          filterToggle.on( 'change' , 'input' , function( e ) {

            var checkbox = this;
            that.container.removeClass( 'u-flashin' );

            if( window.localStorage ) {
              localStorage.setItem( 'course-search-in-clearing-only' , checkbox.checked );
            }

            // Delay update by 2xRAF to ensure that the keyframe animation kicks in
            requestAnimationFrame( function(){ requestAnimationFrame( function(){
              that.container.find( 'tbody tr:not(.in-clearing)' ).toggle( !checkbox.checked );
              that.container.addClass( 'u-flashin' );
            } ); } );

          } );

          // --------------------------------------------------
          // Add a clearing message to each row

          // Process each course row
          that.container.find( "tr[data-courseid]" ).each( function() {

            var courseRow = this;

            // Get the course UCAS code
            var ucasCode = $( this ).find( "td.code" ).html().trim();

            // Skip if no UCAS code found
            if( !ucasCode ) return;

            // Get our course from the clearing data
            var courseInClearing = false;
            $.grep( that.data , function( course ) {
              if( course[ "UCAS code" ] == ucasCode ) {
                courseInClearing = course;
              }
            });

            // Set up vars for the end result
            var clearingStatus = '';
            var clearingStatusIcon = '';

            // Check the clearing status of this course
            if( courseInClearing ) {

              // Add a class for filtering purposes
              $( courseRow ).addClass( 'in-clearing' );

              // Build our course link
              var courseLink = $( courseRow ).find( "td.coursetitle > a" );
              var courseTitle = courseLink.text();
              var courseURL = courseLink.attr( 'href' );

              // Updated to work with unexpected URLs coming from the Course Finder
              // Ie; courses with no previous year are coming through with things like `(...)/courses/courses-2021/(...)`
              // var clearingCourseURL = courseURL.replace( 'york.ac.uk/study/undergraduate/courses/' , 'york.ac.uk/study/undergraduate/courses-'+that.clearingYear+'/' );
              var clearingCourseURL = courseURL.replace( /york\.ac\.uk\/study\/undergraduate(\/courses(-[a-zA-Z0-9]+)?)+\// , 'york.ac.uk/study/undergraduate/courses-'+that.clearingYear+'/' );

              var clearingStatusText = ( that.makeAvailabilityNote( courseInClearing ) || "Places available" );

              // Build our clearing message
              clearingStatus = '<a href="'+clearingCourseURL+'" aria-label="'+clearingStatusText+' for '+courseTitle+'">'+clearingStatusText+'</a>';
              clearingStatusIcon = '<i style="color:limegreen;" class="c-icon c-icon--check"></i>';

            } else {

              // Build a "No places available" message
              clearingStatus = 'No places available';
              clearingStatusIcon = '<i style="color:darkgray;" class="c-icon c-icon--remove"></i>';

            }

            // Inject our clearing message into the bottom of the cell
            // var contentCell = $( courseRow ).find( "td.coursetitle" );
            // contentCell.append( '<br><small>'+clearingStatusIcon+' <strong>Clearing and adjustment '+that.clearingYear+':</strong> '+clearingStatus+'</small>' );

            // Inject our clearing message after the course title
            var courseTitleLink = $( courseRow ).find( "td.coursetitle > a" );
            courseTitleLink.after( '<br><small>'+clearingStatusIcon+' <strong>Clearing and adjustment '+that.clearingYear+':</strong> '+clearingStatus+'</small>' );

          });

        // Apply button
        } else if (that.layout === "Apply button" && that.course !== false && that.inClearing( that.data[0] ) ) {
            
            var courseApplicationURL = that.courseApplicationURL( that.data[0] );
            if( courseApplicationURL ) $( that.container ).attr( 'href' , courseApplicationURL );

        // Entry requirements
        } else if (that.layout === "Entry requirements" && that.course !== false && that.inClearing( that.data[0] ) ) {

          var rows = [];
          var typicalOffer = false;

          // Sort out extra bullet points

          var bullets = [];

          for( var k = 1 ; k <= 3 ; k++ ) {
              if( that.data[0][ "Bullet "+k ] != '' ) {
                  bullets.push( that.data[0][ "Bullet "+k ] );
              }
          }

          var bulletsRendered = '';

          if( bullets.length == 1 ) {
              bulletsRendered = '<p>'+bullets[ 0 ]+'</p>';
          } else {
              bulletsRendered += '<ul>';
              for( var b = 0 ; b < bullets.length ; b++ ) {
                  bulletsRendered += '<li>'+bullets[ b ]+'</li>';
              }
              bulletsRendered += '</ul>';
          }

          if( that.data[0][ "Entry requirements" ] ) {

            // Main A level results required
            var alevelsRendered = '<p><strong>'+that.data[0][ "Entry requirements" ]+'</strong></p>';

            // Add to our extra rows
            rows.push( {
              'qualification': 'A levels',
              'offer': alevelsRendered+bulletsRendered
            } );

            // Add to typical offer
            typicalOffer = that.data[0][ "Entry requirements" ];

          } else {

            var altRendered = '<p><strong>'+that.data[0][ "Alternative requirement" ]+'</strong></p>';

            rows.push( {
              'qualification': that.data[0][ "Alternative qualification" ],
              'offer': altRendered+bulletsRendered
            } );

            // Add to requirements typical offer
            typicalOffer = that.data[0][ "Alternative qualification" ] + "; " + that.data[0][ "Alternative requirement" ];

          }

          // Anything in no grades?
          if( that.data[0][ "No grades" ] ) {
            rows.push( {
              'qualification': 'n/a',
              'offer': that.data[0][ "No grades" ]
            } );
          }

          // Construct our output

          var requirements = '';

          requirements += '<thead>';
          requirements +=   '<tr>';
          requirements +=     '<th>Qualification</th>';
          requirements +=     '<th>Typical offer<sup>*</sup></span></th>';
          requirements +=   '</tr>';
          requirements += '</thead>';
          requirements += '<tbody>';

          for( var r = 0 ; r < rows.length ; r++ ){
            requirements +=   '<tr>';
            requirements +=     '<th>'+rows[ r ].qualification+'</th>';
            requirements +=     '<td>'+rows[ r ].offer+'</td>';
            requirements +=   '</tr>';
          }

          requirements += '</tbody>';

          // Swap out the default content for the clearing version

          that.container.empty();
          that.container.append( requirements );
          that.container.after( "<p><small><sup>*</sup> This offer has been adjusted for clearing. See our <a href=\"https://www.york.ac.uk/study/undergraduate/applying/entry/\">entry requirements page</a> for information on other qualifications that we accept.</small></p>" );

          // Swap out "typical offer" in course overview

          $typicalOffer = $( '#typical-offer' );

          if( $typicalOffer.length > 0 && typicalOffer ) {

            typicalOfferText = typicalOffer;
            typicalOfferText +=  ' (<a href="#entry">full entry requirements</a>)';
            typicalOfferText +=  '<br>';
            typicalOfferText +=  '<small>This offer has been adjusted for clearing</small>';

            $typicalOffer.html( typicalOfferText );
          }

        }

      }

    });

    // console.info(this);

  };

  CLEARINGTABLE.prototype.makeAvailabilityNote = function( course ) {

    var clearing_home = ( course.Home.toLowerCase() == 'y' );
    var clearing_intl = ( course.International.toLowerCase() == 'y' );
    var adjustment_home = ( course['Adjustment only home'].toLowerCase() == 'y' );
    var adjustment_intl = ( course['Adjustment only international'].toLowerCase() == 'y' );

    // Clearing throughout
    if( clearing_home && clearing_intl ) return false; // No label required
    // Partial clearing
    if( clearing_home && !adjustment_intl ) return "Places for UK students only";
    if( clearing_intl && !adjustment_home ) return "Places for international students only";
    // Partial clearing + partial adjustment
    if( clearing_home && adjustment_intl ) return "Places for UK students, adjustment places only for international students";
    if( clearing_intl && adjustment_home ) return "Places for international students, adjustment places only for UK students";
    // Adjustment only
    if( adjustment_home && adjustment_intl ) return "Adjustment places only";
    // Partial adjustment
    if( adjustment_home && !adjustment_intl ) return "Adjustment places for UK students only";
    if( adjustment_intl && !adjustment_home ) return "Adjustment places for international students only";

    return false; // This shouldn't happen
  };

  CLEARINGTABLE.prototype.makeLink = function( subject , courseCount) {

    var link = '../'+subject.toLowerCase().replace(/:/g, '').replace(/,/g, '').replace(/\s/g, '-');

    var a = $('<a>').addClass('c-clearing-list__link')
            .attr('href', link)
            .text( subject );

    var li = $('<li>').addClass('c-clearing-list__item')
             .attr('data-department', subject )
             .append(a);

    // Not sure if this does anything anymore?
    // Add markers to UK-only or International-only departments
    if (courseCount.UK === 0 && courseCount['Adjustment UK'] === 0) {
      // International courses only
      li.addClass('is-international-only');
      // li.append('&nbsp;<small class="c-clearing-list__comment">Places for international students only</small>');
    } else if (courseCount.International === 0 && courseCount['Adjustment International'] === 0) {
      // UK courses only
      li.addClass('is-uk-only');
      // li.append('&nbsp;<small class="c-clearing-list__comment">Places for UK students only</small>');
    }

    // Append an availability note?
    var note = this.makeAvailabilityNote( {
      'Home': ( courseCount.UK > 0 ? 'y' : 'n' ),
      'International': ( courseCount.International > 0 ? 'y' : 'n' ),
      'Adjustment only home': ( courseCount['Adjustment UK'] > 0 ? 'y' : 'n' ),
      'Adjustment only international': ( courseCount['Adjustment International'] > 0 ? 'y' : 'n' ),
    } );

    if( note ) li.append('&nbsp;<small class="c-clearing-list__comment">'+note+'</small>');

    return li;

  };

  CLEARINGTABLE.prototype.updateAtoZ = function(e) {
    var that = e.data.that;
    var atozRows = that.table.find('.c-clearing-table__letter-header');
    atozRows.each(function(i, row) {
      var $row = $(row);
      var hideHeader = true;
      var courseRows = $row.nextUntil('.c-clearing-table__letter-header');
      var headerId = $row.children('th').attr('id');
      var atozLink = $('.c-atoz__nav-link[href="#'+headerId+'"]');
      $row.show();
      atozLink.removeClass('c-atoz__nav-link--inactive');
      courseRows.each(function(j, courseRow) {
        if (hideHeader === false) return;
        var $courseRow = $(courseRow);
        if (!$courseRow.hasClass('is-off') && !$courseRow.hasClass('is-hidden')) {
          hideHeader = false;
        }
        if (j === courseRows.length - 1 && hideHeader === true) {
          $row.hide();
          atozLink.addClass('c-atoz__nav-link--inactive');
        }
      });
    });
  };

  CLEARINGTABLE.prototype.inClearing = function(courseToCheck) {
    return (
      courseToCheck.Home.toLowerCase() === 'y' ||
      courseToCheck.International.toLowerCase() === 'y' ||
      courseToCheck[ 'Adjustment only home' ].toLowerCase() === 'y' ||
      courseToCheck[ 'Adjustment only international' ].toLowerCase() === 'y'
    );
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
    var fg_uk = $('<div>').addClass('c-form__radio-group');
    var fi_uk = $('<input>').addClass('c-form__radio')
                              .attr({'type': 'radio', 'id': inputName+'-uk', 'name': inputName })
                              .val('uk')
                              .on('change', { that: this }, this.checkTable);
    var fl_uk = $('<label>').addClass('c-form__label')
                              .attr({'for': inputName+'-uk'})
                              .text('Courses for UK students');
    var fg_intl = $('<div>').addClass('c-form__radio-group');
    var fi_intl = $('<input>').addClass('c-form__radio')
                              .attr({'type': 'radio', 'id': inputName+'-intl', 'name': inputName })
                              .val('international')
                              .on('change', { that: this }, this.checkTable);
    var fl_intl = $('<label>').addClass('c-form__label')
                              .attr({'for': inputName+'-intl'})
                              .text('Courses for International students');

    // Join it all together
    fg_uk.append(fi_uk, '&nbsp;', fl_uk);
    fg_intl.append(fi_intl, '&nbsp;', fl_intl);
    fe.append(fg_uk, fg_intl);
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

    thisTable.removeClass( 'u-flashin' );

    // Delay update by 2xRAF to ensure that the keyframe animation kicks in
    requestAnimationFrame( function(){ requestAnimationFrame( function(){
      that.updateAtoZ(ev);
      thisTable.addClass( 'u-flashin' );
    } ); } );
  };

  CLEARINGTABLE.prototype.createLetterLinks = function() {
    var listId = 'clearing-table-'+this.id+'-atoz';
    var ul = $('<ul>').addClass('c-atoz__nav-list').attr('id', listId);
    var tableId = this.table.attr('id');

    // Make sure we cover all of the alphabet
    var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    $.each(alphabet, function(i, letter) {
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
      } else {
        var li_inactive = $('<li>').addClass('c-atoz__nav-item');
        var a_inactive = $('<a>').addClass('c-atoz__nav-link').addClass('c-atoz__nav-link--inactive').text(letter);
        li_inactive.append(a_inactive);
        ul.append(li_inactive);
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
      label: 'Enter course title, keywords or UCAS code',
      analyticsAction: 'Course refinement'
    });
  };

  CLEARINGTABLE.prototype.addCourseRow = function(course) {

    var courseCell =$('<td>');
    
    var courseCellContent = '';
    
    if( course[ 'Hidden keywords' ] ) {
      courseCellContent += '<div hidden class="is-hidden">'+course[ 'Hidden keywords' ]+'</div>';
    }

    courseCellContent += '<p class="c-clearing-table__title"><a href="'+course['Link to course page']+'">'+course['Qualification earned']+' '+course['Title of course']+'</a></p>';

    // We'll collect any list items here
    var listItems = [];

    if(this.showRequirements) {
      if (course['No grades'] !== '') {

          listItems.push( '<li class="c-clearing-table__entry-requirements">' + course['No grades'] + '</li>' );

      } else if (course['Entry requirements'] !== '') {
          
          var entryRequirementsItem = '';

          entryRequirementsItem += '<li class="c-clearing-table__entry-requirements"><strong>' + course['Entry requirements'] + '</strong> or equivalent tariff points from three A levels. Other qualifications are also accepted.';

          if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) {
              entryRequirementsItem += '    <br>';
              entryRequirementsItem += '    <small class="c-clearing-table__bullets">Must include: ';
          }
          if (course['Bullet 1']) entryRequirementsItem += course['Bullet 1'];
          if (course['Bullet 2']) entryRequirementsItem += '; ' + course['Bullet 2'];
          if (course['Bullet 3']) entryRequirementsItem += '; ' + course['Bullet 3'] + '';
          if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) entryRequirementsItem += '</small>';

          entryRequirementsItem += '</li>';

          listItems.push( entryRequirementsItem );

      } else if ( course['Alternative qualification'] !== '' && course['Alternative requirement'] !== '' ) {

          var alternativeItem = '';
          
          alternativeItem += '<li class="c-clearing-table__entry-requirements"><strong>' + course['Alternative qualification'] + '</strong> ' + course['Alternative requirement'];

          if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) {
              alternativeItem += '    <br>';
              alternativeItem += '    <small class="c-clearing-table__bullets">';
          }
          if (course['Bullet 1']) alternativeItem += course['Bullet 1'];
          if (course['Bullet 2']) alternativeItem += '; ' + course['Bullet 2'];
          if (course['Bullet 3']) alternativeItem += '; ' + course['Bullet 3'] + '';
          if (course['Bullet 1'] || course['Bullet 2'] || course['Bullet 3']) alternativeItem += '</small>';

          alternativeItem += '</li>';

          listItems.push( alternativeItem );
      }
    }

    // courseCellContent+= '<li class="c-clearing-table__ucas-code">UCAS code '+course['UCAS code']+'</li>'+
    // '<li class="c-clearing-table__course-length">'+course['Course length']+'</li>'+
    // '<li class="c-clearing-table__phone-numbers">Call Admissions on ' + clearingData.phoneNumber + '</li>';

    // Availability note
    var availabilityNote = this.makeAvailabilityNote( course );
    if( availabilityNote )
    {
        listItems.push( '<li class="c-clearing-table__adjustment-only">'+availabilityNote+'</li>' );
    }

    // If we have any list items to show add them now
    if( listItems.length > 1 )
    {
        var list_double = '<ul class="not-searchable u-two-columns">'+listItems.join('')+'</ul>';
        courseCellContent+= list_double;
    }
    else if( listItems.length == 1 )
    {
        var list_single = '<ul class="not-searchable">'+listItems.join('')+'</ul>';
        courseCellContent+= list_single;
    }

    courseCell.html(courseCellContent);
    var courseRow = $('<tr>').addClass('c-clearing-table__course');
    courseRow.append(courseCell);
    if (this.type === 'UK' || this.type === 'Both') {
      courseRow.attr('data-uk', ( course.Home.toLowerCase() === 'y' || course['Adjustment only home'].toLowerCase() === 'y' ) ? 'true' : 'false');
    }
    if (this.type === 'International' || this.type === 'Both') {
      courseRow.attr('data-international', ( course.International.toLowerCase() === 'y' || course['Adjustment only international'].toLowerCase() === 'y' ) ? 'true' : 'false');
    }
    this.table.append(courseRow);
  };

  CLEARINGTABLE.prototype.addHeaderRow = function(letter) {
    var rowId = this.table.attr('id')+'-'+letter.toUpperCase();
    var headerCell = $('<th>').text(letter.toUpperCase()).attr('id', rowId);
    var headerRow = $('<tr>').addClass('c-clearing-table__letter-header').append(headerCell);
    this.table.append(headerRow);
  };

  CLEARINGTABLE.prototype.getPanelContent = function( contentType , course ) {

    var that = this;

    var courseApplicationURL = that.courseApplicationURL( course );

    var contentVariants = [
      {
        // Until 29th July 7:30pm
        start: false,
        end: 1627583400000, 
        panel:
          '<h3>Looking for a late place?</h3>' +
          '<p>It’s not too late to apply for '+that.clearingYear+'. We have limited places available on this course through Clearing and Adjustment.</p>',
        modal:
          '<h2><strong>Join us in '+that.clearingYear+'</strong></h2>' +
          '<p>We still have a limited number of places available on this course for well-qualified students through <a href="https://www.york.ac.uk/study/undergraduate/applying/clearing/">Clearing and Adjustment</a>.</p>' +
          '<h3>Got your results?</h3>' +
          '<p>You can apply now if:</p>' +
          '<ol>' +
            '<li>you have your exam results and</li>' +
            '<li>you have not yet applied to York and</li>' +
            '<li>you have not formally accepted an offer from another university through UCAS.</li>' +
          '</ol>' +
          '<p><a class="c-btn c-btn--medium" href="'+courseApplicationURL+'">Apply now</a></p>' +
          '<h3>Waiting for your results?</h3>' +
          '<p>Sign up to receive vacancy notifications on A level results day (10 August).</p>' +
          '<p><a class="c-btn c-btn--medium" href="https://www.york.ac.uk/study/undergraduate/applying/clearing/updates/">Get vacancy notifications</a></p>',
      },
      {
        // 29th July 7:30pm - 9th August 5pm (UCAS embargo period + 2 days before)
        start: 1627583400000, 
        end:   1628524800000, 
        panel:
          '<h3>Looking for a late place?</h3>' +
          '<p>We expect to have places available on this course through Clearing and Adjustment.</p>' +
          '<p><em>Prepare for Clearing and Adjustment</em></p>',
        modal:
          '<h2>Get ready to call us</h2>' +
          '<p>Our Clearing hotline will be open from <strong>8am on Tuesday 10 August.</strong></p>' +
          '<ol>' +
              '<li>Save the hotline number: '+clearingData.phoneNumber+'</li>' +
              '<li>Research the course(s) you’re interested in and be ready to tell us why you want to apply.</li>' +
              '<li>Sign up for notifications and we’ll send you our latest vacancies on Tuesday morning.</li>' +
          '</ol>' +
          '<p><a class="c-btn c-btn--medium" href="https://www.york.ac.uk/study/undergraduate/applying/clearing/updates/">Get vacancy notifications</a></p>',
      },
      {
        // From 9th August 5pm - (10th August 8am)?
        start: 1628524800000,
        end:   false, 
        panel:
          '<h3>Clearing and adjustment '+that.clearingYear+'</h3>' +
          '<p>Places are available on this course through Clearing and Adjustment.</p>' + 
          '<p>To apply call '+clearingData.phoneNumber+'.</p>',
        modal:
          '<h2>Call our hotline <br>'+clearingData.phoneNumber+'</h2>' +
          '<p>Places fill up fast, so don’t delay - give us a call and tell us why you want to apply.</p>' +
          '<p>Opening times:</p>' +
          '<ul>' +
            '<li>Tuesday 10 August: 8.30am - 6pm BST</li>' +
            '<li>Wednesday 11 - Friday 13 August: 8am - 6pm BST</li>' +
          '</ul>' +
          '<h3>Before you call</h3>' +
          '<ol>' +
            '<li>Research the course(s) you’re interested in and be ready to tell us why you want to apply.</li>' +
            '<li>Pick up your exam results and make sure you meet the entry requirements. We’ll need the details of your results in order to make our decision.</li>' +
            '<li>Have your UCAS ID number to hand, and a phone number we can call you back on.</li>' +
            '<li>If your first language is not English, you’ll need evidence of your <a href="https://www.york.ac.uk/study/undergraduate/applying/entry/english-language/">English language ability</a>.</li>' +
          '</ol>',
      },
    ];

    // Work out what content to serve

    var key = 0;

    for( key = 0 ; key < contentVariants.length ; key++ ) {
      if( contentVariants[ key ].start && ( contentVariants[ key ].start > now ) ) continue;
      if( contentVariants[ key ].end && ( contentVariants[ key ].end <= now ) ) continue;
      break;
    }
    
    // Fall back to first if not found
    if( key > contentVariants.length ) key = 0;

    return contentVariants[ key ][ contentType ];
  };

  CLEARINGTABLE.prototype.courseApplicationURL = function( course ) {
      if( !course[ 'SRA course application code' ] || disableApplyButton ) return false;
      return 'https://evision.york.ac.uk/urd/sits.urd/run/siw_sso.go?' + course[ 'SRA course application code' ];
  };

  CLEARINGTABLE.prototype.coursePanelContent = function( course ) {

      var that = this;

      var panelContent = $('<div>').addClass('c-panel__content');

      var contentBody = that.getPanelContent( 'panel' , course );
      var contentCTA = '<p><a href="#modal-content-'+that.id+'" class="c-btn c-btn--medium js-modal js-modal--scroll">Find out more</a></p>';

      if( that.differentYear ) {
        contentCTA = '<p><a href="'+course['Link to course page']+'" class="c-btn c-btn--medium">See '+that.clearingYear+' entry</a></p>';
      } else {
        contentCTA = '<p><a href="#modal-content-'+that.id+'" class="c-btn c-btn--medium js-modal js-modal--scroll">Find out more</a></p>';
      }

      panelContent.append( contentBody + contentCTA );

      return panelContent;

  };

  CLEARINGTABLE.prototype.coursePanelModalContent = function( course ) {

    var that = this;

    var modalContent = $('<div>').addClass('is-hidden').attr({'id':'modal-content-'+that.id});

    // Course title
    // modalContent.append('<h2>'+course['Qualification earned']+' '+course['Title of course']+'</h2>');

    modalContent.append( that.getPanelContent( 'modal' , course ) );

    return modalContent;
  };

  CLEARINGTABLE.prototype.fetchData = function(endpoint,fallback) {

    var that = this;

    $.ajax({
      dataType: "json",
      url: endpoint,
      error: function( jqXHR, textStatus, errorThrown ) { // Error!

        // Try our fallback URL
        if( fallback != undefined ) {
          console.warn( '⚠ Clearing data fetch failed, trying fallback...' );
          UTILS.addAnalyticsEvent( 'Clearing data' , 'Error' , 'Trying fallback...' , '' );
          that.fetchData( fallback );
        } else {
          console.error( '⚠ Clearing data fetch failed' );
          UTILS.addAnalyticsEvent( 'Clearing data' , 'Error' , 'Fallback failed' , '' );
        }

      },
      success: function( rawData ) { // Success!

        UTILS.addAnalyticsEvent( 'Clearing data' , 'Success' , '' , '' );

        // Field mappings from gsheet API source to our clearing course object
        // source : destination
        var fieldMap = {
          gsx$adjustmentonlyhome: "Adjustment only home",
          gsx$adjustmentonlyinternational: "Adjustment only international",
          gsx$adjustmentonlyhiy: "Adjustment only",
          gsx$bullet1: "Bullet 1",
          gsx$bullet2: "Bullet 2",
          gsx$bullet3: "Bullet 3",
          gsx$courselength: "Course length",
          gsx$department: "Department",
          gsx$entryrequirements: "Entry requirements",
          gsx$inclearinghome: "Home",
          gsx$inclearinginternational: "International",
          gsx$linktocoursepage: "Link to course page",
          gsx$mcrcode: "MCR_CODE",
          gsx$nogrades: "No grades",
          gsx$qualificationearned: "Qualification earned",
          gsx$sracheckx: "SRA check?\n✓ X",
          gsx$subject: "Subject",
          gsx$titleofcourse: "Title of course",
          gsx$ucascode: "UCAS code",
          gsx$sracourseapplicationcode: "SRA course application code",
          gsx$alternativequalification: "Alternative qualification",
          gsx$alternativerequirement: "Alternative requirement",
          gsx$hiddenkeywords: "Hidden keywords",
        };

        var data = []; // The data object we'll be returning

        var rows = rawData.feed.entry; // Get all data rows

        var sourceKeys = Object.keys( fieldMap ); // Get fieldmap keys for later

        // Process each row in the incoming data
        for( var r = 0 ; r < rows.length ; r++ ) {

          row = rows[ r ];
          dataRow = {};

          // Check each entry in our fieldmap
          for( var k = 0 ; k < sourceKeys.length ; k++ ) {
            var sourceKey = sourceKeys[ k ];
            var destinationKey = fieldMap[ sourceKey ];

            // Get the value for this field
            if( row[ sourceKey ] !== undefined && row[ sourceKey ].$t !== undefined ) {
              dataRow[ destinationKey ] = row[ sourceKey ].$t;
            }
          }

          // Add row data to our return object
          data.push( dataRow );
        }

        $(window).trigger('data.loaded', [sheetId, data]);

      }
    });

    $.getJSON( endpoint );
  };

  // Remove apply button from 2019 course overview
  $( document ).ready( function() {
    if(window.location.href.indexOf("courses-2020") > -1) {
      $("#btnApplyForCourse").attr( "href" , "https://www.york.ac.uk/study/undergraduate/applying/clearing/applying/" );
    }
  });

  return CLEARINGTABLE;

});
