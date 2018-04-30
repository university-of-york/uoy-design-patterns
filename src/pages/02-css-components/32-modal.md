---

title: Modals
name: modals
category: components
subcategory: Molecules
layout: q+tq
id: modals-page

---

<div class="lead"><p>Modal windows can be used to show the user a message, or to showcase an image, anything that requires the rest of the screen to be of secondary importance to the content in the modal.</p></div>

The modal window will be centred on the page, and constrained to be no more than 90% of the page height and width. Content will scroll vertically within the modal.

### Default (framed) modal

<script>
component("modal", {
  "type":"framed",
  "title": "The energy crisis: Is nuclear fusion a solution?",
  "content": "<p>This year's Science Discovery event will focus on nuclear fusion.</p><p>Fusion is the process that powers the stars (including our own sun): it’s the joining together of two light nuclei (such as hydrogen) to produce a larger nucleus (such as helium). As governed by Einstein’s famous equation E=mc<sup>2</sup>, this process generates a substantial amount of energy.</p><p>In the current context of climate change, dwindling supplies of traditional fuels and perhaps increased political instability, the world is seeking a power source that is safe, environmentally friendly, does not lead to the proliferation of weapons, and has a plentiful supply of fuel.</p><p>Dr Vann will discuss whether fusion satisfies these conditions and will explore why it is that, after fifty years of research, fusion is still not delivering electricity to our homes and businesses. He will outline the tremendous progress that has been made, the challenges that remain, and the exciting science that is being undertaken to overcome them.</p>"
});
</script>

Of course, you don't need to have a title.

<script>
component("modal", {
  "type":"framed",
  "content": "<p>This year's Science Discovery event will focus on nuclear fusion.</p><p>Fusion is the process that powers the stars (including our own sun): it’s the joining together of two light nuclei (such as hydrogen) to produce a larger nucleus (such as helium). As governed by Einstein’s famous equation E=mc<sup>2</sup>, this process generates a substantial amount of energy.</p><p>In the current context of climate change, dwindling supplies of traditional fuels and perhaps increased political instability, the world is seeking a power source that is safe, environmentally friendly, does not lead to the proliferation of weapons, and has a plentiful supply of fuel.</p><p>Dr Vann will discuss whether fusion satisfies these conditions and will explore why it is that, after fifty years of research, fusion is still not delivering electricity to our homes and businesses. He will outline the tremendous progress that has been made, the challenges that remain, and the exciting science that is being undertaken to overcome them.</p>"
});
</script>

The usual way to see a modal in action is when the user triggers an event.

### Frameless (image) modal

There is a _frameless_ version of the modal window, mostly used for images. It doesn't need a title (as there's no frame), but you can add in an optional _caption_.

<script>
component("modal", {
  "type":"frameless",
  "caption": "Hands playing a piano",
  "content": "<img class=\"c-modal__image\" src=\"../media/piano.jpg\" alt=\"Hands playing a piano\" />"
});
</script>

### How to use

There are three ways of referencing content to open in the modal. In all cases the link should be given a class of `.js-modal` (and `.js-modal--frameless` if needed).

The first example shows the simplest way for small amounts of content. Simply add a `data-content` attribute and, optionally, a `data-title` attribute and these will be used, and the `href` will be ignored (it should point at the equivalent content elsewhere in case Javascript is disabled).

<a class="c-btn c-btn--medium js-modal" href="#" data-title="You've successfully opened the modal window" data-content="<p>Well done! Now close this window.</p>">Click here!</a>

```markup
<a class="c-btn c-btn--medium js-modal" href="#" data-title="You've successfully opened the modal window" data-content="<p>Well done! Now close this window.</p>">Click here!</a>
```

The second example is used for things like image galleries, and provides a good fallback for times when JS is not available. Again, give the relevant class to the link and point the href to an image resource. This will be used as the `src` of the `img` tag.

**N.B. Only add in `href`s that point to images! Any other content will not work.**

<a class="c-btn c-btn--medium js-modal js-modal--frameless" href="../media/piano.jpg" data-caption="Hands playing a piano">Click here!</a>

```markup
<a class="c-btn c-btn--medium js-modal js-modal--frameless" href="../media/piano.jpg" data-caption="Hands playing a piano">Click here!</a>
```

Lastly, you can hide the modal content on the page and reference the content using a fragment. In the example below, the link has a `data-title` attribute and the href points to the fragment `#framed-modal-content`, a hidden `div` containing ther modal content.

<a class="c-btn c-btn--medium js-modal" href="#framed-modal-content" data-title="You made it!">Click here!</a>

<div id="framed-modal-content" class="is-hidden">
  <p>Congratulations!</p>
</div>

```markup
<a class="c-btn c-btn--medium js-modal" href="#framed-modal-content" data-title="You made it!">Click here!</a>

<div id="framed-modal-content" class="is-hidden">
  <p>Congratulations!</p>
</div>
```


### Options

#### Atoms

* **event**
  * **type**: Either _framed_ (default) or _frameless_
  * **title**: The title of the modal
  * **details**: HTML string to go in the modal window
