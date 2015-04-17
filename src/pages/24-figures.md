---

title: Figures
name: figures
category: molecules
layout: q+tq
id: figures-page

---

<p class="lead">You can add text to an image by using a `figure` component with a `figcaption`.</p>

<script>
component("figure", { "image": "http://lorempixel.com/200/200/people/7", "caption": "Simple text caption"});
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

### Defined widths and heights

In the following helper classes `.figure-w400_` means `width:400px;` (these helper classes only exist in the documentation settings and aren't for use in the wild). Each of the examples is shown with a wide image (800px x 400px) and a tall image (400px x 800px) for comparison.

#### Defined width:

<script>
component("figure", { "type":"w400", "image": "http://lorempixel.com/800/400/people/5"});
</script>
<script>component("figure", { "type":"w400", "image": "http://lorempixel.com/400/800/people/6"});
</script>

#### Defined height:

<script>
component("figure", { "type":"h400", "image": "http://lorempixel.com/400/800/people/7"});
</script>
<script>
component("figure", { "type":"h400", "image": "http://lorempixel.com/800/400/people/8"});
</script>

#### Defined width and height:

Putting an `img` into a `figure` element also has the following benefit: the image will be vertically and horizontally centered, even if it overlaps. **This only works when the figure has a defined height and width.**

_The following image is 800px wide and 400px high_

<script>
component("figure", { "type":"w400 c-figure--h400", "image": "http://lorempixel.com/800/400/people/9"});
</script>

_The following image is 400px wide and 800px high_

<script>
component("figure", { "type":"w400 c-figure--h400", "image": "http://lorempixel.com/400/800/people/9"});
</script>

_The following image is 800px wide and 800px high_

<script>
component("figure", { "type":"w400 c-figure--h400", "image": "http://lorempixel.com/800/800/people/10"});
</script>


### Options

#### Atoms

* **figure**
  * **image**: the URL of an image **(required)**
  * **caption**: the text to appear in the caption
  * **position**: the position of the caption
  * **type**: the type of figure
