---

title: Equal height rows
name: equal-height-rows-module
category: modules
subcategory: Component modules
layout: q+tq
id: equal-height-rows-module-page

---

<div class="lead"><p>When you need to have boxes within a row all appear the same height regardless of the content, you can call this module on the row. The easiest way is to add a class of `js-equal-height-row` to an `o-grid__row` and it will automatically resize the grid boxes within the row to be the same height as the tallest one in the row.</p></div>

### Use

```javascript
var m = new EQUALHEIGHT({
  row: $('#some-grid-row')
});
```

### Example

<script>
component("grid-row", { "class":"js-equal-height-row", "atoms": [
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "10th for research impact in the REF 2014",
    "content": "<p>Research performance</p>",
    "link": "http://www.york.ac.uk/research/performance/",
    "icon": "book"
  } } } },
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "&pound;500 million invested in facilities",
    "content": "<p>World-class resources available to staff and partners</p>",
    "link": "http://www.york.ac.uk/research/facilities/",
    "icon": "money"
  } } } },
  { "grid-box": { "size": "third", "atoms": { "key-fact": {
    "title": "York Graduate Research School",
    "content": "Supporting a community of over 2,000 research students",
    "link": "http://www.york.ac.uk/research/graduate-school/",
    "icon": "graduation-cap"
  } } } }
] });
</script>

### Options

 * **row** - an `o-grid__row`-classed element. The script automatically parses for tables with the class `.js-equal-height-row`.
