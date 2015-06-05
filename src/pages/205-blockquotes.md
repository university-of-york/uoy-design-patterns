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
component("blockquote", { "content": "Lorem ipsum Excepteur proident ut esse Ut sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum."})
+component("blockquote", { "content": "Lorem ipsum excepteur proident ut esse sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum.", "cite": "Voltaire"})
+component("blockquote", { "content": "Lorem ipsum excepteur proident ut esse sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum.", "cite": "Voltaire", "image": "http://lorempixel.com/120/120/people/6"})
+component("blockquote", { "content": "Lorem ipsum excepteur proident ut esse sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum.", "cite": "Voltaire", "image": "http://lorempixel.com/120/120/people/7", "imagefloat":"left"});
</script>

### Pull quote-style blockquotes

<script>
component("blockquote", { "type": "pull-quote", "content": "Lorem ipsum excepteur proident ut esse sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum."});
</script>

### Image blockquotes

<script>
component("blockquote", { "type": "image-quote", "content": "<p>Lorem ipsum excepteur proident ut esse sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>"})
+component("blockquote", { "type": "image-quote", "content": "<p>Lorem ipsum excepteur proident ut esse sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>", "cite": "Woody Allen"})
+component("blockquote", { "type": "image-quote", "content": "<p>Lorem ipsum excepteur proident ut esse sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>", "cite": "Woody Allen", "image": "http://lorempixel.com/120/120/people/8"})
+component("blockquote", { "type": "image-quote", "content": "<p>Lorem ipsum excepteur proident ut esse sit ullamco voluptate commodo nostrud amet culpa sint ullamco cillum.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>", "cite": "Woody Allen", "image": "http://lorempixel.com/120/120/people/9", "imagefloat":"left"});
</script>


### Options

#### Atoms

* **blockquote**
  * **type**: Choose from _default_ or _pull-quote_ (or nothing)
  * **content**: The text to go in the alert. Can include HTML markup (required)
  * **cite**: Who said this?
  * **image**: Well give me a URL for their picture
  * **imagefloat**: And what side do you want the image on? (Defaults to right)
