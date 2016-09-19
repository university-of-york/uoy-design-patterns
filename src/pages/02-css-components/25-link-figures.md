---

title: Link figures
name: link-figures
category: components
subcategory: Molecules
layout: q+tq
id: link-figures-page

---

<div class="lead"><p>Link figures are used as an 'in-page' navigation - often on landing pages where we're using a full-width page and there's no subnavigation.</p></div>

Use the [grid system](./layout/grid.html) to arrange them on a page.

Available in a range of colours, for better or for worse. Use wisely.

<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "quarter", "atoms": {
      "figure-link": { "color":"pink", "image": "https://unsplash.it/400/600/?image=982", "url":"http://google.com", "content": { "text": "<p>Here is some content.</p>" } }
    } } },
    { "grid-box": { "size": "quarter", "atoms": {
      "figure-link": { "color":"teal", "image": "https://unsplash.it/400/600/?image=983", "url":"http://google.com", "content": { "text": "<p>Here is some content.</p>" } }
    } } },
    { "grid-box": { "size": "quarter", "atoms": {
      "figure-link": { "color":"gold", "image": "https://unsplash.it/400/600/?image=984", "url":"http://google.com", "content": { "text": "<p>Here is some content.</p>" } }
    } } },
    { "grid-box": { "size": "quarter", "atoms": {
      "figure-link": { "color":"blue", "image": "https://unsplash.it/400/600/?image=985", "url":"http://google.com", "content": { "text" : "<p>Here is some content.</p>" } }
    } } }
  ] } }
] });
</script>
<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"charcoal", "image": "https://unsplash.it/400/600/?image=986", "url":"http://google.com", "content": { "text": "<h3>Content title</h3>\n<p>Here is some content.</p>" } }
    } } },
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"pink", "image": "https://unsplash.it/400/600/?image=987", "url":"http://google.com", "content": { "text": "<h3>Content title</h3>\n<p>Here is some content.</p>" } }
    } } },
    { "grid-box": { "size": "third", "atoms": {
      "figure-link": { "color":"teal", "image": "https://unsplash.it/400/600/?image=988", "url":"http://google.com", "content": { "text" : "<h3>Content title</h3>\n<p>Here is some content.</p>" } }
    } } }
  ] } }
] });
</script>
<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "half", "atoms": {
      "figure-link": { "color":"gold", "image": "https://unsplash.it/400/600/?image=989", "url":"http://google.com", "content": { "text" :"<h3>Content title</h3>\n<p>Here is some content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>" } }
    } } },
    { "grid-box": { "size": "half", "atoms": {
      "figure-link": { "color":"blue", "image": "https://unsplash.it/400/600/?image=990", "url":"http://google.com", "content": { "text" :"<h3>Content title</h3>\n<p>Here is some content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>" } }
    } } }
  ] } }
] });
</script>
<script>
component("grid", { "atoms":[
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "full", "atoms": {
      "figure-link": { "color":"charcoal", "image": "https://unsplash.it/800/800/?image=991", "url":"http://google.com", "content": { "text" :"<h3>Content title</h3>\n<p>Here is some content.</p>\n<button class=\"c-btn c-btn--medium c-btn--block\">Click here for more</button>" } }
    } } }
  ] } }
] });
</script>

### Options (see [figures page](./css-components/figures.html))