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

    // Do submit stuff
    this.form.on('submit', { that: this }, this.submitForm);

    console.info(this);

  };

  FORM.prototype.Defaults = {
  };

  FORM.prototype.submitForm = function (e) {
    e.preventDefault();
    console.log(e.data.that);
    var that = e.data.that;
  };

  return FORM;

});
