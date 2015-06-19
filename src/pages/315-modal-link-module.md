---

title: Modal link
name: modal-link-module
category: modules
subcategory: Component modules
layout: q+tq
id: modal-link-module-page

---

<p class="lead">You can turn any link you like in to a modal link using this module. It utilises the markup of the link in conjunction with the [modal module](modal-module.html).</p>


### Use

```javascript
var m = new MODALLINK({
  link: $('#some-link')
});
```

### Options

 * **link** - a jQuery object, which should be a link. The script will automatically parse for links with the class `.js-modal`.

