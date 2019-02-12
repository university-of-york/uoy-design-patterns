---

title: Gallery
name: gallery
category: components
subcategory: Organisms
layout: q+tq
id: gallery-page

---

<div class="lead"><p>A gallery is simply a row of square thumbnails whose modal popups are linked together. More complicated galleries can use a [grid layout](../css-components/grid.html) to create a two-, three- or four-column layout and add `c-gallery-item` components to each grid box.</p></div>

If a collection of items on a page all have the `js-modal--gallery` class, then they will automatically be scrollable when popped up in a modal window.

### Simple gallery

<script>
component("gallery-item", {
  "type": "landscape",
  "link": "https://picsum.photos/1120/840/?image=992",
  "thumbnail": "https://picsum.photos/374/280/?image=992"
})+
component("gallery-item", {
  "type": "landscape",
  "link": "https://picsum.photos/1920/640/?image=993",
  "thumbnail": "https://picsum.photos/374/280/?image=993",
  "caption": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
})+
component("gallery-item", {
  "type": "portrait",
  "link": "https://picsum.photos/840/1120/?image=994",
  "thumbnail": "https://picsum.photos/280/374/?image=994",
  "caption": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
})+
component("gallery-item", {
  "type": "portrait",
  "link": "https://picsum.photos/640/1920/?image=995",
  "thumbnail": "https://picsum.photos/280/374/?image=995"
})+
component("gallery-item", {
  "type": "portrait",
  "link": "https://picsum.photos/1920/1920/?image=996",
  "thumbnail": "https://picsum.photos/280/374/?image=996",
  "caption": "<p>Our investment in new colleges mean it has never been a better time to join our student body or research groups at York.</p>"
});

</script>

### Complex gallery

Galleries can also be created by using a grid layout, which gives you more control over the layout, especially at changing screen sizes.

<script>
var g1 = {
  "gallery-item": {
    "link": "https://picsum.photos/1280/1280/?image=997",
    "thumbnail": "https://picsum.photos/280/280/?image=997",
    "caption": "<p>The University is in the middle of an unprecedented period of expansion and renewal.</p>"
  }
};
var g2 = {
  "gallery-item": {
    "link": "https://picsum.photos/1280/1280/?image=998",
    "thumbnail": "https://picsum.photos/280/280/?image=998"
  }
};
var g3 = {
  "gallery-item": {
    "link": "https://picsum.photos/1280/1280/?image=999",
    "thumbnail": "https://picsum.photos/280/280/?image=999",
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
    { "grid-box": { "size": "third o-grid__box--half@medium", "atoms": g3 } },
    { "grid-box": { "size": "third o-grid__box--half@medium", "atoms": g2 } },
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
