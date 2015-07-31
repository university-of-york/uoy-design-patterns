/*

---
title: Targeted Nav Module
name: targeted-nav-module
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

  var $window = $(window);
  var $document = $(document);

  var TARGETEDNAV = function (options) {

    if (!options.container) return false;
    this.container = options.container;
    this.spacing = 20;

    // Find all the hrefs that point to fragments
    this.links = $('a[href^=#]', this.container);
    this.reset({data:{that:this}});
    var sections = [];
    this.links.each(function (i, link) {
      var $link = $(link),
          section = $($link.attr('href'));
      if (section.length > 0) sections.push(section.get(0));
    });

    this.sections = sections;

    $window.on('resize', null, { that: this }, this.reset);
    $window.on('scroll', null, { that: this }, this.check);

    $window.trigger('scroll');

  };

  TARGETEDNAV.prototype.check = function (e) {
    var that = e.data.that,
        scrollTop = $window.scrollTop();
    $.each(that.sections, function (i, section) {
      var $section = $(section);
      if (scrollTop < ($section.offset().top - that.height)) {
        var currentSection = i > 0 ? that.sections[i-1] : false ;
        that.makeCurrent(currentSection);
        return false;
      } else if (i === that.sections.length - 1) {
        that.makeCurrent(that.sections[i]);
        return false;
      }
    });
  };

  TARGETEDNAV.prototype.reset = function (e) {
    var that = e.data.that;
    that.height = that.container.height() + that.spacing;
  };

  TARGETEDNAV.prototype.makeCurrent = function (section) {
    if (section !== false) {
      var $link = $('a[href="#'+$(section).attr('id')+'"]', this.container);
      var $item = $link.parent();
      if ($item.hasClass('is-current')) return false;
      this.links.not($link).parent().removeClass('is-current');
      $item.addClass('is-current');
    } else {
      this.links.parent().removeClass('is-current');
    }
    $window.trigger('nav:targeted:new-current');
  };

  return TARGETEDNAV;

});
