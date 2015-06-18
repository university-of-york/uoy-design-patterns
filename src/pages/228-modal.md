---

title: Modals
name: modals
category: components
subcategory: Molecules
layout: q+tq
id: modals-page

---

<p class="lead">Modal windows can be used to show the user a message, or to showcase an image, anything that requires the rest of the screen to be of secondary importance to the content in the modal.</p>

The modal window will be centred on the page, and constrained to be no more than 90% of the page height and width. Content will scroll vertically within the modal.

<script>
component("modal", {
  "frameless":false,
  "title": "The energy crisis: Is nuclear fusion a solution?",
  "content": "<p>This year's Science Discovery event will focus on nuclear fusion.</p>"
});
</script>

The usual way to see a modal in action is when the user triggers an event.

<button class="c-btn c-btn--medium js-modal" href="#test-content">Click here!</button>

<div id="test-content">
  Well done! Now close this window.
</div>

### Options

#### Atoms

* **event**
  * **frameless**: Is the modal frameless? Defaults to _false_
  * **title**: The title of the modal
  * **details**: HTML string to go in the modal window
