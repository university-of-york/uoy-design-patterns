/*

---
title: Google Map Module
name: google-map-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  $window = $(window);
  $html = $('html');

  // Global function for callback
  window.gMapsCallback = function(){
    $window.trigger('gMapsLoaded');
  };

  var splitStringToCoords = function(llString) {
    var llArray = llString.split(',').map(function(l,i) {
      return parseFloat($.trim(l));
    });
    return { lat: llArray[0], lng: llArray[1] };
  }

  // Define your 'class'
  var GOOGLEMAP = function (options) {

    if (!options.container) return false;
    if (!options.location) return false;

    this.container = options.container;
    this.zoom = options.zoom || 12;

    this.centre = splitStringToCoords(options.location);

    // Make label an array
    this.label = [];
    if (options.label) {
      this.label = options.label.split(';').map(function(l) {
        return $.trim(l);
      });
    }

    // Make marker an array
    this.marker = [];
    if (!options.marker) {
      // Use the centre point
      this.marker.push(this.centre);
    } else {
      // Use the data-markers
      this.marker = options.marker.split(';').map(function(l) {
        var latLng = splitStringToCoords(l);
        return latLng;
      });
    }

    // Sanity check
    var labelLength = this.label.length,
        markerLength = this.marker.length;
    if (labelLength > 0 && (labelLength !== markerLength)) {
      console.warn('Label length and marker length do not match!');
    }

    // Load Google Maps API (only once)
    if (!$html.hasClass('maps-active')) {
      var script_tag = document.createElement('script');
      script_tag.setAttribute("type","text/javascript");
      script_tag.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=AIzaSyDBRU46Whb7IqeK2RW6SP4u69vDpCbTct8&callback=gMapsCallback");
      (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
      $html.addClass('maps-active');
    }
    // Initialise map on callback trigger
    $window.on('gMapsLoaded', { that: this }, this.initialise);

  };

  GOOGLEMAP.prototype.initialise = function(e) {

    var that = e.data.that;

    console.log(that);

    var mapOptions = {
      zoom: that.zoom,
      center: new google.maps.LatLng(that.centre),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    that.map = new google.maps.Map(that.container, mapOptions);

    if (that.label.length > 0) {
      // Set up info window for later
      that.infowindow = new google.maps.InfoWindow({});
    }

    that.map.addListener('click', function() {
      that.infowindow.close();
    });

    $.each(that.marker, function(i, m) {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(m),
        animation: google.maps.Animation.DROP
      });

      if (that.label[i]) {
        marker.setTitle(that.label[i]);
        marker.addListener('click', function() {
          that.infowindow.close();
          that.infowindow.setContent('<div class="c-map__infowindow">'+that.label[i]+'</div>');
          that.infowindow.open(that.map, marker);
        });
      }

      marker.setMap(that.map);

    });

  };

  return GOOGLEMAP;

});