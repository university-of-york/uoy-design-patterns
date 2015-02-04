---

title: Homepage
name: index
category: Components
layout: default
id: homepage

---

This is an example of how the documentation pages would work.

You can include an atomic component like so:

```js
<script>
component("button");
</script>
```

And it will render both the HTML markup and the code to produce it, taken straight from the _components/button.mustache source.

<button class="btn">Click</button>

```html
<button class="btn">Click</button>
```

To add additional information, pass parameters to the component call:

```js
<script>
component("button", { "type": "warning", "text": "Help" });
</script>
```

This would render:

<button class="btn btn-warning">Help</button>

```html
<button class="btn btn-warning">Help</button>
```

More complex components (molecules) which combine atoms, will be pre-rendered from passed-through `atoms` array. The atoms can be an array of simple objects with `"component-name": "options-object"`.

```js
<script>
component("button-group", { atoms: [
	{ "button": { "text": "Back" } },
	{ "button": { "type": "warning", "text": "Help", "icon-after": "help" } },
	{ "button": { "text": "Next" } }
]});
</script>
```

Alternatively, the atoms array can be an object with a `"component"` key and an `"options"` key. This can be useful if you need to pass through several different types of component:

```js
<script>
component("button-group", { atoms: [
	{
		"component": "button",
		"options": { "text": "Back" }
	},
	{
		"component": "button",
		"options": { "type": "warning", "text": "Help", "icon-after": "help" }
	},
	{
		"component": "button",
		"options": { "text": "Next" }
	}
]});
</script>
```

Both these examples would render the same code:

<div class="btn-group">
	<button class="btn">Back</button>
	<button class="btn btn-warning">Help <i class="icon icon-help"></i></button>
	<button class="btn">Next</button>
</div>

```html
<div class="btn-group">
	<button class="btn">Back</button>
	<button class="btn btn-warning">Help <i class="icon icon-help"></i></button>
	<button class="btn">Next</button>
</div>
```