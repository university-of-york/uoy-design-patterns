---

title: Fullscreen
name: fullscreen-module
category: modules
subcategory: General modules
layout: q+tq
id: fullscreen-module-page

---

<div class="lead"><p>The fullscreen module is mostly for use within another module. It allows a button to be created that, when clicked, toggles the classname `is-fullscreen` on its `target` element.</p></div>

Used within the [map module](../js-modules/map-module.html).

### Use

```javascript
var t = new FULLSCREEN({
  button: $('#fs-button'),
  target: $('#fs-target')
});
```
### Options

 * **button** - (jQuery object) the element to add the click event to (required).
 * **target** - (jQuery object) the container element to make full screen (optional). If this isn't passed then the target will be figured out from the `href` of the `button`.