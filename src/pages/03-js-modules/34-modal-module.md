---

title: Modal
name: modal-module
category: modules
subcategory: Component modules
layout: q+tq
id: modal-module-page

---

<div class="lead"><p>[Modal windows](../css-components/modal.html) can be used to show the user a message, or to showcase an image, anything that requires the rest of the screen to be of secondary importance to the content in the modal.</p></div>

When a new modal window is called, it will check to see if the modal window is already set up and, if not, will add it to the page. All subsequent calls for a new modal will close the existing modal (if it is still open) and reuse the modal markup.

The modal window will be centred on the page, and constrained to be no more than 90% of the page height and width. Content will scroll vertically within the modal.

### Use

```javascript

// Framed (text) modal
var m1 = new MODAL({
  content: '<p>Here is the modal text</p>',
  title: 'My modal window',
  frameless: false
});

m1.open()

// Framed (text) modal
var m2 = new MODAL({
  content: '<img src="media/pics/trees.jpg">',
  caption: 'This is a picture of some trees',
  frameless: true
});

m2.open()

```

### Options

 * **content** - a string of HTML which will be used to populate the modal window
 * **title** - the title text (optional, only in _framed_ modals)
 * **caption** - the picture caption (optional, only in _frameless_ modals)
 * **frameless** - Boolean, default _false_. Use _true_ if you don't want the default frame styles on the modal window

