/*

---
title: Tabs Module
name: tabs-module
category: Javascript
---

 */

import $ from 'jquery';
import UTILS from 'utils';

export default function TabsModule () {

  // Define your 'class'
  // Better to pass an options object instead of multiple arguments
  var TABS = function (options) {

    // Get the options or their defaults
    if (!options.container) return false;
    this.container = $(options.container);
    var tabTabs = this.container.find('.c-tabs__tab');
    var tabLinks = this.container.find('.c-tabs__link');
    var tabContainer = this.container.find('.c-tabs__container');
    var tabContent = this.container.find('.c-tabs__content');

    // Make vertical container at least as high as nav
    if (this.container.hasClass('c-tabs--vertical')) {
    // Wait till fonts are loaded
      UTILS.fontsActive(function() {
        var navHeight = tabTabs.parent().height()+'px';
        tabContainer.css('min-height', navHeight);
      }, this);
    }

    var that = this;

    tabLinks.on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      var $thisTab = $this.parent();
      var thisHref = $this.attr('href');
      var $thisContainer = $(UTILS.fixSelector(thisHref));

      if ($thisTab.hasClass('is-active')) return false;

      // Make current tab active
      tabTabs.not($thisTab).removeClass('is-active').children('.c-tabs__link').attr('aria-selected', 'false');
      $thisTab.addClass('is-active').children('.c-tabs__link').attr('aria-selected', 'true');
      // Make tab content visible
      tabContent.not($thisContainer).removeClass('is-active').attr('aria-hidden', 'true');
      $thisContainer.addClass('is-active').attr('aria-hidden', 'false');
      // Update the hash
      if (Modernizr.hashchange === true) {
        history.replaceState({}, "", thisHref);
      } else {
        // Provide a fallback
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;
        location.hash = thisHref;
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
      }
      // Fire update event
      $(window).trigger('content.updated', ['tabs', that]);

    });

    console.info(this);

    return true;

  };

  return TABS;
}
