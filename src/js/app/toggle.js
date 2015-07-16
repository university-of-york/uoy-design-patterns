/*

---
title: Toggle
name: toggle
category: Javascript
---

 */
define(['jquery'], function ($) {

  var TOGGLE = function (options) {

    if (!options.container && !options.button) return false;

    var toggleContainer = options.container;
    var toggleButton = options.button;
    var toggleClassName = options.className || 'is-open';

    toggleButton.on('click', function (e) {
      e.preventDefault();
      toggleContainer.toggleClass(toggleClassName);
      return false;
    });

    return true;
  };

  return TOGGLE;

});
