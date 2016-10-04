---

title: Image grid
name: image-grid
category: layout
subcategory: Grid
layout: wide
id: image-grid-page

---

<div class="lead"><p>Add an `image` value to put a background image in. This works best inside an `o-wrapper--wide` wrapper component, otherwise it will just fill the available wrapper.</p></div>

To centre content in the `o-grid__box` within an image row, use the class name `.o-grid__box--centred`. This must be a full-width box.

<script>
component("grid", { "atoms":[
  { "grid-row": { "image": "/media/wide-image.jpg", "atoms": [
    { "grid-box": { "size": "full", "type":"centred", "atoms": { "text": " .o-grid__box--full .o-grid__box--centred" } } }
  ] } }
] } );
</script>

## Uses

This can be used to contain another grid, useful for separating the row in half/thirds/quarters.

<script>
component("grid", { "atoms":[
  { "grid-row": { "image": "/media/wide-image.jpg", "atoms": [
    { "grid-box": { "size": "full", "type":"centred", "atoms": {
      "grid": { "atoms":[
        { "grid-row": { "atoms": [
          { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
          { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
          { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
        ] } }
      ] } 
    } } }
  ] } }
] } );
</script>