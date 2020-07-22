---

title: Key facts (No Icon)
name: key-fact-no-icon
category: components
subcategory: Molecules
layout: q+tq
id: key-fact-no-icon-page

---

<div class="lead"><p>Key facts without an icon, used to highlight information such as rankings on course pages.</p>
</div>

Text replaces the icon, this allows for rankings and percentage to be included on pages.

Facts in alt rows match the background colour that they are on:

<script>
component("grid-row", {"type": "alt1", "class":"js-equal-height-row", "atoms": [
  { "grid-box": { "size": "half", "atoms": { "key-fact-no-icon": {
    "title": "in the UK for chemistry",
    "content": "<p>Times and Sunday Times Good University Guide 2020</p>",
    "text": "2",
    "sup": "nd"
  } } } },
  { "grid-box": { "size": "half", "atoms": { "key-fact-no-icon": {
    "title": "in the UK for chemistry",
    "content": "<p>Guardian University Guide 2020</p>",
    "text": "3",
    "sup": "rd"
  } } } }
] })
+component("grid-row", {"type": "alt2", "class":"js-equal-height-row", "atoms": [
  { "grid-box": { "size": "half", "atoms": { "key-fact-no-icon": {
    "title": "in the UK for chemistry",
    "content": "<p>Times and Sunday Times Good University Guide 2020</p>",
    "text": "2",
    "sup": "nd"
  } } } },
  { "grid-box": { "size": "half", "atoms": { "key-fact-no-icon": {
    "title": "in the UK for chemistry",
    "content": "<p>Guardian University Guide 2020</p>",
    "text": "3",
    "sup": "rd"
  } } } }
] })
+component("grid-row", {"type": "alt3", "class":"js-equal-height-row", "atoms": [
  { "grid-box": { "size": "half", "atoms": { "key-fact-no-icon": {
    "title": "in the UK for chemistry",
    "content": "<p>Times and Sunday Times Good University Guide 2020</p>",
    "text": "2",
    "sup": "nd"
  } } } },
  { "grid-box": { "size": "half", "atoms": { "key-fact-no-icon": {
    "title": "in the UK for chemistry",
    "content": "<p>Guardian University Guide 2020</p>",
    "text": "3",
    "sup": "rd"
  } } } }
] });

</script>

### Options

#### Molecules

* **key-fact-no-icon**
  * **content**: text to go in the main body (required)
  * **title**: text to go in the header (required)
  * **icon**: name of icon to go above the title
  * **text**: A number
  * **sup**: A thingy
