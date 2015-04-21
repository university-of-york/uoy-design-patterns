define(['jquery', 'picturefill', 'app/utils', 'app/accordion', 'app/grunticon'], function ($, PICTUREFILL, UTILS, ACCORDION, GRUNTICON) {

  var $window = $(window);

  if (typeof window.console === 'undefined') {
    console = {};
    console.log = function(a) { /*alert(a);*/ };
  }

  console.log('Got here');

  // Disable buttons
  $('.btn-disabled').click(function(e) {
    e.preventDefault();
    return false;
  });

  // Add accordion functionality
  $accordions = $('.c-accordion');
  if ($accordions.length) {
    $accordions.each(function(i, accordion) {
      var a = new ACCORDION({
        container: accordion
      });
    });
  }

  // Sample use of UTILS.debounce
  var resizeFn = UTILS.debounce(function() {
    console.log('Window resized');
  }, 250);

  $window.on('resize', resizeFn);

});