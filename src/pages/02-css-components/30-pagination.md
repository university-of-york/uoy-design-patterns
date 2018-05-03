---

title: Pagination
name: pagination
category: components
subcategory: Molecules
layout: q+tq
id: pagination-page

---

<div class="lead"><p>For when we need to show pagination, for news articles, events listings, search results, and so on.</p></div>

Each `page` link is an _atom_:

<script>
component("page", { "href": "?page=1", "value": "1", "stand-alone": true } );
</script>

And these `pages` are built up in a _molecule_ called `pagination`:

<script>
component("pagination",
  {
    "atoms": [
      {
        "page": {
          "href": "?", "value": "Prev", "position": "previous", "icon-before": "chevron-left", "hide-text-on-mobile": true
        }
      },
      {
        "page": {
          "href": "?page=1", "value": "1", "page-number": true
        }
      },
      {
        "page": {
            "href": "?page=2", "value": "2", "page-number": true
          }
      },
      {
        "page": {
          "href": false, "value": "...", "page-type": "break", "page-number": true
        }
      },
      {
        "page": {
          "href": "?page=24", "value": "24", "page-number": true
        }
      },
      {
        "page": {
          "href": "?page=25", "value": "25", "page-number": true
        }
      },
      {
        "page": {
          "href": false, "value": "26", "position": "current", "page-number": true
        }
      },
      {
        "page": {
          "href": "?page=27", "value": "27", "page-number": true
        }
      },
      {
        "page": {
          "href": "?page=28", "value": "28", "page-number": true
        }
      },
      {
        "page": {
          "href": false, "value": "...", "page-type": "break", "page-number": true
        }
      },
      {
        "page": {
          "href": "?page=50", "value": "50", "page-number": true
        }
      },
      {
        "page": {
          "href": false, "value": "...", "page-type": "break", "page-number": true
        }
      },
      {
        "page": {
          "href": "?page=150", "value": "150", "page-number": true
        }
      },
      {
        "page": {
          "href": "?", "value": "Next", "position": "next", "icon-after": "chevron-right", "hide-text-on-mobile": true
        }
      }
]});
</script>


### Options


#### Atoms


* page
  * **href**: link to the page. You can use _false_ for ellipses **(required)**.
  * **value**: the text of the link item.
  * **position**: one of _first_, _last_, _previous_, _next_ or _current_. Denotes the position in the page list.
  * **page-number**: is this page item a numeral. _true_, _false_ or not included.
  * **page-type**: this denotes whether the page item is a break type or ellipses. Values can be _break_ or not included.
  * **hide-text-on-mobile**: used to hide text on the 'prev' and 'next' items. Can be _true_, _false_ or not included.
  * **stand-alone**: if used as a stand alone page item (as in example number 1), include the value of _true_ to ensure the tightly coupled list item element is *not* included in the output.


#### Molecules


* pagination
  * **atoms**: an array of page atoms
