---

title: Offset grid
name: offset-grid
category: layout
subcategory: Grid
layout: default
id: offset-grid-page

---

<div class="lead"><p>Offset classes can be added to grid boxes to push them away from the left hand edge.</p></div>

The offsets available are `threeeighths`, `twosixths`, `quarter`, `sixth` and `eighth`. They might sound odd, but they are that size for specific reasons!

A `threeeighths` offset will centre a `o-grid-box--quarter`.

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "offset": "threeeighths", "size": "quarter", "atoms": { "text": " .o-grid__box--quarter .o-grid__box--offset-threeeighths" } } }
  ] } }
] });
</script>

A `third` offset will centre a `o-grid-box--third`.

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "offset": "third", "size": "third", "atoms": { "text": " .o-grid__box--third .o-grid__box--offset-third" } } }
  ] } }
] });
</script>

A `quarter` offset will centre a `o-grid-box--half`.

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "offset": "quarter", "size": "half", "atoms": { "text": " .o-grid__box--half .o-grid__box--offset-quarter" } } }
  ] } }
] });
</script>

A `sixth` offset will centre a `o-grid-box--twothirds`.

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "offset": "sixth", "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds .o-grid__box--offset-sixth" } } }
  ] } }
] });
</script>

A `eighth` offset will centre a `o-grid-box--threequarters`.

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "offset": "eighth", "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters .o-grid__box--offset-eighth" } } }
  ] } }
] });
</script>

Other options that might work are two quarter-width boxes offset by a quarter each:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "offset": "quarter", "size": "quarter", "atoms": { "text": " .o-grid__box--quarter .o-grid__box--offset-quarter" } } },
    { "grid-box": { "offset": "quarter", "size": "quarter", "atoms": { "text": " .o-grid__box--quarter .o-grid__box--offset-quarter" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter .o-grid__box--offset-quarter" } } },
    { "grid-box": { "offset": "quarter", "size": "quarter", "atoms": { "text": " .o-grid__box--quarter .o-grid__box--offset-quarter" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "offset": "quarter", "size": "quarter", "atoms": { "text": " .o-grid__box--quarter .o-grid__box--offset-quarter" } } },
    { "grid-box": { "offset": "quarter", "size": "quarter", "atoms": { "text": " .o-grid__box--quarter .o-grid__box--offset-quarter" } } }
  ] } }
] });
</script>

Or a two thirds box offset by a third:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "offset": "third", "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds .o-grid__box--offset-third" } } }
  ] } }
] });
</script>

