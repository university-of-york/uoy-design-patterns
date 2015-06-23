---

title: Gallery
name: gallery
category: components
subcategory: Molecules
layout: q+tq
id: gallery-page

---

<p class="lead">Galleries use a [grid layout](grid.html) to create a two-, three- or four-column layout. Then add `c-gallery-item` components to each grid box.</p>

<script>
var g1 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/640/people/1",
    "thumbnail": "http://lorempixel.com/280/140/people/1",
    "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
  }
};
var g2 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/640/people/4",
    "thumbnail": "http://lorempixel.com/280/140/people/4"
  }
};
var g3 = {
  "gallery-item": {
    "link": "http://lorempixel.com/1280/640/people/7",
    "thumbnail": "http://lorempixel.com/280/140/people/7",
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
