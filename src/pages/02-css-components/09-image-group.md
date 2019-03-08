---

title: Image group
name: image-group
category: components
subcategory: Molecules
layout: q+tq
id: image-group-page

---

<div class="lead"><p>An image group is structured markup for displaying images, such as the partner logos for an event, in a group. The images within a group can also be links.</p></div>

An image group can be used where there are  2 or more images to display.  An image  and alt text must be provided and the url is optional for cases where a link is required.

## Image group

<script>
component("image-group", { "atoms": [
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=973", "alt": "" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=653", "alt": "" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=573", "alt": "" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=643", "alt": "" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=773", "alt": "" }}
]});
</script>

## Image group with links

An example of using an image group with links is when there is a need to have a group of partner logos that require a link to the brand website.

<script>
component("image-group", { "atoms": [
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=973", "alt": "test", "url": "https://www.york.ac.uk" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=653", "alt": "test", "url": "https://www.york.ac.uk" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=773", "alt": "test", "url": "https://www.york.ac.uk" }}
]});
</script>

### Options

#### Atoms

* **Image-group**
  * **image**: the URL of an image **(required)**
  * **alt**: the alt text (string) **(required)**
  * **url**: target URL for an image that is a link
