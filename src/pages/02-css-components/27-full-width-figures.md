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

#### With caption

<script>
component("figure", { "type": "full-width", "image": "https://unsplash.it/1200/300/?image=901", "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption", "position": "bottom-right" } } );
</script>

#### With caption below

<script>component("figure", { "type": "full-width", "image": "https://unsplash.it/1200/300/?image=903", "caption": { "text" : "A plain caption below an image", "position": "below" } } );
</script>

#### With top-left, half-width content

<script>component("figure", { "type": "full-width", "image": "https://unsplash.it/1200/300/?image=905", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "top-left", "size": "half" } } );
</script>

#### With bottom-right, third-width, oversize content

<script>component("figure", { "type": "full-width", "image": "https://unsplash.it/1200/300/?image=907", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "bottom-right", "size": "third" } } );
</script>

### Full width banner figures

#### Half size content

<script>
component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=909", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "half" } } );
</script>
<script>component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=911", "content": { "text" :"<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<p>So if you have loads and loads of content, the banner will get taller and taller and taller.</p>\n<p>And taller.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>\n<p class=\"cta\"><a href=\"#\">Button using .cta</a></p>\n</div>", "position": "right", "size": "half" } } );
</script>

#### Third size content

<script>component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=916", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "third" } } );
</script>
<script>component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=919", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "right", "size": "third" } } );
</script>

#### Quarter size content

<script>component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=921", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "quarter" } } );
</script>
<script>component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/600/?image=923", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "right", "size": "quarter" } } );
</script>
<script>component("figure", { "type":"banner c-figure--full-width", "image": "https://unsplash.it/1200/100/?image=985", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<p>This content should be some information, which is illustrated well by the image beneath.</p>\n<p>The caption down there in the corner could be a description of the image, or a copyright notice relating to the image itself.</p><a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a></div>", "position": "left", "size": "half" }, "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption that might end up crashing into the content", "position": "bottom-right" } } );
</script>

### Full-width clickables

#### Figure (fits to image)

<script>
component("figure", { "image": "https://unsplash.it/1200/300/?image=986", "type":"full-width", "url": "https://www.york.ac.uk", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And the <span class=\"u-link\">Gryphon</span> added 'Come, let's hear some of YOUR adventures.'</p>\n<button class=\"c-btn c-btn--medium c-btn--block c-btn--primary\">Click here for more</button>" } } );
</script>

#### Banner (fits to content)

<script>component("figure", { "image": "https://unsplash.it/1200/600/?image=987", "type":"banner c-figure--full-width", "url": "https://www.york.ac.uk", "content": { "text" : "<h3>Alice In Wonderland</h3>\n<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And the <span class=\"u-link\">Gryphon</span> added 'Come, let's hear some of YOUR adventures.'</p>\n<button class=\"c-btn c-btn--medium c-btn--block c-btn--primary\">Click here for more</button>" } } );
</script>


### Options (see [figures page](../css-components/figures.html))