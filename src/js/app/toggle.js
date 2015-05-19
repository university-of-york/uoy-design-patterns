/*

---
title: Toggle
name: toggle
category: Javascript
---

 */
define(['jquery'], function ($) {

  // "Private" variables (only available inside the module)
  var toggleContainer,
      toggleButton,
      toggleClass;

  // "Private" functions (only available inside this file)
  var doToggle = function(e) {
    e.preventDefault();
    toggleContainer.toggleClass(toggleClass);
    return false;
  };


  // Define your 'class'
  var TOGGLE = function(options) {

    if (!options.container && !options.button) return false;

    toggleContainer = options.container;
    toggleButton = options.button;
    toggleClass = options.class || 'is-open';

    toggleButton.on('click', doToggle);

    return true;
  };


  // "Public" variables

  // TOGGLE.color = true;


  // "Public" functions (accessible outside this file)

  // TOGGLE.setColor = function(val) {
  //   // Always return true or false from setters
  // };

  // TOGGLE.getColor = function() {
  //   // Return the value
  // };

  return TOGGLE;

});
