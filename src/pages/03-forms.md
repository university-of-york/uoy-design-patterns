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

Firstly, a few different input types (note the three different ways to call _atoms_ , and the `hidden` type at the end):

<script>
component("form-element", { "label": "Name", "name": "a", "atoms": { "input": { "placeholder":"Enter your name" } } });
component("form-element", { "label": "Email", "name": "b", "atoms": [
  { "input": { "type": "email" } }
]});
component("form-element", { "label": "Image", "name": "c", "atoms": [
  {
    "component": "input",
    "options": { "type": "file" }
  }
]});
component("form-element", { "label": "Password", "name": "d", "atoms": { "input": { "type": "password" } } });
component("form-element", { "label": "Website", "name": "e", "atoms": { "input": { "type": "url", "value":"http://" } } });
component("form-element", { "label": "Phone", "name": "f", "atoms": { "input": { "type": "phone" } } });
component("form-element", { "label": "Your Comment", "name": "g", "atoms": { "textarea": { "placeholder": "Please add a well-written, grammatically correct comment" } } });
component("form-element", { "label": false, "name": "h", "atoms": { "input": { "type": "hidden", "value": "this is a secret value" } } });
</script>

Of course, you're not just going to need `input`s and `textarea`s. Checkbox lists, `select` dropdowns and radio lists are _molecules_, made up of an array of `checkbox`, `option` or `radio` atoms.

<script>
component("form-element", { "label": "What is your favourite colour?", "select": true, "name": "i", "atoms":[
	{ "option": { "label": "Red", "value": "red" } },
	{ "option": { "label": "Blue", "value": "blue" } },
	{ "option": { "label": "Green", "value": "green" } },
	{ "option": { "label": "Yellow", "value": "yellow" } }
]});
component("form-element", { "label": "What instruments do you play?", "name": "j", "atoms":[
	{ "checkbox": { "label": "Ukulele", "value": "ukulele" } },
	{ "checkbox": { "label": "Mandolin", "value": "mandolin" } },
	{ "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } },
	{ "checkbox": { "label": "Guitar", "value": "guitar" } }
]});
component("form-element", { "label": "Do you know the way to San Jose?", "name": "k", "atoms":[
	{ "radio": { "label": "Yes", "value": "yes" } },
	{ "radio": { "label": "No", "value": "no" } },
	{ "radio": { "label": "Not sure", "value": "unsure" } }
]});
</script>

You can put these together in a `form-row`: three `thirds`, two `halves`, a `half` and two `quarters`, and so on.

<script>
component("form-row", { atoms: [
	{ "form-element": { "label": "Bippity", "name": "l", "size": "half" } },
	{ "form-element": { "label": "Boppity", "name": "m", "size": "quarter" } },
	{ "form-element": { "label": "Boo", "name": "n", "size": "quarter" } },
]});
</script>

And finally, the `form` organism: a load of `form-row`s.

<script>
component("form", { type:"stacked", method:"get", legend: "Fill in this form", atoms: [

	{ "form-row": { atoms: [
		{ "form-element": { "label": "Bippity", "name": "o", "size": "half" } },
		{ "form-element": { "label": "Boppity", "name": "p", "size": "quarter" } },
		{ "form-element": { "label": "Boo", "name": "q", "size": "quarter" } },
	]}},
	{ "form-row": { atoms: [
		{ "form-element": { "label": "Hickory", "name": "r", "size": "third" } },
		{ "form-element": { "label": "Dickory", "name": "s", "size": "third" } },
		{ "form-element": { "label": "Dock", "name": "t", "size": "third" } },
	]}},
	{ "form-row": { atoms: [
		{ "button": { "text": "Submit" } }
	]}}

]});
</script>

### Options

#### Atoms

* input
  * **type**: one of _text_ (default), _file_, _hidden_, _password_, _email_, _url_ and _tel_
  * **value**: the default `value` of the `input`
  * **placeholder**: placeholder text (don't rely on this text being there - it's not supported in **<IE10**


* option
  * **label**: the text in the option field **(required)**
  * **value**: the `value` of the `option` **(required)**


* checkbox
  * **label**: the text in the accompanying label field **(required)**
  * **value**: the `value` of the `checkbox` **(required)**
  * **name**: the `name attribute (must be the same for all checkboxes/radios)  **(required)**


* radio
  * **label**: the text in the accompanying label field **(required)**
  * **value**: the `value` of the `radio` **(required)**
  * **name**: the `name attribute (must be the same for all checkboxes/radios)  **(required)**


#### Molecules


* form-element
  * **label**: the label attached to the form element **(required)**
  * **name**: the name of the form field **(required)**
  * **select**: true if this is a `select` dropdown
  * **size**: one of _half_, _quarter_ or _third_ (leaving blank will render full-width)
  * **atoms**: an array of atoms (multiple `options`, `checkboxes` or `radios`) or an atom object (i.e. one `input`). If this is missing a text `input` is added by default


* form-row
  * **atoms**: an array of `form-element` molecules. Use your judgement to make sure each `form-row` is filled with the correct number and size of elements. BUttons can be added as atoms to make sure they line up with the rest of the form


#### Organisms


* form
  * **type**: supported types are _stacked_ (default) or _inline_
  * **action**: URL to submit the form to. Can be absolute or relative. Defaults to "#"
  * **method**: either _post_ (default) or _get_
  * **id**: an _id_ to identify the form
  * **legend**: some text to go in the `legend` of the form. Default is to omit it altogether.
  * **atoms**: an array of `form-row` molecules.


###TODO

* Add validation options?
