---

title: Google Docs
name: google-docs
category: modules
subcategory: General modules
layout: q+tq
id: google-docs-page

---

<p class="lead">Google Docs are a great way to store data that needs to be easily editable and instantly updated. This module grabs data from a Google Doc and returns a two-dimensional array - an array of rows, each of which is an array using the column headings as keys.</p>

### Use

```javascript
var t = new GOOGLEDOC({
  id: '1wbTOk0YHux4LxJZxOlE_nhmGBdi7mT9NL-WCwB7-gT8'
});

$(window).on('data:loaded', function(e, id, data) {
  // Check that id matches your Google Doc ID...
  // Do stuff with data
});
```

### Options

  Pass an _options_ object with the following keys:

  * **id** - the element on which to toggle the class (required)


-