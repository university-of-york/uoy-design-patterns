/*

---
title: Google Map Module
name: google-map-module
category: Javascript
---

 */
define(['jquery', 'app/utils', 'app/fullscreen'], function ($, UTILS, FULLSCREEN) {

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
  };

  // Define your 'class'
  var GOOGLEMAP = function (options) {

    if (!options.container) return false;
    if (!options.location) return false;

    this.container = options.container;
    this.zoom = options.zoom || 16;
    this.type = options.type || 'cloudmade';
    this.fullscreen = (options.fullscreen+'').toLowerCase() === "true" ? true : false;
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

    // Create mapdiv element for holding the map itself.
    this.mapdiv = document.createElement('div');
    $(this.mapdiv).addClass('c-map__mapdiv');
    this.container.appendChild(this.mapdiv);

    // Use setTimeout to get unique ID
    this.id = setTimeout(function (){});
    this.container.id = this.id;

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

    console.info(this);

  };

  GOOGLEMAP.prototype.initialise = function(e) {

    var that = e.data.that;

    // Map type for Cloudmade tiles
    var cloudMadeMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return "https://www.york.ac.uk/about/maps/campus/data/tiles/" +
          zoom + "/" + coord.x + "/" + coord.y + ".png";
      },
      tileSize: new google.maps.Size(256, 256),
      isPng: true,
      maxZoom: 18,
      minZoom: 13,
      name: 'Campus map',
      alt: 'Campus map'
    });

    var thisMapTypeIdArray;
    var thisMapTypeId;
    var thisMapBounds;

    if (that.type === 'googlemaps') {
      thisMapTypeIdArray = [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE];
      thisMapTypeId = google.maps.MapTypeId.ROADMAP;
      thisMapBounds = false;
    } else {
      // Cloudmade 'Campus map' by default
      thisMapTypeIdArray = ['Campus map', google.maps.MapTypeId.SATELLITE];
      thisMapTypeId = 'Campus map';
      // These are the bounds at which we clip our tiles
      thisMapBounds = new google.maps.LatLngBounds({ lat: 53.917431, lng: -1.151901 }, { lat: 54.006755, lng: -1.003017 });
    }

    var mapOptions = {
      zoom: that.zoom,
      center: new google.maps.LatLng(that.centre),
      scaleControl: true,
      mapTypeControlOptions: {
        mapTypeIds: thisMapTypeIdArray
      },
      mapTypeId: thisMapTypeId
    };

    that.map = new google.maps.Map(that.mapdiv, mapOptions);

    that.map.mapTypes.set('Campus map', cloudMadeMapType);

    if (thisMapBounds !== false) {
      var thisCentre = that.map.getCenter();
      that.map.addListener('idle', function() {
        var thisNewCentre = that.map.getCenter();
        var mapBounds = that.map.getBounds();
        var fitsSW = thisMapBounds.contains(mapBounds.getSouthWest());
        var fitsNE = thisMapBounds.contains(mapBounds.getNorthEast());
        if (fitsSW === false || fitsNE === false) {
          that.map.setCenter(thisCentre);
        } else {
          thisCentre = thisNewCentre;
        }
      });
    }

    // Set up fullscreen button
    if (that.fullscreen === true) {
      var $fsButton = $('<a>').addClass('c-map__fsbutton').attr('href', '#'+that.id),
          $fsButtonText = $('<span>').addClass('c-map__fsbutton-text is-hidden@small').text('Enter fullscreen').appendTo($fsButton),
          $fsButtonIcon = $('<i>').addClass('c-map__fsbutton-icon c-icon c-icon--expand').appendTo($fsButton),
          $container = $(that.container);
      $container.append($fsButton);
      var fs = new FULLSCREEN({
        button: $fsButton,
        target: that.container
      });
      // Track clicks and change text
      $fsButton.on('click', function(e) {
        e.preventDefault();
        if ($container.hasClass('is-fullscreen')) {
          $fsButtonText.text('Exit fullscreen');
          // Track click
          if (!UTILS.isDev()) {
            ga('send', 'event', 'Map', 'Full screen', 'Enter full screen');
          }
        } else {
          $fsButtonText.text('Enter fullscreen');
          // Track click
          if (!UTILS.isDev()) {
            ga('send', 'event', 'Map', 'Full screen', 'Exit full screen');
          }
        }
        $fsButtonIcon.toggleClass('c-icon--expand c-icon--compress');
        google.maps.event.trigger(that.map, 'resize');
      });
    }

    // Track StreetView being activated with Analytics
    var theStreetView = that.map.getStreetView();
    google.maps.event.addListener(theStreetView, 'visible_changed', function() {
      if (theStreetView.getVisible() && (UTILS.isDev === false)) {
        ga('send', 'event', 'Map', 'Show Streetview');
      }
    });

    if (that.label.length > 0) {
      // Set up info window for later
      that.infowindow = new google.maps.InfoWindow({});
      that.map.addListener('click', function() {
        that.infowindow.close();
      });
    }

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
          if (UTILS.isDev === false) {
            ga('send', 'event', 'Map', 'Click pin', that.label[i]);
          }
        });
      }

      marker.setMap(that.map);

    });

  };

  return GOOGLEMAP;

});