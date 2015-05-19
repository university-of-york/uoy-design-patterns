---

title: JS Modules
name: modules
category: false
layout: q+tq
id: moduless-page

---

<p class="lead">We use [RequireJS](http://requirejs.com) as an AMD loader for our scripts. This means we can separate JS functionality into separate files. This page contains a starting point for new modules, with some tips as to how to structure the module.</p>

**N.B. We are including [es5-shim](https://github.com/es-shims/es5-shim), which allows us to safely use ES5 methods like `Array.prototype.forEach`, `Object.keys`, `Date.now`. For the full list of methods take a look at https://github.com/es-shims/es5-shim#complete-tests.**

Firstly, define which other modules this module needs

```javascript
define(['jquery', 'app/color'], function ($, COLOR) {
```

Next, declare any of the "private" variables. These will only be accessible inside the module. It's useful to keep these at the top in case you want to change them. These should be non-user-defined variables: remember, this module may be used in several places. Anything you want to be changeable you must pass through in the options object. You should also set default values for these user-defined values in case they aren't passed through.

```javascript
var default = {
  width: 250,
  easing: 'ease-in',
  isCompatible: true
}

var topSpeed = 1000,
    thankyouText = 'Thanks for your help',
    canFlip = true;
```

The same is true for "private" functions: they will only exist within the module

```javascript
var colorSwap = function(a, b) {
  // Remember to return something
}
```

Now you can define the module. Use UPPERCASE for complex objects like this. This is how you will instantiate the module in another file (`var s = new SAMPLE(options);`).

```javascript
var SAMPLE = function(options) {
  // Get the options or their defaults
  this.width = options.width || DEFAULT.width;
  this.easing = options.easing || DEFAULT.easing;
  this.isCompatible = options.isCompatible || DEFAULT.isCompatible;
  // Do some setup stuff
  // Return true or false (or something else)
};
```

Then you can define any "public" variables that need to be accessed outside of the module&hellip;

```javascript
SAMPLE.color = colorSwap('#fff', '#000');
```

&hellip; and "public" functions&hellip;

```javascript
SAMPLE.setColor = function(val) {
  // Always return true or false from setters
}

SAMPLE.getColor = function() {
  // Return the value
}
```

Lastly, return the module so that it's available to other modules that need to `define` it.

```javascript
return SAMPLE;
```

**TODO:** We intend to make all our JS unit-testable, so it must be written with a unit test in mind. In fact, write the test first - it'll help you define what the JS really need to do.
