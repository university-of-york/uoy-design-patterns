---

title: Forms
name: forms
category: components
subcategory: Organisms
layout: q+tq
id: forms-page

---

<div class="lead"><p>Building up a form takes time, but should be a simple case of combining all the elements here in a sensible way.</p></div>

The basic unit in forms is the _form-element_. This is a _molecule_, made up of one or more _atoms_. The atoms can be an `input`, a `textarea`, a number of `checkbox` or `radio` buttons, or a `select` dropdown. It combines a label with these form elements and boxes them all up in a handy-sized `div`.

Firstly, a few different input types (note the `hidden` type at the end):

<script>
// Three different ways of calling a component:
// 1. Single object as atoms value
component("form-element", { "label": "Name", "name": "a", "atoms": { "input": { "placeholder":"Enter your name" } } })
// 2. Atoms array with single object
+component("form-element", { "label": "Email", "name": "b", "atoms": [
  { "input": { "type": "email" } }
]})
// 3. Atoms array with component/options keys
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
+component("form-element", { "label": "Your Comment", "name": "g", "atoms": { "textarea": { "placeholder": "Please add a slightly longer well-written, grammatically correct comment", "size": "double" } } })
+component("form-element", { "label": "Your Comment", "name": "g", "atoms": { "textarea": { "placeholder": "Please add a very long well-written, grammatically correct comment", "size": "treble" } } })
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
+component("form-element", { "label": "What instruments do you play?", "name": "j", "atoms": [
  { "form-element-group": { "name": "j", "atoms":[
  	{ "checkbox": { "label": "Ukulele", "value": "ukulele" } },
  	{ "checkbox": { "label": "Mandolin", "value": "mandolin" } },
  	{ "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } },
  	{ "checkbox": { "label": "Guitar", "value": "guitar" } }
  ]}}
]})
+component("form-element", { "label": "Do you know the way to San Jose?", "name": "k", "atoms": [
  { "form-element-group": { "name": "k", "atoms":[
  	{ "radio": { "label": "Yes", "value": "yes" } },
  	{ "radio": { "label": "No", "value": "no" } },
  	{ "radio": { "label": "Not sure", "value": "unsure" } }
  ]}}
]});
</script>

### Form hints

You can add a `hint` to any `form-element`, to give users more information about a form field.

<script>
component("form-element", { "label": "Password", "name": "l", "hint": "Must contain a letter, a number, a hieroglyph and at least two Cyrillic characters", "atoms": { "input": { "type":"password" } } });
</script>


You can put these together in the usual grid system: a `grid-row` can be `form-elements` that are three `third`s, two `half`s, a `half` and two `quarter`s, and so on.

<script>
component("grid-row", { "atoms": [
  { "grid-box": { "size": "third", "atoms":
	  { "form-element": { "label": "Bippity", "name": "l" } },
  } },
  { "grid-box": { "size": "third", "atoms":
	  { "form-element": { "label": "Boppity", "name": "m" } },
  } },
  { "grid-box": { "size": "third", "atoms":
	 { "form-element": { "label": "Boo", "name": "n" } },
  } }
]});
</script>

And finally, the `form` organism: a load of `grid-row`s. The default style is `form-stacked`.

<script>
component("form", { "type":"stacked", "method":"get", "legend": "Fill in this form", "atoms": [

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Text input", "name": "sa", "atoms": { "input": { "type":"text" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "File input", "name": "sb", "atoms": { "input": { "type":"file" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Password", "name": "sc", "hint": "Must contain a letter, a number, a hieroglyph and at least two Cyrillic characters", "atoms": { "input": { "type":"password" } } } }
    } }
  ] } },

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Email", "name": "sd", "atoms": { "input": { "type":"email" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "URL", "name": "se", "atoms": { "input": { "type":"url" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Telephone", "name": "sf", "atoms": { "input": { "type":"tel" } } } }
    } }
  ] } },

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Select", "select": true, "name": "sg", "atoms":[
        { "option": { "label": "Red", "value": "red" } },
        { "option": { "label": "Blue", "value": "blue" } },
        { "option": { "label": "Green", "value": "green" } },
        { "option": { "label": "Yellow", "value": "yellow" } }
      ] } }
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Radio", "name": "sh", "atoms": [
        { "form-element-group": { "name": "sh", "atoms":[
          { "radio": { "label": "Yes", "value": "yes" } },
          { "radio": { "label": "No", "value": "no" } },
          { "radio": { "label": "Not sure", "value": "unsure" } }
        ] } }
      ] } }
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Checkbox", "name": "si", "atoms":[
        { "form-element-group": { "name": "si", "atoms":[
          { "checkbox": { "label": "Ukulele", "value": "ukulele" } },
          { "checkbox": { "label": "Mandolin", "value": "mandolin" } },
          { "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } }
        ] } }
      ] } }
    } }
  ] } },

  { "grid-row": { "atoms":
    { "grid-box": { "size": "full", "atoms":
      { "form-element": { "label": "Textarea", "name": "sj", "atoms": { "textarea": { } } } }
    } }
  } },

  { "grid-row": { "atoms":
    { "grid-box": { "size": "full", "atoms":
      { "button": { "text": "Submit", "submit": true } }
    } }
  } }

]});
</script>

