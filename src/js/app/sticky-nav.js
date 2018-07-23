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

  // We need to set the old/new URL's manually as a workaround for non-browser support
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange
  if(!window.HashChangeEvent) {
      (function() {
          var lastURL = document.URL;
          window.addEventListener('hashchange', function(event) {
              Object.defineProperty(event, 'oldURL', {enumerable: true, configurable: true, value: lastURL});
              Object.defineProperty(event, 'newURL', {enumerable: true, configurable: true, value: document.URL});
              lastURL = document.URL;
          });
      }());
  }


  var STICKYNAV = function (options) {

    if (!options.container) return false;

    this.container = options.container;
    this.navItems = this.container.find('.c-nav__item');
    this.parent = this.container.parent();
    this.currentURL = document.URL;
    this.isSticky = false;
    this.isCentered = false;

    // When there's a sticky nav, URL fragments will scroll the page under the navigation
    // Nudge the scroll by nav height
    $window.on('hashchange', null, { that: this }, this.updateScrollPos);
    $window.on('resize', null, { that: this }, this.reset);
    $window.on('scroll', null, { that: this }, this.check);
    $window.on('nav.new-targeted-current', null, { that: this }, this.centerCurrentNav);

    this.container.on('click', '.c-nav__item', { that: this }, this.handleLinkClick);

    $window.trigger('resize');

    console.info(this);
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
    navHeight = that.getNavHeight();
    that.getOffsetPosition();
    that.getNavWidth();
    that.isCentered = that.navWidth > windowWidth;
    that.container.toggleClass('is-centered', that.isCentered);
    $window.trigger('scroll');
  };

  STICKYNAV.prototype.getOffsetPosition = function () {
    this.containerStartPosition = this.parent.offset().top;
  };

  STICKYNAV.prototype.getNavHeight = function () {
    return this.container.outerHeight();
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
        hasCurrent = $currentNav.length > 0,
        newOffset = 0;
    if (hasCurrent !== false) {
      var currentLeft = $currentNav.position().left,
          currentWidth = $currentNav.width();
      // only offset negatively
      newOffset = Math.min(windowWidth/2 - currentLeft - currentWidth/2,0);
    }
    $navUl.css('left', newOffset);
  };

  STICKYNAV.prototype.updateScrollPos = function(e) {
      var that = e.data.that;
      var scrollPos = $window.scrollTop();
      var navHeight = that.getNavHeight();
      var paddingTop = parseInt($(location.hash).css('padding-top'), 10);

      // only update the scroll position if we're looking
      // at a new URL/hash
      if(e.originalEvent.oldURL === e.originalEvent.newURL) {
          return;
      }

      navHeight += (paddingTop > 0) ? 0 : 10 ;
      $window.scrollTop(scrollPos - navHeight);
      that.resetLinkHighlight(e);
  };

  STICKYNAV.prototype.resetLinkHighlight = function(e, currentLink) {
      var that = e.data.that;
      var clickedLiItem;
      that.navItems.removeClass('is-current');

      if(currentLink) {
          currentLink.addClass('is-current');
      } else {
          // need to do some searching
          clickedLiItem = that.navItems.filter(function() {
              return $(this).children('.c-nav__link').attr('href') === location.href;
          });

          clickedLiItem.addClass('is-current');
      }
  };

  STICKYNAV.prototype.handleLinkClick = function(e) {
      var that = e.data.that;

      that.resetLinkHighlight(e, $(this));

      if(that.currentURL === e.target.href) {
          e.preventDefault();
          $(e.target).blur(); // remove the leftover highlight
      }
      that.currentURL = e.target.href;
  };

  return STICKYNAV;
});
