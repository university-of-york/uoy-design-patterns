---

title: Blockquotes
name: blockquotes
category: components
subcategory: Atoms
layout: q+tq
id: blockquotes-page

---

## Blockquotes

A way to section of quoted speech. They come in a couple of different flavours (default and pull-quote) and the content can include HTML if needed. You can also declare who the quote is from, using `cite`, and add an image to the quote too, floated right by default but to the left if you fancy it.

### Default blockquotes

<script>
component("blockquote", { "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>"});
</script>
<script>
component("blockquote", { "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>", "cite": "<p>Madeline, PhD student.</p>"});
</script>
<script>
component("blockquote", { "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>", "cite": "<p>Madeline, PhD student.</p>", "image": "../media/madeline-250px.jpg"});
</script>
<script>
component("blockquote", { "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>", "cite": "<p>Madeline, PhD student.</p>", "image": "../media/madeline-250px.jpg", "imagefloat":"left"});
</script>

### Pull quote-style blockquotes

<script>
component("blockquote", { "type": "pull-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>"});
</script>
<script>
component("blockquote", { "type": "pull-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York. </p>", "cite":"<p>Madeline, PhD student. </p>"});
</script>

### Image blockquotes

<script>
component("blockquote", { "type": "image-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>"});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>", "cite": "<p>Madeline, PhD student.</p>"});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p><p>I’ve drunk tea by the riverside at Knaresborough, I’ve eaten chips on the Filey seafront, I’ve watched gliders take off Sutton Bank and I’ve seen the monks wondering the grounds of Ampleforth.</p>", "cite": "<p>Madeline, PhD student. <span class=\"u-link\">Read Madeline's guest blog post</span>.</p>", "image": "../media/madeline-250px.jpg"});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p><p>I’ve drunk tea by the riverside at Knaresborough, I’ve eaten chips on the Filey seafront, I’ve watched gliders take off Sutton Bank and I’ve seen the monks wondering the grounds of Ampleforth.</p>", "cite": "<p>Madeline, PhD student. <span class=\"u-link\">Read Madeline's guest blog post</span>.</p>", "image": "../media/madeline-250px.jpg", "imagefloat":"left"});
</script>

### Large blockquotes

<script>
component("blockquote", { "type": "pull-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>", "cite":"<p>Madeline, PhD student.</p>", "size": "large"});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p>", "cite": "<p>Madeline, PhD student. <span class=\"u-link\">Read Madeline's guest blog post</span>.</p>", "image": "../media/madeline-250px.jpg", "imagefloat":"left", "size": "large"});
</script>

### Linked blockquotes

You can turn the whole blockquote into a link (for example, linking to blog posts).

<script>
component("blockquote", { "type": "pull-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p><p>I’ve drunk tea by the riverside at Knaresborough, I’ve eaten chips on the Filey seafront, I’ve watched gliders take off Sutton Bank and I’ve seen the monks wondering the grounds of Ampleforth.</p>", "cite":"<p>Madeline, PhD student. <span class=\"u-link\">Read Madeline's guest blog post</span>.</p>", "link": "#"});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>Through being involved with University of York cycling club I have discovered almost every village, every landmark, every hill, every Yorkshire oddity within a 30-mile radius of York.</p><p>I’ve drunk tea by the riverside at Knaresborough, I’ve eaten chips on the Filey seafront, I’ve watched gliders take off Sutton Bank and I’ve seen the monks wondering the grounds of Ampleforth.</p>", "cite": "<p>Madeline, PhD student. <span class=\"u-link\">Read Madeline's guest blog post</span>.</p>", "image": "../media/madeline-250px.jpg", "imagefloat":"left", "link": "#"});
</script>

### Options

#### Atoms

* **blockquote**
  * **type**: Choose from _default_, _image-quote_ or _pull-quote_ (or nothing)
  * **content**: The text to go in the quote. Can include HTML markup (required)
  * **cite**: Who said this?
  * **image**: URL for their picture
  * **imagefloat**: Which side do you want the image on? (Defaults to right)
  * **size**: Choose from _large_ or _default_.
