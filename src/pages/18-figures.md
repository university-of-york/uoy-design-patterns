---

title: Figures
name: figures
category: components
layout: default
id: captions-page

---

## Figures

You can add text to an image by using a `figure` component with a `figcaption`.

<script>
component("figure", { "image": "http://lorempixel.com/200/200/people/7", "caption": "What's this then?"});
</script>

The default location is in the bottom left corner, but can be positioned in any corner:

<script>
component("figure", { "image": "http://lorempixel.com/200/200/people/1", "caption": "This is a caption", "position": "bottom-left"})
+component("figure", { "image": "http://lorempixel.com/200/200/people/2", "caption": "This is another caption", "position": "top-left"})
+component("figure", { "image": "http://lorempixel.com/200/200/people/3", "caption": "Here is yet another caption", "position": "top-right"})
+component("figure", { "image": "http://lorempixel.com/200/200/people/4", "caption": "Last caption, I promise", "position": "bottom-right"});
</script>

It's possible to put HTML into a caption:

<script>
component("figure", { "image": "http://lorempixel.com/600/400/people/5", "caption": "<h4>Look at this for a caption!</h4><p>Add in as much content as you want, being careful that the amount of content you add doesn't overwhelm the image.</p>"});
</script>

### Options

#### Atoms

* figure
  * **image**: the URL of an image **(required)**
  * **caption**: the text to appear in the caption **(required)**
