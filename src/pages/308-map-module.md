---

title: Google Map
name: map-module
category: modules
subcategory: General modules
layout: q+tq
id: map-module-page

---

<div class="lead"><p>It's easy to embed a map on a page. The map module in its simplest form takes a container element and a lat/long string. More complicated maps can be created using a combination of modules.</p></div>

## Simple Map

### Use

```javascript
var t = new MAP({
  container: $('.js-map'),
  location: "53.945746, -1.047011"
});
```
### Example with single location

The simplest version, specifying a single location.

<div class="js-map" data-location="53.945746, -1.047011" style="min-height:200px; margin-bottom:20px;"></div>

### Example including label

<div class="js-map" data-location="53.945746, -1.047011" data-label="Heslington Hall" style="min-height:200px; margin-bottom:20px;"></div>

### Example including zoom, and multiple markers with labels

<div class="js-map" data-location="53.945746, -1.047011" data-zoom="14" data-label="Vanbrugh; Derwent; Wentworth" data-marker="53.947658, -1.054425; 53.946812, -1.048276; 53.945934, -1.057953" style="min-height:200px; margin-bottom:20px;"></div>

### Options

 * **container** - (DOM node/jQuery object) the container element (required). All containers with a class of `js-map` will automatically be made into maps as long as they have a `data-location` attribute.
 * **location** - (string) the location to pinpoint on the map (required). Will be used as the centre for more complex maps with multiple locations.

 * **label** - (string) the label to add to the pin (optional). When used with the `marker` option it should be a semi-colon-separated list that matches the order of the markers (default false).
 * **zoom** - (int) the zoom level (0 is fully zoomed out, 16 is fully zoomed in) (default 12)
 * **marker** - (string) a semi-colon-separated list of locations (lat,long) to add as markers to the map. If this is included, the `location` option is used as the centre of the map.

