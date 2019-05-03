---

title: Maps
name: map-module
category: modules
subcategory: General modules
layout: q+tq
id: map-module-page

---

<div class="lead"><p>It's easy to embed a map on a page. The map module takes a container element and a lat/long string.</p></div>

YOu can specify most of the details of the map using `data-` attributes on a `div` with a `js-map` class.

## Simple Map

### Use

```javascript
var t = new MAP({
  container: $('.js-map'),
  location: "53.945746, -1.047011"
});
```

### Example

```markup
<div class="c-map js-map" data-location="53.945746, -1.047011"></div>
```

<div class="c-map js-map" data-location="53.945746, -1.047011" style="height:240px; margin-bottom:20px;"></div>

### Options

 * **container** - (DOM node/jQuery object) the container element (required). All containers with a class of `js-map` will automatically be made into maps as long as they have a `data-location` attribute.
 * **location** - (string) the location to pinpoint on the map (required). Will be used as the centre for more complex maps with multiple locations.
 * **zoom** - (int) the zoom level (optional). 0 is fully zoomed out, 20 is fully zoomed in (default 13)
