/*

---
title: Mapbox Map Module
name: mapbox-map-module
category: Javascript
---

*/
define( [] , function() {

  // --------------------------------------------------

  // This script is now loaded via RequireJS (path is mapped in app.js)
  // var mapScripts = "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js";
  var mapStylesheet = "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css";

  var mapboxStyle = "mapbox://styles/university-of-york/cjucik6l81fmc1fprt8764pvg";
  var mapboxAccessToken = "pk.eyJ1IjoidW5pdmVyc2l0eS1vZi15b3JrIiwiYSI6ImNqdjg0ZTBibDBiY3U0M3A4amNtemRmMHIifQ.J49pc-vlhW-lEL63lBpIIg";

  // --------------------------------------------------

  var MAPBOXMAP = function( options ) {

    this.options = options;

    // Load Mapbox's stylesheet
    this.loadStylesheet( mapStylesheet );

    // Include _this_ in callback's scope
    var that = this;

    // Load Mapbox's scripts and init on callback
    require( [ 'mapbox' ] , function( mapboxgl ){

        // Assign our access token
        mapboxgl.accessToken = mapboxAccessToken;

        // Create a new Mapbox-GL map object
        var map = new mapboxgl.Map({
          "container" : that.options.container,
          "style" : mapboxStyle,
          "zoom" : ( that.options.zoom || 15 ),
          "maxBounds" : [
              [ -1.1501312255859375 , 53.921324836434714 ],
              [ -0.990142822265625 , 53.979108639593576 ]
          ],
          "center" : that.stringToCoordinates( that.options.location ),
        });

        // Add map controls
        map.addControl( new mapboxgl.NavigationControl( { "showCompass": false } ) , "bottom-right" );

        // Prevent scrolling over the map from zooming
        map.scrollZoom.disable();

        // Add marker
        new mapboxgl
          .Marker( { 'color':'#B53A87' } )
          .setLngLat( that.stringToCoordinates( that.options.location ) )
          .addTo( map );

    } );

  };

  // --------------------------------------------------

  MAPBOXMAP.prototype.makeID = function( input ) {
      return input.toLowerCase().replace( /\s+/g , '-' ).replace( /[^a-z0-9_-]/g , '' );
  };

  // --------------------------------------------------

  MAPBOXMAP.prototype.stringToCoordinates = function( input ) {
      return input.replace( " " , "" ).split( ',' ).reverse();
  };

  // --------------------------------------------------

  MAPBOXMAP.prototype.loadStylesheet = function( stylesheetURL ) {

    var linkID = this.makeID( stylesheetURL );

    // Check that stylesheet hasn't already been loaded
    if( document.getElementById( linkID ) ) return;

    var ss = document.createElement( "link" );
    var ref;

    var refs = ( document.body || document.getElementsByTagName( "head" )[ 0 ] ).childNodes;
    ref = refs[ refs.length - 1];

    ss.id = linkID;
    ss.rel = "stylesheet";
    ss.href = stylesheetURL;
    ss.media = "all";

    ref.parentNode.insertBefore( ss , ref.nextSibling );

  };

  // --------------------------------------------------

  return MAPBOXMAP;

});
