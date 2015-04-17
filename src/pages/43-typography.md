---

title: Typography
name: typography
category: layout
layout: q+tq
id: typography-page

---

<p class="lead">Here you can find documentation about default typography used on the site. The usual `line-height` is 1.625, which gives a 26px line-height for 16px font sizes. A margin of 22px (1.375em) is the default spacing between elements. In general, _ems_ are used for vertical spacing, and _pixels_ for horizontal spacing.</p>

We restrict the fonts used on the site to just three (and, to be honest, not many pages have code samples on, except for this site):

###### Georgia for headings (falls back to Times New Roman, Times, serif)

`Consolas for code samples and monospaced text (falls back to Monaco, 'Andale Mono', monospace)`

Trebuchet MS for body text, buttons, inputs and everything else (falls back to Helvetica, Arial, sans-serif)

You should never need to set a font-family yourself - the font is based on the role of the text in the page.

## Headings

There are six default heading sizes:

# H1 Primary header

## H2 Secondary header

### H3 Tertiary header

#### H4 Quaternary header

##### H5 Quinary header

###### H6 Senary header

(OK, I had to look three of those words up.)

```markup
<h1>Primary header</h1>
<h2>Secondary header</h2>
<h3>Tertiary header</h3>
<h4>Quaternary header</h4>
<h5>Quinary header</h5>
<h6>Senary header</h6>
```

Headers can contain a `<small.subtitle>` tag which will go on a new line under the header.

# H1 Primary header <small class="subtitle">That means first</small>

## H2 Secondary header <small class="subtitle">That means second</small>

### H3 Tertiary header <small class="subtitle">That means third</small>

#### H4 Quaternary header <small class="subtitle">That means fourth</small>

##### H5 Quinary header <small class="subtitle">That means fifth</small>

###### H6 Senary header <small class="subtitle">That means sixth</small>

```markup
<h1>Primary header <small class="subtitle">That means first</small></h1>
<h2>Secondary header <small class="subtitle">That means second</small></h2>
<h3>Tertiary header <small class="subtitle">That means third</small></h3>
<h4>Quaternary header <small class="subtitle">That means fourth</small></h4>
<h5>Quinary header <small class="subtitle">That means fifth</small></h5>
<h6>Senary header <small class="subtitle">That means sixth</small></h6>
```

## Body text

Lorem ipsum dolore est aute ut occaecat tempor enim aliqua.

Duis Ut anim ut ex amet non in irure occaecat ullamco in tempor nostrud velit in incididunt in amet reprehenderit ea in ad adipisicing officia aliqua ad enim ut officia dolore dolor dolor aliqua dolor in reprehenderit sint consectetur cillum laborum ea adipisicing proident id irure laborum amet proident nostrud et ut amet minim

Ullamco ad fugiat in incididunt occaecat aliquip in pariatur dolor excepteur pariatur anim ea aliquip ullamco minim ullamco dolore dolore consectetur irure id ad veniam ut aute eiusmod.

Reprehenderit eiusmod aliquip labore sint laborum dolor laborum adipisicing cillum aliqua qui mollit in officia do culpa esse veniam exercitation ut est amet eiusmod do voluptate sit velit in nostrud do dolore dolore adipisicing pariatur dolore Ut sunt tempor voluptate.

```markup
<p>Lorem ipsum dolore est aute ut occaecat tempor enim aliqua.</p>
<p>Duis Ut anim ut ex amet non in irure occaecat ullamco in tempor nostrud velit in incididunt in amet reprehenderit ea in ad adipisicing officia aliqua ad enim ut officia dolore dolor dolor aliqua dolor in reprehenderit sint consectetur cillum laborum ea adipisicing proident id irure laborum amet proident nostrud et ut amet minim</p>
<p>Ullamco ad fugiat in incididunt occaecat aliquip in pariatur dolor excepteur pariatur anim ea aliquip ullamco minim ullamco dolore dolore consectetur irure id ad veniam ut aute eiusmod.</p>
<p>Reprehenderit eiusmod aliquip labore sint laborum dolor laborum adipisicing cillum aliqua qui mollit in officia do culpa esse veniam exercitation ut est amet eiusmod do voluptate sit velit in nostrud do dolore dolore adipisicing pariatur dolore Ut sunt tempor voluptate.</p>
```

## Lead paragraph

Add `.lead` to a paragraph to highlight it. Usually only used on the first paragraph on the page.

<p class="lead">Duis ut anim ut ex amet non in irure occaecat ullamco in tempor nostrud velit in incididunt in amet reprehenderit ea in ad adipisicing officia aliqua ad enim ut officia dolore dolor dolor aliqua dolor in reprehenderit sint consectetur cillum laborum ea adipisicing proident id irure laborum amet proident nostrud et ut amet minim</p>

```markup
<p class="lead">Duis ut anim ut ex amet non in irure occaecat ullamco in tempor nostrud velit in incididunt in amet reprehenderit ea in ad adipisicing officia aliqua ad enim ut officia dolore dolor dolor aliqua dolor in reprehenderit sint consectetur cillum laborum ea adipisicing proident id irure laborum amet proident nostrud et ut amet minim</p>
```

## Blockquotes

A way to section of quoted speech. They come in a couple of different flavours (default and pull-quote) and the content can include HTML if needed. You can also declare who the quote is from, using `cite`.

<script>
component("blockquote", { "content": "Common sense is not so common."})
+component("blockquote", { "type": "pull-quote", "content": "<p>Time is nature's way of keeping everything from happening at once.</p>"})
+component("blockquote", { "content": "Common sense is not so common.", "cite": "Voltaire"})
+component("blockquote", { "type": "pull-quote", "content": "<p>Time is nature's way of keeping everything from happening at once.</p>", "cite": "Woody Allen"})
</script>

## Lists

Unordered and ordered lists. Not much to see here, really. They can be nested.

### Unordered lists

For when the order of the items isn't relevant:

* Milk
* Eggs
* Flour
* Toppings
	* Jam
	* Maple syrup
	* Lemon juice

### Ordered lists

When the order is important:

1. Sift flour
1. Break in egg
1. Stir in milk
1. Pour batter into pan
1. Toss it
	1. Make sure it's ready
	1. Grab handle
	1. Throw
1. Eat

## Inline attributes

Just for refence, here are some common inline elements. This will rarely be used:

* You can use the mark tag to <mark>highlight</mark> text.
* <del>This line of text is meant to be treated as deleted text.</del>
* <s>This line of text is meant to be treated as no longer accurate.</s>
* <ins>This line of text is meant to be treated as an addition to the document.</ins>
* <u>This line of text will render as underlined</u>
* <small>This line of text is meant to be treated as fine print.</small>
* <strong>This line is highlighted by being rendered as bold text.</strong>
* <b>This line rendered as bold text.</b>
* <em>This line is emphasised by being rendered as italicised text.</em>
* <i>This line rendered as italicised text.</i>


