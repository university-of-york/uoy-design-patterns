/*

---
title: Tabs Module
name: tabs-module
category: Javascript
---

 */
define(['jquery'], function ($) {

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
  var colorSwap = function(a, b) {
    // Remember to return something
  };


  // Define your 'class'
  // Better to pass an options object instead of multiple arguments
  var TABS = function(options) {

    // Get the options or their defaults
    if (!options.container) return false;
    this.container = $(options.container);
    var tabTabs = this.container.find('.c-tabs__tab');
    var tabLinks = this.container.find('.c-tabs__link');
    var tabContainer = this.container.find('.c-tabs__container');
    var tabContent = this.container.find('.c-tabs__content');

    console.log(tabLinks);

    tabLinks.on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      console.log($this, $this.attr('href'));

    })

    // Do some setup stuff
    // Return true or false (or something else)

  };


  // "Public" variables

  TABS.color = colorSwap('#fff', '#000');


  // "Public" functions (accessible outside this file)

  TABS.setColor = function(val) {
    // Always return true or false from setters
  };

  TABS.getColor = function() {
    // Return the value
  };

  return TABS;

});
