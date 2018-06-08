---

title: Show More module
name: show-more-module
category: modules
subcategory: Component modules
layout: q+tq
id: show-more-module-page

---

<div class="lead"><p>To apply the [show more component](../css-components/show-more.html) to a block of text, call the `SHOWMORE` module on it.</p></div>

### Use

```javascript
var e = new SHOWMORE({
  container: $('#show-more'),
  defaultHeight: 200,
  buttonTextMore: 'Show more',
  buttonTextLess: 'Show less'
});
```

### Options

 * **container** - _(required)_the outer container that has content you want to hide. The script automatically parses for `.js-show-more` elements
 * **defaultHeight** - _(defaults to 200)_ the number of pixels the box should shrink to
 * **buttonTextMore** - _(defaults to 'Show more')_ what the text on the button is before you expand the content
 * **buttonTextLess** - _(defaults to 'Show less')_ what the text on the button is after the content is expanded
 