---

title: Divided grid
name: divided-grid
category: layout
subcategory: Grid
layout: default
id: divided-grid-page

---

<div class="lead"><p>The classes `o-grid__row--divided-rows` and `o-grid__row--divided-column` can be added to the grid row to put a subtle divider between rows and/or colums.</p></div>

It looks better when you combine it with an [equal height row](/js-modules/equal-height-rows.html).

Because of the enormous complexity involved, please don't use [responsive overrides](/layout/grid.html#responsive-override-classes) on grid sizes

### Divided rows

<script>
component("grid", { "atoms":[
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
  ] } },
  { "grid-row": { "type": "divided-rows", "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
  ] } }
] });
</script>

### Divided columns

<script>
component("grid", { "atoms":[
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
  ] } },
  { "grid-row": { "type": "divided-columns", "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
  ] } }
] });
</script>

### Divided rows _and_ columns

<script>
component("grid", { "atoms":[
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
  ] } },
  { "grid-row": { "type": "divided-rows o-grid__row--divided-columns", "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
  ] } }
] });
</script>