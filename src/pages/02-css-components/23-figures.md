---

title: Figures
name: figures
category: components
subcategory: Molecules
layout: q+tq
id: figures-page

---

<div class="lead"><p>Figures are structured markup for displaying images with additional content and/or captions. We use the `figure` element, with `figcaption` used for captions.</p></div>

In most cases, figures are sized by the size of the image (with the notable exception of [banners](#banner-figures)).

Theres a special page for [full-width figures](../full-width-figures.html).

### Captions

The usual caption is positioned in the corner of the image:

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=973", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption", "position": "bottom-right" } } );
</script>

The default location is in the bottom right corner, but can be positioned in any corner:

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=975", "caption" : { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> This is another caption", "position": "top-left" } } )
+component("figure", { "image": "https://unsplash.it/800/400/?image=976", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Here is yet another caption", "position": "top-right" } } )
+component("figure", { "image": "https://unsplash.it/800/400/?image=977", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Last caption, I promise", "position": "bottom-left" } } );
</script>

It can also be positioned below the image:

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=972", "caption": { "text" : "A plain caption below an image", "position": "below" } } );
</script>

### Defined widths and heights

In the following helper classes `.c-figure--w400` means `width:400px;` (these helper classes only exist in the documentation settings and aren't for use in the wild). Each of the examples is shown with a wide image (800px x 400px) and a tall image (400px x 800px) for comparison.

#### Defined width:

<script>
component("figure", { "type":"w400", "image": "https://unsplash.it/800/400/?image=979"});
</script>
<script>
component("figure", { "type":"w400", "image": "https://unsplash.it/400/800/?image=980"});
</script>

#### Defined height:

<script>
component("figure", { "type":"h400", "image": "https://unsplash.it/400/800/?image=981"});
</script>
<script>
component("figure", { "type":"h400", "image": "https://unsplash.it/800/400/?image=982"});
</script>

### Banner figures

Banner figures act a little differently than normal figures. The height of the image is based on the figure content (where CSS transforms are supported, ie not &lt;IE8). The width of the caption is a 50% at huge/large/medium sizes and 100% on small screens. On tiny screens the caption moves to be below the image. Banner content can be positioned _left_ or _right_.

<script>
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=983", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left" } } );
</script>
<script>
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=984", "content": { "text" :"<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<p>So if you have loads and loads of content, the banner will get taller and taller and taller.</p>\n<p>And taller.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>\n<p class=\"cta\"><a href=\"#\">Button using .cta</a></p>\n</div>", "position": "right" } } );
</script>

You can also include `caption`s on banner figures:

<script>
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=985", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<p>This content should be some information, which is illustrated well by the image beneath.</p>\n<p>The caption down there in the corner could be a description of the image, or a copyright notice relating to the image itself.</p><a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left" }, "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption that might end up crashing into the content", "position": "bottom-right" } } );
</script>


### Link figures

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"charcoal", "image": "https://unsplash.it/400/600/?image=986", "url":"http://google.com", "content": { "text": "<h3>Content title</h3>\n<p>Here is some content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>" } }
    } } },
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"pink", "image": "https://unsplash.it/400/600/?image=987", "url":"http://google.com", "content": { "text": "<h3>Content title</h3>\n<p>Here is some content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>" } }
    } } },
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"teal", "image": "https://unsplash.it/400/600/?image=988", "url":"http://google.com", "content": { "text" : "<h3>Content title</h3>\n<p>Here is some content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>" } }
    } } }
  ] } },
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "half", "atoms": {
      "figure-link": { "color":"gold", "image": "https://unsplash.it/400/600/?image=989", "url":"http://google.com", "content": { "text" :"<h3>Content title</h3>\n<p>Here is some content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>" } }
    } } },
    { "grid-box": { "size": "half", "atoms": {
      "figure-link": { "color":"blue", "image": "https://unsplash.it/400/600/?image=990", "url":"http://google.com", "content": { "text" :"<h3>Content title</h3>\n<p>Here is some content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>" } }
    } } }
  ] } }
] });
</script>

### Options

#### Atoms

* **figure**
  * **image**: the URL of an image **(required)**
  * **caption**:
    * **text**: the text to appear in the caption (string)
    * **position**: the position of the caption
  * **content**:
    * **text**: the HTML to appear in the content (string)
    * **position**: the position of the caption
  * **type**: the type of figure (classname added to `.c-figure--xxx`)
  * **url**: (for link figures) URL to link the figure to