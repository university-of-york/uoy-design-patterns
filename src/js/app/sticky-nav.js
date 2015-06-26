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

  var STICKYNAV = function(options) {

    if (!options.container) return false;

    this.container = options.container;
    this.parent = this.container.parent();
    // Get offset position from parent
    this.containerStartPosition = this.parent.offset().top;

    $window.on('resize', null, { that: this }, this.reset);
    $window.on('scroll', null, { that: this }, this.check);

    $window.trigger('scroll');

  };

  STICKYNAV.prototype.defaults = {
    content: false
  };

  STICKYNAV.prototype.check = function(e) {
    var that = e.data.that,
        scrollTop = $window.scrollTop(),
        addOrRemove = scrollTop >= that.containerStartPosition;
    that.container.toggleClass('is-sticky', addOrRemove);
  };

  // Find new position of sticky nav
  STICKYNAV.prototype.reset = function(e) {
    var that = e.data.that;
    that.containerStartPosition = that.parent.offset().top;
    console.log('New container start position is '+that.containerStartPosition);
    $window.trigger('scroll');
  };

  STICKYNAV.prototype.foo = UTILS.debounce(function() {
    var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        windowHeight = $window.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
    console.log(scrollTop, documentHeight, windowHeight, dwh, extra);
    // for (var i = 0; i < sticked.length; i++) {
    //     var s = sticked[i],
    //         elementTop = s.stickyWrapper.offset().top,
    //         etse = elementTop - s.topSpacing - extra;

    //     if (scrollTop <= etse) {
    //       if (s.currentTop !== null) {
    //         s.stickyElement
    //           .css('position', '')
    //           .css('top', '');
    //         s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
    //         s.currentTop = null;
    //       }
    //     } else {
    //       var newTop = documentHeight - s.stickyElement.outerHeight()
    //         - s.topSpacing - s.bottomSpacing - scrollTop - extra;
    //       if (newTop < 0) {
    //         newTop = newTop + s.topSpacing;
    //       } else {
    //         newTop = s.topSpacing;
    //       }
    //       if (s.currentTop != newTop) {
    //         s.stickyElement
    //           .css('position', 'fixed')
    //           .css('top', newTop);

    //         if (typeof s.getWidthFrom !== 'undefined') {
    //           s.stickyElement.css('width', $(s.getWidthFrom).width());
    //         }

    //         s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
    //         s.currentTop = newTop;
    //       }
    //     }
    //   }
  }, 250);

  return STICKYNAV;

});
