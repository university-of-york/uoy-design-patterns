/*

---
title: Form validation
name: form-validation-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  var FORM = function (options) {

    if (!options.form) return false;
    this.form = $(options.form);
    this.buttons = this.form.find('button[type=submit], input[type=submit]');

    // Do submit stuff
    // This only fires _after_ browser validation, so we must also intercept the submit button click
    this.form.on('submit', { that: this }, this.submitForm);

    this.buttons.on('click', { that: this }, this.submitForm);

    console.info(this);

  };

  FORM.prototype.Defaults = {
  };

  FORM.prototype.submitForm = function (e) {
    console.log(e.data.that);
    e.preventDefault();
    var that = e.data.that;

    // Disable buttons
    // Validate required fields
    // Validate typed fields



  };

  return FORM;

});
