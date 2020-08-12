
define(
  ['jquery', 'es5shim', 'picturefill', 'iframeResizer',
   'app/utils', 'app/modal-link', 'app/accordion', 'app/sticky-nav',
   'app/targeted-nav', 'app/clearing-table', 'app/tabs', 'app/prioritised-tables',
   'app/toggle', 'app/utility-toggle', 'app/wrapper-height', 'app/youtube-embed',
   'app/soundcloud-embed', 'app/searchables', 'app/filterable-tables', 'app/equal-height-row',
   'app/mapbox-map', 'app/show-more', 'app/autocomplete', 'app/modal',
   'app/data-google-sheets', 'app/data-grid', 'app/cookie-banner', 'app/pg-course-search'],
  function (
    $, ES5SHIM, PICTUREFILL, IFRAMERESIZER,
    UTILS, MODALLINK, ACCORDION, STICKYNAV,
    TARGETEDNAV, CLEARINGTABLE, TABS, TABLE,
    TOGGLE, UTILITYTOGGLE, WRAPPERHEIGHT, YOUTUBE,
    SOUNDCLOUD, SEARCHABLE, FILTERABLE, EQUALHEIGHT,
    MAPBOXMAP, SHOWMORE, AUTOCOMPLETE, MODAL,
    DATAGSHEETS, DATAGRID, COOKIEBANNER, PGSEARCH) {

      $(function(){

        if (typeof window.console === 'undefined') {
          console = {};
          console.log = function(a) { /*alert(a);*/ };
          console.info = function(a) { /*alert(a);*/ };
        }

        
        
        // Adds MODAL to global scope so we can trigger modals via GTM
        window.MODAL = MODAL;

        // Disable buttons
        $('.btn-disabled').click(function (e) {
          e.preventDefault();
          return false;
        });

        var $window = $(window);
        var $html = $('html');

        // Interval to check if fonts have loaded
        var t = setInterval(function() {
          if ($html.hasClass('wf-active')) {
            $window.trigger('fonts.active');
            clearInterval(t);
          }
        }, 15);

        UTILS.axisResize();

        //UTILS.preventOrphans();

        UTILS.dontBreakSpaces('.c-utility-nav__sublink');

        UTILS.cleanBreadcrumb();

        UTILS.fixLongBreadcrumb();

        UTILS.breakEmailAddresses();

        UTILS.fixTallFigures();

        UTILS.fixLogo();

        // Add Google map functionality
        UTILS.eachIfExists('.js-map', function (i, map) {
          var $map = $(map);
          var m = new MAPBOXMAP({
            container: map,
            location: $map.data('location'),
            zoom: $map.data('zoom')
          });
        });

        // Resize iframes
        UTILS.eachIfExists('.js-iframe-resize', function (i, iframe) {
          IFRAMERESIZER(null, iframe);
        });

        // Add accordion functionality
        UTILS.eachIfExists('.js-accordion__item', function (i, accordion) {
          var a = new ACCORDION({
            container: accordion
          });
          // Wait till fonts are loaded
          UTILS.fontsActive(a.setAccordionHeight, a);
        });

        // Add prioritised tables functionality
        UTILS.eachIfExists('.js-prioritised-table', function (i, table) {
          new TABLE({
            container: table
          });
        });

        // Add tab functionality
        UTILS.eachIfExists('.js-tabs', function (i, tabs) {
          new TABS({
            container: tabs
          });
          
        });

        // Go to tab if hash is set
        UTILS.scrollToHash();
        $window.on('hashchange', UTILS.scrollToHash);

        // Add menu toggle functionality
        UTILS.eachIfExists('.js-toggle-button', function (i, button) {
          var $b = $(button);
          var $c = $($b.attr('href'));
          new TOGGLE({
            container: $c,
            button: $b,
            className:'is-open'
          });
        });

      // Add mobile search toggle functionality + input focus
       UTILS.eachIfExists('.js-toggle-mobile-search', function (i, button) {
        var $b = $(button);
        var $c = $($b.attr('href'));
        new TOGGLE({
          container: $c,
          button: $b,
          className:'is-open',
          onComplete:function( container, button ) {
            if( container.hasClass( 'is-open' ) ) {
              container.find( '#q-mobile' ).focus();
            }
          },
        });
      });

        // Add utility nav toggle functionality
        UTILS.eachIfExists('.c-utility-nav', function (i, nav) {
          var $n = $(nav);
          new UTILITYTOGGLE({
            container: $n
          });
        });

        // Add dismissable alert action
        UTILS.eachIfExists('.js-alert-close', function (i, button) {
          var $b = $(button);
          var $c = $($b.closest('.c-alert'));
          new TOGGLE({
            container: $c,
            button: $b,
            className:'is-hidden',
            onComplete: function($c, $b) {
              $c.remove();
            }
          });
        });

        // Add dismissable global notice action
        UTILS.eachIfExists('.js-notice-close', function (i, button) {
              var $b = $(button);
              var $c = $($b.closest('.c-global-notice'));
              new TOGGLE({
                  container: $c,
                  button: $b,
                  className:'is-hidden',
                  onComplete: function($c, $b) {
                      $c.remove();
                  }
              });
          });

        // Use anchors to submit forms
        UTILS.eachIfExists('.js-submit-form', function (i, a) {
          var $a = $(a);
          var thisForm = $a.parents('form');
          $a.on('click', function (e) {
            e.preventDefault();
            thisForm.submit();
          });
          // Enter won't submit form when there's no <input> or <button>
          thisForm.find('input, textarea').keypress(function(e) {
            // Was Enter pressed?
            if (e.which == 10 || e.which == 13) {
              this.form.submit();
            }
          });
        });
        
        // Clearing tables
        UTILS.eachIfExists('.js-clearing-table', function (i, a) {
          var $a = $(a),
              type = $a.attr('data-type') || false,
              layout = $a.attr('data-layout') || false,
              course = $a.attr('data-course') || false,
              department = $a.attr('data-department') || false,
              differentYear = ( $a.attr('data-different-year') !== undefined )|| false,
              subject = $a.attr('data-subject') || false;

          // show requirements can be a "Yes" or "No" value when set in the CMS
          // so we need to check for those here
          var showRequirements = true,
              dataRequirements = $a.attr('data-show-requirements') || "true";

          switch (dataRequirements.toLowerCase()) {
              case "no":
              case "false":
                  showRequirements = false;
              break;
              default:
                  showRequirements = true;
                  break;
          }

          new CLEARINGTABLE({
            type: type,
            layout: layout,
            course: course,
            department: department,
            subject: subject,
            showRequirements: showRequirements,
            differentYear: differentYear,
            container: $a
          });
        });

        // Clearing info for course search
        // ⚠ Only apply this to UG searches
        if( window.location.href.indexOf( '/undergraduate/' ) > -1 ||
          window.location.href.indexOf( '//localhost:' ) > -1 ) {
          UTILS.eachIfExists('#results > .courses', function (i, a) {
            var $a = $(a);

            new CLEARINGTABLE({
              layout: 'Course search',
              container: $a
            });
          });
        }

        // A link with class .js-modal will href modal content
        UTILS.eachIfExists('.js-modal', function (i, a) {
          new MODALLINK({
            link: $(a)
          });
          
        });

        // Add targeted nav functionality to nav
        UTILS.eachIfExists('.js-targeted-nav', function (i, a) {
          new TARGETEDNAV({
              container: $(a)
          });
        });

        // Add sticky nav functionality to nav
        UTILS.eachIfExists('.js-sticky-nav', function (i, a) {
          new STICKYNAV({
            container: $(a)
          });
        });

        // Add youtube video to embed links
        UTILS.eachIfExists('.youtube-video-embed', function (i, a) {
          new YOUTUBE({
            link: $(a)
          });
        });

        // Add Soundcloud audio to embed links
        UTILS.eachIfExists('.soundcloud-audio-embed', function (i, a) {
          new SOUNDCLOUD({
            link: $(a)
          });
        });

        // Make a table or list searchable
        UTILS.eachIfExists('.js-searchable', function (i, a) {

          var $a = $(a),
              hasHeader = $a.attr('data-header') == 'true' ? true : false ,
              isCaseSensitive = $a.attr('data-case-sensitive') == 'true' ? true : false ,
              dataLabel = $a.attr('data-label') ? $a.attr('data-label') : false ,
              includeCols = $a.attr('data-include-cols') ? $a.attr('data-include-cols').split(',') : false ,
              excludeCols = $a.attr('data-exclude-cols') ? $a.attr('data-exclude-cols').split(',') : false ;

          var s = new SEARCHABLE({
            container: $a.children('ul, table'),
            header: hasHeader,
            cols: {
              include: includeCols,
              exclude: excludeCols
            },
            caseSensitive: isCaseSensitive,
            label: dataLabel
          });
        });

        // Make a table filterable
        UTILS.eachIfExists('.js-filterable-table', function (i, table) {
          var $table = $( table );
          var filterable = new FILTERABLE(
          {
              $table: $table[0],
          });
        });

        // Make equal height rows
        UTILS.eachIfExists('.js-equal-height-row', function (i, a) {
          var e = new EQUALHEIGHT({
            row: $(a)
          });
        });

        // Add filtering to PG course search results
        if( window.location.href.indexOf( '/postgraduate/' ) > -1 ) {
          UTILS.eachIfExists('div#results > table.courses', function (i, a) {
            var pgs = new PGSEARCH();
          });
        }

        // Update 'More' text
        $window.on('toggle', function(e, options) {
          if (options.container.attr('id') === 'Main-Navigation') {
            var newText = options.button.html() === 'Close' ? 'More…' : 'Close' ;
            options.button.html(newText);
          }
        });

        // Set min-height on wrapper (to ensure footer is (at least) at bottom of page)
        var w = new WRAPPERHEIGHT();

        // Update course search when radio buttons are clicked
        // Inputs are called 'level-undergraduate', 'level-postgraduate-research' and 'level-postgraduate-taught'
        UTILS.eachIfExists('#Course-Search, .js-course-search', function(i, a) {
          var $a = $(a),
              inputs = $a.find('input[type=radio]'),
              $modeInput = $a.find('#mode');
          inputs.change(function(e) {
            var parts = $(this).attr('id').split('-');
            
            // Update the form's action 
            var level = parts[1];
            var action = '/study/'+level+'/courses/search/';
            $a.attr('action', action);

            // Update the taught/research mode if applicable
            var mode = parts[2] || "";
            $modeInput.val(mode);
          });
        });

        // Load the Google Sheets Library and assign it to global window object
        DATAGSHEETS.init();
        window.PL_DATA.dataGSheets = DATAGSHEETS;

        UTILS.eachIfExists('.js-data-grid', function(i, a) {

            var $a = $(a),
                datasource = $a.attr('data-source'),
                layout = $a.attr('data-layout'),
                includeHeaderRow = $a.attr('data-include-header') || false,
                cssClassList = $a.attr('data-css'),
                sheetId = $a.attr('data-sheet-id'),
                sheetRange = $a.attr('data-sheet-range'),
                filter = $a.attr('data-filter'),
                eventAPIReady = DATAGSHEETS.getEventNames().apiReady;

            var configObj = {
                container: $a,
                datasource: datasource,
                layout: layout,
                includeHeaderRow: includeHeaderRow,
                cssClassList: cssClassList,
                sheetId: sheetId,
                sheetRange: sheetRange,
                filter: filter,
                eventIdentifier: ('' + new Date().getTime())
            };
            var dataGrid = new DATAGRID();

            // set up the loading message as a placeholder
            $a.append('<p>loading...</p>');

            // for GSheets, we need to wait for the API to load before calling our
            // datagrid init() function to access data
            $(window).on(eventAPIReady, function () {
                dataGrid.init(configObj);
            });
        });

        // Loads the cookie banner
        var cookieBanner = new COOKIEBANNER();

        // Broadcast custom window events
        if (UTILS.isDev() === true) {
          $window.on('data.loaded fonts.active nav.new-targeted-current search.updated content.updated resized.height resized.width toggle', function(e) {
            console.info(e.type+'.'+e.namespace+' fired', e);
          });
        }

        // inform anything listening that the window is ready
        var windowjsready = new Event('window.js.ready');
        window.dispatchEvent(windowjsready);

        console.log('Javascript loaded');
      });


      // Set up 'Show more' containers
      // We have to put these outside the typical document.ready function because
       // the window finishes loading
      $(window).on('load', function() {
     
        UTILS.eachIfExists('.js-show-more', function(i, $container) {

          var elementsVisible = parseInt($container.getAttribute('data-elements-visible')) || null;
          var buttonTextMore = $container.getAttribute('data-more-text') || null;
          var buttonTextLess = $container.getAttribute('data-less-text') || null;
          
          var showMore = new SHOWMORE ($container , {
            elementsVisible: elementsVisible,
            buttonTextMore: buttonTextMore,
            buttonTextLess: buttonTextLess
          });

          return showMore;
          
        });
      
    });
  });
