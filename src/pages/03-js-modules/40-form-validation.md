---

title: Form validation
name: form-validation-module
category: modules
subcategory: Component modules
layout: q+tq
id: form-validation-module-page

---

<div class="lead"><p>To add form validation to a form and it's inputs, add a `js-form` class to the `form` element. By defauly, it will validate inputs according to their `type` and whether they are `required`, plus add some functionality to the form itself.</p></div>

### Use

```javascript
var f = new FORM({
  form: $('#some-form')
});
```

### Example

<script>
component("form", { "type":"stacked", "method":"get", "legend": "Fill in this form", "atoms": [

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Text input", "name": "sa", "atoms": { "input": { "type":"text", "required": true } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "File input", "name": "sb", "atoms": { "input": { "type":"file" } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Password", "name": "sc", "hint": "Must contain a letter, a number, a hieroglyph and at least two Cyrillic characters", "atoms": { "input": { "type":"password", "required": true } } } }
    } }
  ] } },

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Email", "name": "sd", "atoms": { "input": { "type":"email", "required": true } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "URL", "name": "se", "atoms": { "input": { "type":"url", "required": true } } } },
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Telephone", "name": "sf", "atoms": { "input": { "type":"tel", "required": true } } } }
    } }
  ] } },

  { "grid-row": { "atoms": [
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Select", "select": true, "name": "sg", "required": true, "atoms":[
        { "option": { "label": "Red", "value": "red" } },
        { "option": { "label": "Blue", "value": "blue" } },
        { "option": { "label": "Green", "value": "green" } },
        { "option": { "label": "Yellow", "value": "yellow" } }
      ] } }
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Radio", "name": "sh", "required": true, "atoms": [
        { "form-element-group": { "name": "sh", "atoms":[
          { "radio": { "label": "Yes", "value": "yes" } },
          { "radio": { "label": "No", "value": "no" } },
          { "radio": { "label": "Not sure", "value": "unsure" } }
        ] } }
      ] } }
    } },
    { "grid-box": { "size": "third", "atoms":
      { "form-element": { "label": "Checkbox", "name": "si", "required": true, "atoms":[
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
      { "form-element": { "label": "Textarea", "name": "sj", "atoms": { "textarea": { "required": true } } } }
    } }
  } },

  { "grid-row": { "atoms":
    { "grid-box": { "size": "full", "atoms":
      { "button": { "text": "Submit" } }
    } }
  } }

]});
</script>

### Options

 * **form** - a `form` element. The script automatically parses for forms with the class `.js-form`.
