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
component("button", { "text": "Click me" });
</script>
```

And it will render both the HTML markup and the code to produce it, taken straight from the _components/button.mustache_ source.

<script>
component("button", { "text": "Click me" });
</script>

To add additional information, pass parameters to the component call:

```markup
<script>
component("button", { "type": "warning", "text": "Help" });
</script>
```

This would render:

<script>
component("button", { "type": "warning", "text": "Help" });
</script>

More complex components (molecules) which combine atoms, will be pre-rendered from passed-through `atoms` array. The atoms can be an array of simple objects with `"component-name": "options-object"`.

```markup
<script>
component("button-group", { "atoms": [
  { "button": { "text": "Back", "size": "medium", "icon-before": "chevron-left" } },
  { "button": { "text": "Help", "size": "medium" } },
  { "button": { "text": "Next", "size": "medium", "icon-after": "chevron-right" } }
]})
</script>
```
Alternatively, the atoms array can be an object with a `"component"` key and an `"options"` key. This can be useful if you need to pass through several different types of component:

```markup
<script>
component("button-group", { atoms: [
	{
		"component": "button",
		"options": { "text": "Back", "size": "medium", "icon-before": "chevron-left" }
	},
	{
		"component": "button",
		"options": { "text": "Help", "size": "medium" }
	},
	{
		"component": "button",
		"options": { "text": "Next", "size": "medium", "icon-after": "chevron-right" }
	}
]});
</script>
```

Both these examples would render the same code:

<script>
component("button-group", { "atoms": [
  { "button": { "text": "Back", "size": "medium", "icon-before": "chevron-left" } },
  { "button": { "text": "Help", "size": "medium" } },
  { "button": { "text": "Next", "size": "medium", "icon-after": "chevron-right" } }
]})
</script>
