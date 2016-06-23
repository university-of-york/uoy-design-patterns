---

title: Searchables
name: searchables-module
category: modules
subcategory: Component modules
layout: q+tq
id: searchables-module-page

---

<div class="lead"><p>Make any table or list searchable by adding a `js-searchable` class to a div containing a `ul` or `table`. It will automatically add the required search field above the table.</p></div>

You can add other options to the list table by using `data-` attributes.

The simplest version searches [list items](#example-using-list-).

The label of the text field will usually say **Search**. To change it, add a `data-label` attribute. See the example [here](#example-using-data-label-).

By default, the search will look at the text content of every table cell (`th` or `td`) in the `tbody`, and will not search the `thead`. If you have a header line in the `tbody`, add the `data-header="true"` attribute and the search will skip the first row in the table. See [here](#example-using-data-header-).

You can skip columns by passing a `data-exclude-cols` attribute. This should be a comma-separated list of the column numbers to skip. See the example [here](#example-using-data-exclude-cols-). You can do the same with `data-include-cols` instead if you like.

Lastly, you can set the search to be case-sensitive by adding a `data-case-sensitive="true"` attribute. Example [here](#example-using-data-case-sensitive-).

If the searchable table is shorter than the height of the browser window, the searchable field won't appear.


### Use

```javascript
var m = new SEARCHABLE({
  container: $('#some-id')
});
```

### Example using list
<div class="js-searchable">
  <ul>
    <li><a href="#">Afghanistan</a></li>
    <li><a href="#">Australia</a></li>
    <li><a href="#">Azerbaijan</a></li>
    <li><a href="#">Bahrain</a></li>
    <li><a href="#">Bangladesh</a></li>
    <li><a href="#">Brazil</a></li>
    <li><a href="#">Brunei</a></li>
    <li><a href="#">Canada</a></li>
    <li><a href="#">Chile</a></li>
    <li><a href="#">China</a></li>
    <li><a href="#">Colombia</a></li>
    <li><a href="#">Cyprus</a></li>
    <li><a href="#">Denmark</a></li>
    <li><a href="#">Egypt</a></li>
    <li><a href="#">France</a></li>
    <li><a href="#">Germany</a></li>
    <li><a href="#">Ghana</a></li>
    <li><a href="#">Greece</a></li>
    <li><a href="#">Hong Kong</a></li>
    <li><a href="#">India</a></li>
    <li><a href="#">Indonesia</a></li>
    <li><a href="#">Iran</a></li>
    <li><a href="#">Iraq</a></li>
    <li><a href="#">Italy</a></li>
    <li><a href="#">Japan</a></li>
    <li><a href="#">Jordan</a></li>
    <li><a href="#">Kazakhstan</a></li>
    <li><a href="#">Kenya</a></li>
    <li><a href="#">Kuwait</a></li>
    <li><a href="#">Lebanon</a></li>
    <li><a href="#">Lithuania</a></li>
    <li><a href="#">Malaysia</a></li>
    <li><a href="#">Mexico</a></li>
    <li><a href="#">Morocco</a></li>
    <li><a href="#">Netherlands</a></li>
    <li><a href="#">New Zealand</a></li>
    <li><a href="#">Nigeria</a></li>
    <li><a href="#">Norway</a></li>
    <li><a href="#">Oman</a></li>
    <li><a href="#">Pakistan</a></li>
    <li><a href="#">Peru</a></li>
    <li><a href="#">Poland</a></li>
    <li><a href="#">Qatar</a></li>
    <li><a href="#">Republic of Ireland</a></li>
    <li><a href="#">Russia</a></li>
    <li><a href="#">Saudi Arabia</a></li>
    <li><a href="#">Singapore</a></li>
    <li><a href="#">South Africa</a></li>
    <li><a href="#">South Korea</a></li>
    <li><a href="#">Spain</a></li>
    <li><a href="#">Sri Lanka</a></li>
    <li><a href="#">Syria</a></li>
    <li><a href="#">Taiwan</a></li>
    <li><a href="#">Thailand</a></li>
    <li><a href="#">Turkey</a></li>
    <li><a href="#">Ukraine</a></li>
    <li><a href="#">United Arab Emirates</a></li>
    <li><a href="#">USA</a></li>
    <li><a href="#">Vietnam</a></li>
  </ul>
</div>

### Example using `data-label`

<div class="js-searchable" data-label="Enter your search term here">
  <table>
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
</div>

### Example using `data-header`

By passing `data-header="true"`, the first row of the table is skipped

<div class="js-searchable" data-header="true">
  <table>
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
</div>

### Example using `data-exclude-cols`

In this example, we're not interested in searching the second and third columns. By passing a `data-exclude-cols="2,3"` attribute, we can avoid adding them to the search. You could alternatively use `data-include-cols="1"`.

<div class="js-searchable" data-exclude-cols="2,3">
  <table>
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
</div>

### Example using `data-case-sensitive`

A case-sensitive search (try _MA_ vs. _ma_).

<div class="js-searchable" data-case-sensitive="true">
  <table>
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
</div>

### Example using everything

This search skips the header row, is case sensitive, and skips searching col 3 (Overseas).

<div class="js-searchable" data-header="true" data-exclude-cols="3" data-case-sensitive="true">
  <table>
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
</div>

### Options

 * **table** - a jQuery object, which should be a `table` or `ul` element. The script automatically parses for elements with the class `.js-searchable`.
 * **label** - _String_, the label for the search box. Defaults to _"Search this table"_.
 * **header** - _Boolean_, whether the first row of the `tbody` should be included.
 * **caseSensitive** - _Boolean_, whether the search is case-sensitive.
 * **exclude-cols** - _Array_, Array of column numbers (**not** zero-based) to skip in the search.

