---

title: Image grid
name: image-grid
category: layout
subcategory: Grid
layout: default
id: image-grid-page

---

<div class="lead"><p>Add an `image` value to put a background image in. This works best inside an `o-wrapper--wide` wrapper component, otherwise it will just fill the available wrapper.</p></div>

<script>
component("grid", { "atoms":[
  { "grid-row": { "image": "/media/wide-image.jpg", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } }
] } );
</script>