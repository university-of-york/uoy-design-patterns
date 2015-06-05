---

title: Accordion
name: accordion
category: components
subcategory: Molecules
layout: q+tq
id: accordion-page

---

<p class="lead">An accordion list for expandable content.</p>

<script>
component("accordion-item", {
  "title": "This accordion title",
  "content": "<p>This accordion content.</p>"
} );
</script>

And the `accordion` itself is made up of an array of `accordion-item`s:

<script>
component("accordion", { "atoms": [
  { "accordion-item": {
    "title": "This accordion title",
    "content": "<p>First accordion content.</p>"
  } },
  { "accordion-item": {
    "title": "This other accordion title",
    "content": "<p>Second accordion content.</p><p>Second accordion content.</p><p>Second accordion content.</p>"
  } },
  { "accordion-item": {
    "title": "Third accordion title",
    "content": "<p>Third accordion content.</p><p>Third accordion content.</p>"
  } }
] } );
</script>

By default, the accordion will allow you to open as many as you like. Passing `"collapse": true` as an option will stop that behaviour and only allow one item to be open. If you want this behaviour you must contain them within a `.c-accordion` block.

<script>
component("accordion", { "collapse": true, "atoms": [
  { "accordion-item": {
    "title": "This accordion title",
    "content": "<p>First accordion content.</p>"
  } },
  { "accordion-item": {
    "title": "This other accordion title",
    "content": "<p>Second accordion content.</p><p>Second accordion content.</p><p>Second accordion content.</p>"
  } },
  { "accordion-item": {
    "title": "Third accordion title",
    "content": "<p>Third accordion content.</p><p>Third accordion content.</p>"
  } }
] } );
</script>

### Options

#### Atoms

* **accordion-item**
  * **title**: string or HTML to go in the accordion title **(required)**
  * **content**: string or HTML to go in the accordion body **(required)**
  * **collapse**: default _false_. Set to _true_ to allow accordions to be open at once.

#### Molecules

* **accordion**
  * **atoms**: an array of `accordion-item` atoms