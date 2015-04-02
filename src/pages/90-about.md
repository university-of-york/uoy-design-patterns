---

title: About
name: about
category: false
layout: q+tq
id: about

---

<p class="lead">This is a meta-page about how the documentation is built, with examples of how you can call new component templates into pages.</p>

You can include an atomic component like so:

```markup
<script>
component("button");
</script>
```

And it will render both the HTML markup and the code to produce it, taken straight from the _components/button.mustache_ source.

<button class="btn">Click</button>

```markup
<button class="btn">Click</button>
```

To add additional information, pass parameters to the component call:

```markup
<script>
component("button", { "type": "warning", "text": "Help" });
</script>
```

This would render:

<button class="btn btn-warning">Help</button>

```markup
<button class="btn btn-warning">Help</button>
```

More complex components (molecules) which combine atoms, will be pre-rendered from passed-through `atoms` array. The atoms can be an array of simple objects with `"component-name": "options-object"`.

```markup
<script>
component("button-group", { atoms: [
	{ "button": { "text": "Back" } },
	{ "button": { "type": "warning", "text": "Help", "icon-after": "help" } },
	{ "button": { "text": "Next" } }
]});
</script>
```
Alternatively, the atoms array can be an object with a `"component"` key and an `"options"` key. This can be useful if you need to pass through several different types of component:

```markup
<script>
component("button-group", { atoms: [
	{
		"component": "button",
		"options": { "text": "Back" }
	},
	{
		"component": "button",
		"options": { "type": "warning", "text": "Help", "icon-after": "star" }
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
	<button class="btn btn-warning">Help <i class="icon icon-star"></i></button>
	<button class="btn">Next</button>
</div>

```markup
<div class="btn-group">
	<button class="btn">Back</button>
	<button class="btn btn-warning">Help <i class="icon icon-star"></i></button>
	<button class="btn">Next</button>
</div>
```
