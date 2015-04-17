---

title: Buttons
name: buttons
category: atoms
layout: q+tq
id: buttons-page

---

<p class="lead">Buttons come in four different types and three different sizes.</p>

Usually a `button` element should be used, although an `a`, an `input[type=button]`, an `input[type=reset]` or an `input[type=submit]` could be used.

The simplest is just a plain button:

<script>
component("button", { "text": "Click me" })
+component("button-link", { "text": "Go here", "href": "http://google.com" })
+component("button-input", { "text": "Send" })
+component("button-reset", { "text": "Reset" })
+component("button-submit", { "text": "Submit" });
</script>

Other types are _primary_, _cancel_ and _danger_:

<script>
component("button", { "text": "Click this!", "type": "primary" })
+component("button", { "text": "Cancel", "type": "cancel" })
+component("button", { "text": "Delete", "type": "danger" });
</script>

A button can also be _disabled_:

<script>
component("button", { "text": "Don't click this!", "type": "disabled" });
</script>

You can define the size of the button too:

<script>
component("button", { "text": "Huge button", "size": "huge" })
+component("button", { "text": "Large button", "size": "large" })
+component("button", { "text": "Medium button", "size": "medium" })
+component("button", { "text": "Small button", "size": "small" })
+component("button", { "text": "Tiny button", "size": "tiny" });
</script>

It's also easy to add an icon to a button, either at the front, the end, (or both (which doesn't look good, so don't do it)), above the text or on its own.

<script>
component("button", { "text": "Stop", "icon-before": "media-stop" })
+component("button", { "text": "Play", "icon-after": "media-play" })
+component("button", { "text": "Please don't do this", "icon-before": "media-skip-backward", "icon-after": "media-skip-forward" })
+component("button", { "text":"Like", "icon-above": "heart" })
+component("button", { "icon": "heart" });
</script>

You can join this all together to make a monster button:

<script>
component("button", { "text": "Delete this thing", "icon-after": "trash", "size": "large", "type": "danger" });
</script>

And, just for testing, here's a button with text on multiple lines:

<script>
component("button", { "text": "Bippitty<br>Boppity<br>Boo" });
</script>

## Block buttons

A block button takes 100% of the width of the containing element. They're useful for finishing off a form, when there's only one option.

<script>
component("button", { "block": true, size: "huge", "text": "Head", "icon-after": "person" })
+component("button", { "block": true, size: "large", "text": "Shoulders", "type": "primary", "icon-before": "people" })
+component("button", { "block": true, size: "medium", "text": "Knees", "type": "cancel" })
+component("button", { "block": true, size: "small", "text": "Toes", "type": "danger" })
+component("button", { "block": true, size: "tiny", "text": "If you can read this you're too close" });
</script>

### Options

* **button**
* **button-link**
* **button-input**
* **button-submit**
* **button-reset**
  * **text**: the text on the button **(required)**
  * **type**: one of _default_ (default), _cancel_, _primary_ and _highlight_
  * **size**: one of _tiny_, _small_, _medium_ (default), _large_ or _huge_
  * **icon-above**: the type of [icon](icons.html) to go above the text (or replace it if there is no text) (doesn't work with input[type=submit], input[type=reset] or input[type=button])
  * **icon-before**: the type of [icon](icons.html) to appear at the front of the button (doesn't work with input[type=submit], input[type=reset] or input[type=button])
  * **icon-after**: the type of [icon](icons.html) to appear at the end of the button (doesn't work with input[type=submit], input[type=reset] or input[type=button])
  * **href**: the URL to visit when clicked (only for button-link, defaults to "#")
  * **block**: (Boolean) defaults to false