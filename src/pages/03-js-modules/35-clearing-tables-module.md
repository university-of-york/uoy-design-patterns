---

title: Clearing Tables
name: clearing-tables-module
category: modules
subcategory: Component modules
layout: q+tq
id: clearing-tables-module-page

---

<div class="lead"><p>At clearing, we need to update the available courses minute-by-minute to give students the best information. The Clearing Tables module helps to do that.</p></div>

It can be used to get a list of all subjects with courses in clearing, or a list of courses for specific subjects.

### Use

```javascript
var c = new CLEARINGTABLE({
  type: 'UK/EU',
  subject: 'Electronics',
  container: $('#clearingcourses-electronics')
});
```

The data for the clearing courses is fetched from the Google Doc using the [google-docs module](google-docs-module.html), then inserted into the container div.

This is automatically done by adding a `js-clearing-table` class to the containing div. Options can be added using `data-` attributes: `data-subject` for subject; `data-type` for UK/EU or International. Leaving these blank will default to all subjects and both UK/EU and International, with a radio button to toggle between the two.

If there are more than 25 courses in the list then a search box will appear, and if there are three or more different letters then letter header rows will appear and an A to Z listing.

As you search or toggle between the two the A to Z listing and headers will (dis)appear depending on the results of the search/toggle.

**These examples were generated in July 2016 with custom data - after August 17th 2016 the data will have changed.**

### Example using subject name

This example has a relatively small list of courses for only UK/EU students.

```markup
<div class="js-clearing-table" data-subject="Mathematics"></div>
```

<div class="js-clearing-table" data-subject="Mathematics"></div>

### Further example using subject name

This example has a larger list (>25) of courses for both UK/EU and International students.

```markup
<div class="js-clearing-table" data-subject="Electronics"></div>
```

<div class="js-clearing-table" data-subject="Electronics"></div>

### Example using subject name and specific type

```markup
<div class="js-clearing-table" data-subject="Management" data-type="UK/EU"></div>
```

<div class="js-clearing-table" data-subject="Management" data-type="UK/EU"></div>

### Example using defaults

This shows all available classes, with a toggle for UK/EU and International students, plus an A to Z and row headers (presuming there are still enough courses in the list).

```markup
<div class="js-clearing-table"></div>
```

<div class="js-clearing-table"></div>


### Options

  Pass an _options_ object with the following keys:

  * **type** - either 'UK/EU', 'International' or 'Both'. Defaults to 'Both'.
  * **subject** - the name of an academic subject to filter the courses. Defaults to 'All'.
  * **container** - the element into which the courses will go
