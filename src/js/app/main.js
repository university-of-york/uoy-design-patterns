define(
  ['jquery', 'es5shim', 'picturefill', 'app/utils', 'app/accordion', 'app/responsive-tables', 'app/toggle', 'app/grunticon'],
  function ($, ES5SHIM, PICTUREFILL, UTILS, ACCORDION, TABLE, TOGGLE, GRUNTICON) {

  var $window = $(window);

  if (typeof window.console === 'undefined') {
    console = {};
    console.log = function(a) { /*alert(a);*/ };
  }

  console.log('Javascript loaded');

  // Disable buttons
  $('.btn-disabled').click(function(e) {
    e.preventDefault();
    return false;
  });

  // Add accordion functionality
  UTILS.eachIfExists('.js-accordion', function(i, accordion) {
    var a = new ACCORDION({
      container: accordion
    });
  });

  // Add accordion functionality
  UTILS.eachIfExists('.js-responsive-table', function(i, table) {
    var t = new TABLE({
      container: table
    });
  });

  // Add menu toggle functionality
  UTILS.eachIfExists('.js-toggle-button', function(i, button) {
    var $b = $(button);
    var $c = $($b.attr('href'));
    var t = new TOGGLE({
      container: $c,
      button: $b,
      class:'is-open'
    });
  });

  // Use anchors to submit forms
  UTILS.eachIfExists('.js-submit-form', function(i, a) {
    var $a = $(a);
    $a.on('click', function(e) {
      e.preventDefault();
      var thisForm = $a.parents('form');
      thisForm.submit();
    });
  });

  // Sample use of UTILS.debounce
  var resizeFn = UTILS.debounce(function() {
    console.log('Window resized');
  }, 250);

  $window.on('resize', resizeFn);

});