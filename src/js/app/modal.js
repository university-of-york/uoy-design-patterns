/*

---
title: Modal Module
name: modal-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  var MODAL = function(options) {

    this.content = options.content || this.defaults.content;
    this.title = options.title || this.defaults.title;
    this.type = options.type || this.defaults.type;
    // Use setTimout to get unique ID
    this.id = setTimeout(function(){});

    this.wrapper = this.checkModal();
    this.container = this.createModal();

  };

  MODAL.prototype.defaults = {
    content: false,
    title: false,
    type: 'framed'
  };

  MODAL.prototype.open = function() {
    // Show wrapper
    var modalWrapper = $('.c-modal__wrapper');
    var thisModal = $('#modal-'+this.id);
    this.activate(modalWrapper);
    // Close existing modals
    this.deactivate($('.c-modal').not(thisModal));
    // Add modal if needed - check if ID is in DOM
    if (thisModal.length === 0) this.container.appendTo(modalWrapper);
    this.activate(this.container);
  };

  MODAL.prototype.activate = function($el) {
    $el.removeClass('is-hidden');
    setTimeout(function() {
      $el.addClass('is-active');
    }, 30)
  };

  MODAL.prototype.close = function() {
    // Deactivate all the modals (in case one is hanging around)
    this.deactivate($('.c-modal'));
    this.deactivate($('.c-modal__wrapper'));
  };

  MODAL.prototype.deactivate = function($el) {

    var called = false;
    $el.removeClass('is-active').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e){
      // Stop it affecting the wrapper
      e.stopPropagation();
      $el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
      called = true;
      // console.log('Transition ended!', this, e);
      $(this).addClass('is-hidden');
    });
    // Manually trigger transition end in unsupported or broken implementations
    var callback = function() {
      if (!called) {
        $el.trigger('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
      }
    };
    setTimeout(callback, 800);
  };

  MODAL.prototype.checkModal = function() {

    // Temporary this-holder
    var that = this;
    var modalWrapper = $('.c-modal__wrapper');

    if (modalWrapper.length > 0) return true;

    modalWrapper = $('<div>').addClass('c-modal__wrapper is-hidden').on('click', function(e) {
      that.close();
    });

    $('body').append(modalWrapper);

    return modalWrapper;

  };

  MODAL.prototype.createModal = function() {

    // Temporary this-holder
    var that = this;
    var modalContainer = $('<div>').addClass('c-modal c-modal--'+this.type+' is-hidden').attr('id', 'modal-'+this.id).on('click', function(e) {
      // Don't allow the click to get to the wrapper, or it will close
      e.stopPropagation();
    });
    var modalTitle = this.title !== false ? $('<h4>').addClass('c-modal__title').text(this.title) : false;
    var modalContent = this.content !== false ? $('<div>').addClass('c-modal__content').html(this.content) : false;
    var modalClose = $('<a>').addClass('c-modal__close').attr('title', 'Close this window').html('&times;').on('click', function(e) {
      that.close();
    });

    modalContainer.append([modalTitle, modalContent, modalClose]);

    return modalContainer;

  };

  return MODAL;

});
