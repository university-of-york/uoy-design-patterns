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
    var url = this.link.attr("href");
    this.id = url.slice(-11);
    this.url = '//www.youtube.com/embed/'+this.id+'?rel=0';
    this.container = $('<div>').addClass('c-video').attr({
      'data-video-id':this.id
    });

    // replace the original link element with the embed code
    this.link.replaceWith(this.container);

    this.iframe = this.createIframe();

    var that = this;
    var resizeFn = UTILS.debounce(function (e) {
      that.setDimensions();
    }, 250);

    $window.on('resize', null, { that: this }, resizeFn);

    console.info(this);

  };

  YOUTUBE.prototype.getDimensions = function () {
    var videoWidth = this.container.width();
    var videoHeight = Math.floor((videoWidth/16)*9);
    return {
      width: videoWidth,
      height: videoHeight
    };
  };

  YOUTUBE.prototype.setDimensions = function () {

    // Check to see if it's a fullscreen resize
    var screenW = screen.width;
    var screenH = screen.height;
    var windowW = $window.width();
    var windowH = $window.height();
    var isFullscreen = (screenW == windowW) && (screenH == windowH);

    if (isFullscreen === true) return false;

    var videoDimensions = this.getDimensions();

    this.iframe.attr({
      width: videoDimensions.width,
      height: videoDimensions.height
    });

    // Fire update event
    $(window).trigger('content.updated', ['youtube', this]);

  };

  YOUTUBE.prototype.createIframe = function () {
    var videoDimensions = this.getDimensions();
    // create the embed code
    var iframe = $('<iframe>').attr({
      width: videoDimensions.width,
      height: videoDimensions.height,
      src: this.url,
      frameborder: 0,
      allowfullscreen: true
    });
    // add to container
    this.container.html(iframe);
    // Fire update event
    $(window).trigger('content.updated', ['youtube', this]);
    return iframe;
  };

  return YOUTUBE;

});
