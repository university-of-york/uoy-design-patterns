---

title: Signposts
name: signposts
category: components
subcategory: Molecules
layout: q+tq
id: signposts-page

---

<p class="lead">Signposts are used to show a series of next steps or calls to action. They can be used on their own at full width, or within multiple column grids</p>

The default signpost has a heading, text and a link.

<script>
component("signpost", {
  "title" : "Prospectus",
  "content" : "Order or download your copy of our undergraduate prospectus for 2015 entry.",
  "cta"     : "Get a prospectus",
  "href"    : "http://www.york.ac.uk/study/undergraduate/prospectus/"
});
</script>

You can have an icon:

<script>
component("signpost", {
  "title" : "Prospectus",
  "content" : "Order or download your copy of our undergraduate prospectus for 2015 entry.",
  "cta"     : "Get a prospectus",
  "href"    : "http://www.york.ac.uk/study/undergraduate/prospectus/",
  "icon": "book"
});
</script>

Multiple signposts can be used together within a row of a grid:

<script>
var s1 = {
  "signpost": {
    "title" : "Prospectus",
    "content" : "Order or download your copy of our undergraduate prospectus for 2015 entry.",
    "cta"     : "Get a prospectus",
    "href"    : "http://www.york.ac.uk/study/undergraduate/prospectus/",
    "icon": "book"
  }
};
var s2 = {
  "signpost": {
    "title" : "Any questions?",
    "content" : "Ask us a question or see what our current students are saying in our forum on The Student Room.",
    "cta"     : "Ask us a question",
    "href"    : "http://www.thestudentroom.co.uk/forumdisplay.php?f=30",
    "icon"    : "comments"
  }
};
var s3 = {
  "signpost": {
    "title" : "Received an offer?",
    "content" : "View your application, arrange a visit and see all the information you need.",
    "cta"     : "Log in to You@York",
    "href"    : "http://www.york.ac.uk/study/you-at-york/",
    "icon"    : "thumbs-o-up"
  }
};
component("grid", { "atoms": [
  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms": s1 } },
    { "grid-box": { "size": "third", "atoms": s2 } },
    { "grid-box": { "size": "third", "atoms": s3 } }
  ] } }
] });

</script>

### Options

#### Molecules

* **signpost**
  * **content**: text to go in the signpost itself (required)
  * **title**: text to go in the signpost header (required)
  * **icon**: name of icon to go above the title
  * **cta**: text to be used on the cta button (required)
  * **href**: target URL for the cta button (required)
