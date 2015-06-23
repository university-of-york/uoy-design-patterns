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
    this.id = setTimeout(null);

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
    modalWrapper.addClass('is-active');
    // Close existing modals
    $('.c-modal').not(thisModal).removeClass('is-active');
    // Add modal if needed - check if ID is in DOM
    if (thisModal.length === 0) this.container.appendTo(modalWrapper);
    this.container.addClass('is-active');
  };

  MODAL.prototype.close = function() {
    this.container.removeClass('is-active');
    // Just in case any are also open
    $('.c-modal').removeClass('is-active');
    var modalWrapper = $('.c-modal__wrapper');
    modalWrapper.removeClass('is-active');
  };

  MODAL.prototype.checkModal = function() {

    // Temporary this-holder
    var that = this;
    var modalWrapper = $('.c-modal__wrapper');

    if (modalWrapper.length > 0) return true;

    modalWrapper = $('<div>').addClass('c-modal__wrapper').on('click', function(e) {
      that.close();
    });

    $('body').append(modalWrapper);

    return modalWrapper;

  };

  MODAL.prototype.createModal = function() {

    // Temporary this-holder
    var that = this;
    var modalContainer = $('<div>').addClass('c-modal c-modal--'+this.type).attr('id', 'modal-'+this.id).on('click', function(e) {
      // Don't allow the click to get to the wrapper, or it will close
      e.stopPropagation();
    });;
    var modalTitle = this.title !== false ? $('<h4>').addClass('c-modal__title').text(this.title) : false;
    var modalContent = this.content !== false ? $('<div>').addClass('c-modal__content').html(this.content) : false;
    var modalClose = $('<a>').addClass('c-modal__close').attr('title', 'Close this window').html('&times;').on('click', function(e) {
      that.close();
    });;

    modalContainer.append([modalTitle, modalContent, modalClose]);

    return modalContainer;

  };

  return MODAL;

});
