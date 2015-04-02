---

title: Grid
name: grid
category: layout
layout: default
id: grid-page

---

<p class="lead">We use a flexible grid system that can be used at all screen resolutions. It's percentage-based, so is flexible enough to fit any container. This means is possible (but not necessarily advisable) to nest a grid within a grid.</p>

Note that the grid is used for layout only, and holds no details as to the contents of the grid box. Other components should be included within the grid boxes.

### A note about the responsive grid

So how does the grid respond on smaller screens?

* **.g-full**: stays full width always
* **.g-half**: goes to 100% width on tablet (approx <800px)
* **.g-threequarters**: go to 100% width on tablet
* **.g-quarter**: _It's complicated_. In general, it will go to 50% width on tablet, then 100% width on mobile  (approx <640px). On tablet, when you have a half between two quarters in a row (q+h+q), the last quarter is moved up above the half, as otherwise you'd have 50% + 100% + 50% width. When a quarter is in a row with a three-quarter (q+tq or tq+q), the quarter will become 100% on tablet too, to fit with the three-quarter
* **.g-third**: stays 33.333% of width until mobile, when it goes full-width
* **.g-twothirds**: stays 66.666% of width until mobile, when it goes full-width

All grid boxes (any bit of code at all, in fact) can be given a `.mobile-hidden` and/or `.tablet-hidden` class, which will hide that box on mobile and/or tablet. This can cause layout issues if you aren't careful.

**N.B. There is normally no border on grid boxes. It is just there for the documentation.**

The default is to have a box that takes up the whole width:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "atoms": { "text": " .g-full (default)" } } }
  ] } }
] });
</script>

Quarter-, half- and three-quarter-width columns are possible:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .g-half" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .g-half" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .g-threequarters" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .g-threequarters" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } }
  ] } }
] });
</script>

And you can combine quarter- and half-width grid boxes to fit a row:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .g-half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .g-half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .g-half" } } }
  ] } }
] });
</script>

You can also split the grid into thirds:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .g-twothirds" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } },
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .g-twothirds" } } }
  ] } }
] });
</script>

Finally, here's a (slightly convoluted) way of nesting grids (for example, on a gallery page):

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .g-quarter" } } },
    { "grid-box": { "size": "threequarters", "atoms":
      {
        "grid": { "atoms": [
          { "grid-row": { "atoms": [
            { "grid-box": { "size": "third", "atoms":
              {
                "grid": { "atoms": [
                  { "grid-row": { "atoms":
                    { "grid-box": { "size": "full", "atoms": { "text": " You can even triple-nest!" } } }
                  } },
                  { "grid-row": { "atoms": [
                    { "grid-box": { "size": "half", "atoms": { "text": " .g-half" } } },
                    { "grid-box": { "size": "half", "atoms": { "text": " .g-half" } } }
                  ] } }
                ] }
              }
            } },
            { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } }
          ] } },
          { "grid-row": { "atoms": [
            { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } }
          ] } },
          { "grid-row": { "atoms": [
            { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .g-third" } } }
          ] } }
        ]}
      }
    } }
  ] } },
] });
</script>

### Options

#### Atoms

* **grid-box**
  * **size**: one of _full_ (default), _half_, _quarter_, _threequarters_, _third_ and _twothirds_
  * **atoms**: an array of components (atoms, molecules, organisms)


#### Molecules

* **grid-row**
  * **atoms**: an array of `grid-box`es. The sizes of the `grid-box`es should add up to one. Duh.


#### Organisms

* **grid**
  * **atoms**: an array of `grid-row`s.

