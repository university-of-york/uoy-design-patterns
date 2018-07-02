/*

---
title: Toggle
name: toggle
category: Javascript
---

 */

import $ from 'jquery';



  var TOGGLE = function (options) {

    if (!options.container && !options.button) return false;

    this.container = options.container;
    this.button = options.button;
    this.className = options.className || 'is-open';
    this.onComplete = options.onComplete || false;

    var that = this;

    this.button.on('click', function (e) {
      e.preventDefault();
      that.toggle();
      return false;
    });

    console.info(this);

    return true;

  };

  // Like jQuery's toggleClass, turns toggle on or off. Passing a Boolean make it definitely on (true) or off (false)
  TOGGLE.prototype.toggle = function(c) {
    this.container.toggleClass(this.className, c);
    if (this.container.hasClass(this.className) === false) {
      // blur element
      this.button.trigger('blur');
    }
    $(window).trigger('toggle', this);
    // When toggle is finished, run 'onComplete' if available
    if (this.onComplete !== false && typeof this.onComplete === 'function') {
      this.onComplete(this.container, this.button);
    }
  };

export default TOGGLE;
