---

title: Iframe resizer
name: iframe-resizer-module
category: modules
subcategory: General modules
layout: q+tq
id: iframe-resizer-module-page

---

<div class="lead"><p>This module includes the [iframe resizer module](http://davidjbradshaw.github.io/iframe-resizer/). Add a class of `js-iframe-resize` to your iframe to automatically resize iframes based on their content.</p></div>

**You will need to include the [content window script](https://www.york.ac.uk/static/stable/js/iframeResizer.contentWindow.min.js) on the page with the content.**

### Use

```javascript
  IFRAMERESIZER({options}, iframe);
```

**N.B. This uses the native script, so `iframe` must be a DOM node. If it's a jQuery object, use `.get(0)` to get the DOM node.**

Read the [documentation](http://davidjbradshaw.github.io/iframe-resizer/) for all the options.

### Example

<iframe class="js-iframe-resize" src="https://eventbookings-test.york.ac.uk/Pages/Events/BookEvent.aspx" frameborder="0" width="100%" scrolling="no" ></iframe>

### Options

 * **iframe** - (DOM node) the iframe to resize.