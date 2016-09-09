---

title: Full width figures
name: full-width-figures
category: components
subcategory: Molecules
layout: wide
id: full-width-figures-page

---

<div class="lead"><p>Full width figures must be used within an `o-wrapper--wide`. The image takes up the full width of the screen, with the figure content centred on the screen, with a max-width of 1200px. You don't need to add additional classes for this to work.</p></div>

### Full width figures

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=973", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption", "position": "bottom-right" } } )+
component("figure", { "image": "https://unsplash.it/800/400/?image=972", "caption": { "text" : "A plain caption below an image", "position": "below" } } );
</script>

### Full width banner figures

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