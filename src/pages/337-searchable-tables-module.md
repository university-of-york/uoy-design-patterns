---

title: Searchable tables
name: searchable-tables-module
category: modules
subcategory: Component modules
layout: q+tq
id: searchable-tables-module-page

---

<div class="lead"><p>Make any table searchable by adding a `js-searchable-table` class to a table. It will automatically add the required search field above the table.</p></div>

You can add other options to the table by using `data-` attributes.

THe label of the text field will usually say **Search this table**. To change it, add a `data-label` attribute. See the example [here](#example-using-data-label-).

By default, the search will look at the text content of every table cell (`th` or `td`) in the `tbody`, and will not search the `thead`. If you have a header line in the `tbody`, add the `data-header="true"` attribute and the search will skip the first row in the table. See [here](#example-using-data-header-).

You can skip columns by passing a `data-exclude-cols` attribute. This should be a comma-separated list of the column numbers to skip. See the example [here](#example-using-data-exclude-cols-). You can do the same with `data-include-cols` instead if you like.

Lastly, you can set the search to be case-sensitive by adding a `data-case-sensitive="true"` attribute. Example [here](#example-using-data-case-sensitive-).

If the searchable table is shorter than the height of the browser window, the searchable field won't appear.


### Use

```javascript
var m = new SEARCHABLE({
  table: $('#some-table')
});
```
### Example using `data-label`

<table class="js-searchable-table" data-label="Enter your search term here">
  <thead>
    <tr>
      <th>Programme</th>
      <th>Home/EU</th>
      <th>Overseas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="http://www.york.ac.uk/chemistry/postgraduate/taught/">Green Chemistry &amp; Sustainable Industrial Technology (PG Diploma)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;14,390</td>
    </tr>
    <tr>
      <td><a href="http://www.cs.york.ac.uk/postgraduate/taught-courses/msc-scse/">Safety Critical Systems Engineering</a> (MSc)</td>
      <td>&pound;17,420</td>
      <td>&pound;19,500</td>
    </tr>
    <tr>
      <td>
        <p><a href="http://maths.york.ac.uk/www/MscfinMscmathfin">Mathematical Finance</a> (MSc)</p>
        <p>The fees for the MSc in Mathematical Finance (Online) vary, please refer to the Online/Distance tab.</p>
      </td>
      <td>&pound;18,060</td>
      <td>&pound;23,490</td>
    </tr>
    <tr>
      <td><a href="http://www.york.ac.uk/inst/cws/prospective/dip.htm">Postgraduate Diploma in Women's Studies (Social Research)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;11,360</td>
    </tr>
  </tbody>
</table>

### Example using `data-header`

By passing `data-header="true"`, the first row of the table is skipped

<table class="js-searchable-table" data-header="true">
  <tbody>
    <tr>
      <th>Programme</th>
      <th>Home/EU</th>
      <th>Overseas</th>
    </tr>
    <tr>
      <td><a href="http://www.york.ac.uk/chemistry/postgraduate/taught/">Green Chemistry &amp; Sustainable Industrial Technology (PG Diploma)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;14,390</td>
    </tr>
    <tr>
      <td><a href="http://www.cs.york.ac.uk/postgraduate/taught-courses/msc-scse/">Safety Critical Systems Engineering</a> (MSc)</td>
      <td>&pound;17,420</td>
      <td>&pound;19,500</td>
    </tr>
    <tr>
      <td>
        <p><a href="http://maths.york.ac.uk/www/MscfinMscmathfin">Mathematical Finance</a> (MSc)</p>
        <p>The fees for the MSc in Mathematical Finance (Online) vary, please refer to the Online/Distance tab.</p>
      </td>
      <td>&pound;18,060</td>
      <td>&pound;23,490</td>
    </tr>
    <tr>
      <td><a href="http://www.york.ac.uk/inst/cws/prospective/dip.htm">Postgraduate Diploma in Women's Studies (Social Research)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;11,360</td>
    </tr>
  </tbody>
</table>

### Example using `data-exclude-cols`

In this example, we're not interested in searching the second and third columns. By passing a `data-exclude-cols="2,3"` attribute, we can avoid adding them to the search. You could alternatively use `data-include-cols="1"`.

<table class="js-searchable-table" data-exclude-cols="2,3">
  <thead>
    <tr>
      <th>Programme</th>
      <th>Home/EU</th>
      <th>Overseas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="http://www.york.ac.uk/chemistry/postgraduate/taught/">Green Chemistry &amp; Sustainable Industrial Technology (PG Diploma)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;14,390</td>
    </tr>
    <tr>
      <td><a href="http://www.cs.york.ac.uk/postgraduate/taught-courses/msc-scse/">Safety Critical Systems Engineering</a> (MSc)</td>
      <td>&pound;17,420</td>
      <td>&pound;19,500</td>
    </tr>
    <tr>
      <td>
        <p><a href="http://maths.york.ac.uk/www/MscfinMscmathfin">Mathematical Finance</a> (MSc)</p>
        <p>The fees for the MSc in Mathematical Finance (Online) vary, please refer to the Online/Distance tab.</p>
      </td>
      <td>&pound;18,060</td>
      <td>&pound;23,490</td>
    </tr>
    <tr>
      <td><a href="http://www.york.ac.uk/inst/cws/prospective/dip.htm">Postgraduate Diploma in Women's Studies (Social Research)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;11,360</td>
    </tr>
  </tbody>
</table>

### Example using `data-case-sensitive`

A case-sensitive search (try _MA_ vs. _ma_).

<table class="js-searchable-table" data-case-sensitive="true">
  <thead>
    <tr>
      <th>Programme</th>
      <th>Home/EU</th>
      <th>Overseas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="http://www.york.ac.uk/chemistry/postgraduate/taught/">Green Chemistry &amp; Sustainable Industrial Technology (PG Diploma)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;14,390</td>
    </tr>
    <tr>
      <td><a href="http://www.cs.york.ac.uk/postgraduate/taught-courses/msc-scse/">Safety Critical Systems Engineering</a> (MSc)</td>
      <td>&pound;17,420</td>
      <td>&pound;19,500</td>
    </tr>
    <tr>
      <td>
        <p><a href="http://maths.york.ac.uk/www/MscfinMscmathfin">Mathematical Finance</a> (MSc)</p>
        <p>The fees for the MSc in Mathematical Finance (Online) vary, please refer to the Online/Distance tab.</p>
      </td>
      <td>&pound;18,060</td>
      <td>&pound;23,490</td>
    </tr>
    <tr>
      <td><a href="http://www.york.ac.uk/inst/cws/prospective/dip.htm">Postgraduate Diploma in Women's Studies (Social Research)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;11,360</td>
    </tr>
  </tbody>
</table>

### Example using everything

This search skips the header row, is case sensitive, and skips searching col 3 (Overseas).

<table class="js-searchable-table" data-header="true" data-exclude-cols="3" data-case-sensitive="true">
  <tbody>
    <tr>
      <th>Programme</th>
      <th>Home/EU</th>
      <th>Overseas</th>
    </tr>
    <tr>
      <td><a href="http://www.york.ac.uk/chemistry/postgraduate/taught/">Green Chemistry &amp; Sustainable Industrial Technology (PG Diploma)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;14,390</td>
    </tr>
    <tr>
      <td><a href="http://www.cs.york.ac.uk/postgraduate/taught-courses/msc-scse/">Safety Critical Systems Engineering</a> (MSc)</td>
      <td>&pound;17,420</td>
      <td>&pound;19,500</td>
    </tr>
    <tr>
      <td>
        <p><a href="http://maths.york.ac.uk/www/MscfinMscmathfin">Mathematical Finance</a> (MSc)</p>
        <p>The fees for the MSc in Mathematical Finance (Online) vary, please refer to the Online/Distance tab.</p>
      </td>
      <td>&pound;18,060</td>
      <td>&pound;23,490</td>
    </tr>
    <tr>
      <td><a href="http://www.york.ac.uk/inst/cws/prospective/dip.htm">Postgraduate Diploma in Women's Studies (Social Research)</a></td>
      <td>&pound;4,830</td>
      <td>&pound;11,360</td>
    </tr>
  </tbody>
</table>

### Options

 * **table** - a jQuery object, which should be a `table` element. The script automatically parses for tables with the class `.js-searchable-table`.
 * **label** - _String_, the label for the search box. Defaults to _"Search this table"_.
 * **header** - _Boolean_, whether the first row of the `tbody` should be included.
 * **caseSensitive** - _Boolean_, whether the search is case-sensitive.
 * **exclude-cols** - _Array_, Array of column numbers (**not** zero-based) to skip in the search.

