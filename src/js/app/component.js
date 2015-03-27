// Taken from https://raw.githubusercontent.com/lonelyplanet/yeoman/rizzo/javascript-component/templates/component.js
// Uses an event-driven JS system
// ------------------------------------------------------------------------------
//
// <%= constructorName %>
//
// ------------------------------------------------------------------------------

define([ "jquery" ], function($) {

  "use strict";

  var defaults = {
    listener: "#js-row--content"
  };

  // @args = {}
  // el: {string} selector for parent element
  // listener: {string} selector for the listener
  function <%= constructorName %>(args) {
    this.config = $.extend({}, defaults, args);

    this.$listener = $(this.config.listener);
    this.$el = $(this.config.el);
    this.$el.length && this.init();
  }

  <%= constructorName %>.prototype.init = function() {
    this.listen();
    this.broadcast();
  };

  // -------------------------------------------------------------------------
  // Subscribe to Events
  // -------------------------------------------------------------------------

  <%= constructorName %>.prototype.listen = function() {

    this.$listener.on(":eventType/event", this._example.bind(this));

  };

  // -------------------------------------------------------------------------
  // Broadcast Events
  // -------------------------------------------------------------------------

  <%= constructorName %>.prototype.broadcast = function() {

    this.$el.on("click", function() {
      this.$el.trigger(":eventType/event");
    });

  };

  // -------------------------------------------------------------------------
  // Private Functions
  // -------------------------------------------------------------------------

  <%= constructorName %>.prototype._example = function(event) {

  };

  return <%= constructorName %>;

});