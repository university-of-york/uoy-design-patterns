/*

---

title: Accordion
name: accordion-module
category: modules

---

*/

define(['jquery', 'app/utils', 'jscookie'], function ($, UTILS, COOKIES) {

  var $window = $(window);

  // Define your 'class'
  var ACCORDION = function (options) {

    // Get the options or their defaults
    if (!options.container) return false;

    this.item = $(options.container);
    this.itemTitle = this.item.children('.c-accordion__title');
    this.itemContent = this.item.children('.c-accordion__content');

    // Hide content
    this.item.addClass('is-closed');

    // Enable transition
    var iC = this.itemContent;
    setTimeout(function() { iC.addClass('is-ready'); }, 400);

    // Add click event on title
    this.itemTitle.on('click', { that: this }, this.toggleState);

    var that = this;
    $window.on('content.updated', function(e, type, obj) {
      // Only reset height if updated content was within this accordion
      if (!obj.container) return;
      var $closestContainer = obj.container.closest('.c-accordion__content');
      if ($closestContainer.is(that.itemContent) === true) {
        that.setAccordionHeight.apply(that, [type, obj]);
      }
    });

    $window.on('resized.width', UTILS.debounce(function(e) {
      that.setAccordionHeight.apply(that, ['resize']);
    }, 250));

    // Initial load
    that.setAccordionHeight.apply(that, ['initial']);

    console.info(this);

  };

  // Boolean to see if animation is still underway
  ACCORDION.prototype.isToggling = false;

  // Set the height of the hidden accordion content
  ACCORDION.prototype.setAccordionHeight = function(type, obj) {

    // type is the type of thing triggering the update event
    // obj is the object that triggers it (if needed)

    var isClosed = this.item.hasClass('is-closed');

    // Reset the itemContent
    this.itemContent.addClass('is-ghost');
    this.itemContent.removeClass('is-ready');
    this.itemContent.height('auto');
    this.item.removeClass('is-closed');

    // // Get content height
    var contentHeight = this.itemContent.outerHeight();

    this.itemContent.attr('data-height', contentHeight);

    var thisId = this.itemContent.attr('id') || false;
    if (thisId !== false && COOKIES.get(thisId) === 'open') {
      isClosed = false;
    }
    if (isClosed === true) {
      contentHeight = 0;
      this.item.addClass('is-closed');
    }

    this.itemContent.css('height', contentHeight);

    this.itemContent.removeClass('is-ghost');
    this.itemContent.addClass('is-ready');

  };

  // Toggle state of item
  ACCORDION.prototype.toggleState = function (e) {

    e.preventDefault();

    // Temp this-holder
    var that = e.data && e.data.that ? e.data.that : this ;

    // Things are still moving
    if (that.isToggling) return false;

    that.isToggling = true;

    var thisContentOpen = that.toggleContent(that.item);

    // Set/remove cookie for this accordion
    that.setCookie(that.item, thisContentOpen);

    // Close others if needed
    if (that.item.parent().hasClass('c-accordion--collapse')) {
      var $otherItems = that.item.siblings('.c-accordion__item');
      $otherItems.each(function (i, otherItem) {
        var otherContentOpen = that.toggleContent(otherItem, true);
        that.setCookie(otherItem, otherContentOpen);
      });
    }

    that.isToggling = false;

  };

  // Open the content in item
  ACCORDION.prototype.toggleContent = function (item, close) {

    var $item = $(item);
    var itemContent = $item.children('.c-accordion__content');

    var contentHeight = itemContent.outerHeight();
    var newContentHeight = 0;

    if (contentHeight === 0 && close !== true) {
      newContentHeight = itemContent.attr('data-height');
    }

    itemContent.css('height', newContentHeight);
    if (close === true) {
      $item.addClass('is-closed');
    } else {
      $item.toggleClass('is-closed');
    }

    // Returns true if open, false if closed
    return !$item.hasClass('is-closed');

  };

  // Open the content in item
  ACCORDION.prototype.setCookie = function (item, isOpen) {

    var itemId = $(item).children('.c-accordion__content').attr('id') || false;
    if (itemId === false) return false;
    if (isOpen === true) {
      COOKIES.set(itemId, 'open');
    } else {
      COOKIES.remove(itemId);
    }

  };

  return ACCORDION;

});
