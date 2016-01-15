/*

---
title: Modal Module
name: modal-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  var currentModal = false;
  var modalWrapper = false;
  var modalPrev = false;
  var modalNext = false;

  var MODAL = function (options) {

    this.content = options.content || this.defaults.content;
    this.title = options.title || this.defaults.title;
    this.caption = options.caption || this.defaults.caption;
    this.type = options.type || this.defaults.type;
    this.prev = options.prev || false;
    this.next = options.next || false;
    // Use setTimout to get unique ID
    this.id = setTimeout(function (){});

    this.checkModal();
    this.createModal();

    console.info(this);

  };

  MODAL.prototype.defaults = {
    content: false,
    title: false,
    caption: false,
    type: 'framed'
  };

  MODAL.prototype.open = function () {
    // Show wrapper
    var thisModal = $('#modal-'+this.id);
    this.activate(modalWrapper);
    // Close existing modals
    var otherModals = $('.c-modal').not(thisModal).not('.is-hidden');
    if (otherModals.length > 0) this.deactivate(otherModals);
    // Add content (if needed)
    if (this.modalContent !== false && this.modalContent.text() === '') {
      this.loadContent();
    }
    // Add modal if needed - check if ID is in DOM
    if (thisModal.length === 0) this.modalContainer.appendTo(modalWrapper);
    this.activate(this.modalContainer);
    // Show/hide prev/next button
    if (this.prev === false) { this.deactivate(modalPrev); } else { this.activate(modalPrev); }
    if (this.next === false) { this.deactivate(modalNext); } else { this.activate(modalNext); }
    currentModal = this;
  };

  MODAL.prototype.activate = function ($el) {
    $el.removeClass('is-hidden');
    setTimeout(function () {
      $el.addClass('is-active');
    }, 30);
  };

  MODAL.prototype.close = function () {
    // Deactivate all the modals (in case one is hanging around)
    this.deactivate($('.c-modal'));
    this.deactivate($('.c-modal__wrapper'));
    this.deactivate($('.c-modal__nav'));
  };

  MODAL.prototype.deactivate = function ($el) {

    var called = false;
    $el.removeClass('is-active');
    if (Modernizr.csstransitions) {
      $el.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e){
        // Stop it affecting the wrapper
        e.stopPropagation();
        $el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
        called = true;
        $el.addClass('is-hidden');
      });
      // In case it doesn't fire
      setTimeout(function () {
        if (called !== true) {
          $el.trigger('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
        }
      }, 1000);
    } else {
      // Do the same thing, but in unsupported or broken implementations
      if (called !== true) {
        called = true;
        $el.addClass('is-hidden');
      }
    }
  };

  MODAL.prototype.loadContent = function() {
    this.modalContent.html(this.content);
    if (this.caption !== false) {
      this.modalContent.append($('<div>').addClass('c-modal__caption').html(this.caption));
    }
  };

  MODAL.prototype.navigate = function(dir) {
    dir = dir || 'next';
    if (this[dir] !== false) this[dir].click();
  };

  MODAL.prototype.checkModal = function () {

    // Temporary this-holder
    // var that = this;

    if ($('.c-modal__wrapper').length > 0) return true;

    modalWrapper = $('<div>').addClass('c-modal__wrapper is-hidden').on('click', function (e) {
      currentModal.close();
    });
    modalPrev = $('<a>').addClass('c-modal__nav c-modal__nav--prev is-hidden')
                        .html('<i class="c-icon c-icon--3x c-icon--chevron-left c-icon--light"></i>')
                        .on('click', function (e) {
                          e.stopPropagation();
                          currentModal.navigate('prev');
                        })
                        .appendTo(modalWrapper);
    modalNext = $('<a>').addClass('c-modal__nav c-modal__nav--next is-hidden')
                        .html('<i class="c-icon c-icon--3x c-icon--chevron-right c-icon--light"></i>')
                        .on('click', function (e) {
                          e.stopPropagation();
                          currentModal.navigate('next');
                        })
                        .appendTo(modalWrapper);

    $('body').append(modalWrapper);

    return modalWrapper;

  };

  MODAL.prototype.createModal = function () {

    // Temporary this-holder
    var that = this;
    this.modalContainer = $('<div>').addClass('c-modal c-modal--'+this.type+' is-hidden').attr('id', 'modal-'+this.id).on('click', function (e) {
      // Don't allow the click to get to the wrapper, or it will close
      e.stopPropagation();
    });
    this.modalTitle = this.title !== false ? $('<h4>').addClass('c-modal__title').text(this.title) : false;
    this.modalContent = this.content !== false ? $('<div>').addClass('c-modal__content') : false;
    this.modalClose = $('<a>').addClass('c-modal__close').attr('title', 'Close this window').html('&times;').on('click', function (e) {
      that.close();
    });

    this.modalContainer.append([this.modalTitle, this.modalContent, this.modalClose]);

  };

  return MODAL;

});
