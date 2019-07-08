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

<script>
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
</script>
```

### Example using `followLinks: true`

This also uses the `.c-autocomplete--alt` modifier, which applies the styles seen on the [campus map](http://www.york.ac.uk/map).

<form action="" method="get" class="c-form" id="example-links-form">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text"  type="search" id="example-links-query" name="search-query" autocomplete="off"/>
      <div class="c-autocomplete c-autocomplete--alt">
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
          link: "#alcuin-college",
          badge: '<span class="zone-3"></span>'
        },
        {
          title: "Constantine College",
          subtitle: "Campus East",
          link: "#constantine-college",
          badge: '<span class="zone-9"></span>'
        },
        {
          title: "Derwent College",
          subtitle: "Campus West",
          link: "#derwent-college",
          badge: '<span class="zone-5"></span>'
        }
      ],
      category: 'College search',
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

<script>
var a = new AUTOCOMPLETE({
  input: $('#example-links-form'),
  results: [
    {
      title: "Alcuin College",
      subtitle: "Campus West",
      link: "#alcuin-college",
      badge: '<span class="campus-zone zone-3"></span>'
    },
    {
      title: "Constantine College",
      subtitle: "Campus East",
      link: "#constantine-college",
      badge: '<span class="campus-zone zone-9"></span>'
    },
    {
      title: "Derwent College",
      subtitle: "Campus West",
      link: "#derwent-college",
      badge: '<span class="campus-zone zone-5"></span>'
    }
  ],
  category: 'College search',
  followLinks: true
});
</script>
```

### Example using results function

Instead of an array of results, the `results` option can be a function that returns a Fuse results-like array:

```javascript
[{
  item: {
    title:"", // Required
    subtitle:"" // Optional
    link:"" // Optional
  }
}]
```

This is useful when using an external autosuggest URL. The function is called on each `keyup` event in the search input (as long as it's not the `up`, `down`, `return` or `escape` key), and should have two arguments: the `searchTerm` from the search input and an `onComplete` function to run when the results are all in.

<form action="https://www.york.ac.uk/search" method="get" class="c-form" id="example-function-form">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text"  type="search" id="example-function-query" name="q" autocomplete="off"/>
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
      input: $('#example-function-query'),
      results: function(searchTerm, onComplete) {
        //if (searchTerm.length < 3) return false;
        // console.log("Getting results from Funnelback");
        var fbUrl = "https://york.funnelback.co.uk/s/suggest.json?collection=york-uni-web&show=10&sort=0&alpha=0.5&fmt=json++&partial_query="+searchTerm;
        $.getJSON(fbUrl, function(r) {
          var results = [];
          var rLength = r.length;
          $.each(r, function(i, v) {
            results.push({
              item: {
                title: v.disp
              }
            });
            if (i === rLength-1) {
              console.log(results);
              onComplete(results);
            }
          });
        });
      },
      category: 'Search',
      followLinks: false
    });
  });
});
</script>

```markup
<form action="https://www.york.ac.uk/search" method="get" class="c-form" id="example-function-form">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text"  type="search" id="example-function-query" name="q" autocomplete="off"/>
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
      input: $('#example-function-query'),
      results: function(searchTerm, onComplete) {
        if (searchTerm.length < 3) return false;
        // console.log("Getting results from Funnelback");
        var fbUrl = "https://york.funnelback.co.uk/s/suggest.json?collection=york-uni-web&show=10&sort=0&alpha=0.5&fmt=json++&partial_query="+searchTerm;
        $.getJSON(fbUrl, function(r) {
          var results = [];
          var rLength = r.length;
          $.each(r, function(i, v) {
            results.push({
              item: {
                title: v.disp
              }
            });
            if (i === rLength-1) {
              console.log(results);
              onComplete(results);
            }
          });
        });
      },
      category: 'Search',
      followLinks: false
    });
  });
});
</script>
```

### Options

 * **input** - _(required)_ the _text_ or _search_ input that should be used as the anchor for the 
 * **results** - an array of results, with a title (required), subtitle (optional) and link (optional) keys, or a function that returns an array with those elements
 * **category** - the category to use when sending events to GA. Defaults to "Autosuggest"
 * **followLinks** - _(defaults to false)_ Should we follow the link in the autocomplete? The default behaviour is to put the value in the input and submit the form.
 
