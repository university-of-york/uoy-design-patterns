---

title: Gallery
name: gallery
category: components
subcategory: Molecules
layout: q+tq
id: gallery-page

---

<p class="lead">Galleries use a [grid layout](grid.html) to create a two-, three- or four-column layout. Then add `o-gallery-item` components to each grid box.</p>

<script>
var g1 = {
  "gallery-item": {
    "picture": {
      "image": "http://lorempixel.com/244/122/people/1"
    },
    "body": {
      "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
    }
  }
};
var g2 = {
  "gallery-item": {
    "picture": {
      "image": "http://lorempixel.com/244/122/people/4"
    },
    "body": {
      "content": "<p>We have invested in 20 new buildings on Heslington West.</p>"
    }
  }
};
var g3 = {
  "gallery-item": {
    "picture": {
      "image": "http://lorempixel.com/244/122/people/7"
    },
    "body": {
      "content": "<p>Our investment in new colleges mean it has never been a better time to join our student body or research groups at York.</p>"
    }
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
  * **picture**: The picture for the gallery, comprising:
    * **image**: the URL of the image
    * **caption**: an optional caption for the image (see [captions](caption.html))
  * **body**: the stuff that goes in the box under the picture. Can include:
    * **title**: the title of the image
    * **subtitle**: the subtitle
    * **content**: any HTML content
    * **button**: an action button
      * **text**: the button text
      * **link**: the button link
