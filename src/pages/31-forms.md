---

title: Forms
name: forms
category: organisms
layout: q+tq
id: forms-page

---

<p class="lead">Building up a form takes time, but should be a simple case of combining all the elements here in a sensible way.</p>

The basic unit in forms is the _form-element_. This is a _molecule_, made up of one or more _atoms_. The atoms can be an `input`, a `textarea`, a number of `checkbox` or `radio` buttons, or a `select` dropdown. It combines a label with these form elements and boxes them all up in a handy-sized `div`.

Firstly, a few different input types (note the `hidden` type at the end):

<script>
component("form-element", { "label": "Name", "name": "a", "atoms": { "input": { "placeholder":"Enter your name" } } })
+component("form-element", { "label": "Email", "name": "b", "atoms": [
  { "input": { "type": "email" } }
]})
+component("form-element", { "label": "Image", "name": "c", "atoms": [
  {
    "component": "input",
    "options": { "type": "file" }
  }
]})
+component("form-element", { "label": "Password", "name": "d", "atoms": { "input": { "type": "password" } } })
+component("form-element", { "label": "Website", "name": "e", "atoms": { "input": { "type": "url", "value":"http://" } } })
+component("form-element", { "label": "Phone", "name": "f", "atoms": { "input": { "type": "tel" } } })
+component("form-element", { "label": "Your Comment", "name": "g", "atoms": { "textarea": { "placeholder": "Please add a well-written, grammatically correct comment" } } })
+component("form-element", { "label": false, "name": "h", "atoms": { "input": { "type": "hidden", "value": "this is a secret value" } } });
</script>

Of course, you're not just going to need `input`s and `textarea`s. Checkbox lists, `select` dropdowns and radio lists are _molecules_, made up of an array of `checkbox`, `option` or `radio` atoms.

