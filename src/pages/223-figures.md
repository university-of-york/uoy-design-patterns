---

title: Figures
name: figures
category: components
subcategory: Molecules
layout: q+tq
id: figures-page

---

<p class="lead">You can add text to an image by using a `figure` component with a `figcaption`.</p>

In most cases, figures are sized by the size of the image (with the notable exception of [banners](#banner-figures))

<script>
component("figure", { "image": "http://lorempixel.com/800/400/people/7", "caption": "Simple text caption", "position": "bottom-left"});
</script>

The default location is in the bottom left corner, but can be positioned in any corner:

<script>
component("figure", { "image": "http://lorempixel.com/800/400/people/1", "caption": "This is a caption", "position": "bottom-left"})
+component("figure", { "image": "http://lorempixel.com/800/400/people/2", "caption": "This is another caption", "position": "top-left"})
+component("figure", { "image": "http://lorempixel.com/800/400/people/3", "caption": "Here is yet another caption", "position": "top-right"})
+component("figure", { "image": "http://lorempixel.com/800/400/people/4", "caption": "Last caption, I promise", "position": "bottom-right"});
</script>

It's possible to put HTML into a caption:

<script>
component("figure", { "image": "http://lorempixel.com/1200/800/people/5", "caption": "<h4>Look at this for a caption!</h4><p>Add in as much content as you want, being careful that the amount of content you add doesn't overwhelm the image.</p>", "position": "bottom-left"});
</script>

### Defined widths and heights

In the following helper classes `.c-figure--w400` means `width:400px;` (these helper classes only exist in the documentation settings and aren't for use in the wild). Each of the examples is shown with a wide image (800px x 400px) and a tall image (400px x 800px) for comparison.

#### Defined width:

<script>
component("figure", { "type":"w400", "image": "http://lorempixel.com/800/400/people/5"});
</script>
<script>component("figure", { "type":"w400", "image": "http://lorempixel.com/400/800/people/6"});
</script>

#### Defined height:

<script>
component("figure", { "type":"h400", "image": "http://lorempixel.com/400/800/people/7"});
</script>
<script>
component("figure", { "type":"h400", "image": "http://lorempixel.com/800/400/people/8"});
</script>

#### Banner figures

Banner figures act a little differently than normal figures. The height of the image is based on the content in the caption (where CSS transforms are supported, ie not &lt;IE8). The width of the caption is a third at large sizes, 50% at medium and 100% on small screens. Banner captions can be positioned _left_ or _right_.

<script>
component("figure", { "type":"banner", "image": "http://lorempixel.com/1200/600/people/1", "caption":"<h3>Here's some content</h3>\n<p>Here is some caption content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left"});
</script>
<script>
component("figure", { "type":"banner", "image": "http://lorempixel.com/1200/600/people/2", "caption":"<h3>Here's some content</h3>\n<p>Here is some caption content. The height of the banner will fit to the content size.</p>\n<p>So if you have loads and loads of content, the banner will get taller and taller and taller.</p>\n<p>And taller.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>\n</div>", "position": "right"});
</script>

#### Link figures

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"charcoal", "image": "http://lorempixel.com/400/600/people/3", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } },
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"pink", "image": "http://lorempixel.com/400/600/people/4", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } },
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"teal", "image": "http://lorempixel.com/400/600/people/5", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "half", "atoms": {
      "figure-link": { "color":"gold", "image": "http://lorempixel.com/400/600/people/6", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } },
    { "grid-box": { "size": "half", "atoms": {
      "figure-link": { "color":"blue", "image": "http://lorempixel.com/400/600/people/7", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } }
  ] } }
] });
</script>

### Options

#### Atoms

* **figure**
  * **image**: the URL of an image **(required)**
  * **caption**: the text/HTML to appear in the caption
  * **position**: the position of the caption
  * **type**: the type of figure (classname added to `.c-figure--xxx`)
