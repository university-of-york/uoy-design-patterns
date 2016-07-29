---

title: Utilities
name: utilities
category: layout
subcategory: General
layout: q+tq
id: utilities-page

---

<div class="lead"><p>Utility classes are namespaced with the `u-` prefix. They are classes that can be added to any element to style them differently.</p></div>

## Look like a link

Since you can't nest an anchor tag `<a>` within another `<a>`, add this class to a `<span>` within a link to make some text look link-like. Used in [blockquotes](./css-components/blockquotes.html).

<a href="#" style="color:#333; text-decoration:none;">This text is all clickable but has been styled to look normal. <span class="u-link">But this looks and acts like a link.</span></a>

```markup
<a href="#" style="color:#333; text-decoration:none;">This text is all clickable but has been styled to look normal. <span class="u-link">But this looks and acts like a link.</span></a>
```

## Paragraph-like margin

For those times when you need to use a `<div>` (or something else) for semantic/CMS reasons, but want it to have margin like a `<p>`.

<div class="u-paragraph">This should really be a paragraph</div>

```markup
<div class="u-paragraph">This should really be a paragraph</div>
```

## Multi-column content

Useful for long lists, multi-column content splits the content over two, three or four columns. All multi columns will drop to at most three columns on large screens, two on medium screens and all will drop to a single column on small or tiny screens.

<ul class="u-two-columns">
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
  <li>Item four</li>
  <li>Item five</li>
  <li>Item six</li>
  <li>Item seven</li>
  <li>Item eight</li>
  <li>Item nine</li>
  <li>Item ten</li>
</ul>
<ul class="u-three-columns">
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
  <li>Item four</li>
  <li>Item five</li>
  <li>Item six</li>
  <li>Item seven</li>
  <li>Item eight</li>
  <li>Item nine</li>
  <li>Item ten</li>
</ul>
<ul class="u-four-columns">
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
  <li>Item four</li>
  <li>Item five</li>
  <li>Item six</li>
  <li>Item seven</li>
  <li>Item eight</li>
  <li>Item nine</li>
  <li>Item ten</li>
</ul>

```markup
<ul class="u-two-columns">
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
  <li>Item four</li>
  <li>Item five</li>
  <li>Item six</li>
  <li>Item seven</li>
  <li>Item eight</li>
  <li>Item nine</li>
  <li>Item ten</li>
</ul>
<ul class="u-three-columns">
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
  <li>Item four</li>
  <li>Item five</li>
  <li>Item six</li>
  <li>Item seven</li>
  <li>Item eight</li>
  <li>Item nine</li>
  <li>Item ten</li>
</ul>
<ul class="u-four-columns">
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
  <li>Item four</li>
  <li>Item five</li>
  <li>Item six</li>
  <li>Item seven</li>
  <li>Item eight</li>
  <li>Item nine</li>
  <li>Item ten</li>
</ul>
```
