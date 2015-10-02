/*

---
title: Soundcloud Audio Embeds
name: soundcloud-embed
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

  var $window = $(window);

  var SOUNDCLOUD = function (options) {

    if (!options.link) return false;
    this.link = options.link;

    // remove wrapper paragraph, if any
    if (this.link.parent().is("p")) {
      this.link.unwrap();
    }
    // figure out the Youtube ID
    this.url = this.link.attr("href");
    if (this.url.indexOf('?') > 0) {
      this.url = this.url.substring(0, this.url.indexOf('?'));
    };
    this.container = $('<div>').addClass('c-audio');

    this.link.replaceWith(this.container);

    // replace the original link element with the embed code
    this.setIframe();

  };

  SOUNDCLOUD.prototype.setIframe = function () {
    // create the embed code
    var that = this;
    $.getJSON('//soundcloud.com/oembed?format=js&url='+this.url+'&iframe=true&maxheight=200&callback=?', function(response){
      that.container.html(response.html);
    });
  };

  return SOUNDCLOUD;

});
