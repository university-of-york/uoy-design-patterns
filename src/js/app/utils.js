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

    // Using window.matchMedia, tests if it matches a certain size
    // Same options as mq() mixin in Sass
    // Pass it a size (tiny, small, medium, large, huge)
    // And scope ('~' [1], '+' [2], '++' [3], '-' [4], '--' [5])
    mediaQuery: function(size, scope) {
      // Sizes the same as in src/sass/core/_variables.scss
      var sizes = {
        "tiny":   30,
        "small":  40,
        "medium": 52.5,
        "large":  64,
        "huge":   77.5
      };

      // Max size is one pixel (1/16em) under $size
      var maxWidth = sizes[size] - 0.0625;
      var minWidth = 0;

      // Min size is next size down
      if (size == "small") {
        minWidth = sizes.tiny;
      } else if (size == "medium") {
        minWidth = sizes.small;
      } else if (size == "large") {
        minWidth = sizes.medium;
      } else if (size == "huge") {
        minWidth = sizes.large;
      }

      if (window.matchMedia) {
        // Clever version

        // Build the media query
        if (scope == "~") {
          // [1] This size only
          mq = ("only screen and (min-width: "+minWidth+"em) and (max-width: "+maxWidth+"em)");
        } else if (scope == "+") {
          // [2] This size and bigger
          mq = ("only screen and (min-width: "+minWidth+"em)");
        } else if (scope == "++") {
          // [3] Bigger than this size
          mq = ("only screen and (min-width: "+maxWidth+"em)");
        } else if (scope == "-") {
          // [4] This size and smaller
          mq = ("only screen and (max-width: "+maxWidth+"em)");
        } else if (scope == "--") {
          // [5] Smaller than this size
          mq = ("only screen and (max-width: "+minWidth+"em)");
        }

        var query = window.matchMedia(mq);
        return query.matches;

      } else {
        // Dumb version
        var windowWidth = $window.width()/16;
        if (scope == "~") {
          return (windowWidth > minWidth && windowWidth < maxWidth);
        } else if (scope == "+") {
          return (windowWidth > minWidth);
        } else if (scope == "++") {
          return (windowWidth > maxWidth);
        } else if (scope == "-") {
          return (windowWidth < maxWidth);
        } else if (scope == "--") {
          return (windowWidth < minWidth);
        }
      }
    },

    // Are we on a dev server (localhost or VM)
    isDev: function() {
      return (document.location.hostname === 'localhost' || document.location.hostname === '10.0.2.2');
    },

    // Fixes figures where the content is overspilling (figures)
    // or where the image doesn't fit (banners)
    fixTallFigures: function() {
      var isSmallMinus = UTILS.mediaQuery('small', '-');
      var $fs = $('.c-figure');
      if ($fs.length === 0) return;
      $fs.each(function(i, figure) {
        var $f = $(figure);
        var $fc = $f.find('.c-figure__content');
        // Only if there's some content
        if ($fc.length === 0) return;
        var $fi = $f.find('.c-figure__image');
        // Reset height
        $f.height('auto');
        if (isSmallMinus === true) {
          $fi.removeClass('is-fitY');
          return;
        }
        if ($fc.length > 0) {
          var fh = $f.outerHeight();
          if ($f.hasClass('c-figure--banner')) {
            // Banners - check for images that don't fit
            var fih = $fi.outerHeight();
            if (fh > fih) {
              $fi.addClass('is-fitY');
            }
          } else {
            // Figures - check for content that overflows
            var fch = $fc.outerHeight();
            if (fh < fch) {
              // 'Padding' is twice positive measurement
              var fcpTop = parseFloat($fc.css('top'));
              fcpTop = isNaN(fcpTop) ? 0 : fcpTop ;
              var fcpBottom = parseFloat($fc.css('bottom'));
              fcpBottom = isNaN(fcpTop) ? 0 : fcpBottom ;
              var fcp = 2*(Math.max(fcpTop, fcpBottom));
              $f.height(fch + fcp);
              $fi.addClass('is-fitY');
            }
          }
        }
      });

      $(window).one('resize', UTILS.debounce(function () {
        UTILS.fixTallFigures();
      }, 250));

    },

    // Add a <wbr> before the @ sign in email addresses
    breakEmailAddresses: function() {
      // Find all text nodes
      $('a[href^="mailto"]').each(function(i, email) {
        var $email = $(email);
        var emailAddress = $email.text().split('@');
        if (emailAddress.length == 2) {
          $(this).html(emailAddress[0]+'<wbr>@'+emailAddress[1]);
        }
      });
      return true;
    },

    // Check if resize event is horizontal or vertical
    axisResize: function() {
      if (!$window.data('dimensions')) {
        $window.data('dimensions', { width: $window.width(), height: $window.height() });
      }
      // Trigger resize.width and resize.height on window resize
      $window.on('resize', function(e) {
        var wDimensions = $window.data('dimensions');
        var wWidth = $window.width();
        var wHeight = $window.height();
        if (wDimensions.width !== wWidth) {
          //console.log('Trigger width resize!');
          $window.trigger('resized.width');
        }
        if (wDimensions.height !== wHeight) {
          //console.log('Trigger height resize!');
          $window.trigger('resized.height');
        }
        $window.data('dimensions', { width: wWidth, height: wHeight });
      });
    },

    // Replace spaces in subnav with &nbsp;
    dontBreakSpaces: function(ob) {
      $(ob).map(function(i, v) {
        var $v = $(v);
        var newText = $v.html().replace(/ /g, '&nbsp;');
        $v.html(newText);
      });
    },

    // Remove value or array from another array
    // TODO
    removeFromArray: function(removeThis, fromThis) {
      return fromThis;
    },

    //Prevent orphaned words in headings and paras - NOT USED
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

    // If the page hash is set on load, scroll to and show the appropriate tab/accordion
    scrollToHash: function () {
      var hash = document.location.hash;
      if (hash === '') return;
      var container = $(hash).parents('.js-tabs, .js-accordion__item');
      if (container.length === 0) return;
      var link = $('a[href='+hash+']');
      var offset = container.offset();
      // only click if accordion is not open or tab is not selected
      if (container.hasClass('is-closed') ||
        (link.parent().hasClass('c-tabs__tab') && !link.parent().hasClass('is-current'))) {
        link.click();
      }
      document.body.scrollTop = offset.top;
    },

    // Runs a function when fonts are active,
    // either immediately if already loaded
    // or on font load event
    fontsActive: function(fn, ths) {
      if ($('html').hasClass('wf-active')) {
        fn.apply(ths, ['fonts']);
      } else {
        $window.on('fonts.active', function() {
          fn.apply(ths, ['fonts']);
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