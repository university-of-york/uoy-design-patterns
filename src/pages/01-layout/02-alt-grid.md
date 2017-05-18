---

title: Alternative grid
name: alt-grid
category: layout
subcategory: Grid
layout: default
id: alt-grid-page

---

<div class="lead"><p>You can make fancy alternative coloured rows where the whole row turns either blue, teal or light grey (including the space going off the screen on either side) by defining the row as `.o-grid__row--alt1`, `.o-grid__row--alt2` or `.o-grid__row--alt3`.
</p></div>

<script>
component("grid", { "atoms":[
  { "grid-row": { "type": "alt1", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } },
  { "grid-row": { "type": "alt2", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } },
  { "grid-row": { "type": "alt3", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } }
] } );
</script>

### Bordered rows

Add a thick border to the bottom of the row by using the class `.o-grid__row--bordered`. It works especially well on _alt_ rows.

<script>
component("grid", { "atoms":[
  { "grid-row": { "type": "bordered", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } },
  { "grid-row": { "type": "alt1 o-grid__row--bordered", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } },
  { "grid-row": { "type": "alt2 o-grid__row--bordered", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } },
  { "grid-row": { "type": "alt3 o-grid__row--bordered", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } }
] } );
</script>
