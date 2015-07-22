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
  "link": "http://lorempixel.com/1280/1280/food/1",
  "thumbnail": "http://lorempixel.com/140/140/food/1"
})+
component("gallery-item", {
  "link": "http://lorempixel.com/1280/1280/food/4",
  "thumbnail": "http://lorempixel.com/140/140/food/4"
})+
component("gallery-item", {
  "link": "http://lorempixel.com/1280/1280/food/7",
  "thumbnail": "http://lorempixel.com/140/140/food/7"
});

</script>

### Complex gallery

Galleries can also contain content, which is displayed underneath. The size of the thumbnails in a simple gallery often prohibits the use of content on them.

<script>
var g1 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/640/food/1",
    "thumbnail": "http://lorempixel.com/280/140/food/1",
    "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
  }
};
var g2 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/640/food/4",
    "thumbnail": "http://lorempixel.com/280/140/food/4"
  }
};
var g3 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/640/food/7",
    "thumbnail": "http://lorempixel.com/280/140/food/7",
    "content": "<p>Our investment in new colleges mean it has never been a better time to join our student body or research groups at York.</p>"
  }
};
component("grid", { "atoms": [
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": g1 } },
    { "grid-box": { "size": "third", "atoms": g2 } },
    { "grid-box": { "size": "third", "atoms": g3 } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": g2 } },
    { "grid-box": { "size": "third", "atoms": g3 } },
    { "grid-box": { "size": "third", "atoms": g1 } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": g3 } },
    { "grid-box": { "size": "third", "atoms": g2 } },
    { "grid-box": { "size": "third", "atoms": g1 } }
  ] } }
] });

</script>


### Options

#### Molecules


* **gallery-item**
  * **link**: the URL of the picture for the gallery
  * **thumbnail**: the URL of the image thumbnail
  * **content**: the stuff that goes in the box under the picture. Should be an HTML string.
