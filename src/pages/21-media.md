---

title: Media object
name: media
category: molecules
layout: q+tq
id: media-page

---

<p class="lead">The media object is a multi-purpose object that can be used in a variety of different location. It's basic use is to float an image to the left, with some text next to it (see [this blog post](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/). The basic set-up of the _media_ object is:</p>

* A picture (with optional caption) on the left
* A _body_ on the right, which can either contain a title, subtitle, content and a link button fixed to the bottom of the container

Here's an example with all the bits filled in:

<script>
component("media", {
  "type": "horizontal",
  "picture": {
    "image": "http://lorempixel.com/200/200/people/1",
    "caption": "A caption for the image",
    "size": "200px"
  },
  "body": {
    "title": "Investing in our campus",
    "subtitle": "Vision for a 21st-century campus",
    "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>",
    "button": {
      "text":"See how campus is changing",
      "link":"#"
    }
  }
});
</script>

You can also stack them up vertically:

<script>
component("media", {
  "type": "vertical",
  "picture": {
    "image": "http://lorempixel.com/200/200/people/2",
    "caption": "A caption for the image",
    "size": "200px"
  },
  "body": {
    "title": "Investing in our campus",
    "subtitle": "Vision for a 21st-century campus",
    "content": "<p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>",
    "button": {
      "text":"See how campus is changing",
      "link":"#"
    }
  }
});
</script>

The media image and body can contain any arbitrary content:

<script>
component("media", {
  "type": "horizontal",
  "picture": { "content": "<img src=\"http://lorempixel.com/400/300/people\">" },
  "body": { "content": "<p>Ah, look, some <abbr>HTML</abbr> content.</p>" }
});
</script>


