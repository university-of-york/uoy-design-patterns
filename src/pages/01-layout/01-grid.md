---

title: Grid
name: grid
category: layout
layout: default
id: grid-page

---

<div class="lead"><p>We use a flexible grid system that can be used at all screen resolutions. It's percentage-based, so is flexible enough to fit any container. This means is possible (but not necessarily advisable) to nest a grid within a grid.</p></div>

Note that the grid is used for layout only, and holds no details as to the contents of the grid box. Other components should be included within the grid boxes.

### A note about the responsive grid

So how does the grid respond on smaller screens?

* **.o-grid__box--full**: stays full width always
* **.o-grid__box--half**: goes to 100% width on medium (<840px)
* **.o-grid__box--threequarters**: go to 100% width on medium
* **.o-grid__box--quarter**: _It's complicated_. In general, it will go to 50% width on medium, then 100% width on small (<640px). On medium, when you have a half between two quarters in a row (q+h+q), the last quarter is moved up above the half, as otherwise you'd have 50% + 100% + 50% width. When a quarter is in a row with a three-quarter (q+tq or tq+q), the quarter will become 100% on medium too, to fit with the three-quarter
* **.o-grid__box--third**: stays 33.333% of width until small, when it goes full-width
* **.o-grid__box--twothirds**: stays 66.666% of width until small, when it goes full-width

All grid boxes (any bit of code at all, in fact) can be given a `.mobile-hidden` and/or `.tablet-hidden` class, which will hide that box on mobile and/or tablet. This can cause layout issues if you aren't careful.

You can also override grid sizes by adding a custom `@` class to a grid box: for example, `.o-grid__box--quarter@small` will go to quarter width on small (and lower) screens regardless of its usual class.

**N.B. There is normally no background colour or margin on grid boxes. It is just there for the documentation.**

The default is to have a box that takes up the whole width:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "atoms": { "text": " .o-grid__box--full (default)" } } }
  ] } }
] });
</script>

Quarter-, half- and three-quarter-width columns are possible:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "threequarters", "atoms": { "text": " .o-grid__box--threequarters" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } }
] });
</script>

And you can combine quarter- and half-width grid boxes to fit a row:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
  ] } }
] });
</script>

You can also split the grid into thirds:

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds" } } },
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
    { "grid-box": { "size": "twothirds", "atoms": { "text": " .o-grid__box--twothirds" } } }
  ] } }
] });
</script>

Finally, here's a (slightly convoluted) way of nesting grids (for example, on a gallery page):

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": { "text": " .o-grid__box--quarter" } } },
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
                    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } },
                    { "grid-box": { "size": "half", "atoms": { "text": " .o-grid__box--half" } } }
                  ] } }
                ] }
              }
            } },
            { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
          ] } },
          { "grid-row": { "atoms": [
            { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
          ] } },
          { "grid-row": { "atoms": [
            { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } },
            { "grid-box": { "size": "third", "atoms": { "text": " .o-grid__box--third" } } }
          ] } }
        ]}
      }
    } }
  ] } }
] });
</script>

### Responsive override classes

As mentioned above, you can override the default response of the grid items by giving them an `@` class. So the following grid items would usually go from being a 33.333% wide at medium size to 100% width at small size, but the `.o-grid__box--third@small` class means they will stay a third wide even at small screen sizes. You can also specify an `@print` variation that only affects print layouts.

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third o-grid__box--third@small", "atoms": { "text": " .o-grid__box--third.o-grid__box--third@small" } } },
    { "grid-box": { "size": "third o-grid__box--third@small", "atoms": { "text": " .o-grid__box--third.o-grid__box--third@small" } } },
    { "grid-box": { "size": "third o-grid__box--third@small", "atoms": { "text": " .o-grid__box--third.o-grid__box--third@small" } } }
  ] } }
] } );
</script>

You can play around with the different displays by assigning these classes.

(Try resizing and printing the following example. The boxes should be thirds at huge and large sizes, full/half/half at medium, full/full/full (default) at small and tiny, and half/quarter/quarter in print).

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third o-grid__box--full@medium o-grid__box--half@print", "atoms": { "text": " .o-grid__box--third<br>.o-grid__box--full@medium<br>.o-grid__box--half@print" } } },
    { "grid-box": { "size": "third o-grid__box--half@medium o-grid__box--quarter@print", "atoms": { "text": " .o-grid__box--third<br>.o-grid__box--half@medium<br>.o-grid__box--quarter@print" } } },
    { "grid-box": { "size": "third o-grid__box--half@medium o-grid__box--quarter@print", "atoms": { "text": " .o-grid__box--third<br>.o-grid__box--half@medium<br>.o-grid__box--quarter@print" } } }
  ] } }
] } );
</script>

### Fancy alternative coloured rows

You can make a whole row go blue, teal or light grey (including the space going off the screen on either side) by defining the row as `.o-grid__row--alt1`, `.o-grid__row--alt2` or `.o-grid__row--alt3`.

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

### Image rows

Add an `image` value to put a background image in. This works best inside an `o-wrapper--wide` wrapper component, otherwise it will just fill the available wrapper.

<script>
component("grid", { "atoms":[
  { "grid-row": { "type": "alt2 o-grid__row--bordered  o-grid__row--wide", "image": "/media/wide-image.jpg", "atoms": [
    { "grid-box": { "size": "full", "atoms": { "text": " .o-grid__box--full" } } }
  ] } }
] } );
</script>

### Options

#### Atoms

* **grid-box**
  * **size**: one of _full_ (default), _half_, _quarter_, _threequarters_, _third_ and _twothirds_
  * **atoms**: an array of components (atoms, molecules, organisms)


#### Molecules

* **grid-row**
  * **atoms**: an array of `grid-box`es. The sizes of the `grid-box`es should add up to one. Duh.
  * **type**: either _alt1_,  _alt2_,  _alt3_ for alternative styles of row
  * **image**: what image should fill the row?

#### Organisms

* **grid**
  * **atoms**: an array of `grid-row`s.
