---

title: Forms
name: forms
category: Components
layout: default
id: forms-page

---

## Forms

Building up a form takes time, but should be a simple case of combining all the elements here in a sensible way.

The basic unit in forms is the _form-element_. This is a _molecule_, made up of one or more _atoms_. The atoms can be an `input`, a `textarea`, a number of `checkbox` or `radio` buttons, or a `select` dropdown. It combines a label with these form elements and boxes them all up in a handy-sized `div`.

Firstly, a few different input types (note the `hidden` type at the end):

<script>
component("form-element", { "label": "Name", "name": "n", "atoms":[
	{ "input": { "placeholder":"Enter your name" } }
]});
component("form-element", { "label": "Email", "name": "e", "atoms":[
	{ "input": { "type": "email" } }
]});
component("form-element", { "label": "Image", "name": "i", "atoms":[
	{ "input": { "type": "file" } }
]});
component("form-element", { "label": "Password", "name": "p", "atoms":[
	{ "input": { "type": "password" } }
]});
component("form-element", { "label": "Website", "name": "w", "atoms":[
	{ "input": { "type": "url", "value":"http://" } }
]});
component("form-element", { "label": "Phone", "name": "p", "atoms":[
	{ "input": { "type": "phone" } }
]});
component("form-element", { "label": "Your Comment", "name": "c", "atoms":[
	{ "textarea": { "placeholder": "Please add a well-written, grammatically correct comment" } }
]});
component("form-element", { "label": false, "name": "h", "atoms":[
	{ "input": { "type": "hidden", "value": "this is a secret value" } }
]});
</script>

Of course, you're not just going to need `input`s and `textarea`s. Checkbox lists, `select` dropdowns and radio lists are _molecules_, made up of an array of `checkbox`, `option` or `radio` atoms.

<script>
component("form-element", { "label": "What is your favourite colour?", "select": true, "name": "b", "atoms":[
	{ "option": { "label": "Red", "value": "red" } },
	{ "option": { "label": "Blue", "value": "blue" } },
	{ "option": { "label": "Green", "value": "green" } },
	{ "option": { "label": "Yellow", "value": "yellow" } }
]});
component("form-element", { "label": "What instruments do you play?", "name": "i", "atoms":[
	{ "checkbox": { "label": "Ukulele", "value": "ukulele" } },
	{ "checkbox": { "label": "Mandolin", "value": "mandolin" } },
	{ "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } },
	{ "checkbox": { "label": "Guitar", "value": "guitar" } }
]});
component("form-element", { "label": "Do you know the way to San Jose?", "name": "o", "atoms":[
	{ "radio": { "label": "Yes", "value": "yes" } },
	{ "radio": { "label": "No", "value": "no" } },
	{ "radio": { "label": "Not sure", "value": "unsure" } }
]});
</script>

You can put these together in a `form-row`: three `thirds`, two `halves`, a `half` and two `quarters`, and so on.

<script>
component("form-row", { atoms: [
	{ "form-element": { "label": "Bippity", "name": "a", "size": "half" } },
	{ "form-element": { "label": "Boppity", "name": "b", "size": "quarter" } },
	{ "form-element": { "label": "Boo", "name": "c", "size": "quarter" } },
]});
</script>

And finally, the `form` organism: a load of `form-row`s.

<script>
component("form", { atoms: [

	{ "form-row": { atoms: [
		{ "form-element": { "label": "Bippity", "name": "a", "size": "half" } },
		{ "form-element": { "label": "Boppity", "name": "b", "size": "quarter" } },
		{ "form-element": { "label": "Boo", "name": "c", "size": "quarter" } },
	]}},
	{ "form-row": { atoms: [
		{ "form-element": { "label": "Hickory", "name": "d", "size": "third" } },
		{ "form-element": { "label": "Dickory", "name": "e", "size": "third" } },
		{ "form-element": { "label": "Dock", "name": "f", "size": "third" } },
	]}},
	{ "form-row": { atoms: [
		{ "button": { "text": "Submit" } }
	]}}

]});
</script>

### Options

#### Atoms

* input

  ##### Options

  * **type**: one of _text_ (default), _file_, _hidden_, _password_, _email_, _url_ and _tel_
  * **value**: the default `value` of the `input`
  * **placeholder**: placeholder text (don't rely on this text being there - it's not supported in **<IE10**

* option

  ##### Options

  * **label**: the text in the option field **(required)**
  * **value**: the `value` of the `option` **(required)**

* checkbox
* radio

  ##### Options

  * **label**: the text in the accompanying label field **(required)**
  * **value**: the `value` of the `option` **(required)**
  * **name**: the `name attribute (must be the same for all checkboxes/radios)  **(required)**

#### Molecules

* form-element

  ##### Options

  * **label**: the label attached to the form element **(required)**
  * **name**: the name of the form field **(required)**
  * **select**: true if this is a `select` dropdown
  * **size**: one of _half_, _quarter_ or _third_ (leaving blank will render full-width)

#### Organisms

* form-row

###TODO

* Add validation options?
