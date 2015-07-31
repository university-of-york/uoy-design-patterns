---

title: Media object
name: media
category: components
subcategory: Molecules
layout: q+tq
id: media-page

---

<div class="lead"><p>The media object is a multi-purpose object that can be used in a variety of different location. It's basic use is to float an image to the left, with some text next to it (see [this blog post](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)). The basic set-up of the _media_ object is:</p></div>

* A _picture_ on the left (usually containing a [`.c-figure`](figure.html))
* A _body_ on the right, which can contain any markup, usually a title, subtitle and content

Here's an example with all the bits filled in:

<script>
component("media", {
  "type": "top",
  "picture": {
    "image": "http://lorempixel.com/200/200/people/1",
    "caption": "A caption for the image",
    "width": "200px"
  },
  "body": {
    "title": "Investing in our campus",
    "subtitle": "Vision for a 21st-century campus",
    "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"
  }
});
</script>

The `picture` can be vertically-aligned to the top (as above), middle or bottom (below):

<script>
component("media", {
  "type": "middle",
  "picture": {
    "image": "http://lorempixel.com/200/200/people/2",
    "caption": "A caption for the image",
    "width": "200px"
  },
  "body": {
    "title": "Investing in our campus",
    "subtitle": "Vision for a 21st-century campus",
    "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"
  }
});
</script>
<script>
component("media", {
  "type": "bottom",
  "picture": {
    "image": "http://lorempixel.com/200/200/people/3",
    "caption": "A caption for the image",
    "width": "200px"
  },
  "body": {
    "title": "Investing in our campus",
    "subtitle": "Vision for a 21st-century campus",
    "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"
  }
});
</script>

The media image and body _can_ contain any arbitrary content (but the `figure` element used to hold the media picture should be used for images:

<script>
component("media", {
  "picture": { "content": "<img src=\"http://lorempixel.com/400/300/people\">" },
  "body": { "content": "<p>Ah, look, some <abbr title=\"HyperText Markup Language\">HTML</abbr> content.</p>" }
});
</script>


