---

title: Button groups
name: button-groups
category: components
subcategory: Molecules
layout: q+tq
id: button-groups-page

---

## Button groups

<div class="lead"><p>You can combine [buttons](buttons.html) together in a `btn-group`. This will join the buttons together seamlessly (as long as they're all the same size. Otherwise, results can be unpredictable).</p></div>

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
  { "button": { "icon": "camera" } },
  { "button": { "icon": "car" } },
  { "button": { "icon": "ban" } },
  { "button": { "icon": "bookmark" } },
  { "button": { "icon": "eye" } },
  { "button": { "icon": "music" } },
  { "button": { "icon": "newspaper-o" } }
]})
+component("button-group", { "block": true, "atoms": [
  { "button": { "text": "Camera", "icon-above": "camera" } },
  { "button": { "text": "Car", "icon-above": "car" } },
  { "button": { "text": "Ban", "icon-above": "ban" } },
  { "button": { "text": "Bookmark", "icon-above": "bookmark" } },
  { "button": { "text": "Envelope", "icon-above": "envelope-o" } },
  { "button": { "text": "Eye", "icon-above": "eye" } },
  { "button": { "text": "Music", "icon-above": "music" } },
  { "button": { "text": "Newspaper", "icon-above": "newspaper-o" } }
]})
</script>

## Selectable buttons groups

checkbox and radio

<script>
component("button-group", { "block": true, "name": "checkboxExample","atoms": [
  { "button-selectable": { "text": "Car Parks", "checkbox": true, "id": "chk1", "type": "secondary", "icon-above": "car" } },
  { "button-selectable": { "text": "Bike Racks", "checkbox": true, "id": "chk2", "type": "secondary", "icon-above": "bicycle" } },
  { "button-selectable": { "text": "Bus Stops", "checkbox": true, "id": "chk3", "type": "secondary", "icon-above": "bus" } },
  { "button-selectable": { "text": "Cash Points", "checkbox": true, "id": "chk4", "type": "secondary", "icon-above": "money" } },
  { "button-selectable": { "text": "Available PC's", "checkbox": true, "id": "chk5", "type": "secondary", "icon-above": "desktop" } },
  { "button-selectable": { "text": "Shops", "checkbox": true, "id": "chk6", "type": "secondary", "icon-above": "shopping-basket" } }

]})
+component("button-group", { "name": "radioExample", "atoms": [
  { "button-selectable": { "text": "Yes", "radio": true, "id": "rd2", "type": "success", "icon-above": "check" } },
  { "button-selectable": { "text": "Maybe", "radio": true, "id": "rd3", "type": "secondary", "icon-above": "question" } },
  { "button-selectable": { "text": "No", "radio": true, "id": "rd4", "type": "danger", "icon-above": "close" } }
]});

</script>

### Options

* **button-group**
  * **atoms**: an array of `buttons`
  * **block**: (Boolean) defaults to false
