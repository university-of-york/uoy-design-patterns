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
    $window.on('content.updated', function() {
      that.setAccordionHeight.apply(that);
    });
    $window.on('resize', UTILS.debounce(function() {
      that.setAccordionHeight.apply(that);
    }, 250));

    console.info(this);

  };

  // Boolean to see if animation is still underway
  ACCORDION.prototype.isToggling = false;

  // Set the height of the hidden accordion content
  ACCORDION.prototype.setAccordionHeight = function() {

    // Reset the itemContent
    this.itemContent.addClass('is-ghost').height('auto');

    // Get content height
    var contentHeight = this.itemContent.outerHeight();

    this.itemContent.attr('data-height', contentHeight);

    var thisId = this.itemContent.attr('id') || false;
    if (thisId !== false && COOKIES.get(thisId) === 'open') {
      this.item.removeClass('is-closed');
    }
    if (this.item.hasClass('is-closed')) {
      contentHeight = 0;
    }

    this.itemContent.css('height', contentHeight);

    this.itemContent.removeClass('is-ghost');

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
