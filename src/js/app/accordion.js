/*

---

title: Accordion
name: accordion-module
category: modules

---

*/

define(['jquery'], function ($) {

  // Define your 'class'
  var ACCORDION = function (options) {

    // Get the options or their defaults
    if (!options.container) return false;

    this.item = $(options.container);
    this.itemTitle = this.item.children('.c-accordion__title');
    this.itemContent = this.item.children('.c-accordion__content');

    // Hide content
    this.itemContent.addClass('is-hidden');

    // Add click event on title
    this.itemTitle.on('click', { that: this }, this.toggleState);

  };

  // Boolean to see if animation is still underway
  ACCORDION.prototype.isToggling = false;

  // GEt the height of the hidden accordion content
  ACCORDION.prototype.setAccordionHeight = function() {

      // Get content height
      var contentHeight = this.itemContent.outerHeight();
      this.itemContent.attr('data-height', contentHeight);

      // Collapse content
      this.item.addClass('is-closed');
      this.itemContent.removeClass('is-hidden');

  };

  // Toggle state of item
  ACCORDION.prototype.toggleState = function (e) {

    e.preventDefault();

    // Temp this-holder
    var that = e.data.that;

    // Things are still moving
    if (that.isToggling) return false;

    that.isToggling = true;

    that.toggleContent(this.item);

    // Close others if needed
    if (that.item.parent().hasClass('c-accordion--collapse')) {
      var $otherItems = this.item.siblings('.c-accordion__item');
      $otherItems.each(function (i, otherItem) {
        that.toggleContent(otherItem, true);
      });
    }

    that.isToggling = false;

  };

  // Open the content in item
  ACCORDION.prototype.toggleContent = function (item, close) {

    var contentHeight = this.itemContent.outerHeight();
    var newContentHeight = 0;

    if (contentHeight === 0 && close !== true) {
      newContentHeight = this.itemContent.attr('data-height');
    }

    this.itemContent.css('height', newContentHeight);
    if (close === true) {
      this.item.addClass('is-closed');
    } else {
      this.item.toggleClass('is-closed');
    }

    // Returns true if open, false if closed
    return !this.item.hasClass('is-closed');

  };

  return ACCORDION;

});
