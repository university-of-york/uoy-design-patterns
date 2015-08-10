define(
  ['jquery', 'es5shim', 'picturefill',
   'app/utils', 'app/modal-link', 'app/accordion', 'app/sticky-nav',
   'app/targeted-nav', 'app/clearing-table', 'app/tabs', 'app/responsive-tables',
   'app/toggle', 'app/wrapper-height', 'app/youtube-embed',
   'app/analytics'],
  function (
    $, ES5SHIM, PICTUREFILL,
    UTILS, MODALLINK, ACCORDION, STICKYNAV,
    TARGETEDNAV, CLEARINGTABLE, TABS, TABLE,
    TOGGLE, WRAPPERHEIGHT, YOUTUBE,
    ANALYTICS) {

  $(function(){

    if (typeof window.console === 'undefined') {
      console = {};
      console.log = function (a) { /*alert(a);*/ };
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
        $window.trigger('fonts:active');
        clearInterval(t);
      }
    }, 15);

    // Add accordion functionality
    UTILS.eachIfExists('.js-accordion__item', function (i, accordion) {
      var a = new ACCORDION({
        container: accordion
      });
      // Wait till fonts are loaded
      UTILS.fontsActive(a.setAccordionHeight, a);
    });

    // Add responsive tables functionality
    UTILS.eachIfExists('.js-responsive-table', function (i, table) {
      var t = new TABLE({
        container: table
      });
    });

    // Add tab functionality
    UTILS.eachIfExists('.js-tabs', function (i, tabs) {
      var t = new TABS({
        container: tabs
      });
    });

    // Go to tab if hash is set
    UTILS.scrollToHash();

    // Add menu toggle functionality
    UTILS.eachIfExists('.js-toggle-button', function (i, button) {
      var $b = $(button);
      var $c = $($b.attr('href'));
      // console.log($b.attr('href'));
      var t = new TOGGLE({
        container: $c,
        button: $b,
        className:'is-open'
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
    UTILS.eachIfExists('#clearing-courses-uk-eu', function (i, a) {
      var c = new CLEARINGTABLE({
        type: 'Home/EU',
        container: $(a)
      });
    });

    UTILS.eachIfExists('#clearing-courses-international', function (i, a) {
      var c = new CLEARINGTABLE({
        type: 'International',
        container: $(a)
      });
    });

    // A link with class .js-modal will href modal content
    UTILS.eachIfExists('.js-modal', function (i, a) {
      var m = new MODALLINK({
        link: $(a)
      });
    });

    // Add sticky nav functionality to nav
    UTILS.eachIfExists('.js-sticky-nav', function (i, a) {
      var s = new STICKYNAV({
        container: $(a)
      });
    });

    // Add targeted nav functionality to nav
    UTILS.eachIfExists('.js-targeted-nav', function (i, a) {
      var s = new TARGETEDNAV({
        container: $(a)
      });
    });

    // Add targeted nav functionality to nav
    UTILS.eachIfExists('.youtube-video-embed', function (i, a) {
      var s = new YOUTUBE({
        link: $(a)
      });
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

    UTILS.eachIfExists('#Course-Search', function(i, a) {
      var $a = $(a),
          inputs = $a.find('input[type=radio]');
      inputs.change(function(e) {
        var level = $(this).attr('id').substr(6),
            action = '/study/'+level+'/courses/search/';
        $a.attr('action', action);
      });
    });


    // Sample use of UTILS.debounce
    // var resizeFn = UTILS.debounce(function () {
    //   console.log('Window resized');
    //   // Change min-height of main wrapper
    //   w.resize();
    // }, 250);

    // $window.on('resize', resizeFn);

    console.log('Javascript loaded');

  });

});
