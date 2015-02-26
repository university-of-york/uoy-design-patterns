---

title: Buttons
name: buttons
category: Components
layout: default
id: buttons-page

---

## Buttons

Buttons come in four different types and three different sizes. Usually a `button` element should be used, although an `a`, an `input[type=button]`, an `input[type=reset]` or an `input[type=submit]` could be used.

The simplest is just a plain button:

<script>
component("button", { "text": "Click me" });
component("button-link", { "text": "Go here", "href": "http://google.com" });
component("button-input", { "text": "Send" });
component("button-reset", { "text": "Reset" });
component("button-submit", { "text": "Submit" });
</script>

Other types are _cancel_, _primary_ and _highlight_:

<script>
component("button", { "text": "Cancel", "type": "cancel" });
component("button", { "text": "Click this!", "type": "primary" });
component("button", { "text": "Or this", "type": "highlight" });
</script>

You can define the size of the button too:

<script>
component("button", { "text": "Tiny button", "size": "tiny" });
component("button", { "text": "Small button", "size": "small" });
component("button", { "text": "Medium button", "size": "medium" });
component("button", { "text": "Large button", "size": "large" });
component("button", { "text": "Huge button", "size": "huge" });
</script>

It's also easy to add an icon to a button, either at the front, the end, or both (which doesn't look good, so don't do it).

<script>
component("button", { "text": "Like", "icon-before": "heart" });
component("button", { "text": "Play", "icon-after": "media-play" });
component("button", { "text": "Please don't do this", "icon-before": "musical-note", "icon-after": "person" });
</script>

You can join this all together to make a monster button:

<script>
component("button", { "text": "Look at me!", "icon-after": "thumb-up", "size": "large", "type": "primary" });
</script>

## Button groups

You can combine buttons together in a `btn-group`. This will join the buttons together seamlessly (as long as they're all the same size. Otherwise, results can be unpredictable.).

<script>
component("button-group", { atoms: [
  { "button": { "text": "Back" } },
  { "button": { "type": "warning", "text": "Help", "icon-after": "shield" } },
  { "button": { "text": "Next" } }
]});
component("button-group", { atoms: [
  { "button": { "text": "Back", "size": "large" } },
  { "button": { "type": "cancel", "text": "Help", "icon-after": "command", "size": "large" } },
  { "button": { "type": "highlight", "text": "Next", "size": "large" } }
]});
</script>

### Options

#### Atoms

* button
* button-link
* button-input
* button-submit
  * **text**: the text on the button **(required)**
  * **type**: one of _default_ (default), _cancel_, _primary_ and _highlight_
  * **size**: one of _tiny_, _small_, _medium_ (default), _large_ or _huge_
  * **icon-before**: the type of [icon](icons.html) to appear at the front of the button (doesn't work with input[type=submit] or input[type=button])
  * **icon-after**: the type of [icon](icons.html) to appear at the end of the button (doesn't work with input[type=submit] or input[type=button])
  * **href**: the URL to visit when clicked (only for button-link, defaults to "#")

#### Molecules

* button-group
  * **atoms**: an array of `buttons`
