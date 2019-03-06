---

title: Image group
name: image-group
category: components
subcategory: Molecules
layout: q+tq
id: image-group-page

---

<div class="lead"><p>An image group is structured markup for displaying images, such as the partner logos for an event, in a group. The images within a group can also be links.</p></div>

Write a bit about number of images here.

## Image group

<script>
component("image-group", { "atoms": [
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=973", "alt": "test" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=653", "alt": "test" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=573", "alt": "test" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=643", "alt": "test" }},
  { "image-group-item": {"image": "https://picsum.photos/800/400/?image=773", "alt": "test" }}
]});
</script>

## Image group with links

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
