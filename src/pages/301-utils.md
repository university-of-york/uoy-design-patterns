---

title: Utilities
name: utils
category: modules
layout: q+tq
id: utils-page

---

<p class="lead">This is a list of the utilities module. It has a range of different methods that can be used throughout the code.</p>

###UTILS.debounce(_fn_ function, _ms_ delay)

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

###UTILS.eachIfExists(_selector_ string, _fn_ function)

For many modules, we search through the DOM to find a certain _js-_prefixed class name and, if we find it, turn it in to a module, e.g. an accordion or a toggle switch.

This method does that for you, looking for _selector_ and calling _fn_ with each one.