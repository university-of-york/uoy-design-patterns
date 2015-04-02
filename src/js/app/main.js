define(['jquery', 'picturefill', 'app/utils', 'app/grunticon'], function ($, PICTUREFILL, UTILS, GRUNTICON) {

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

  // Sample use of UTILS.debounce
  var resizeFn = UTILS.debounce(function() {
    console.log('Window resized');
  }, 250);

  $window.on('resize', resizeFn);

});