---

title: Filterable tables
name: filterable-tables-module
category: modules
subcategory: Component modules
layout: q+tq
id: filterable-tables-module-page

---

<div class="lead"><p>With big tables of data, it can be helpful to filter them based on their content.</p></div>

By adding a `js-filterable-table` class to the table, the script will automatically add filter boxes above the table. The type of filter will be:

* **text search** - filter the table based on a text input. Add `data-case-sensitive="true"` to witch on case-sensitivity.
* **range** - filter the table based on a range of values. It ignores preceding and following text (e.g pound signs or p.a.).
* **option** - filter the table based on a selected option. Options are gathered from the content in the column.
* **false** - don't add a filter for this column (default)

You can define which columns are to be filtered using a `colgroup`, with each `col` given a `data-` attribute relevant to the filter option. Further options can be assigned to the filter using these `data-` attributes. You can add `span` attributes to the `col` elements to save space.

As with [searchable tables](searchable-tables-module.html), you can choose to ignore the first row of the `tbody` by adding `data-header="true"` to the `table` element.

### Use

```javascript
var m = new FILTERABLE({
  table: $('#some-table')
});
```

### Example

<table class="js-filterable-table">
  <colgroup>
    <col data-filter="text">
    <col span="2" data-filter="option">
    <col span="2" data-filter="range">
  </colgroup>
  <thead>
    <tr>
      <th>Course title</th>Qualification earned<th></th><th>Study mode</th><th>UK/EU</th><th>International</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Archaeological Information Systems</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Archaeological Information Systems</td><td>PG Dip</td><td>Full-time</td><td>£4,830</td><td>£11,360</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings PG Cert</td><td>Full-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>PG Dip</td><td>Full-time</td><td>£4,830</td><td>£11,360</td>
    </tr>
    <tr>
      <td>Bioarchaeology</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Coastal and Marine Archaeology</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Conservation Studies</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Cultural Heritage Management</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Digital Heritage PG Cert</td><td>Full-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Early Prehistory</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Field Archaeology</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Historical Archaeology</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Landscape Archaeology</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Medieval Archaeology</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Mesolithic Studies</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Zooarchaeology</td><td>MSc</td><td>Full-time</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Archaeological Information Systems</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Archaeological Information Systems</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Archaeological Research</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Bioarchaeology</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Bioarchaeology</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Bioarchaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Coastal and Marine Archaeology</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Coastal and Marine Archaeology</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Coastal and Marine Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Conservation Studies</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Conservation Studies</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Conservation Studies (Historic Buildings)</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Conservation Studies (Historic Buildings)</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Conservation Studies (Historic Buildings)</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Cultural Heritage Management</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Cultural Heritage Management</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Cultural Heritage Management</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Early Prehistory</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Early Prehistory</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Early Prehistory</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Field Archaeology</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Field Archaeology</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Field Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Historical Archaeology</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Historical Archaeology</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Historical Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Landscape Archaeology</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Landscape Archaeology</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Landscape Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Medieval Archaeology</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Medieval Archaeology</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Medieval Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Mesolithic Studies</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Mesolithic Studies</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Mesolithic Studies</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Zooarchaeology</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Zooarchaeology</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td></td>
    </tr>
    <tr>
      <td>Zooarchaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
  </tbody>
</table>

### Example with `data-header="true"`

### Example with `data-exclude-cols` and `data-include-cols`



### Options

 * **table** - a jQuery object, which should be a `table` element. The script automatically parses for tables with the class `.js-filterable-table`.
 * **header** - _Boolean_, whether the first row of the `tbody` should be included.
 * **exclude-cols** - _Array_, Array of column numbers (**not** zero-based) to skip in the search.

Each column can have the options:

* **filter-text** - Filter the column based on a text search
  * **caseSensitive** - _Boolean_, whether the search is case-sensitive.

* **filter-text** - Filter the column based on a text search

