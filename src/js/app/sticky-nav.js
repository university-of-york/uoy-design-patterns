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
      $window.on('hashchange', null, {that: this}, this.updateScrollPos);
      $window.on('resize', null, {that: this}, this.reset);
      $window.on('scroll', null, {that: this}, this.check);
      $window.on('nav.new-targeted-current', null, {that: this}, this.centerCurrentNav);

      this.container.on('click', '.c-nav__item', {that: this}, this.handleLinkClick);

      $window.trigger('resize');

      console.info(this);
  };

  STICKYNAV.prototype.defaults = {
    content: false
  };

  STICKYNAV.prototype.check = function (e) {
    var that = e.data.that,
        scrollTop = $window.scrollTop(),
        smallScreen = UTILS.mediaQuery('small', '-'),
        canScroll = false,
        count = 0;

    that.isSticky = scrollTop >= that.containerStartPosition;

    if(smallScreen) {
        // check to see if we're at the end of the available navigation items
        // if so, we can hide the faded edge

        that.navItems.each(function() {
            count++;
            if($(this).hasClass('is-current') &&
                count === that.navItems.length) {
                canScroll = true;
            }
        });
    }

    // Make nav stick to top of the page
    that.container.toggleClass('is-sticky', that.isSticky);
    that.container.toggleClass('is-centered', that.isCentered && that.isSticky);
    that.container.toggleClass('can-scroll', !canScroll);
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
    var smallScreen = UTILS.mediaQuery('small', '-');
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

    // if this is a mobile, scroll left, don't position left
    if(smallScreen) {
        // multiply by negative 1 to turn negative into a positive
        $navUl.scrollLeft(newOffset * -1);
        console.log('new scroll left value: ' + (newOffset * -1));
        return;
    }

    $navUl.css('left', newOffset);
  };

  STICKYNAV.prototype.updateScrollPos = function(e) {
      var that = e.data.that;
      var scrollPos = $window.scrollTop();
      var navHeight = that.getNavHeight();
      var $locationHash = $(location.hash);
      var paddingTop = parseInt($locationHash.css('padding-top'), 10);
      var hashOffset = $locationHash.offset();

      if(hashOffset && hashOffset.top > 0) {
          // let's get the document offset position of the selected heading (i.e. the location hash)
          // and use that instead of scroll top position
          scrollPos = parseInt(hashOffset.top, 10);
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
      var that = e.data.that,
          $currentLink = $(this); // currentLink is the current, clicked LI item

      // we perform this check here before the highlight reset, which comes after
      var inTargetNavSection = $currentLink.hasClass('is-current');

      that.resetLinkHighlight(e, $currentLink);

      // if we've clicked a heading but the target hash is the same the current
      // i.e. it's not been updated
      if(that.currentURL === e.target.href) {
          e.preventDefault();

          if (inTargetNavSection) {
              // remove the leftover highlight
              $(e.target).blur();
          } else {
              // if we've scrolled away from the current hash's section
              // update the scroll position to match
              that.updateScrollPos(e);
          }
      }
      that.currentURL = e.target.href;
  };

  return STICKYNAV;
});
