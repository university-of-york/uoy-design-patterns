define(['jquery'], function($) {

  // Taken from https://github.com/filamentgroup/grunticon/blob/master/tasks/grunticon/static/grunticon.loader.js

  var navigator = window.navigator,
      Image = window.Image;

  // Thanks Modernizr & Erik Dahlstrom
  var svg = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect && !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") && !(window.opera && navigator.userAgent.indexOf('Chrome') === -1) && navigator.userAgent.indexOf('Series40') === -1;

  var img = new Image();

  img.onerror = function(){
    setClass("png");
  };

  img.onload = function(){

    var data = img.width === 1 && img.height === 1;

    if (data && svg) {
      r = setClass("svg");
    } else if (data) {
      r = setClass("datapng");
    } else {
      r = setClass("png");
    }

  };

  img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

  setClass = function(val) {
    $('body').addClass('icons-'+val);
  };

  return false;

});