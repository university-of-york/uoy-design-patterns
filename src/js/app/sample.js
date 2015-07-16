/*

---
title: Sample Module
name: sample-module
category: Javascript
---

 */
define(['jquery', 'app/color'], function ($, COLOR) {

  // It's good to keep variables at the top of the file for easy access

  // "Private" variables (only available inside the module)

  // Define defaults for the class
  var Default = {
    width: 250,
    easing: 'ease-in',
    isCompatible: true
  };

  // Define other variables for use throughout
  var topSpeed = 1000,
      thankyouText = 'Thanks for your help',
      canFlip = true;

  // "Private" functions (only available inside this file)
  var colorSwap = function (a, b) {
    // Remember to return something
  };


  // Define your 'class'
  // Better to pass an options object instead of multiple arguments
  var SAMPLE = function (options) {
    // Get the options or their defaults
    this.width = options.width || Default.width;
    this.easing = options.easing || Default.easing;
    this.isCompatible = options.isCompatible || Default.isCompatible;
    // Do some setup stuff
    // Return true or false (or something else)
  };


  // "Public" variables

  SAMPLE.prototype.color = colorSwap('#fff', '#000');


  // "Public" functions (accessible outside this file)

  SAMPLE.prototype.setColor = function (val) {
    // Always return true or false from setters
  };

  SAMPLE.prototype.getColor = function () {
    // Return the value
  };

  return SAMPLE;

});
