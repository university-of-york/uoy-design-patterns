  define(['jquery'], function ($) {

  var $window = $(window);

  var UTILS = {

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    // http://davidwalsh.name/javascript-debounce-function
    debounce: function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },

    // Are we on a dev server (localhost or VM)
    isDev: function() {
      return (document.location.hostname === 'localhost' || document.location.hostname === '10.0.2.2');
    },

    // Remove value or array from another array
    removeFromArray: function(removeThis, fromThis) {
      return fromThis;
    },

    //Prevent orphaned words in headings and paras
    // TODO: check number of words in content >  3 (?)
    // TODO: check if joined text < width of container (?)
    preventOrphans: function() {
      $('h1, h2, h3, .lead p').each(function(){
          var string = $(this).html();
          string = string.replace(/ ([^ ]*)$/,' $1');
          $(this).html(string);
      });
    },

    // Adds an 'is-closed' class to breadcrumbs that are three lines or longer
    fixLongBreadcrumb: function() {
      this.eachIfExists('.c-breadcrumb', function(i, breadcrumb) {
        function fixBreadcrumb(e) {
          var $breadcrumb = $(breadcrumb);
          $breadcrumb.removeClass('is-closed');
          var $breadcrumbItems = $breadcrumb.children('.c-breadcrumb__items');
          var breadcrumbHeight = $breadcrumbItems.height();
          var breadcrumbLineHeight = parseInt($breadcrumbItems.css('line-height'), 10);
          var lineCount = Math.floor(breadcrumbHeight/breadcrumbLineHeight);
          var toClose = lineCount > 2;
          $breadcrumb.toggleClass('is-closed', toClose);
          // Clicking the third link removes 'is-closed' class
          if (toClose === true) {
            $moreLink = $breadcrumbItems.children('a:nth-of-type(3)');
            $moreLink.one('click', function(e) {
              e.preventDefault();
              $breadcrumb.removeClass('is-closed');
            });
          }
        }
        fixBreadcrumb();
        var resizeFn = UTILS.debounce(function () {
          fixBreadcrumb();
        }, 250);
        $window.resize(resizeFn);
      });
    },

    // Ugh. Removes final item from breadcrumb (and separator) if content is 'Header'
    cleanBreadcrumb: function() {
      var $breadcrumbItems = $('.c-breadcrumb__items');
      if ($breadcrumbItems.length > 0) {
        var $breadcrumbLinks = $breadcrumbItems.children('a');
        var $last = $($breadcrumbLinks[$breadcrumbLinks.length-1]);
        if ($last.text() === 'Header') {
          $last.add($last.prev('.c-breadcrumb__separator')).remove();
        }
      }
    },

    // If the page hash is set on load, scroll to and show the appropriate tab
    scrollToHash: function () {
      var hash = document.location.hash;
      if (hash === '') return;
      var tabContainer = $(hash).parents('.js-tabs');
      if (tabContainer.length === 0) return;
      var tabLink = $('a[href='+hash+']');
      var tabOffset = tabContainer.offset();
      tabLink.click();
      document.body.scrollTop = tabOffset.top;
    },

    // Runs a function when fonts are active,
    // either immediately if already loaded
    // or on font load event
    fontsActive: function(fn, ths) {
      if ($('html').hasClass('wf-active')) {
        fn.apply(ths);
      } else {
        $window.on('fonts.active', function() {
          fn.apply(ths);
        });
      }
    },

    // Checks to see if selector exists and, if it does, runs a function on it.
    // selector: selector string, or anything that can be wrapped in a jQuery object
    // fn: function with arguments (index, element)
    eachIfExists: function (selector, fn) {
      var $elements = $(selector);
      if ($elements.length) {
        $elements.each(fn);
      }
    }
  };

  return UTILS;
});