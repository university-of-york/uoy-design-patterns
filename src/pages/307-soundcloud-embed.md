---

title: Soundcloud embed
name: soundcloud-embed
category: modules
subcategory: General modules
layout: q+tq
id: soundcloud-embed-page

---

<div class="lead"><p>A link with a class of `.soundcloud-audio-embed` and an `href` pointing to a soundcloud URL will automatically be converted to a Soundcloud embed iframe.</p></div>

### Use

<p><a class="soundcloud-audio-embed" href="https://soundcloud.com/university-of-york/recreating-the-sound-of-a-sixteenth-century-abbey-in-york">Listen to &quot;Recreating the sound of a sixteenth-century abbey in York&quot;</a></p>

```markup
<p><a class="soundcloud-audio-embed" href="https://soundcloud.com/university-of-york/recreating-the-sound-of-a-sixteenth-century-abbey-in-york">Listen to &quot;Recreating the sound of a sixteenth-century abbey in York&quot;</a></p>
```
&hellip;becomes&hellip;

```markup
<div class="c-audio"><iframe width="100%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&amp;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F204942391&amp;show_artwork=true&amp;maxheight=200&amp;callback=jQuery111309198891853448004_1443794083231&amp;_=1443794083232"></iframe></div>
```