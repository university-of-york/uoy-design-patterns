---

title: Equal height rows
name: equal-height-rows-module
category: modules
subcategory: Component modules
layout: q+tq
id: equal-height-rows-module-page

---

<div class="lead"><p>When you need to have boxes within a row all appear the same height regardless of the content, you can call this module on the row. The easiest way is to add a class of `js-equal-height-row` to an `o-grid__row` and it will automatically resize the grid boxes within the row to be the same height as the tallest one in the row.</p></div>

The default `component` mixin automatically sets the height to 100%<sup>*</sup> of `:only-child`ren, so they will expand to fill the grid box.

<small>* Actually, it sets the height to 100% - 20px, the default bottom margin on components</small>

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

### Example with images

The resize function fires again if the window changes size, and when any images inside the row have loaded (reload the page with _Network throttling_ set to _3G_ in the _Network conditions_ tab of Chrome Developer Tools).

<script>
component("grid-row", { "class":"js-equal-height-row", "type": "alt1", "atoms": [
  { "grid-box": { "size": "third", "atoms": { "news-excerpt": {
    "title": "Axe marks the spot",
    "teaser": "Buried in a grave over 9,000 years ago, what can a stone adze tell us about the beliefs of our ancestors?",
    "poster": "https://www.york.ac.uk/static/data/homepage/images/bog-axe-399.jpg",
    "link":"#"
  } } } },
  { "grid-box": { "size": "third", "atoms": { "news-excerpt": {
    "title": "In Pictures: Tackling contaminated waters in Vanuatu",
    "teaser": "We're working with rural communities in the South Pacific, developing sophisticated sensors which could save lives.",
    "poster": "https://www.york.ac.uk/static/data/homepage/images/cyclone-pam-399.jpg",
    "link":"#"
  } } } },
  { "grid-box": { "size": "third", "atoms": { "news-excerpt": {
    "title": "The lost birthplace of political debate",
    "teaser": "As the tabloids call democracy into question, explore Parliament's architectural roots through digital technology.",
    "poster": "https://www.york.ac.uk/static/data/homepage/images/the-house-of-commons-1793-94-by-karl-anton-hickel-oil-on-canvas-1793-1795-credit-national-portrait-gallery-399.jpg",
    "link":"#"
  } } } }
] });
</script>

### Options

 * **row** - an `o-grid__row`-classed element. The script automatically parses for tables with the class `.js-equal-height-row`.
