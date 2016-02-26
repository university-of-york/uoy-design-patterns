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
component("blockquote", { "content": "It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries."});
</script>
<script>
component("blockquote", { "content": "It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.", "cite": "Dr. Rob Davis<br>Department of Computer Science"});
</script>
<script>
component("blockquote", { "content": "It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.", "cite": "Dr. Rob Davis<br>Department of Computer Science", "image": "media/rob.jpg"});
</script>
<script>
component("blockquote", { "content": "It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.", "cite": "Dr. Rob Davis<br>Department of Computer Science", "image": "media/rob.jpg", "imagefloat":"left"});
</script>

### Pull quote-style blockquotes

<script>
component("blockquote", { "type": "pull-quote", "content": "It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries."});
</script>
<script>
component("blockquote", { "type": "pull-quote", "content": "It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.", "cite":"Dr. Rob Davis<br>Department of Computer Science"});
</script>

### Image blockquotes

<script>
component("blockquote", { "type": "image-quote", "content": "<p>It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>"});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>", "cite": "Dr. Rob Davis<br>Department of Computer Science"});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>", "cite": "Dr. Rob Davis<br>Department of Computer Science", "image": "media/rob.jpg"});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>", "cite": "Dr. Rob Davis<br>Department of Computer Science", "image": "media/rob.jpg", "imagefloat":"left"});
</script>

### Large blockquotes

<script>
component("blockquote", { "type": "pull-quote", "content": "It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.", "cite":"Dr. Rob Davis<br>Department of Computer Science", "large": true});
</script>
<script>
component("blockquote", { "type": "image-quote", "content": "<p>It’s incredible to think that research carried out at York has gone on to have such a major impact in one of the world’s biggest manufacturing industries.</p><p>Mollit sit ut id culpa adipisicing voluptate ut veniam deserunt ad veniam ullamco quis.</p>", "cite": "Dr. Rob Davis<br>Department of Computer Science", "image": "media/rob.jpg", "imagefloat":"left", "large": true});
</script>

### Options

#### Atoms

* **blockquote**
  * **type**: Choose from _default_, _image-quote_ or _pull-quote_ (or nothing)
  * **content**: The text to go in the alert. Can include HTML markup (required)
  * **cite**: Who said this?
  * **image**: Well give me a URL for their picture
  * **imagefloat**: And what side do you want the image on? (Defaults to right)
  * **large**: Boolean. Makes the text larger.
