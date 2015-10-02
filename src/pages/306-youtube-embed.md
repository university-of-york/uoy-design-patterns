---

title: Youtube embed
name: youtube-embed
category: modules
subcategory: General modules
layout: q+tq
id: youtube-embed-page

---

<div class="lead"><p>To embed YouTube videos in the site, add a link with a class `.youtube-video-embed` and the `href` pointing to the YouTube page (can be a full link or a youtu.be short link). The link (and its surrounding paragraph, if present) will be replaced with the appropriately-sized video.</p></div>

When the page is resized, the iframe dimensions will be resized to fit the parent's width. The video is always set to use a 16:9 aspect ratio.

### Use

<p><a class="youtube-video-embed" href="https://www.youtube.com/watch?v=s67Nb0wpcbE">Watch the video here</a></p>

```markup
<p><a class="youtube-video-embed" href="https://www.youtube.com/watch?v=s67Nb0wpcbE">Watch the video here</a></p>
```
&hellip;becomes&hellip;

```markup
<div class="c-video"><iframe width="730" height="410.625" src="//www.youtube.com/embed/s67Nb0wpcbE?rel=0" frameborder="0" allowfullscreen=""></iframe></div>
```