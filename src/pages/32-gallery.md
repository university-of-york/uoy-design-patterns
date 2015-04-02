---

title: Gallery
name: gallery
category: organisms
layout: q+tq
id: gallery-page

---

<p class="lead">Galleries use the [media object](media.html) to create a two-, three- or four-column layout. Simply wrap a `<div class="gallery">` around the group of rows of media objects.</p>

<script>
var g1 = { "size": "third", "atoms": {
  "media": {
    "type": "vertical",
    "picture": {
      "image": "http://lorempixel.com/244/122/people/1",
      "size": "100%"
    },
    "body": {
      "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
    }
  }
} };
var g2 = { "size": "third", "atoms": {
  "media": {
    "type": "vertical",
    "picture": {
      "image": "http://lorempixel.com/244/122/people/4",
      "size": "100%"
    },
    "body": {
      "content": "<p>Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p>"
    }
  }
} };
var g3 = { "size": "third", "atoms": {
  "media": {
    "type": "vertical",
    "picture": {
      "image": "http://lorempixel.com/244/122/people/7",
      "size": "100%"
    },
    "body": {
      "content": "<p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"
    }
  }
} };
component("gallery", { "atoms": [
  { "grid-row": { "atoms": [
    { "grid-box": g1 },
    { "grid-box": g2 },
    { "grid-box": g3 }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": g2 },
    { "grid-box": g3 },
    { "grid-box": g1 }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": g3 },
    { "grid-box": g2 },
    { "grid-box": g1 }
  ] } }
] });

</script>


### Options

#### Molecules


* **gallery**
  * **atoms**: an array of grid-row molecules