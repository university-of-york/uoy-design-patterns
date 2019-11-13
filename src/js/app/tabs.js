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
    this.container = $( options.container );
    var that = this;

    var randomId = Math.ceil( Math.random() * 1000 );

    // Add some attributes to our existing tabs enable better accessiblity
    var setTabList = context.querySelector(".c-tabs__nav");
    setTabList.setAttribute("role", "tablist");

    var tabLink = context.querySelectorAll(".c-tabs__link");
    for (var i = 0; i < tabLink.length; i++) {
      tabLink[i].setAttribute("href", "#panel-" + [i] + "-" + randomId);
      tabLink[i].setAttribute("role", "tab");
      tabLink[i].setAttribute("aria-controls", "panel-" + [i] + "-" + randomId);
      tabLink[i].setAttribute("id", "tab-" + [i] + "-" + randomId);
      if ([i] != 0) {
        tabLink[i].setAttribute("aria-selected", "false");
        tabLink[i].setAttribute("tabindex", "-1");
      } else {
        tabLink[i].setAttribute("aria-selected", "true");
        tabLink[i].setAttribute("tabindex", "0");
      }
    }

    var tabContent = context.querySelectorAll(".c-tabs__content");
    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].setAttribute("role", "tabpanel");
      tabContent[i].setAttribute("id", "panel-" + [i] + "-" + randomId);
      tabContent[i].setAttribute("tabindex", "0");
      tabContent[i].setAttribute("aria-labelledby", "tab-" + [i] + "-" + randomId);
      if ([i] != 0) {
        tabContent[i].setAttribute("hidden", true);
      }
    }

    // The following is from the  MDN example (lightly mofified)

    var tabs = context.querySelectorAll('[role="tab"]');
    var tabList = context.querySelector('[role="tablist"]');

    // Add a click event handler to each tab
    for (var j = 0;  j <  tabs.length ; j++) {
      tabs[j].addEventListener("click", changeTabs);
    }

    // Enable arrow key navigation between tabs in the tab list
    var tabFocus = 0;

    tabList.addEventListener("keydown", function(e) {
      // Move right
      if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 40 || e.keyCode === 38) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        if (e.keyCode === 39 || e.keyCode === 40) {
          tabFocus++;
          // If we're at the end, go to the start
          if (tabFocus >= tabs.length) {
            tabFocus = 0;
          }
          // Move left
        } else if (e.keyCode === 37 || e.keyCode === 38) {
          tabFocus--;
          // If we're at the start, move to the end
          if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
          }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();

        e.preventDefault();
      }
    });

    function changeTabs(e) {
      var target = e.target;
      var parent = target.parentNode;
      var grandparent = parent.parentNode;
      var greatgrandparent = grandparent.parentNode;

      // Prevent scroll
      e.preventDefault();
      e.target.focus({ preventScroll: true });

     var tabTabs =  grandparent.querySelectorAll(".c-tabs__tab");
     for (var k = 0; k < tabTabs.length ; k++) {
      $(tabTabs[k]).removeClass("is-active");    
     }
    

      // Remove all current selected tabs
      var selectedTabs = grandparent.querySelectorAll('[aria-selected="true"]');
      for( var t = 0 ; t < selectedTabs.length ; t++ ) {
        selectedTabs[ t ].setAttribute("aria-selected", false);
      }

      // Set this tab as selected
      target.setAttribute("aria-selected", true);
      $(parent).addClass("is-active");

      // Hide all tab panels
      var tabPanels =  greatgrandparent.querySelectorAll('[role="tabpanel"]');
      for (var p = 0; p < tabPanels.length ; p++) {
        tabPanels[p].setAttribute("hidden", true);
        $(tabPanels[p]).removeClass("is-active"); // added by Dave
      }      
       

      // Show the selected panel
      greatgrandparent.parentNode
        .querySelector('#'+target.getAttribute("aria-controls"))
        .setAttribute("hidden", false);

      $( greatgrandparent.parentNode.querySelector('#'+target.getAttribute("aria-controls")) ).addClass("is-active"); // added by Dave

      // Fire update event
      $(window).trigger("content.updated", ["tabs", that, target]);
    }
  };

  return TABS;
});
