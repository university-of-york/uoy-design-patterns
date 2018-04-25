define(
  ['jquery', 'es5shim', 'picturefill', 'iframeResizer',
   'app/utils', 'app/modal-link', 'app/accordion', 'app/sticky-nav',
   'app/targeted-nav', 'app/clearing-table', 'app/tabs', 'app/prioritised-tables',
   'app/toggle', 'app/utility-toggle', 'app/wrapper-height', 'app/youtube-embed',
   'app/soundcloud-embed', 'app/searchables', 'app/filterable-tables', 'app/equal-height-row',
   'app/google-map', 'app/show-more', 'app/autocomplete'],
  function (
    $, ES5SHIM, PICTUREFILL, IFRAMERESIZER,
    UTILS, MODALLINK, ACCORDION, STICKYNAV,
    TARGETEDNAV, CLEARINGTABLE, TABS, TABLE,
    TOGGLE, UTILITYTOGGLE, WRAPPERHEIGHT, YOUTUBE,
    SOUNDCLOUD, SEARCHABLE, FILTERABLE, EQUALHEIGHT,
    GOOGLEMAP, SHOWMORE, AUTOCOMPLETE) {

  $(function(){

    if (typeof window.console === 'undefined') {
      console = {};
      console.log = function(a) { /*alert(a);*/ };
      console.info = function(a) { /*alert(a);*/ };
    }

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
      var m = new GOOGLEMAP({
        container: map,
        location: $map.data('location'),
        label: $map.data('label'),
        zoom: $map.data('zoom'),
        marker: $map.data('marker'),
        type: $map.data('type'),
        fullscreen: $map.data('fullscreen')
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
          department = $a.attr('data-department') || false;
      new CLEARINGTABLE({
        type: type,
        layout: layout,
        course: course,
        department: department,
        container: $a
      });
    });

    // A link with class .js-modal will href modal content
    UTILS.eachIfExists('.js-modal', function (i, a) {
      new MODALLINK({
        link: $(a)
      });
    });

    // Add sticky nav functionality to nav
    UTILS.eachIfExists('.js-sticky-nav', function (i, a) {
      new STICKYNAV({
        container: $(a)
      });
    });

    // Add targeted nav functionality to nav
    UTILS.eachIfExists('.js-targeted-nav', function (i, a) {
      new TARGETEDNAV({
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
    UTILS.eachIfExists('.js-filterable-table', function (i, a) {
      var $a = $(a),
          hasHeader = $a.attr('data-header') == 'true' ? true : false ;
      var f = new FILTERABLE({
        table: $a,
        header: hasHeader
      });
    });

    // Make equal height rows
    UTILS.eachIfExists('.js-equal-height-row', function (i, a) {
      var e = new EQUALHEIGHT({
        row: $(a)
      });
    });

    // Set up 'Show more' containers
    UTILS.eachIfExists('.js-show-more', function (i, a) {
      var $a = $(a);
      var defaultHeight = parseInt($a.attr('data-default-height'), 10);
      var buttonTextMore = $a.attr('data-more-text') || false;
      var buttonTextLess = $a.attr('data-less-text') || false;
      var e = new SHOWMORE({
        container: $a,
        defaultHeight: defaultHeight,
        buttonTextMore: buttonTextMore,
        buttonTextLess: buttonTextLess
      });
      // Wait till fonts are loaded
      UTILS.fontsActive(e.setShowMoreHeight, e);
    });

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
        var level = parts[1];
        var mode = parts[2] || "";
        var action = '/study/'+level+'/courses/search/';
        $modeInput.val(mode);
        $a.attr('action', action);
      });
    });

    // Fire up autosuggest on main site search
    var $headerSearch = $('.c-form--header input[name=q]');
    if ($headerSearch.length > 0) {

      // Add autocomplete if not present
      // === This can be removed when all the page templates have been updated ===
      var $headerForm = $headerSearch.closest('form');
      if ($headerForm.children('.c-autocomplete').length === 0) {
        var $headerFormElement = $headerSearch.closest('.c-form__element');
        var $autocompleteList = $('<ul>').addClass('c-autocomplete__list');
        var $autocomplete = $('<div>').addClass('c-autocomplete').append($autocompleteList);
        $headerFormElement.append($autocomplete);
      }
      // ==========================================================================

      var a = new AUTOCOMPLETE({
        input: $headerSearch,
        results: function(searchTerm, onComplete) {
          if (searchTerm.length < 3) return false;
          // console.log("Getting results from Funnelback");
          var fbUrl = "https://york.funnelback.co.uk/s/suggest.json?collection=york-uni-web&show=10&sort=0&alpha=0.5&fmt=json++&partial_query="+searchTerm;
          $.getJSON(fbUrl, function(r) {
            var results = [];
            var rLength = r.length;
            $.each(r, function(i, v) {
              results.push({
                item: {
                  title: v.disp
                }
              });
              if (i === rLength-1) {
                //console.log(results);
                onComplete(results);
              }
            });
          });
        },
        followLinks: false
      });


    }


    // Broadcast custom window events
    if (UTILS.isDev() === true) {
      $window.on('data.loaded fonts.active nav.new-targeted-current search.updated content.updated resized.height resized.width toggle', function(e) {
        console.info(e.type+'.'+e.namespace+' fired', e);
      });
    }

    console.log('Javascript loaded');

  });

});
