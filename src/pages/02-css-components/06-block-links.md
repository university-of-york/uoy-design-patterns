---

title: Block links
name: block-links
category: components
subcategory: Atoms
layout: q+tq
id: block-links-page

---

## Block links

Used to link to various sections:

<script>
component("block-link", { "content": "First link", "url": "#"});
</script>

Content can wrap on to multiple lines:

<script>
component("block-link", { "content": "&ldquo;They lived on treacle,&rdquo; said the Dormouse, after thinking a minute or two. &ldquo;They couldn't have done that, you know,&rdquo; Alice gently remarked; &ldquo;they'd  have been ill.&rdquo; &ldquo;So they were,&rdquo; said the Dormouse; &ldquo;VERY ill.&rdquo; Alice tried to fancy to herself what such an extraordinary ways of living would be like, but it puzzled her too much, so she went on.", "url": "#"});
</script>

You can put HTML content into a block link:

<script>
component("block-link", { "content": "<ul><li>&ldquo;They lived on treacle,&rdquo; said the Dormouse, after thinking a minute or  two</li><li>&ldquo;They couldn't have done that, you know,&rdquo; Alice gently remarked; &ldquo;they'd have been ill&rdquo;</li><li>&ldquo;So they were,&rdquo; said the Dormouse; &ldquo;VERY ill&rdquo;</li><li>Alice tried to fancy to herself what such an extraordinary ways of living would be like, but it puzzled her too much, so she went on: &ldquo;But why did they live at the bottom of a well?&rdquo; &ldquo;Take some more tea,&rdquo; the March Hare said to Alice, very earnestly</li><li>&ldquo;I've had nothing yet,' Alice replied in an offended tone, &ldquo;so I can't take more&rdquo;</li></ul>", "url": "#"});
</script>

You can use a grid layout to make multiple rows/columns, and add `.c-icon--before`s to the content if you like.

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--beer\"></i> Beer", "url": "#"}
      },
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--binoculars\"></i> Binoculars", "url": "#"}
      },
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--bicycle\"></i> Bicycle", "url": "#"}
      }
    ] } },
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--birthday-cake\"></i> Birthday cake", "url": "#"}
      },
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--bolt\"></i> Bolt", "url": "#"}
      },
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--bomb\"></i> Bomb", "url": "#"}
      }
    ] } },
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--briefcase\"></i> Briefcase", "url": "#"}
      },
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--bug\"></i> Bug", "url": "#"}
      },
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--bullhorn\"></i> Bullhorn", "url": "#"}
      }
    ] } }
  ] } },
  { "grid-row": { "type": "alt1", "atoms": [
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--camera\"></i> Camera", "url": "#"}
      }
    ] } },
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--car\"></i> Car", "url": "#"}
      }
    ] } },
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "<i class=\"c-icon c-icon--before c-icon--check\"></i> Check", "url": "#"}
      }
    ] } }
  ] } },
  { "grid-row": { "type": "alt2", "atoms": [
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "First link", "url": "#"}
      }
    ] } },
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "Second link", "url": "#"}
      }
    ] } },
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "Third link", "url": "#"}
      }
    ] } }
  ] } },
  { "grid-row": { "type": "alt3", "atoms": [
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "First link", "url": "#"}
      }
    ] } },
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "Second link", "url": "#"}
      }
    ] } },
    { "grid-box": { "size": "third", "atoms": [
      {
        "block-link": { "content": "Third link", "url": "#"}
      }
    ] } }
  ] } }
] });
</script>

### Options

#### Atoms

* **block-link**
  * **content**: [string] The text to go in the link. Can include HTML markup (required)
  * **url**: [string] The URl to link to.
