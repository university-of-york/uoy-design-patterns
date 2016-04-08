---

title: Key facts
name: key-fact
category: components
subcategory: Molecules
layout: q+tq
id: key-fact-page

---

<div class="lead"><p>Key facts highlight important facts on the page, such as the research strategy on the research home page :).</p></div>

<script>
component("key-fact", {
  "title": "<strong>10th</strong> for research impact in the REF 2014",
  "content": "<p>Research performance</p>"
});
</script>

If you add in a `link` property it will become an `a` tag with a link:

<script>
component("key-fact", {
  "title": "<strong>10th</strong> for research impact in the REF 2014",
  "content": "<p>Research performance</p>",
  "link": "http://www.york.ac.uk/research/performance/"
});
</script>

You can have an icon:

<script>
component("key-fact", {
  "title": "<strong>10th</strong> for research impact in the REF 2014",
  "content": "<p>Research performance</p>",
  "link": "http://www.york.ac.uk/research/performance/",
  "icon": "book"
});
</script>

Multiple key facts can be used together within a row of a grid:

<script>
component("grid-row", { "atoms": [
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "<strong>10th</strong> for research impact in the REF 2014",
    "content": "<p>Research performance</p>",
    "link": "http://www.york.ac.uk/research/performance/",
    "icon": "book"
  } } } },
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "<strong>&pound;500 million</strong> invested in facilities",
    "content": "<p>World-class resources available to staff and partners</p>",
    "link": "http://www.york.ac.uk/research/facilities/",
    "icon": "money"
  } } } },
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "A community of <strong>2,000+</strong> research students",
    "content": "supported by the York Graduate Research School",
    "link": "http://www.york.ac.uk/research/graduate-school/",
    "icon": "graduation-cap"
  } } } }
] });

</script>

Facts in alt rows have a slightly different style:

<script>
component("grid-row", {"type": "alt2", "class":"js-equal-height-row", "atoms": [
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "<strong>10th</strong> for research impact in the REF 2014",
    "content": "<p>Research performance</p>",
    "link": "http://www.york.ac.uk/research/performance/",
    "icon": "book"
  } } } },
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "<strong>&pound;500 million</strong> invested in facilities",
    "content": "<p>World-class resources available to staff and partners</p>",
    "link": "http://www.york.ac.uk/research/facilities/",
    "icon": "money"
  } } } },
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "A community of <strong>2,000+</strong> research students",
    "content": "supported by the York Graduate Research School",
    "link": "http://www.york.ac.uk/research/graduate-school/",
    "icon": "graduation-cap"
  } } } }
] });

</script>


### Options

#### Molecules

* **key-fact**
  * **content**: text to go in the main body (required)
  * **title**: text to go in the header (required)
  * **icon**: name of icon to go above the title
  * **link**: target URL for the cta button
