---

title: Panels
name: panels
category: components
subcategory: Molecules
layout: q+tq
id: panels-page

---

<p class="lead">Panels are used to highlight certain elements of a page, in the same way that _boxout_ is used on the 2013 site.</p>

The default panel is simply some content.

<script>
component("panel", {
  "content": "<p>Atmospheric chemist Professor Alastair Lewis argues that clean air should be the engine of economic growth in China, rather than the brake.</p>"
});
</script>

A panel can have a highlight colour:

<script>
component("panel", {
  "content": "<p>Atmospheric chemist Professor Alastair Lewis argues that clean air should be the engine of economic growth in China, rather than the brake.</p>",
  "type":"highlight"
});
</script>

A compact panel can be used in places where space is at a premium:

<script>
component("panel", {
  "content": "<p>Atmospheric chemist Professor Alastair Lewis argues that clean air should be the engine of economic growth in China, rather than the brake.</p>",
  "type":"compact"
});
</script>

You can have a _header_:

<script>
component("panel", {
  "header": "<h5>Air pollution clouds economic growth in China</h5>",
  "content": "<p>Atmospheric chemist Professor Alastair Lewis argues that clean air should be the engine of economic growth in China, rather than the brake.</p>"
});
</script>

And an image:

<script>
component("panel", {
  "header": "<h5>Air pollution clouds economic growth in China</h5>",
  "image": "http://lorempixel.com/360/180/people/1",
  "content": "<p>Atmospheric chemist Professor Alastair Lewis argues that clean air should be the engine of economic growth in China, rather than the brake.</p>"
});
</script>

Or a _subheader_, under the image:

<script>
component("panel", {
  "image": "http://lorempixel.com/360/180/people/1",
  "subheader": "<h6>How the Chinese could improve the quality of the air they breathe</h6>",
  "content": "<p>Atmospheric chemist Professor Alastair Lewis argues that clean air should be the engine of economic growth in China, rather than the brake.</p>"
});
</script>

And a footer:

<script>
component("panel", {
  "header": "<h5>Air pollution clouds economic growth in China</h5>",
  "image": "http://lorempixel.com/360/180/people/1",
  "footer": "This article was first published on The Conversation website",
  "content": "<p>Atmospheric chemist Professor Alastair Lewis argues that clean air should be the engine of economic growth in China, rather than the brake.</p>"
});
</script>

And here's the whole lot together:

**N.B. Having a _header_ and a _subheader_ is pretty bad. Please avoid.**

<script>
component("panel", {
  "type": "default",
  "header": "<h5>Air pollution clouds economic growth in China</h5>",
  "image": "http://lorempixel.com/360/180/people/1",
  "subheader": "<h6>How the Chinese could improve the quality of the air they breathe</h6>",
  "footer": "This article was first published on The Conversation website",
  "content": "<p>Atmospheric chemist Professor Alastair Lewis argues that clean air should be the engine of economic growth in China, rather than the brake.</p>"
});
</script>

### KIS widget

Lastly, there's a special panel type for displaying the [KIS widget](https://www.hesa.ac.uk/includes/C14061_resources/download/Unistats_widget_user_guide.pdf?v=1.7). It uses the normal panel markup but with a `.c-panel--kis-widget` modifier.

<div class="c-panel c-panel--kis-widget">
  <div class="c-panel__content">
    <h2 class="c-panel--kis-widget__title">Unistats for this course</h2>
    <div class="c-panel--kis-widget__content is-visible@large+">
      <iframe id="unistats-widget-frame-horizontal" title="Unistats KIS Widget" src="//widget.unistats.ac.uk/Widget/10007167/UUBMATSMAT3~UBMATSMAT3/horizontal/small/en-GB/FullTime" scrolling="no" style="overflow: hidden; border: 0px none transparent; width: 615px; height: 150px;"></iframe>
    </div>
    <div class="c-panel--kis-widget__content is-visible@medium-">
      <iframe id="unistats-widget-frame-vertical" title="Unistats KIS Widget" src="//widget.unistats.ac.uk/Widget/10007167/UUBMATSMAT3~UBMATSMAT3/vertical/small/en-GB/FullTime" scrolling="no" style="overflow: hidden; border: 0px none transparent; width: 190px; height: 500px;"></iframe>
    </div>
  </div>
</div>

### Options

#### Molecules

* **panel**
  * **content**: text or HTML to go in the panel itself (required)
  * **type**: currently not in use
  * **header**: text or HTML to go in the panel header
  * **image**: URL of an image to go in the panel
  * **subheader**: text or HTML to go under the image (probably shouldn't be used in conjunction with header)
  * **footer**: text or HTML to go under the panel
