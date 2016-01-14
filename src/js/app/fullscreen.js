/*

---
title: Fullscreen Module
name: fullscreen-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  $window = $(window);
  $html = $('html');

  // Define your 'class'
  var FULLSCREEN = function (options) {

    if (!options.button) return false;

    this.button = options.button || false;
    var $target = $(this.button.attr('href'));
    if ($target.length === 0) return false;
    this.target = $(options.target) || $target ;

    this.button.on('click', { that: this }, this.buttonClick);

    console.info(this);

  };

  FULLSCREEN.prototype.buttonClick = function(e) {

    e.preventDefault();

    var that = e.data.that;

    that.target.off('keyup');

    that.target.toggleClass('is-fullscreen');

    if (that.target.hasClass('is-fullscreen')) {
      // Escape closes fullscreen
      $window.one('keyup', function(e) {
        var keyCode = e.keyCode;
        if (keyCode == 27) {
          that.target.toggleClass('is-fullscreen', false);
        }
      });
    }
  };

  return FULLSCREEN;

});