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

    console.log('Checking for modal: '+this.checkModal());

    this.wrapper = this.addModal();

  };

  MODAL.prototype.defaults = {
    content: false,
    title: false,
    type: 'framed'
  };

  MODAL.prototype.open = function(e) {
    e.preventDefault();
    console.log('Open the modal!');
    this.wrapper.addClass('is-active');
  };

  MODAL.prototype.checkModal = function() {
    return $('.c-modal__wrapper').length > 0;
  };

  MODAL.prototype.addModal = function() {

    console.log('Adding modal');

    if (this.checkModal === true) return $('.c-modal__wrapper');

    var modalWrapper = $('<div>').addClass('c-modal__wrapper');
    var modalContainer = $('<div>').addClass('c-modal c-modal--'+this.type);
    var modalTitle = this.title !== false ? $('<h4>').addClass('c-modal__title').text(this.title) : false;
    var modalContent = this.content !== false ? $('<div>').addClass('c-modal__content').html(this.content) : false;
    var modalClose = $('<a>').addClass('c-modal__close').attr('title', 'Close this window').html('&times;')

    // Add close click event to wrapper and close button

    modalWrapper.append(modalContainer);
    modalContainer.append([modalTitle, modalContent, modalClose]);

    $('body').append(modalWrapper);

    return modalWrapper;

  };

  return MODAL;

});
