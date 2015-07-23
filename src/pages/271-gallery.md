---

title: Gallery
name: gallery
category: components
subcategory: Molecules
layout: q+tq
id: gallery-page

---

<p class="lead">A gallery is simply a row of square thumbnails whose modal popups are linked together. More complicated galleries can use a [grid layout](grid.html) to create a two-, three- or four-column layout and add `c-gallery-item` components to each grid box.</p>

If a collection of items on a page all have the `js-modal--gallery` class, then they will automatically be scrollable when popped up in a modal window.

### Simple gallery

<script>
component("gallery-item", {
  "type": "landscape",
  "link": "http://lorempixel.com/1120/840/food/1",
  "thumbnail": "http://lorempixel.com/374/280/food/1"
})+
component("gallery-item", {
  "type": "landscape",
  "link": "http://lorempixel.com/1920/640/food/4",
  "thumbnail": "http://lorempixel.com/374/280/food/4",
  "caption": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
})+
component("gallery-item", {
  "type": "portrait",
  "link": "http://lorempixel.com/840/1120/food/9",
  "thumbnail": "http://lorempixel.com/280/374/food/9",
  "caption": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
})+
component("gallery-item", {
  "type": "portrait",
  "link": "http://lorempixel.com/640/1920/food/6",
  "thumbnail": "http://lorempixel.com/280/374/food/6"
})+
component("gallery-item", {
  "type": "portrait",
  "link": "http://lorempixel.com/1920/1920/food/7",
  "thumbnail": "http://lorempixel.com/280/374/food/7",
  "caption": "<p>Our investment in new colleges mean it has never been a better time to join our student body or research groups at York.</p>"
});

</script>

### Complex gallery

Galleries can also be created by using a grid layout, which gives you more control over the layout, especially at changing screen sizes.

<script>
var g1 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/1280/food/1",
    "thumbnail": "http://lorempixel.com/280/280/food/1",
    "caption": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
  }
};
var g2 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/1280/food/4",
    "thumbnail": "http://lorempixel.com/280/280/food/4"
  }
};
var g3 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/1280/food/7",
    "thumbnail": "http://lorempixel.com/280/280/food/7",
    "caption": "<p>Our investment in new colleges mean it has never been a better time to join our student body or research groups at York.</p>"
  }
};
component("grid", { "atoms": [
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third o-grid__box--full@medium", "atoms": g1 } },
    { "grid-box": { "size": "third o-grid__box--half@medium", "atoms": g2 } },
    { "grid-box": { "size": "third o-grid__box--half@medium", "atoms": g3 } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third o-grid__box--half@medium", "atoms": g2 } },
    { "grid-box": { "size": "third o-grid__box--quarter@medium", "atoms": g3 } },
    { "grid-box": { "size": "third o-grid__box--quarter@medium", "atoms": g1 } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third o-grid__box--full@medium", "atoms": g3 } },
    { "grid-box": { "size": "third o-grid__box--full@medium", "atoms": g2 } },
    { "grid-box": { "size": "third o-grid__box--full@medium", "atoms": g1 } }
  ] } }
] });

</script>


### Options

#### Molecules


* **gallery-item**
  * **link**: the URL of the picture for the gallery
  * **thumbnail**: the URL of the image thumbnail
  * **caption**: the stuff that goes in the box under the picture. Should be an HTML string.
