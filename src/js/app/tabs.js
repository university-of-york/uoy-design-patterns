/*

---
title: Tabs Module
name: tabs-module
category: Javascript
---

 */
define(["jquery"], function($) {
  // Define your 'class'
  // Better to pass an options object instead of multiple arguments
  var TABS = function(options) {

    var context = options.container;
    this.container = $(options.container);
    var that = this;

    // Create a unique ID
    var randomId = Math.ceil(Math.random() * 1000);

    // Add tablist role to the ul
    var setTabList = context.querySelector(".c-tabs__nav");
    setTabList.setAttribute("role", "tablist");

    //Add attributes to the tabs with initial values
    var tabLink = context.querySelectorAll(".c-tabs__link");
    for (var i = 0; i < tabLink.length; i++) {
      // Add a unique href
      tabLink[i].setAttribute("href", "#panel-" + [i] + "-" + randomId);
      // Add tab role
      tabLink[i].setAttribute("role", "tab");
      // Add aria-controls for panels using a unique ID
      tabLink[i].setAttribute("aria-controls", "panel-" + [i] + "-" + randomId);
      // Add a unique ID
      tabLink[i].setAttribute("id", "tab-" + [i] + "-" + randomId);
      if ([i] != 0) {
        // Set aria-selected to false if [i] is not 0
        tabLink[i].setAttribute("aria-selected", "false");
        // Set tabindex to -1 if
        tabLink[i].setAttribute("tabindex", "-1");
      } else {
        // Set aria-selected to false if [i] is  0
        tabLink[i].setAttribute("aria-selected", "true");
        // Set tabindex to -1  if [i] is 0
        tabLink[i].setAttribute("tabindex", "0");
      }
    }

    //Add attributes to the panels with initial values
    var tabContent = context.querySelectorAll(".c-tabs__content");
    for (var c = 0; c < tabContent.length; c++) {
      // Add tabpanel role
      tabContent[c].setAttribute("role", "tabpanel");
      // Add a unique ID
      tabContent[c].setAttribute("id", "panel-" + [c] + "-" + randomId);
      // Set tabindex to 0
      tabContent[c].setAttribute("tabindex", "0");
      // Add aria-labelledby using a unique ID
      tabContent[c].setAttribute(
        "aria-labelledby",
        "tab-" + [c] + "-" + randomId
      );
      if ([c] != 0) {
        // Set hidden to true if [c] is not 0
        tabContent[c].setAttribute("hidden", true);
      }
    }

    // Get tabs and tablist based on role
    var tabs = context.querySelectorAll('[role="tab"]');
    var tabList = context.querySelector('[role="tablist"]');

    // Add a click event handler to each tab
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].addEventListener("click", changeTabs);
    }

    // Enable arrow key navigation between tabs in the tab list
    var tabFocus = 0;

    tabList.addEventListener("keydown", function(e) {
      // Move right or down
      if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 40 || e.keyCode === 38) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        if (e.keyCode === 39 || e.keyCode === 40) {
          tabFocus++;
          // If we're at the end, go to the start
          if (tabFocus >= tabs.length) {
            tabFocus = 0;
          }
          // Move left or up
        } else if (e.keyCode === 37 || e.keyCode === 38) {
          tabFocus--;
          // If we're at the start, move to the end
          if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
          }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();

        // Prevent page scrolling
        e.preventDefault();
      }
    });

    function changeTabs(e) {
      var target = e.target;
      var parent = target.parentNode;

      // Prevent scroll
      e.preventDefault();
      e.target.focus({ preventScroll: true });

      var tabTabs = context.querySelectorAll(".c-tabs__tab");
      for (var k = 0; k < tabTabs.length; k++) {
        $(tabTabs[k]).removeClass("is-active");
      }

      // Remove all current selected tabs
      var selectedTabs = context.querySelectorAll('[aria-selected="true"]');
      for (var t = 0; t < selectedTabs.length; t++) {
        selectedTabs[t].setAttribute("aria-selected", false);
      }

      // Set this tab as selected
      target.setAttribute("aria-selected", true);
      $(parent).addClass("is-active");

      // Hide all tab panels
      var tabPanels = context.querySelectorAll('[role="tabpanel"]');
      for (var p = 0; p < tabPanels.length; p++) {
        tabPanels[p].setAttribute("hidden", true);
        $(tabPanels[p]).removeClass("is-active"); // added by Dave
      }

      // Show the selected panel
      context
        .querySelector("#" + target.getAttribute("aria-controls"))
        .setAttribute("hidden", false);
      $(context.querySelector("#" + target.getAttribute("aria-controls")) ).addClass("is-active");

      // Fire update event
      $(window).trigger("content.updated", ["tabs", that, target]);
    }
  };

  return TABS;
});
