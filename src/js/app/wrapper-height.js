/*

---
title: Wrapper Height Module
name: wrapper-height-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  var WRAPPERHEIGHT = function (options) {

    this.resize();

  };

  WRAPPERHEIGHT.prototype.resize = function () {

    var windowHeight = $(window).height();
    var bodyChildren = $('body').children();
    var nonMainWrapperHeight = 0;
    bodyChildren.each(function (i,v) {

      var $v = $(v);
      // Don't count them if position is 'fixed' or 'absolute', or if it is a script
      var position = $v.css('position');
      var nodeName = v.nodeName.toUpperCase();
      if (position !== 'fixed' && position !== 'absolute' && nodeName !== 'SCRIPT' && !$v.hasClass('o-wrapper--main')) {
        nonMainWrapperHeight+= $(v).outerHeight(true);
      }
      if (i == bodyChildren.length - 1) {
        var minHeight = windowHeight - nonMainWrapperHeight;
        $('.js-wrapper--main').css('min-height', minHeight);

      }

    });

  };

  return WRAPPERHEIGHT;

});