<script>
component("form-element", { "label": "What is your favourite colour?", "select": true, "name": "i", "atoms":[
	{ "option": { "label": "Red", "value": "red" } },
	{ "option": { "label": "Blue", "value": "blue" } },
	{ "option": { "label": "Green", "value": "green" } },
	{ "option": { "label": "Yellow", "value": "yellow" } }
]})
+component("form-element", { "label": "What instruments do you play?", "name": "j", "atoms":[
	{ "checkbox": { "label": "Ukulele", "value": "ukulele" } },
	{ "checkbox": { "label": "Mandolin", "value": "mandolin" } },
	{ "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } },
	{ "checkbox": { "label": "Guitar", "value": "guitar" } }
]})
+component("form-element", { "label": "Do you know the way to San Jose?", "name": "k", "atoms":[
	{ "radio": { "label": "Yes", "value": "yes" } },
	{ "radio": { "label": "No", "value": "no" } },
	{ "radio": { "label": "Not sure", "value": "unsure" } }
]});
</script>

You can put these together in the usual grid system: a `form-row` can be `form-elements` that are three `g-third`s, two `g-half`s, a `g-half` and two `g-quarter`s, and so on.

<script>
component("form-row", { "atoms": [
	{ "form-element": { "label": "Bippity", "name": "l", "size": "third" } },
	{ "form-element": { "label": "Boppity", "name": "m", "size": "third" } },
	{ "form-element": { "label": "Boo", "name": "n", "size": "third" } },
]});
</script>

And finally, the `form` organism: a load of `form-row`s. The default style is `form-stacked`.

<script>
component("form", { "type":"stacked", "method":"get", "legend": "Fill in this form", "atoms": [

  { "form-row": { "atoms": [
    { "form-element": { "label": "Text input", "name": "sa", "size": "third", "atoms": { "input": { "type":"text" } } } },
    { "form-element": { "label": "File input", "name": "sb", "size": "third", "atoms": { "input": { "type":"file" } } } },
    { "form-element": { "label": "Password", "name": "sc", "size": "third", "atoms": { "input": { "type":"password" } } } },
  ]}},

  { "form-row": { "atoms": [
    { "form-element": { "label": "Email", "name": "sd", "size": "third", "atoms": { "input": { "type":"email" } } } },
    { "form-element": { "label": "URL", "name": "se", "size": "third", "atoms": { "input": { "type":"url" } } } },
    { "form-element": { "label": "Telephone", "name": "sf", "size": "third", "atoms": { "input": { "type":"tel" } } } },
  ]}},

  { "form-row": { "atoms": [
    { "form-element": { "label": "Select", "select": true, "size": "third", "name": "sg", "atoms":[
      { "option": { "label": "Red", "value": "red" } },
      { "option": { "label": "Blue", "value": "blue" } },
      { "option": { "label": "Green", "value": "green" } },
      { "option": { "label": "Yellow", "value": "yellow" } }
    ]} },
    { "form-element": { "label": "Radio", "name": "sh", "size": "third", "atoms":[
      { "radio": { "label": "Yes", "value": "yes" } },
      { "radio": { "label": "No", "value": "no" } },
      { "radio": { "label": "Not sure", "value": "unsure" } }
    ] } },
    { "form-element": { "label": "Checkbox", "name": "si", "size": "third", "atoms":[
      { "checkbox": { "label": "Ukulele", "value": "ukulele" } },
      { "checkbox": { "label": "Mandolin", "value": "mandolin" } },
      { "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } }
    ] } },
  ]}},

  { "form-row": { "atoms": [
    { "form-element": { "label": "Textarea", "name": "sj", "size": "full", "atoms": { "textarea": { } } } },
  ]}},

  { "form-row": { "atoms": [
    { "button": { "text": "Submit" } }
  ]}}

]});
</script>

Inline forms have the label and the input on the same line. By default, the label is 25% of the width of the row, and the input is the remaining 75%. Because of this it's not recommended to put inline forms into quarter- or third-width grid boxes. Here is the same form as above but as a `form-inline` version.

<script>
component("form", { "type":"inline", "method":"get", "legend": "Fill in this form", "atoms": [

  { "form-row": { "atoms": { "form-element": { "label": "Text input", "name": "ia", "atoms": { "input": { "type":"text" } } } } } },
  { "form-row": { "atoms": { "form-element": { "label": "File input", "name": "ib", "atoms": { "input": { "type":"file" } } } } } },
  { "form-row": { "atoms": { "form-element": { "label": "Password", "name": "ic", "atoms": { "input": { "type":"password" } } } } } },
  { "form-row": { "atoms": { "form-element": { "label": "Email", "name": "id", "atoms": { "input": { "type":"email" } } } } } },
  { "form-row": { "atoms": { "form-element": { "label": "URL", "name": "ie", "atoms": { "input": { "type":"url" } } } } } },
  { "form-row": { "atoms": { "form-element": { "label": "Telephone", "name": "if", "atoms": { "input": { "type":"tel" } } } } } },
  { "form-row": { "atoms": { "form-element": { "label": "Select", "select": true, "name": "ig", "atoms":[
    { "option": { "label": "Red", "value": "red" } },
    { "option": { "label": "Blue", "value": "blue" } },
    { "option": { "label": "Green", "value": "green" } },
    { "option": { "label": "Yellow", "value": "yellow" } }
  ]} } } },
  { "form-row": { "atoms": { "form-element": { "label": "Radio", "name": "ih", "atoms":[
    { "radio": { "label": "Yes", "value": "yes" } },
    { "radio": { "label": "No", "value": "no" } },
    { "radio": { "label": "Not sure", "value": "unsure" } }
  ] } } } },
  { "form-row": { "atoms": { "form-element": { "label": "Checkbox", "name": "ii", "atoms":[
    { "checkbox": { "label": "Ukulele", "value": "ukulele" } },
    { "checkbox": { "label": "Mandolin", "value": "mandolin" } },
    { "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } }
  ] } } } },
  { "form-row": { "atoms": { "form-element": { "label": "Textarea", "name": "ij", "atoms": { "textarea": { } } } } } },
  { "form-row": { "atoms": { "button": { "text": "Submit" } } } }

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
* Fancy select boxes?
* Fancy file input?
