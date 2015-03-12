---

title: Pagination
name: pagination
category: components
layout: default
id: pagination-page

---

## Pagination

For when we need to show pagination, for news articles, events listings, search results, and so on.

Each `page` link is an _atom_:

<script>
component("page", { "href": "?page=1", "value": "1" } );
</script>

And these `pages` are built up in a _molecule_ called `pagination`:

<script>
component("pagination", { "atoms": [
  { "page": { "href": "?page=1", "value": "1", "position": "first" } },
  { "page": { "href": "?page=2", "value": "2" } },
  { "page": { "href": false, "value": "..." } },
  { "page": { "href": "?page=24", "value": "24" } },
  { "page": { "href": "?page=25", "value": "25", "position": "previous" } },
  { "page": { "href": "?page=26", "value": "26", "position": "current" } },
  { "page": { "href": "?page=27", "value": "27", "position": "next" } },
  { "page": { "href": "?page=28", "value": "28" } },
  { "page": { "href": false, "value": "..." } },
  { "page": { "href": "?page=49", "value": "49" } },
  { "page": { "href": "?page=50", "value": "50", "position": "last" } }
]});
</script>


### Options


#### Atoms


* page
  * **href**: link to the page. You can use _false_ for ellipses **(required)**
  * **value**: the text of the link item
  * **position**: one of _first_, _last_, _previous_, _next_ or _current_. Denotes the position in the page list.


#### Molecules


* pagination
  * **atoms**: an array of page atoms