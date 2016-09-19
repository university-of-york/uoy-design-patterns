---

title: Figures
name: figures
category: components
subcategory: Molecules
layout: q+tq
id: figures-page

---

<div class="lead"><p>Figures are structured markup for displaying images with additional content and/or captions.</p></div>

We use the `figure` element, with `figcaption` used for [captions](#figure-captions). A `c-figure__content` element is used to add [content](#figure-content) to a figure, which is usually 50% wide but can be modified to be a _third_ or _quarter_ size.

Figures are sized by the size of the image.

There is a separate page for examples of [full-width figures](./full-width-figures.html).

## Figure captions

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

## Figure content

The default width of the caption is a 50% at huge/large/medium sizes. On small/tiny screens the caption moves to be below the image. Banner content (like captions) can be positioned _top-left_, _top-right_, _bottom-left_ or _bottom-right_, and can be _half_, _third_ or _quarter_ size.

### Positions

#### Top left (default)

<script>
component("figure", { "image": "https://unsplash.it/1200/600/?image=983", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-left" } } );
</script>

#### Top right

<script>
component("figure", { "image": "https://unsplash.it/1200/600/?image=984", "content": { "text" :"<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-right" } } );
</script>

#### Bottom right

<script>
component("figure", { "image": "https://unsplash.it/1200/600/?image=985", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "bottom-right" } } );
</script>

#### Bottom left

<script>
component("figure", { "image": "https://unsplash.it/1200/600/?image=986", "content": { "text" :"<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "bottom-left" } } );
</script>

### Sizes

#### Half (default)

<script>
component("figure", { "image": "https://unsplash.it/1200/600/?image=882", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "half" } } );
</script>

#### Third

<script>
component("figure", { "image": "https://unsplash.it/1200/600/?image=884", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "third" } } );
</script>

#### Quarter

<script>
component("figure", { "image": "https://unsplash.it/1200/600/?image=886", "content": { "text" : "<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "quarter" } } );
</script>

## Edge cases

### Caption and content

You can include both `content` and a `caption` on figures:

<script>
component("figure", { "image": "https://unsplash.it/1200/600/?image=985", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-left" }, "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption that might end up crashing into the content", "position": "bottom-right" } } );
</script>

### Really huge content in a small box

If the content is too big for the image...

<script>
component("figure", { "image": "https://unsplash.it/1200/400/?image=985", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "third", "position": "top-left" } } );
</script>

**TODO**

### Options

#### Atoms

* **figure**
  * **image**: the URL of an image **(required)**
  * **caption**:
    * **text**: the text to appear in the caption (string)
    * **position**: the position of the caption
  * **content**:
    * **text**: the HTML to appear in the content (string)
    * **position**: the position of the content (_left _ or _right_)
  * **type**: the type of figure (classname added to `.c-figure--xxx`)