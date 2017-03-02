/*

---
title: Wrapper Height Module
name: wrapper-height-module
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

  var WRAPPERHEIGHT = function (options) {

    this.wrapper = $('.js-wrapper--main');

    if (!this.wrapper) return false;

    // Don't resize if there's nothing in the main wrapper
    if (this.wrapper.children().length === 0) return false;

    this.measure();

    // recheck on window resize
    var that = this;
    $window.on('resize', UTILS.debounce(function(e) {
      that.measure.apply(that);
    }, 250));

  };

  WRAPPERHEIGHT.prototype.measure = function () {

    //console.log('Measuring');

    var windowHeight = $(window).height();
    var bodyChildren = $('body').children();
    var nonMainWrapperHeight = 0;
    var thisWrapper = this.wrapper;
    bodyChildren.each(function (i,v) {

      var $v = $(v);
      // Don't count them if position is 'fixed' or 'absolute', or if it is a script
      var position = $v.css('position');
      var nodeName = v.nodeName.toUpperCase();
      if (position !== 'fixed' && position !== 'absolute' && nodeName !== 'SCRIPT' && !$v.hasClass('o-wrapper--main')) {
        nonMainWrapperHeight+= $(v).outerHeight(true);
      }
      if (i == bodyChildren.length - 1) {
        // must remove wrapper margin height
        var wrapperMargin = parseInt(thisWrapper.css('margin-top'), 10) + parseInt(thisWrapper.css('margin-bottom'), 10);
        var minHeight = windowHeight - nonMainWrapperHeight - wrapperMargin;
        if (minHeight > 0) {
          thisWrapper.css('min-height', minHeight);
        }

      }

    });

  };

  return WRAPPERHEIGHT;

});
