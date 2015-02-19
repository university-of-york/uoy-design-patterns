define(['jquery'], function ($) {

  if (typeof window.console === 'undefined') {
    console = {};
    console.log = function(a) { /*alert(a);*/ };
  }

  console.log('Got here');

});