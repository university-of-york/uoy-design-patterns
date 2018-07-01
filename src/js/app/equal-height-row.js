/*

---
title: Equal height rows
name: equal-height-row-module
category: Javascript
---

 */

import $ from 'jquery';
import UTILS from 'utils';

export default function EqualHeightRows() {

  var $window = $(window);

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

    $window.on('resize', resizeFn);

    // Fire on load or trigger load if already loaded
    var rowImages = this.boxes.find('img');
    rowImages.each(function() {
      if (this.complete === true) {
        resizeFn();
      }
      $(this).on('load', function() {
        resizeFn();
      });
    });

    console.info(this);

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
    this.boxes.height('auto');
    this.maxHeight = 0;
    this.getMaxHeight(function() {
      this.boxes.height(this.maxHeight);
    });
  };

  return EQUALHEIGHT;
}
