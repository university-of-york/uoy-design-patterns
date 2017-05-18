/*

---
title: Sample Module
name: sample-module
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

  // "Private" variables (only available inside the module)

  // Define defaults for the class
  var Default = {
    height: 200,
    buttonTextMore: 'Show more',
    buttonTextLess: 'Show less'
  };

  // Define other variables for use throughout
  var $window = $(window);

  // Define your 'class'
  // Better to pass an options object instead of multiple arguments
  var SHOWMORE = function (options) {

    // Return false if required options aren't passed
    if (!options.container) return false;
    this.container = options.container;
    this.content = this.container.find('.c-show-more__content');

    // Get the options or their defaults
    this.defaultHeight = options.defaultHeight || Default.height;
    this.buttonTextMore = options.buttonTextMore || Default.buttonTextMore;
    this.buttonTextLess = options.buttonTextLess || Default.buttonTextLess;

    // Hide content
    this.container.addClass('is-closed');

    // Enable transition
    var iC = this.content;
    setTimeout(function() { iC.addClass('is-ready'); }, 400);

    // Add button
    this.addButton();

    // On resize or content updated, reset height
    var that = this;
    $window.on('content.updated', function(e, type, obj) {
      // Only reset height if updated content was within this showmore
      if (!obj.container) return;
      var $closestContainer = obj.container.closest('.c-show-more__content');
      if ($closestContainer.is(that.content) === true) {
        that.setShowMoreHeight.apply(that, [type, obj]);
      }
    });

    $window.on('resized.width', UTILS.debounce(function(e) {
      that.setShowMoreHeight.apply(that, ['resize']);
    }, 250));

    // Fire content.updated on images within accordions
    this.content.find('img').each(function(i, img) {
      var $img = $(img);
      $img.load(function(e) {
        that.setShowMoreHeight.apply(that, ['imageload', $img]);
      });
    });

    // Initial load
    this.setShowMoreHeight.apply(this, ['initial']);

    console.info(this);

  };

  // Boolean to see if animation is still underway
  SHOWMORE.prototype.isToggling = false;

  SHOWMORE.prototype.setShowMoreHeight = function (type, obj) {

    console.log('Show More height set', type, obj);

    // type is the type of thing triggering the update event
    // obj is the object that triggers it (if needed)

    var isClosed = this.container.hasClass('is-closed');

    // Reset the content
    this.content.addClass('is-ghost');
    this.content.removeClass('is-ready');
    this.content.height('auto');
    this.container.removeClass('is-closed');

    // Get content height
    var contentHeight = this.content.outerHeight();

    this.content.attr('data-original-height', contentHeight);
    var thisId = this.content.attr('id') || false;

    if (isClosed === true) {
      contentHeight = this.defaultHeight;
      this.container.addClass('is-closed');
    }

    this.content.css('height', contentHeight);

    this.content.removeClass('is-ghost');
    this.content.addClass('is-ready');

  };

  SHOWMORE.prototype.addButton = function () {

    this.buttonIcon = $('<i>').addClass('c-icon c-icon--chevron-down c-icon--after');
    this.button = $('<button>').addClass('c-btn c-btn--medium c-btn--secondary')
                               .text(this.buttonTextMore).append(this.buttonIcon)
                               .on('click', { that: this }, this.toggleState);

    return this.container.append(this.button);

  };

  SHOWMORE.prototype.toggleState = function (e) {

    e.preventDefault();

    // Temp this-holder
    var that = e.data && e.data.that ? e.data.that : this ;

    // Things are still moving
    if (that.isToggling) return false;

    that.isToggling = true;

    var contentHeight = that.content.outerHeight();
    var newContentHeight = that.defaultHeight;

    if (contentHeight === that.defaultHeight) {
      newContentHeight = that.content.attr('data-original-height');
    }

    that.content.css('height', newContentHeight);
    that.container.toggleClass('is-closed');

    // Update button text
    var isClosed = that.container.hasClass('is-closed');
    if (isClosed === true) {
      that.buttonIcon.addClass('c-icon--chevron-down').removeClass('c-icon--chevron-up');
      that.button.text(that.buttonTextMore).append(that.buttonIcon);
    } else {
      that.buttonIcon.addClass('c-icon--chevron-up').removeClass('c-icon--chevron-down');
      that.button.text(that.buttonTextLess).append(that.buttonIcon);
    }

    that.isToggling = false;

    // Returns true if open, false if closed
    return !isClosed;

  };

  return SHOWMORE;

});
