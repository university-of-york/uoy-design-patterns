/*

---
title: Equal height rows
name: equal-height-row-module
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

  var EQUALHEIGHT = function (options) {
    if (!options.row) return false;
    this.row = options.row;
    this.boxes = this.row.children('.o-grid__box');
    this.maxHeight = 0;
    this.setMaxHeight();
    var that = this;
    var resizeFn = UTILS.debounce(function () {
      that.setMaxHeight();
    }, 250);

    $(window).on('resize', resizeFn);
    return true;
  };

  EQUALHEIGHT.prototype.getMaxHeight = function(onComplete) {
    var that = this,
        boxCount = this.boxes.length;
    $.each(this.boxes, function(i, box) {
      that.maxHeight = Math.max(that.maxHeight, $(box).outerHeight());
      if (i === boxCount - 1) {
        onComplete.apply(that);
      }
    });

  };

  EQUALHEIGHT.prototype.setMaxHeight = function() {
    console.log('Setting height');
    this.boxes.height('auto');
    this.maxHeight = 0;
    this.getMaxHeight(function() {
      this.boxes.height(this.maxHeight);
    });
  };

  return EQUALHEIGHT;

});
