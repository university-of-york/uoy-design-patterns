---

title: Icons
name: icons
category: Components
layout: default
id: icons-page

---

## Icons

We're currently using [Iconic Open](https://useiconic.com/open) as an icon set, but this is easy to replace. All icons are held in an `i` element, as it has no semantic meaning and is very concise (i.e. it's one letter!).

By default we use SVG icons, but there is a fallback to PNG if background SVGs are not supported.

<script>
component("icon", { "type": "heart" } );
</script>

There are five different sizes:

<script>
component("icon", { "type": "heart", "size": "tiny" } );
component("icon", { "type": "heart", "size": "small" } );
component("icon", { "type": "heart", "size": "medium" } );
component("icon", { "type": "heart", "size": "large" } );
component("icon", { "type": "heart", "size": "huge" } );
</script>

(Did you notice how the icon sizes match the button sizes? Hmmm....)

Here's a comprehensive list of icons (I'm looking at a way to display them better):

<script>
component("icon", { "type": "account-login" } );
component("icon", { "type": "account-logout" } );
component("icon", { "type": "action-redo" } );
component("icon", { "type": "action-undo" } );
component("icon", { "type": "align-center" } );
component("icon", { "type": "align-left" } );
component("icon", { "type": "align-right" } );
component("icon", { "type": "aperture" } );
component("icon", { "type": "arrow-bottom" } );
component("icon", { "type": "arrow-circle-bottom" } );
component("icon", { "type": "arrow-circle-left" } );
component("icon", { "type": "arrow-circle-right" } );
component("icon", { "type": "arrow-circle-top" } );
component("icon", { "type": "arrow-left" } );
component("icon", { "type": "arrow-right" } );
component("icon", { "type": "arrow-thick-bottom" } );
component("icon", { "type": "arrow-thick-left" } );
component("icon", { "type": "arrow-thick-right" } );
component("icon", { "type": "arrow-thick-top" } );
component("icon", { "type": "arrow-top" } );
component("icon", { "type": "audio-spectrum" } );
component("icon", { "type": "audio" } );
component("icon", { "type": "badge" } );
component("icon", { "type": "ban" } );
component("icon", { "type": "bar-chart" } );
component("icon", { "type": "basket" } );
component("icon", { "type": "battery-empty" } );
component("icon", { "type": "battery-full" } );
component("icon", { "type": "beaker" } );
component("icon", { "type": "bell" } );
component("icon", { "type": "bluetooth" } );
component("icon", { "type": "bold" } );
component("icon", { "type": "bolt" } );
component("icon", { "type": "book" } );
component("icon", { "type": "bookmark" } );
component("icon", { "type": "box" } );
component("icon", { "type": "briefcase" } );
component("icon", { "type": "british-pound" } );
component("icon", { "type": "browser" } );
component("icon", { "type": "brush" } );
component("icon", { "type": "bug" } );
component("icon", { "type": "bullhorn" } );
component("icon", { "type": "calculator" } );
component("icon", { "type": "calendar" } );
component("icon", { "type": "camera-slr" } );
component("icon", { "type": "caret-bottom" } );
component("icon", { "type": "caret-left" } );
component("icon", { "type": "caret-right" } );
component("icon", { "type": "caret-top" } );
component("icon", { "type": "cart" } );
component("icon", { "type": "chat" } );
component("icon", { "type": "check" } );
component("icon", { "type": "chevron-bottom" } );
component("icon", { "type": "chevron-left" } );
component("icon", { "type": "chevron-right" } );
component("icon", { "type": "chevron-top" } );
component("icon", { "type": "circle-check" } );
component("icon", { "type": "circle-x" } );
component("icon", { "type": "clipboard" } );
component("icon", { "type": "clock" } );
component("icon", { "type": "cloud-download" } );
component("icon", { "type": "cloud-upload" } );
component("icon", { "type": "cloud" } );
component("icon", { "type": "cloudy" } );
component("icon", { "type": "code" } );
component("icon", { "type": "cog" } );
component("icon", { "type": "collapse-down" } );
component("icon", { "type": "collapse-left" } );
component("icon", { "type": "collapse-right" } );
component("icon", { "type": "collapse-up" } );
component("icon", { "type": "command" } );
component("icon", { "type": "comment-square" } );
component("icon", { "type": "compass" } );
component("icon", { "type": "contrast" } );
component("icon", { "type": "copywriting" } );
component("icon", { "type": "credit-card" } );
component("icon", { "type": "crop" } );
component("icon", { "type": "dashboard" } );
component("icon", { "type": "data-transfer-download" } );
component("icon", { "type": "data-transfer-upload" } );
component("icon", { "type": "delete" } );
component("icon", { "type": "dial" } );
component("icon", { "type": "document" } );
component("icon", { "type": "dollar" } );
component("icon", { "type": "double-quote-sans-left" } );
component("icon", { "type": "double-quote-sans-right" } );
component("icon", { "type": "double-quote-serif-left" } );
component("icon", { "type": "double-quote-serif-right" } );
component("icon", { "type": "droplet" } );
component("icon", { "type": "eject" } );
component("icon", { "type": "elevator" } );
component("icon", { "type": "ellipses" } );
component("icon", { "type": "envelope-closed" } );
component("icon", { "type": "envelope-open" } );
component("icon", { "type": "euro" } );
component("icon", { "type": "excerpt" } );
component("icon", { "type": "expand-down" } );
component("icon", { "type": "expand-left" } );
component("icon", { "type": "expand-right" } );
component("icon", { "type": "expand-up" } );
component("icon", { "type": "external-link" } );
component("icon", { "type": "eye" } );
component("icon", { "type": "eyedropper" } );
component("icon", { "type": "file" } );
component("icon", { "type": "fire" } );
component("icon", { "type": "flag" } );
component("icon", { "type": "flash" } );
component("icon", { "type": "folder" } );
component("icon", { "type": "fork" } );
component("icon", { "type": "fullscreen-enter" } );
component("icon", { "type": "fullscreen-exit" } );
component("icon", { "type": "globe" } );
component("icon", { "type": "graph" } );
component("icon", { "type": "grid-four-up" } );
component("icon", { "type": "grid-three-up" } );
component("icon", { "type": "grid-two-up" } );
component("icon", { "type": "hard-drive" } );
component("icon", { "type": "header" } );
component("icon", { "type": "headphones" } );
component("icon", { "type": "heart" } );
component("icon", { "type": "home" } );
component("icon", { "type": "image" } );
component("icon", { "type": "inbox" } );
component("icon", { "type": "infinity" } );
component("icon", { "type": "info" } );
component("icon", { "type": "italic" } );
component("icon", { "type": "justify-center" } );
component("icon", { "type": "justify-left" } );
component("icon", { "type": "justify-right" } );
component("icon", { "type": "key" } );
component("icon", { "type": "laptop" } );
component("icon", { "type": "layers" } );
component("icon", { "type": "lightbulb" } );
component("icon", { "type": "link-broken" } );
component("icon", { "type": "link-intact" } );
component("icon", { "type": "list-rich" } );
component("icon", { "type": "list" } );
component("icon", { "type": "location" } );
component("icon", { "type": "lock-locked" } );
component("icon", { "type": "lock-unlocked" } );
component("icon", { "type": "loop-circular" } );
component("icon", { "type": "loop-square" } );
component("icon", { "type": "loop" } );
component("icon", { "type": "magnifying-glass" } );
component("icon", { "type": "map-marker" } );
component("icon", { "type": "map" } );
component("icon", { "type": "media-pause" } );
component("icon", { "type": "media-play" } );
component("icon", { "type": "media-record" } );
component("icon", { "type": "media-skip-backward" } );
component("icon", { "type": "media-skip-forward" } );
component("icon", { "type": "media-step-backward" } );
component("icon", { "type": "media-step-forward" } );
component("icon", { "type": "media-stop" } );
component("icon", { "type": "medical-cross" } );
component("icon", { "type": "menu" } );
component("icon", { "type": "microphone" } );
component("icon", { "type": "minus" } );
component("icon", { "type": "monitor" } );
component("icon", { "type": "moon" } );
component("icon", { "type": "move" } );
component("icon", { "type": "musical-note" } );
component("icon", { "type": "paperclip" } );
component("icon", { "type": "pencil" } );
component("icon", { "type": "people" } );
component("icon", { "type": "person" } );
component("icon", { "type": "phone" } );
component("icon", { "type": "pie-chart" } );
component("icon", { "type": "pin" } );
component("icon", { "type": "play-circle" } );
component("icon", { "type": "plus" } );
component("icon", { "type": "power-standby" } );
component("icon", { "type": "print" } );
component("icon", { "type": "project" } );
component("icon", { "type": "pulse" } );
component("icon", { "type": "puzzle-piece" } );
component("icon", { "type": "question-mark" } );
component("icon", { "type": "rain" } );
component("icon", { "type": "random" } );
component("icon", { "type": "reload" } );
component("icon", { "type": "resize-both" } );
component("icon", { "type": "resize-height" } );
component("icon", { "type": "resize-width" } );
component("icon", { "type": "rss-alt" } );
component("icon", { "type": "rss" } );
component("icon", { "type": "script" } );
component("icon", { "type": "share-boxed" } );
component("icon", { "type": "share" } );
component("icon", { "type": "shield" } );
component("icon", { "type": "signal" } );
component("icon", { "type": "signpost" } );
component("icon", { "type": "sort-ascending" } );
component("icon", { "type": "sort-descending" } );
component("icon", { "type": "spreadsheet" } );
component("icon", { "type": "star" } );
component("icon", { "type": "sun" } );
component("icon", { "type": "tablet" } );
component("icon", { "type": "tag" } );
component("icon", { "type": "tags" } );
component("icon", { "type": "target" } );
component("icon", { "type": "task" } );
component("icon", { "type": "terminal" } );
component("icon", { "type": "text" } );
component("icon", { "type": "thumb-down" } );
component("icon", { "type": "thumb-up" } );
component("icon", { "type": "timer" } );
component("icon", { "type": "transfer" } );
component("icon", { "type": "trash" } );
component("icon", { "type": "underline" } );
component("icon", { "type": "vertical-align-bottom" } );
component("icon", { "type": "vertical-align-center" } );
component("icon", { "type": "vertical-align-top" } );
component("icon", { "type": "video" } );
component("icon", { "type": "volume-high" } );
component("icon", { "type": "volume-low" } );
component("icon", { "type": "volume-off" } );
component("icon", { "type": "warning" } );
component("icon", { "type": "wifi" } );
component("icon", { "type": "wrench" } );
component("icon", { "type": "x" } );
component("icon", { "type": "yen" } );
component("icon", { "type": "zoom-in" } );
component("icon", { "type": "zoom-out" } );
</script>


### Options


#### Atoms


* icon
  * **type**: the type of option you want **(required)**
  * **size**: can be _tiny_, _small_, _medium_, _large_ or _huge_. Default is _medium_
  * **style**: **TODO**
