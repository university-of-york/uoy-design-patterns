---

title: Autocomplete module
name: autocomplete-module
category: modules
subcategory: Component modules
layout: q+tq
id: auocomplete-module-page

---

<div class="lead"><p>To apply an autocomplete to a search list, call the `AUTOCOMPLETE` module on it.</p></div>

The `.c-autocomplete` div and `.c-autocomplete__list` ul should have been added to the page as well.

Due to the complexity of the module, this can't be set up automatically using _data_ attributes - it must be added to _app/main.js_.

This uses the [Fuse](https://fusejs.io) fuzzy search library. The defaults are set to give 70% weight to the title, 30% to the subtitle (if set). This currently can't be tweaked.

### Example using defaults

<form action="https://www.york.ac.uk/search" method="get" class="c-form" id="example-search-form">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text"  type="search" id="example-search-query" name="q" autocomplete="off"/>
      <div class="c-autocomplete">
        <ul class="c-autocomplete__list">
        </ul>
      </div>
    </div>
  </fieldset>
</form>

<script>
require(['app/autocomplete'], function(AUTOCOMPLETE) {
  $(function() {
    var a = new AUTOCOMPLETE({
      input: $('#example-search-query'),
      results: [
        {
          title: "Study"
        },
        {
          title: "Research"
        },
        {
          title: "Student life"
        }
      ],
      followLinks: false
    });
  });
});
</script>

```markup
<form action="https://www.york.ac.uk/search" method="get" class="c-form" id="example-search-form">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text"  type="search" id="example-search-query" name="q" autocomplete="off"/>
      <div class="c-autocomplete">
        <ul class="c-autocomplete__list">
        </ul>
      </div>
    </div>
  </fieldset>
</form>
```

```javascript
var a = new AUTOCOMPLETE({
  input: $('#example-search-query'),
  results: [
    {
      title: "Study"
    },
    {
      title: "Research"
    },
    {
      title: "Student life"
    }
  ],
  followLinks: false
});
```

### Example using `followLinks: true`

<form action="" method="get" class="c-form" id="example-links-form">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text"  type="search" id="example-links-query" name="search-query" autocomplete="off"/>
      <div class="c-autocomplete">
        <ul class="c-autocomplete__list">
        </ul>
      </div>
    </div>
  </fieldset>
</form>

<script>
require(['app/autocomplete'], function(AUTOCOMPLETE) {
  $(function() {
    var a = new AUTOCOMPLETE({
      input: $('#example-links-query'),
      results: [
        {
          title: "Alcuin College",
          subtitle: "Campus West",
          link: "https://www.york.ac.uk/map#alcuin-college"
        },
        {
          title: "Constantine College",
          subtitle: "Campus East",
          link: "https://www.york.ac.uk/map#constantine-college"
        },
        {
          title: "Derwent College",
          subtitle: "Campus West",
          link: "https://www.york.ac.uk/map#derwent-college"
        }
      ],
      followLinks: true
    });
  });
});
</script>

```markup
<form action="" method="get" class="c-form" id="example-links-form">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text"  type="search" id="example-links-query" name="search-query" autocomplete="off"/>
      <div class="c-autocomplete">
        <ul class="c-autocomplete__list">
        </ul>
      </div>
    </div>
  </fieldset>
</form>
```

```javascript
var a = new AUTOCOMPLETE({
  input: $('#example-links-form'),
  results: [
    {
      title: "Alcuin College",
      subtitle: "Campus West",
      link: "https://www.york.ac.uk/map#alcuin-college"
    },
    {
      title: "Constantine College",
      subtitle: "Campus East",
      link: "https://www.york.ac.uk/map#constantine-college"
    },
    {
      title: "Derwent College",
      subtitle: "Campus West",
      link: "https://www.york.ac.uk/map#derwent-college"
    }
  ],
  followLinks: true
});
```

### Options

 * **input** - _(required)_ the _text_ or _search_ input that should be used as the anchor for the 
 * **results** - an array of results, with a title, subtitle and link keys
 * **followLinks** - _(defaults to false)_ Should we follow the link in the autocomplete? The default behaviour is to put the value in the input and submit the form.
 