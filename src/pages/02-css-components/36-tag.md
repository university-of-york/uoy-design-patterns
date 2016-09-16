---

title: Tag lists
name: tag-list
category: components
subcategory: Molecules
layout: q+tq
id: tag-list-page

---

<div class="lead"><p>**Tags** are a way of showing related items in similar categories. Tags can be used to follow a news or eventlisting, for example, to show other events in the same category, or in the research paghes to link research articles in the same field..</p></div>

<script>
component("tag", {
  "content": "Culture and communication",
  "link": "#"
});
</script>

You can add a little icon to the front, if you're feeling daring

<script>
component("tag", {
  "content": "Culture and communication",
  "link": "#",
  "icon": "apple"
});
</script>

If you have a bunch of them, put them in a list:

<script>
component("tag-list", { "atoms": [
  { "tag": {
    "content": "Creativity",
    "link": "#"
  }},
  { "tag": {
    "content": "Culture and communication",
    "link": "#"
  }},
  { "tag": {
    "content": "Environmental sustainability and resilience",
    "link": "#"
  }},
  { "tag": {
    "content": "Health and wellbeing",
    "link": "#"
  }},
  { "tag": {
    "content": "Justice and equality",
    "link": "#"
  }},
  { "tag": {
    "content": "Risk, evidence and decision-making",
    "link": "#"
  }},
  { "tag": {
    "content": "Technologies for the future",
    "link": "#"
  }}
]});
</script>

Which can be centered or right-aligned in addition to the default left-alignment:

<script>
component("tag-list", { "align": "center", "atoms": [
  { "tag": {
    "content": "Creativity",
    "link": "#"
  }},
  { "tag": {
    "content": "Culture and communication",
    "link": "#"
  }},
  { "tag": {
    "content": "Environmental sustainability and resilience",
    "link": "#"
  }},
  { "tag": {
    "content": "Health and wellbeing",
    "link": "#"
  }},
  { "tag": {
    "content": "Justice and equality",
    "link": "#"
  }},
  { "tag": {
    "content": "Risk, evidence and decision-making",
    "link": "#"
  }},
  { "tag": {
    "content": "Technologies for the future",
    "link": "#"
  }}
]});
</script>

<script>
component("tag-list", { "align": "right", "atoms": [
  { "tag": {
    "content": "Creativity",
    "link": "#"
  }},
  { "tag": {
    "content": "Culture and communication",
    "link": "#"
  }},
  { "tag": {
    "content": "Environmental sustainability and resilience",
    "link": "#"
  }},
  { "tag": {
    "content": "Health and wellbeing",
    "link": "#"
  }},
  { "tag": {
    "content": "Justice and equality",
    "link": "#"
  }},
  { "tag": {
    "content": "Risk, evidence and decision-making",
    "link": "#"
  }},
  { "tag": {
    "content": "Technologies for the future",
    "link": "#"
  }}
]});
</script>


</script>

### Options

#### Atoms

* **tag**
  * **content** - the stuff to go in the tag (required)
  * **link** - the URL the tag should point to
  * **icon** - an icon to represent it

#### Molecules

* **tag-list**
  * **atoms**: an array of _tags_
