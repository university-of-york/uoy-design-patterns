---

title: Accordion
name: accordion
category: components
subcategory: Molecules
layout: q+tq
id: accordion-page

---

<p class="lead">An accordion list for expandable content.</p>

**TODO: Needs JS module for behaviour**

<script>
component("accordion-item", {
  "title": "This accordion title",
  "body": "<p>This accordion content.</p>"
} );
</script>

And the `accordion itself is made up of an array of `accordion-item`s:

<script>
component("accordion", { "atoms": [
  "accordion-item", {
    "title": "This accordion title",
    "body": "<p>First accordion content.</p>"
  },
  "accordion-item", {
    "title": "This other accordion title",
    "body": "<p>Second accordion content.</p>"
  },
  "accordion-item", {
    "title": "Third accordion title",
    "body": "<p>Third accordion content.</p>"
  }
] } );
</script>

By default, the accordion will collapse so that only one item is on dispaly. Passing `"collapse": false` as an option will stop that behaviour and allow you to open as many as you like.

<script>
component("accordion", { "collapse": false, "atoms": [
  "accordion-item", {
    "title": "This accordion title",
    "body": "<p>First accordion content.</p>"
  },
  "accordion-item", {
    "title": "This other accordion title",
    "body": "<p>Second accordion content.</p>"
  },
  "accordion-item", {
    "title": "Third accordion title",
    "body": "<p>Third accordion content.</p>"
  }
] } );
</script>



### Options


#### Atoms


* page
  * **href**: link to the page. You can use _false_ for ellipses **(required)**
  * **value**: the text of the link item
  * **position**: one of _first_, _last_, _previous_, _next_ or _current_. Denotes the position in the page list.


#### Molecules


* pagination
  * **atoms**: an array of page atoms