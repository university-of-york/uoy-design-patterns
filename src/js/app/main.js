define(
  ['jquery', 'es5shim', 'picturefill', 'app/utils', 'app/accordion', 'app/responsive-tables', 'app/grunticon'],
  function ($, ES5SHIM, PICTUREFILL, UTILS, ACCORDION, TABLE, GRUNTICON) {

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

  // Sample use of UTILS.debounce
  var resizeFn = UTILS.debounce(function() {
    console.log('Window resized');
  }, 250);

  $window.on('resize', resizeFn);

});