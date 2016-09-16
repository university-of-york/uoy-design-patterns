---

title: Banners
name: banners
category: components
subcategory: Molecules
layout: q+tq
id: banners-page

---

<div class="lead"><p>Banners act in a similar was to [figures](./figures.html). The biggest difference is that, in a banner, the figure is resized to fit the content, rather than the size of the image. So a banner _must_ have some `c-figure__content` or it will resize to zero height.</p></div>

Theres a special page for [full-width figures](./full-width-figures.html).

### Position

You can position banner content `left` or `right`. You can use `top-left`, `bottom-right` etc. but they are aliases for `left` or `right`. The default is `left`.

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=772", "type": "banner", "content": { "text" : "<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "left" } } );
</script>

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=773", "type": "banner", "content": { "text" : "<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "right" } } );
</script>

### Sizes

A banner's `figure__content` can be `half` (default), `third` or `quarter` sizes. These sizes only apply at _huge_ sizes - they all go to half size at _large_ and 100% at _medium_ and below.

<script>
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=881", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "half" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=882", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "right", "size": "half" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=883", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "third" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=884", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "right", "size": "third" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=885", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "quarter" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=886", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "right", "size": "quarter" } } );
</script>

### Captions

Captions work in the same way as with [regular figures](./figures.html#figure-captions).

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=774", "type": "banner", "content": { "text" : "<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>" }, "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption", "position": "bottom-right" } } );
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