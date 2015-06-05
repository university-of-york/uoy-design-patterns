/*

---

title: Accordion
name: accordion-module
category: modules

---

*/

define(['jquery'], function ($) {

  // "Private" variables (only available inside the module)

  // Define defaults for the class
  var Default = {
    isCompatible: true
  };

  // Define other variables for use throughout
  var isToggling = false;


  // Toggle state of item
  var toggleState = function(e) {

    e.preventDefault();

    // Things are still moving
    if (isToggling) return false;

    var $item = $(this).parent();

    isToggling = true;

    toggleContent($item);

    // Close others if needed
    if ($item.parent().hasClass('c-accordion--collapse')) {
      var $otherItems = $item.siblings('.c-accordion__item');
      $otherItems.each(function(i, otherItem) {
        toggleContent(otherItem, true);
      });
    }

    isToggling = false;

  };

  // Open the content in item
  var toggleContent = function(item, close) {

    // jQuerify item if needed
    var $item = item instanceof jQuery ? item : $(item);
    var $itemTitle = $item.children('.c-accordion__title');
    var $itemContent = $item.children('.c-accordion__content');
    var contentHeight = $itemContent.outerHeight();
    var newContentHeight = 0;

    if (contentHeight === 0 && close !== true) {
      newContentHeight = $itemContent.attr('data-height');
    }

    $itemContent.css('height', newContentHeight);
    if (close === true) {
      $item.addClass('is-closed');
    } else {
      $item.toggleClass('is-closed');
    }

    // Returns true if open, false if closed
    return !$item.hasClass('is-closed');
  };


  // Define your 'class'
  var ACCORDION = function(options) {

    // Get the options or their defaults
    if (!options.container) return false;

    $item = $(options.container);
    $itemTitle = $item.children('.c-accordion__title');
    $itemContent = $item.children('.c-accordion__content');

    // Hide content
    $itemContent.addClass('is-hidden');

    // Get content height
    var contentHeight = $itemContent.outerHeight();
    $itemContent.attr('data-height', contentHeight);

    // Collapse content
    $item.addClass('is-closed');
    $itemContent.removeClass('is-hidden');

    // Add click event on title
    $itemTitle.on('click', toggleState);


  };


  // "Public" variables

  // ACCORDION.color = openContent('aaa');


  // "Public" functions (accessible outside this file)

  ACCORDION.setColor = function(val) {
    // Always return true or false from setters
  };

  ACCORDION.getColor = function() {
    // Return the value
  };

  return ACCORDION;

});
