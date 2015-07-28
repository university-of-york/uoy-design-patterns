---

title: Visibility
name: visibility
category: layout
layout: q+tq
id: visibility-page

---

<p class="lead">There are a range of _state_ classes which can be used to show or hide elements at a certain width.</p>

The form of the class is `.is-visible` or `.is-hidden`. On their own, these can be used to show or hide elements, usually using Javascript to unhide them when needed.

```css
.is-hidden {}
.is-visible {}
```

**@-classes** can be used to specify if an element's visibility is dependent on screen size.

The @-classes are as follows:

```css
.is-hidden@tiny {}
.is-hidden@small {}
.is-hidden@medium {}
.is-hidden@large {}
.is-hidden@huge {}

.is-visible@tiny {}
.is-visible@small {}
.is-visible@medium {}
.is-visible@large {}
.is-visible@huge {}
```

It's also possible to target elements with **@-classes** based on max- and min- sizes. Simply append a **+** or a **-** to the class name. For example, `.is-hidden@small-` has the same effect as `.is-hidden@small .is-hidden@tiny`.
