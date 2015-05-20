/*

---
title: Toggle
name: toggle
category: Javascript
---

 */
define(['jquery'], function ($) {

  var TOGGLE = function(options) {

    if (!options.container && !options.button) return false;

    var toggleContainer = options.container;
    var toggleButton = options.button;
    var toggleClass = options.class || 'is-open';

    toggleButton.on('click', function(e) {
      e.preventDefault();
      toggleContainer.toggleClass(toggleClass);
      return false;
    });

    return true;
  };

  return TOGGLE;

});
