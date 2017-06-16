---

title: hCard
name: hcard
category: layout
subcategory: General
layout: q+tq
id: hcard-page

---

<div class="lead"><p>For marking up a persons details, we will use the [microformats 2](http://microformats.org) markup scheme. This uses an `h-` prefix on class names to make the data available to parsers. This is an exception to the `c-` prefix used on other components.</p></div>

The basic hCard has a _name_, an _email_ and/or a _telephone_:

<script>
component("hcard", {
  "name": "Chris Marsh",
  "email": "chris.marsh@york.ac.uk",
  "tel": "+44 (0)1904 324107"
});
</script>

You can also add in an _image_, a _bio_ and a _url_:

<script>
component("hcard", {
  "name": "Chris Marsh",
  "email": "chris.marsh@york.ac.uk",
  "tel": "+44 (0)1904 324107",
  "image": "/media/chris.jpg",
  "url": "http://www-users.york.ac.uk/~cm1438/",
  "bio": "<p>Chris is a front-end developer at the University of York. He's been developing websites for over ten years and started working at the university in early 2015.</p>"
});
</script>

And the whole hog, a postal address and position too:

<script>
component("hcard", {
  "name": "Chris Marsh",
  "email": "chris.marsh@york.ac.uk",
  "tel": "+44 (0)1904 324107",
  "image": "/media/chris.jpg",
  "url": "http://www-users.york.ac.uk/~cm1438/",
  "bio": "<p>Chris is a front-end developer at the University of York. He's been developing websites for over ten years and started working at the university in early 2015.</p>",
  "position": "Front-end web developer",
  "address": {
    "street-address": "Heslington Hall",
    "locality": "York",
    "postal-code": "YO10 5DD"
  }
});
</script>

### Mini hcard type

Used within text content to showcase a name/address:

<script>
component("hcard-mini", {
  "email": "chris.marsh@york.ac.uk",
  "position": "Front-end web developer",
  "address": {
    "street-address": "Heslington Hall",
    "locality": "York",
    "postal-code": "YO10 5DD"
  }
});
</script>

Or here, with a few more options:

<script>
component("hcard-mini", {
  "title": "Featured researcher",
  "name": "Chris Marsh",
  "image": "/media/chris.jpg",
  "email": "chris.marsh@york.ac.uk",
  "url": "http://www-users.york.ac.uk/~cm1438/",
  "position": "Front-end web developer",
  "address": {
    "street-address": "Heslington Hall",
    "locality": "York",
    "postal-code": "YO10 5DD"
  }
});
</script>

### Byline type

Use under stories or on intro pages where you need a name, position and image to introduce someone before their story.

<script>
component("hcard-byline", {
  "name": "Chris Marsh",
  "image": "/media/chris.jpg",
  "position": "Front-end web developer"
});
</script>

### News article type

A slightly different layout to display the card like it is shown on the news article pages.

<script>
component("hcard-article", {
  "title": "Featured researcher",
  "name": "Chris Marsh",
  "image": "/media/chris.jpg",
  "email": "chris.marsh@york.ac.uk",
  "url": "http://www-users.york.ac.uk/~cm1438/",
  "position": "Front-end web developer",
  "bio": "<p>Chris is a front-end developer at the University of York. He's been developing websites for over ten years and started working at the university in early 2015.</p>"
});
</script>

### Options

* **hcard**/**hcard-article**
  * **name** (required)
  * **email** (optional)
  * **tel** (optional)
  * **image** (optional)
  * **url** (optional)
  * **position** (optional)
  * **title** Used at the top on the article type hCard (optional)
  * **bio** an HTML string containing a brief biography (optional)
  * **address** an object containing the address, containing the following optional information
    * **street-address** e.g. _Heslington Hall_
    * **locality** e.g. _York_
    * **region** e.g. _North Yorkshire_
    * **country-name** e.g. _UK_
    * **postal-code** e.g. _YO10 4DD_
