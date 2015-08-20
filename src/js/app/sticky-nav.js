/*

---
title: Sticky Nav Module
name: sticky-nav-module
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

  var $window = $(window);
  var $document = $(document);
  var windowWidth = $window.width();

  var STICKYNAV = function (options) {

    if (!options.container) return false;

    this.container = options.container;
    this.parent = this.container.parent();

    this.isSticky = false;
    this.isCentered = false;

    $window.on('resize', null, { that: this }, this.reset);
    $window.on('scroll', null, { that: this }, this.check);
    $window.on('nav.new-targeted-current', null, { that: this }, this.centerCurrentNav);

    $window.trigger('resize');

  };

  STICKYNAV.prototype.defaults = {
    content: false
  };

  STICKYNAV.prototype.check = function (e) {
    var that = e.data.that,
        scrollTop = $window.scrollTop();
    that.isSticky = scrollTop >= that.containerStartPosition;
    // Make nav stick to top of the page
    that.container.toggleClass('is-sticky', that.isSticky);
    that.container.toggleClass('is-centered', that.isCentered && that.isSticky);
  };

  // Find new position of sticky nav
  STICKYNAV.prototype.reset = function (e) {
    var that = e.data.that;
    windowWidth = $window.width();
    that.getOffsetPosition();
    that.getNavWidth();
    that.isCentered = that.navWidth > windowWidth;
    // console.log('Container start position is '+that.containerStartPosition);
    that.container.toggleClass('is-centered', that.isCentered);
    $window.trigger('scroll');
  };

  STICKYNAV.prototype.getOffsetPosition = function () {
    this.containerStartPosition = this.parent.offset().top;
  };

  STICKYNAV.prototype.getNavWidth = function () {
    var that = this;
    var width = 0;
    var listItems = this.container.find('li');
    $.each(listItems, function(i, v) {
      width+= $(v).outerWidth();
      if (i == listItems.length - 1) {
        // console.log('navWidth is '+width);
        that.navWidth = width;
      }
    });
  };

  STICKYNAV.prototype.centerCurrentNav = function (e) {
    var that = e.data.that;
    if (!that.isSticky || !that.isCentered) return false;
    var $navUl = $(that.container.children('ul')),
        $currentNav = $(that.container.find('li.is-current')),
        hasCurrent = $currentNav.length === 0,
        currentLeft = hasCurrent ? 0 : $currentNav.position().left,
        currentWidth = hasCurrent ? 0 : $currentNav.width(),
        newOffset = hasCurrent ? 0 : windowWidth/2 - currentLeft - currentWidth/2;
    $navUl.css('left', newOffset);
  };

  return STICKYNAV;

});
