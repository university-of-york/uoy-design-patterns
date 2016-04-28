---

title: Responsive tables
name: responsive-tables
category: modules
subcategory: Component modules
layout: q+tq
id: responsive-tables-page

---

<div class="lead"><p>When a table has to be used in markup, but some of the columns are optional and can be lost on smaller screen sizes, use the Responsive tables module.</p></div>

You can see an example of the markup on the [tables page](tables.html).

### Use

```javascript
var t = new TABLE({
  container: $('#a-responsive-table');
});
```

### Options

 * **container** - the table element containing the responsive columns (required)
