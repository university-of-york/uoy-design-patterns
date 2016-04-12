---

title: Figures
name: figures
category: components
subcategory: Molecules
layout: q+tq
id: figures-page

---

<div class="lead"><p>You can add text to an image by using a `figure` component with a `figcaption`.</p></div>

In most cases, figures are sized by the size of the image (with the notable exception of [banners](#banner-figures))

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=972", "caption": "A plain caption below an image", "position": "below"});
</script>

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=973", "caption": "Simple text caption", "position": "bottom-left"});
</script>

The default location is in the bottom left corner, but can be positioned in any corner:

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=974", "caption": "This is a caption", "position": "bottom-left"})
+component("figure", { "image": "https://unsplash.it/800/400/?image=975", "caption": "This is another caption", "position": "top-left"})
+component("figure", { "image": "https://unsplash.it/800/400/?image=976", "caption": "Here is yet another caption", "position": "top-right"})
+component("figure", { "image": "https://unsplash.it/800/400/?image=977", "caption": "Last caption, I promise", "position": "bottom-right"});
</script>

It's possible to put HTML into a caption:

<script>
component("figure", { "image": "https://unsplash.it/1200/800/?image=978", "caption": "<h4>Look at this for a caption!</h4><p>Add in as much content as you want, being careful that the amount of content you add doesn't overwhelm the image.</p>", "position": "bottom-left"});
</script>

### Defined widths and heights

In the following helper classes `.c-figure--w400` means `width:400px;` (these helper classes only exist in the documentation settings and aren't for use in the wild). Each of the examples is shown with a wide image (800px x 400px) and a tall image (400px x 800px) for comparison.

#### Defined width:

<script>
component("figure", { "type":"w400", "image": "https://unsplash.it/800/400/?image=979"});
</script>
<script>component("figure", { "type":"w400", "image": "https://unsplash.it/400/800/?image=980"});
</script>

#### Defined height:

<script>
component("figure", { "type":"h400", "image": "https://unsplash.it/400/800/?image=981"});
</script>
<script>
component("figure", { "type":"h400", "image": "https://unsplash.it/800/400/?image=982"});
</script>

#### Banner figures

Banner figures act a little differently than normal figures. The height of the image is based on the content in the caption (where CSS transforms are supported, ie not &lt;IE8). The width of the caption is a third at large sizes, 50% at medium and 100% on small screens. On small screens the caption moves to be below the image. Banner captions can be positioned _left_ or _right_.

<script>
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=983", "caption":"<h3>Here's some content</h3>\n<p>Here is some caption content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left"});
</script>
<script>
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=984", "caption":"<h3>Here's some content</h3>\n<p>Here is some caption content. The height of the banner will fit to the content size.</p>\n<p>So if you have loads and loads of content, the banner will get taller and taller and taller.</p>\n<p>And taller.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>\n<p class=\"cta\"><a href=\"#\">Button using .cta</a></p>\n</div>", "position": "right"});
</script>

#### Link figures

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"charcoal", "image": "https://unsplash.it/400/600/?image=985", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } },
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"pink", "image": "https://unsplash.it/400/600/?image=986", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } },
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"teal", "image": "https://unsplash.it/400/600/?image=987", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "half", "atoms": {
      "figure-link": { "color":"gold", "image": "https://unsplash.it/400/600/?image=988", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
    } } },
    { "grid-box": { "size": "half", "atoms": {
      "figure-link": { "color":"blue", "image": "https://unsplash.it/400/600/?image=989", "caption":"<h3>Content title</h3>\n<div class=\"c-figure__caption-content\">\n<p>Here is some caption content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>\n</div>", "url":"http://google.com"}
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
