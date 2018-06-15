---

title: Global Notices
name: global-notices
category: components
subcategory: Atoms
layout: q+tq
id: global-notices-page

---


<div class="lead"><p>For when we need to show a list of items, for news articles, events listings, search results, and so on.</p></div>

For more prominent or important messages, _Global Notices_ can be highlighted which adds a more vibrant background colour to the notice.

_Global Notices_ can be _dismissable_, useful if their interaction is no longer needed on the page.

### A simple Global Notice

This is a simple _Global Notice_ this uses the default colours and type settings and is not dismissable. 

<script>
component("global-notices", { 
    "highlighted": false,
    "title": 'A simple, yet important notice',
    "description": 'This is a simple Global Notice example with a title and description',
    "dismissable": false
});
</script>

### A highlighted Global Notice

This is a _Global Notice_ highlighted in our branded colours that shows a title without a description. 

<script>
component("global-notices", { 
    "highlighted": true,
    "title": 'A highlighted Global Notice example',
    "description": '',
    "dismissable": false
});
</script>

### A Global Notice that is dismissable

This is a highlighted _Global Notice_ as the previous example, but this one can be dismissed using the 'x' icon that is added via the <code>"dismissable": true</code> option.

<script>
component("global-notices", { 
    "highlighted": true,
    "title": 'A highlighted Global Notice',
    "description": 'This one also has a nice description section under the title and can be dismissed',
    "dismissable": true
});
</script>


### Options

#### Atoms

* **global notice**
  * **highlighted**: _true_ or _false_ (optional, default _false_)
  * **title**: the title that is added into the global notice
  * **description**: a brief paragraph describing the notice
  * **dismissable**: Boolean. Whether the alert is dismissable or not (optional, default _false_)


