---

title: Accessibility
name: accessibility
category: layout
subcategory: General
layout: q+tq
id: accessibility-page

---

<div class="lead"><p>All our web pages should be accessible to any user, regardless of their level of technical knowledge, their device, or their ability.</p></div>

## Browser support

The pattern library works on all current browsers (e.g. Chrome, Firefox, Safari latest, IE11 and Edge). Internet Explorer is supported back to version 8, although this is constantly under review and may change if IE8 usage drops to a negligible amount.

## 'Skip to Content' link

Every page should have a 'Skip to content link', as the first thing in the code. The markup is as follows:

```markup
<a href="#Main-Content" class="o-skip-link is-invisible">Skip to content</a>
```

The link is invisible without making it hidden to screen readers. When the link is focussed it appears on the screen, allowing sighted readers to use it to navigate.

Obviously, the element with `id="Main-Content"` should be the main part of the page, after the header and navigation (and subnavigation, if present).

## ARIA roles

[Tabs](../css-components/tabs.html), [accordions](../css-components/accordion.html) and [buttons](../css-components/buttons.html) are already using ARIA roles to describe their purpose to screen readers.

When developing new components, check [the Accessibility Project](http://a11yproject.com/patterns/) to see if there is a simple ARIA role you can assign to it. Remember that ARIA roles may need to be updated by Javascript when objects are changed.
