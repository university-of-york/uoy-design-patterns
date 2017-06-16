---

title: Utilities
name: utils
category: modules
subcategory: General modules
layout: q+tq
id: utils-page

---

<div class="lead"><p>This is a list of the utilities module. It has a range of different methods that can be used throughout the code.</p></div>

### UTILS.debounce(_fn_ function, _ms_ delay)

_Debouncing_ is a way of making your Javascript more efficient by reducing the number of times a function will be called. The code for the function is origianlly from Underscore.js, and was copied from [this blog post](http://davidwalsh.name/javascript-debounce-function).

It should be used when you have a function that is fired on, for example, keypresses or window resizes. It takes two arguments: the first is the function to be fired, the second is the fire rate limit in milliseconds. Here is an example:

```javascript
// Sample use of UTILS.debounce
var resizeFn = UTILS.debounce(function() {
  console.log('Window resized');
}, 250);

$window.on('resize', resizeFn);
```

In this example, the function will only be fired _only once_, 250 milliseconds after it's last invocation. This could save the function being called hundreds of times and improve your code.

### UTILS.isDev()

Returns `true` if you're on `10.0.2.2` or `localhost`, false if you're anywhere else.

### UTILS.breakEmailAddresses()

Adds a [word break opportunity &lt;wbr&gt;](https://developer.mozilla.org/en/docs/Web/HTML/Element/wbr) before the `@` on email addresses, so they break at appropriate points on small screens.

The following `div` has maximum width of 250px to show how this works.

<div style="max-width:290px; border:1px solid #ccc; padding:20px; margin:0 0 20px;">Send an email to <a href="mailto:engelbert.humperdinck@york.ac.uk">engelbert.humperdinck@york.ac.uk</a>.</div>

### UTILS.axisResize()

Fires a `resized.width` or `resized.height` event if the window is resized horizontally or vertically.

### UTILS.dontBreakSpaces(_ob_)

Replaces whitespace with a single `&nbsp;` to ensure titles don't wrap.

### UTILS.removeFromArray(_removeThis_ item in array, _fromThis_ array)

**Not in use**

### UTILS.preventOrphans()

Adds a `&nbsp;` between the last two words in a header or paragraph, in order to prevent orphans

### UTILS.fixLongBreadcrumb()

Adds `is-closed` class to breadcrumbs that are three or more lines. This collapses all but the first and last items to ellipses (&hellip;), which expand the whole breacrumb if clicked.

### UTILS.cleanBreadcrumb()

Removes the last item in the breadcrumb if the txt content is "Header". Also removes the preceding `.breadcrumb__separator`.

### UTILS.scrollToHash()

If a page is loaded with a hash in the URL (e.g. www.york.ac.uk/study**#postgraduate**) it may refer to a tab. If there is a tab on the page with that name then this function will fire a click event on the relevant tab and scroll to the top of the tab box.

If it's not a tab, normal fragment behaviour is not affected.

### UTILS.fontsActive(_fn_ function, _ths_ context)

Runs a function `fn` when fonts are activated, using `ths` as the context.

### UTILS.eachIfExists(_selector_ string, _fn_ function)

For many modules, we search through the DOM to find a certain _js-_prefixed class name and, if we find it, turn it in to a module, e.g. an accordion or a toggle switch.

This method does that for you, looking for _selector_ and calling _fn_ with each one.


