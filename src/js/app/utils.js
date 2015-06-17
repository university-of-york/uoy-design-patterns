  define([], function() {

  var UTILS = {
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    // http://davidwalsh.name/javascript-debounce-function
    debounce: function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },

    // If the page hash is set on load, scroll to and show the appropriate tab
    scrollToHash: function() {
      var hash = document.location.hash;
      if (hash === '') return;
      var tabContainer = $(hash).parents('.js-tabs');
      if (tabContainer.length === 0) return;
      var tabLink = $('a[href='+hash+']');
      var tabOffset = tabContainer.offset();
      tabLink.click();
      document.body.scrollTop = tabOffset.top;
    },

    // Checks to see if selector exists and, if it does, runs a function on it.
    // selector: selector string, or anything that can be wrapped in a jQuery object
    // fn: function with arguments (index, element)
    eachIfExists: function(selector, fn) {
      $elements = $(selector);
      if ($elements.length) {
        $elements.each(fn);
      }
    }
  };

  return UTILS;
});