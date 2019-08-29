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
    this.itemTitle.attr('aria-expanded','false');
    
    // Make sure we have an ID for the item content...
    var itemID = this.itemContent.attr('id');
    if( itemID == undefined ){
        // ...make an ID if not
        itemID = this.itemTitle.text().toLowerCase().replace( /[^a-z0-9]/g , "" );
        this.itemContent.attr('id',itemID);
    }

    // Add in our aria-controls attribute
    this.itemTitle.attr('aria-controls',itemID);
    
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

    // Fire content.updated on images within accordions
    this.itemContent.find('img').each(function(i, img) {
      var $img = $(img);
      $img.load(function(e) {
        that.setAccordionHeight.apply(that, ['imageload', $img]);
      });
    });

    // Initial load
    that.setAccordionHeight.apply(that, ['initial']);

    console.info(this);
  };

  // Boolean to see if animation is still underway
  ACCORDION.prototype.isToggling = false;

  // Set the height of the hidden accordion content
  ACCORDION.prototype.setAccordionHeight = function(type, obj) {

    // console.log('Accordion height set', type, obj);

    // type is the type of thing triggering the update event
    // obj is the object that triggers it (if needed)

    var isClosed = this.item.hasClass('is-closed');

    // Reset the itemContent
    this.itemContent.addClass('is-ghost');
    this.itemContent.removeClass('is-ready');
    this.itemContent.height('auto');
    this.item.removeClass('is-closed');
    this.itemTitle.attr('aria-expanded','true');
    
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
      this.itemTitle.attr('aria-expanded','false');
    }

    this.itemContent.css('height', contentHeight);

    this.itemContent.removeClass('is-ghost');
    this.itemContent.addClass('is-ready');
  };

  // Toggle state of item
  ACCORDION.prototype.toggleState = function (e) {

    e.preventDefault();

      var thisContentOpen,
          that = e.data && e.data.that ? e.data.that : this; // Temp this-holder

    // Things are still moving
    if (that.isToggling) {
        return false;
    }

    that.isToggling = true;

    thisContentOpen = that.toggleContent(that.item);

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
    var itemTitle = $item.children('.c-accordion__title');
    var contentHeight = itemContent.outerHeight();
    var newContentHeight = 0;


    if ((contentHeight === 0 && close !== true) ||
        $item.hasClass('is-closed') && close !== true) {
      newContentHeight = itemContent.attr('data-height');
    }

    console.log('content height: ' + contentHeight);
    console.log('new content height: ' + newContentHeight);

    itemContent.css('height', newContentHeight);

      if (close === true) {
          $item.addClass('is-closed');
          itemTitle.attr('aria-expanded','false');
      } else {
          $item.toggleClass('is-closed');
          itemTitle.attr('aria-expanded',($item.hasClass('is-closed')?'false':'true'));
      }


    // Returns true if open, false if closed
    return !$item.hasClass('is-closed');
  };

  // Open the content in item
  ACCORDION.prototype.setCookie = function (item, isOpen) {

    var itemId = $(item).children('.c-accordion__content').attr('id') || false;

    if (itemId === false) {
        return false;
    }

    if (isOpen === true) {
      COOKIES.set(itemId, 'open');
    } else {
      COOKIES.remove(itemId);
    }
  };

  return ACCORDION;
});
