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

    // This will return true or false depending on if it's full screen or not.
    //this.fullScreenMode = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;

    this.link.replaceWith(this.container);

    this.iframe = this.createIframe();
    // replace the original link element with the embed code

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

  };

  YOUTUBE.prototype.createIframe = function () {
    var videoDimensions = this.getDimensions();
    // create the embed code
    var iframe = $('<iframe>').attr({
      width: videoDimensions.width,
      height: videoDimensions.height,
      src: '//www.youtube.com/embed/'+this.id+'?rel=0',
      frameborder: 0,
      allowfullscreen: true
    });
    // add to container
    this.container.html(iframe);
    return iframe;
  };

  return YOUTUBE;

});