### Inline forms

Inline forms have the label and the input on the same line. By default, the label is 25% of the width of the row, and the input is the remaining 75%. Because of this it's not recommended to put inline forms into quarter- or third-width grid boxes. Here is the same form as above but as a `form-inline` version.

<script>
component("form", { "type":"inline", "method":"get", "legend": "Fill in this form", "atoms": [

  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "Text input", "name": "ia", "atoms": { "input": { "type":"text" } } } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "File input", "name": "ib", "atoms": { "input": { "type":"file" } } } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "Password", "name": "ic", "hint": "Must contain a letter, a number, a hieroglyph and at least two Cyrillic characters", "atoms": { "input": { "type":"password" } } } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "Email", "name": "id", "atoms": { "input": { "type":"email" } } } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "URL", "name": "ie", "atoms": { "input": { "type":"url" } } } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "Telephone", "name": "if", "atoms": { "input": { "type":"tel" } } } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "Select", "select": true, "name": "ig", "atoms":[
        { "option": { "label": "Red", "value": "red" } },
        { "option": { "label": "Blue", "value": "blue" } },
        { "option": { "label": "Green", "value": "green" } },
        { "option": { "label": "Yellow", "value": "yellow" } }
      ]} }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "Radio", "name": "ih", "atoms":[
      { "form-element-group": { "name": "j", "atoms":[
        { "radio": { "label": "Yes", "value": "yes" } },
        { "radio": { "label": "No", "value": "no" } },
        { "radio": { "label": "Not sure", "value": "unsure" } }
      ] } }
    ] } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "Checkbox", "name": "ii", "atoms":[
      { "form-element-group": { "name": "j", "atoms":[
        { "checkbox": { "label": "Ukulele", "value": "ukulele" } },
        { "checkbox": { "label": "Mandolin", "value": "mandolin" } },
        { "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } }
      ] } }
    ] } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "label": "Textarea", "name": "ij", "atoms": { "textarea": { } } } }
  } } } },
  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "button": { "text": "Submit", "submit": true } }
  } } } }
]});
</script>

### Joined forms

