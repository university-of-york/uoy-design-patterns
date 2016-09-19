---

title: Full width figures
name: full-width-figures
category: components
subcategory: Molecules
layout: wide
id: full-width-figures-page

---

<div class="lead"><p>Figures will stretch full-width when used within an `o-wrapper--wide`. The image takes up the full width of the screen, with the figure content centred on the screen, as if in a container with max-width of 1200px. Add a class of `c-figure--full-width` to the figure for this to work.</p></div>

Captions move out to the very edges (top left, bottom right etc) of the image.

### Full width figures

<script>
component("figure", { "type": "full-width", "image": "https://unsplash.it/800/400/?image=901", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption", "position": "bottom-right" } } )+
component("figure", { "type": "full-width", "image": "https://unsplash.it/800/400/?image=903", "caption": { "text" : "A plain caption below an image", "position": "below" } } )+
component("figure", { "type": "full-width", "image": "https://unsplash.it/1200/600/?image=905", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-left", "size": "half" } } )+
component("figure", { "type": "full-width", "image": "https://unsplash.it/1200/600/?image=907", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "bottom-right", "size": "third" } } );
</script>

### Full width banner figures

<script>
component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=909", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "half" } } )+
component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=911", "content": { "text" :"<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<p>So if you have loads and loads of content, the banner will get taller and taller and taller.</p>\n<p>And taller.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>\n<p class=\"cta\"><a href=\"#\">Button using .cta</a></p>\n</div>", "position": "right", "size": "half" } } )+
component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=916", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "third" } } )+
component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=919", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "right", "size": "third" } } )+
component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=921", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "quarter" } } )+
component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=923", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "right", "size": "quarter" } } )+
component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=985", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<p>This content should be some information, which is illustrated well by the image beneath.</p>\n<p>The caption down there in the corner could be a description of the image, or a copyright notice relating to the image itself.</p><a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "half" }, "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption that might end up crashing into the content", "position": "bottom-right" } } );
</script>

### Options (see [figures page](./css-components/figures.html))