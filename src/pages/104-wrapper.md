---

title: Wrapper
name: wrapper
category: layout
layout: q+tq
id: wrapper-page

---

<div class="lead"><p>Wrappers are used to enclose large areas of content. There are a couple of versions, `o-wrapper--main` for the main content on the page, and `o-wrapper--wide` for a wrapper that stretches the full width of the page instead of being constrained to 1200px as the normal wrapper is.</p></div>

Wrappers are often given the class `.o-grid` in order to be the container for `.o-grid__row`s.

The `div` with the class `.o-wrapper--main` should also have the class `.js-wrapper--main` in order for it to pick up on the [page height fix](#).

```markup
<div class="o-wrapper">...</div>
```

```markup
<div class="o-wrapper o-wrapper--wide">...</div>
```

```markup
<div class="o-wrapper o-wrapper--main js-wrapper--main">...</div>
```