A _joined_ form is a single-field form with the submit button joined to the end. It must be a text-style input that is joined to the button (or it won't fit). No label is required.

<script>
component("form", { "type":"joined", "method":"get", "legend": "A joined form and button", "atoms": [

  { "grid-row": { "atoms": { "grid-box": { "size": "full", "atoms":
    { "form-element": { "name": "ja", "atoms": [
      { "input": { "type":"text", "placeholder": "Enter your search term here" } },
      { "button-link": { "text": "Search", "size": "medium", "icon-after": "search" } }
      ] } }
  } } } }

]});
</script>

## Form validation

Add an `is-invalid` class to the `form-element` div to flag it up as invalid its contents. You can also add a `hint-invalid` message to each invalid element, if required.

<script>
component("form", { "type":"stacked", "method":"get", "legend": "Fill in this form", "atoms": [

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "Text input", "name": "sa", "atoms": { "input": { "type":"text" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "File input", "name": "sb", "atoms": { "input": { "type":"file" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "Password", "name": "sc", "hint": "Must contain a letter, a number, a hieroglyph and at least two Cyrillic characters", "atoms": { "input": { "type":"password" } } } }
    } }
  ] } },

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "Email", "name": "sd", "atoms": { "input": { "type":"email" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "URL", "name": "se", "atoms": { "input": { "type":"url" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "Telephone", "name": "sf", "atoms": { "input": { "type":"tel" } } } }
    } }
  ] } },

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "Select", "select": true, "name": "sg", "atoms":[
        { "option": { "label": "Red", "value": "red" } },
        { "option": { "label": "Blue", "value": "blue" } },
        { "option": { "label": "Green", "value": "green" } },
        { "option": { "label": "Yellow", "value": "yellow" } }
      ] } }
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "Radio", "name": "sh", "atoms": [
        { "form-element-group": { "name": "sh", "atoms":[
          { "radio": { "label": "Yes", "value": "yes" } },
          { "radio": { "label": "No", "value": "no" } },
          { "radio": { "label": "Not sure", "value": "unsure" } }
        ] } }
      ] } }
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "Checkbox", "name": "si", "atoms":[
        { "form-element-group": { "name": "si", "atoms":[
          { "checkbox": { "label": "Ukulele", "value": "ukulele" } },
          { "checkbox": { "label": "Mandolin", "value": "mandolin" } },
          { "checkbox": { "label": "Banjo", "value": "banjo", "checked": true } }
        ] } }
      ] } }
    } }
  ] } },

  { "grid-row": { "atoms":
    { "grid-box": { "size": "full", "atoms":
      { "form-element": { "invalid": true, "hint-invalid": "This field cannot be empty", "label": "Textarea", "name": "sj", "atoms": { "textarea": { } } } }
    } }
  } },

  { "grid-row": { "atoms":
    { "grid-box": { "size": "full", "atoms":
      { "button": { "text": "Submit", "submit": true } }
    } }
  } }

]});
</script>

### Options

#### Atoms

* **input**
  * **type**: one of _text_ (default), _file_, _hidden_, _password_, _email_, _url_ and _tel_
  * **value**: the default `value` of the `input`
  * **placeholder**: placeholder text (don't rely on this text being there - it's not supported in **&lt;IE10**)
  * **required** TODO
  * **validation** TODO

* **option**
  * **label**: the text in the option field **(required)**
  * **value**: the `value` of the `option` **(required)**

* **checkbox**
  * **label**: the text in the accompanying label field **(required)**
  * **value**: the `value` of the `checkbox` **(required)**
  * **name**: the `name attribute (must be the same for all checkboxes/radios)  **(required)**

* **radio**
  * **label**: the text in the accompanying label field **(required)**
  * **value**: the `value` of the `radio` **(required)**
  * **name**: the `name attribute (must be the same for all checkboxes/radios)  **(required)**

#### Molecules

* **form-element**
  * **label**: the label attached to the form element **(required)**
  * **name**: the name of the form field **(required)**
  * **select**: true if this is a `select` dropdown
  * **size**: one of _half_, _quarter_ or _third_ (leaving blank will render full-width)
  * **hint**: (string) Help users out with tricky form questions
  * **invalid**: (Boolean) (default `false`) whether the field is invalid or not
  * **hint-invalid**: (string) Error message for invalid fields
  * **atoms**: an array of atoms (multiple `options`, `checkboxes` or `radios`) or an atom object (i.e. one `input`). If this is missing a text `input` is added by default

#### Organisms

* **form**
  * **type**: supported types are _stacked_ (default), _joined_ or _inline_
  * **action**: URL to submit the form to. Can be absolute or relative. Defaults to "#"
  * **method**: either _post_ (default) or _get_
  * **id**: an _id_ to identify the form
  * **legend**: some text to go in the `legend` of the form. Default is to omit it altogether.
  * **atoms**: an array of `grid-row` molecules.

### TODO

* Add validation options? (as `data-validation` option?)
* Fancy select boxes?
* Fancy file input?
