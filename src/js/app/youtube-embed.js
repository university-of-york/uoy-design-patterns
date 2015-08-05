/*

---
title: Youtube Video Embeds
name: youtube-embed
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

  var $window = $(window);

  var YOUTUBE = function (options) {

    if (!options.link) return false;
    this.link = options.link;

    // remove wrapper paragraph, if any
    if (this.link.parent().is("p")) {
      this.link.unwrap();
    }
    // figure out the Youtube ID
    this.url = this.link.attr("href");
    this.id = this.url.slice(-11);
    this.container = $('<div>').addClass('c-video');

    this.link.replaceWith(this.container);

    this.setDimensions();
    // replace the original link element with the embed code

    var that = this;
    var resizeFn = UTILS.debounce(function () {
      that.setDimensions();
    }, 250, false);

    $window.on('resize', resizeFn);

  };


  YOUTUBE.prototype.getDimensions = function () {
    var videoWidth = this.container.width();
    var videoHeight = (videoWidth/16)*9;
    return {
      width: videoWidth,
      height: videoHeight
    };
  };

  YOUTUBE.prototype.setDimensions = function () {
    var videoDimensions = this.getDimensions()
    console.log(this.container, this.url, this.id, videoDimensions);
    // create the embed code
    this.container.html('<iframe width="' + videoDimensions.width + '" height="' + videoDimensions.height + '" src="//www.youtube.com/embed/' + this.id + '?rel=0" frameborder="0" allowfullscreen></iframe>');
  };

  return YOUTUBE;

});
