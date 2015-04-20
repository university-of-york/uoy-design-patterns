---

title: Button groups
name: button-groups
category: components
subcategory: Molecules
layout: q+tq
id: button-groups-page

---

## Button groups

<p class="lead">You can combine [buttons](buttons.html) together in a `btn-group`. This will join the buttons together seamlessly (as long as they're all the same size. Otherwise, results can be unpredictable).</p>

<script>
component("button-group", { "atoms": [
  { "button": { "text": "Back", "size": "tiny", "icon-before": "chevron-left" } },
  { "button": { "text": "Help", "size": "tiny" } },
  { "button": { "text": "Next", "size": "tiny", "icon-after": "chevron-right" } }
]})
+component("button-group", { "atoms": [
  { "button": { "text": "Back", "size": "small", "icon-before": "chevron-left" } },
  { "button": { "text": "Help", "size": "small" } },
  { "button": { "text": "Next", "size": "small", "icon-after": "chevron-right" } }
]})
+component("button-group", { "atoms": [
  { "button": { "text": "Back", "icon-before": "chevron-left" } },
  { "button": { "text": "Help" } },
  { "button": { "text": "Next", "icon-after": "chevron-right" } }
]})
+component("button-group", { "atoms": [
  { "button": { "text": "Back", "size": "large", "icon-before": "chevron-left" } },
  { "button": { "text": "Help", "size": "large" } },
  { "button": { "text": "Next", "size": "large", "icon-after": "chevron-right" } }
]})
+component("button-group", { "atoms": [
  { "button": { "text": "Back", "size": "huge", "icon-before": "chevron-left" } },
  { "button": { "text": "Help", "size": "huge" } },
  { "button": { "text": "Next", "size": "huge", "icon-after": "chevron-right" } }
]});
</script>

## Block buttons groups

If you specify a `.btn-group` as  a `.btn-group` block, it will expand to fill the width of the containing element and equally divide the space between the buttons **N.B. only works in IE8+ and for up to 8 buttons**

Use these advisedly: consider adding in an `icon-above` in addition to, or replacing text if space is tight. And remember, **sometimes the best icon is a word**.

<script>
component("button-group", { "block": true, "atoms": [
  { "button": { "text": "1", "size": "huge" } },
  { "button": { "text": "2", "size": "huge" } }
]})
+component("button-group", { "block": true, "atoms": [
  { "button": { "text": "1", "size": "large" } },
  { "button": { "text": "2", "size": "large" } },
  { "button": { "text": "3", "size": "large" } }
]})
+component("button-group", { "block": true, "atoms": [
  { "button": { "text": "1" } },
  { "button": { "text": "2" } },
  { "button": { "text": "3" } },
  { "button": { "text": "4" } }
]})
+component("button-group", { "block": true, "atoms": [
  { "button": { "text": "1", "size": "small" } },
  { "button": { "text": "2", "size": "small" } },
  { "button": { "text": "3", "size": "small" } },
  { "button": { "text": "4", "size": "small" } },
  { "button": { "text": "5", "size": "small" } }
]})
+component("button-group", { "block": true, "atoms": [
  { "button": { "text": "1", "size": "tiny" } },
  { "button": { "text": "2", "size": "tiny" } },
  { "button": { "text": "3", "size": "tiny" } },
  { "button": { "text": "4", "size": "tiny" } },
  { "button": { "text": "5", "size": "tiny" } },
  { "button": { "text": "6", "size": "tiny" } }
]})
+component("button-group", { "block": true, "atoms": [
  { "button": { "icon": "action-undo" } },
  { "button": { "icon": "ban" } },
  { "button": { "icon": "bookmark" } },
  { "button": { "icon": "brush" } },
  { "button": { "icon": "box" } },
  { "button": { "icon": "beaker" } },
  { "button": { "icon": "action-redo" } }
]})
+component("button-group", { "block": true, "atoms": [
  { "button": { "text": "Undo", "icon-above": "action-undo" } },
  { "button": { "text": "Badge", "icon-above": "badge" } },
  { "button": { "text": "Ban", "icon-above": "ban" } },
  { "button": { "text": "Bookmark", "icon-above": "bookmark" } },
  { "button": { "text": "Brush", "icon-above": "brush" } },
  { "button": { "text": "Box", "icon-above": "box" } },
  { "button": { "text": "Beaker", "icon-above": "beaker" } },
  { "button": { "text": "Redo", "icon-above": "action-redo" } }
]});
</script>

### Options

* **button-group**
  * **atoms**: an array of `buttons`
  * **block**: (Boolean) defaults to false
