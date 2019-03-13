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

Figures are sized by the size of the image. If you add a `url` option it will stop being a `figure` element and become a linked anchor. This means the `figcaption` should switch to being a normal `div` and any links inside the content must be utility links (i.e. a `<span class="u-link">`) rather than an anchor.

There is a separate page for examples of [full-width figures](../css-components/full-width-figures.html).

## Figure captions

The usual caption is positioned in the corner of the image:

<script>
component("figure", { "image": "https://picsum.photos/800/400/?image=973", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption", "position": "bottom-right" } } );
</script>

The default location is in the bottom right corner, but can be positioned in any corner:

<script>
component("figure", { "image": "https://picsum.photos/800/400/?image=975", "caption" : { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> This is another caption", "position": "top-left" } } )
+component("figure", { "image": "https://picsum.photos/800/400/?image=976", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Here is yet another caption", "position": "top-right" } } )
+component("figure", { "image": "https://picsum.photos/800/400/?image=977", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Last caption, I promise", "position": "bottom-left" } } );
</script>

It can also be positioned below the image:

<script>
component("figure", { "image": "https://picsum.photos/800/400/?image=972", "caption": { "text" : "A plain caption below an image", "position": "below" } } );
</script>

## Figure content

The default width of the caption is a 50% at huge/large/medium sizes. On small/tiny screens the caption moves to be below the image. Banner content (like captions) can be positioned _top-left_, _top-right_, _bottom-left_ or _bottom-right_, and can be _half_, _third_ or _quarter_ size.

### Positions

#### Top left (default)

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=983", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-left" } } );
</script>

#### Top centre

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=984", "content": { "text" :"<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-centre" } } );
</script>

#### Top right

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=985", "content": { "text" :"<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-right" } } );
</script>

#### Bottom right

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=986", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "bottom-right" } } );
</script>

#### Bottom centre

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=987", "content": { "text" :"<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "bottom-centre" } } );
</script>

#### Bottom left

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=988", "content": { "text" :"<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "bottom-left" } } );
</script>

### Sizes

#### Half (default), position top-right

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=882", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "half", "position": "top-right" } } );
</script>

#### Third, position bottom-centre

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=884", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "third", "position": "bottom-centre" } } );
</script>

#### Quarter, position bottom-left

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=886", "content": { "text" : "<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "quarter", "position": "bottom-left" } } );
</script>

### Clickable figures

Buttons in clickable figures should be `<button>`s and any links in the text should be `<span>`s with a class of `u-link` (they will all link to the same location as the main clickable URL).

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=890", "url": "https://www.york.ac.uk", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And the <span class=\"u-link\">Gryphon</span> added 'Come, let's hear some of YOUR adventures.'</p>\n<button class=\"c-btn c-btn--medium c-btn--block c-btn--primary\">Click here for more</button>" } } );
</script>

## Edge cases

### Caption and content

You can include both `content` and a `caption` on figures:

<script>
component("figure", { "image": "https://picsum.photos/1200/600/?image=887", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-left" }, "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption that might end up crashing into the content", "position": "bottom-right" } } );
</script>

### Really huge content in a small box

If the content is too big for the image Javascript will kick in and update the banner height to automatically fit the content.

<script>
component("figure", { "image": "https://picsum.photos/1200/400/?image=888", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "third", "position": "top-left" } } )+
component("figure", { "image": "https://picsum.photos/1200/400/?image=889", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "size": "quarter", "position": "bottom-right" } } );
</script>

### Options

#### Atoms

* **figure**
  * **image**: the URL of an image **(required)**
  * **url**: the URL to link the figure to
  * **caption**:
    * **text**: the text to appear in the caption (string)
    * **position**: the position of the caption
  * **content**:
    * **text**: the HTML to appear in the content (string)
    * **position**: the position of the content (_left _ or _right_)
  * **type**: the type of figure (classname added to `.c-figure--xxx`)