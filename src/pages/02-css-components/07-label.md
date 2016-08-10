---

title: Label
name: label
category: components
subcategory: Atoms
layout: q+tq
id: label-page

---

<div class="lead"><p>**Labels** are used within organisms like news listings to define which category something falls into.</p></div>

The simplest label is just some text:

<script>
component("label", {
  "content": "News"
});
</script>

It can have an preceding icon:

<script>
component("label", {
  "content": "News",
  "icon": "newspaper-o"
});
</script>

And it can be a link if required:

<script>
component("label", {
  "content": "News",
  "icon": "newspaper-o",
  "link": "#"
});
</script>

### Options

#### Atoms

* **label**
  * **content** - [String] the stuff to go in the tag (required)
  * **icon** - [String|icon] an icon to represent it
  * **link** - [String] the URL the label should link to
