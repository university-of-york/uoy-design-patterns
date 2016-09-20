---

title: Banners
name: banners
category: components
subcategory: Molecules
layout: q+tq
id: banners-page

---

<div class="lead"><p>Banners act in a similar was to [figures](./figures.html). The biggest difference is that, in a banner, the figure is resized to fit the content, rather than the size of the image. So a banner _must_ have some `c-figure__content` or it will be very small.</p></div>

Theres a special page for [full-width figures](./full-width-figures.html).

### Position

You can position banner content `left` or `right`. You can use `top-left`, `bottom-right` etc. but they are aliases for `left` or `right`. The default is `left`.

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=769", "type": "banner", "content": { "text" : "<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "left" } } );
</script>

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=770", "type": "banner", "content": { "text" : "<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "right" } } );
</script>

### Sizes

A banner's `figure__content` can be `half` (default), `third` or `quarter` sizes. These sizes only apply at _huge_ sizes - they all go to half size at _large_ and 100% at _medium_ and below.

<script>
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=771", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "left", "size": "half" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=772", "content": { "text" : "<h3>Here's some content</h3>\n<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "right", "size": "half" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=773", "content": { "text" : "<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "left", "size": "third" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=774", "content": { "text" : "<p>Here is some content. The height of the banner will fit to the content size.</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>", "position": "right", "size": "third" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=775", "content": { "text" : "<p>Here is some content. The height of the banner will fit to the content size.</p>\n", "position": "left", "size": "quarter" } } )+
component("figure", { "type":"banner", "image": "https://unsplash.it/1200/600/?image=776", "content": { "text" : "<p>Here is some content. The height of the banner will fit to the content size.</p>\n", "position": "right", "size": "quarter" } } );
</script>

### Captions

Captions work in the same way as with [regular figures](./figures.html#figure-captions).

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=777", "type": "banner", "content": { "text" : "<p>'I mean what I say,' the Mock Turtle replied in an offended tone. And  the Gryphon added 'Come, let's hear some of YOUR adventures.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>" }, "caption": { "text" : "<i class=\"c-icon c-icon--camera c-figure__caption-icon\"></i> Simple text caption", "position": "bottom-right" } } );
</script>

### Edge cases

#### Loads and loads of content

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=778", "type": "banner", "content": { "text" : "<p>The March Hare took the watch and looked at it gloomily: then he dipped  it into his cup of tea, and looked at it again: but he could think of  nothing better to say than his first remark, 'It was the BEST butter,  you know.'</p>\n<p>Alice had been looking over his shoulder with some curiosity. 'What a  funny watch!' she remarked. 'It tells the day of the month, and doesn't  tell what o'clock it is!'</p>\n<p>'Why should it?' muttered the Hatter. 'Does YOUR watch tell you what  year it is?'</p>\n<p>'Of course not,' Alice replied very readily: 'but that's because it  stays the same year for such a long time together.'</p>\n<p>'Which is just the case with MINE,' said the Hatter.</p>\n<p>Alice felt dreadfully puzzled. The Hatter's remark seemed to have no  sort of meaning in it, and yet it was certainly English. 'I don't quite  understand you,' she said, as politely as she could.</p>\n<p>'The Dormouse is asleep again,' said the Hatter, and he poured a little  hot tea upon its nose.</p>\n<p>The Dormouse shook its head impatiently, and said, without opening its  eyes, 'Of course, of course; just what I was going to remark myself.'</p>\n<a class=\"c-btn c-btn--medium c-btn--block c-btn--primary\" href=\"#\">Click here for more</a>" } } );
</script>

#### No content

If you don't put any content in a `banner`, it will be 20px high (because of the padding), until small screens, when it will appear normally. This isn't very good.

<script>
component("figure", { "image": "https://unsplash.it/800/400/?image=779", "type": "banner" } );
</script>

### Options (see [figures page](./css-components/figures.html))