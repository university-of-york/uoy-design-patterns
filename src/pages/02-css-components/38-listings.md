---

title: Listings
name: listings
category: components
subcategory: Molecules
layout: q+tq
id: listings-page

---

<div class="lead"><p>For when we need to show a list of items, for news articles, events listings, search results, and so on.</p></div>

### Simplest example

<script>
component("listings", {
    type: "news",
    icon: "newspaper-o",
    title: "An example news listing",
    description: "A description of some sort which gives the reader an idea of what the listing is about.",
    link: "#"
 });
</script>

### Event with date and time example

<script>
component("listings", {
    type: "event",
    icon: "calendar-o",
    date: "Tuesday 6 February 2018 10:00am",
    title: "An example news listing",
    description: "A description of some sort which gives the reader an idea of what the listing is about.",
    link: "#"
 });
</script>

### News with media example

<script>
component("listings-media", {
    type: "news",
    icon: "newspaper-o",
    title: "An example news listing",
    media: "traffic-thumbnail.jpg",
    mediaText: "Vehicle for success",
    description: "A description of some sort which gives the reader an idea of what the listing is about.",
    link: "#"
 });
</script>


### Options

* **type**: 
* **icon**: 
* **media**: 
* **mediaText**: 

#### Required

* **title**: (required) 
* **link**: (required) 
* **description**: (required)

