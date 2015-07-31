define(
  ['jquery', 'es5shim', 'picturefill', 'app/utils', 'app/modal-link', 'app/accordion', 'app/sticky-nav', 'app/targeted-nav', 'app/clearing-table', 'app/tabs', 'app/responsive-tables', 'app/toggle', 'app/wrapper-height', 'app/analytics'],
  function ($, ES5SHIM, PICTUREFILL, UTILS, MODALLINK, ACCORDION, STICKYNAV, TARGETEDNAV, CLEARINGTABLE, TABS, TABLE, TOGGLE, WRAPPERHEIGHT, ANALYTICS) {

  $(function(){

    var $window = $(window);

    if (typeof window.console === 'undefined') {
      console = {};
      console.log = function (a) { alert(a); };
    }

    // Disable buttons
    $('.btn-disabled').click(function (e) {
      e.preventDefault();
      return false;
    });

    // Add accordion functionality
    UTILS.eachIfExists('.js-accordion__item', function (i, accordion) {
      var a = new ACCORDION({
        container: accordion
      });
    });

    // Add accordion functionality
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

    // Update 'More' text
    $window.on('toggle', function(e, options) {
      if (options.container.attr('id') === 'Main-Navigation') {
        var newText = options.button.html() === 'Close' ? 'More&hellip;' : 'Close' ;
        options.button.html(newText);
      }
    });

    // Set min-height on wrapper (to ensure footer is at bottom of page)
    var w = new WRAPPERHEIGHT();

    // Sample use of UTILS.debounce
    var resizeFn = UTILS.debounce(function () {
      console.log('Window resized');
      // Change min-height of main wrapper
      w.resize();
    }, 250);

    $window.on('resize', resizeFn);

    console.log('Javascript loaded');

  });

});
