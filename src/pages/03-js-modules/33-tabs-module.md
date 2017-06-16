---

title: Tabs
name: tabs-module
category: modules
subcategory: Component modules
layout: q+tq
id: tabs-page

---

<div class="lead"><p>[Tabbed content](../css-components/tabs.html) is used to display a lot of alternative text in one place. For example, they're used on the course pages to show prospective students what they can expect to study in each year of the course.</p></div>

To convert the tab markup to useable tabs, `new TABS` is called for each `.js-tabs` element.

There is an `.is-active` class applied to both the tab `li.c-tabs__tab` and to the `div.c-tabs__content`, which uses CSS to show and hide the relevant tab.

### Use

```javascript
var t = new TABS({
  container: $('.js-tabs')
});
```

### Options

 * **container** - the (usually `.js-tabs`) container element (required). THe module gets the component elements from within this one (required)

