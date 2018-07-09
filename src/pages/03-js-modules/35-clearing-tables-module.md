---

title: Clearing tables
name: clearing-tables-module
category: modules
subcategory: Component modules
layout: q+tq
id: clearing-tables-module-page

---

<div class="lead"><p>At clearing, we need to update the available courses minute-by-minute to give students the best information. The Clearing Tables module helps to do that.</p></div>

It can be used to get a list of all departments with courses in clearing, a list of courses for specific departments or a panel showing clearing information for a course.

### Use

```javascript
var c = new CLEARINGTABLE({
  type: 'UK/EU',
  department: 'Electronics',
  layout: 'Courses',
  showRequirements: true,
  container: $('#clearingcourses-electronics')
});
```

The data for the clearing courses is fetched from the Google Doc using the [google-docs module](../js-modules/google-docs-module.html), then inserted into the container div.

This is automatically done by adding a `js-clearing-table` class to the containing div. Options can be added using `data-` attributes: `data-department` for department; `data-type` for UK/EU or International; `data-layout` for a list of Departments, Courses or a Course Panel; `data-show-requirements` to show or hide the course entry requirements. Leaving these blank will default to a Course list, with all departments and both UK/EU and International, with a radio button to toggle between the two and will show course entry requirements.

If there are more than 25 courses in the list then a search box will appear, and if there are five or more different letters then letter header rows will appear and an A to Z listing.

As you search or toggle between the two the A to Z listing and headers will (dis)appear depending on the results of the search/toggle.

**These examples were generated in July 2018 with custom data - after August 18th 2018 the data will have changed.**

### Example using department layout

```markup
<div class="js-clearing-table" data-layout="Departments"></div>
```

<div class="js-clearing-table" data-layout="Departments"></div>

### Example using department name

This example has a relatively small list of courses for only UK/EU students.

```markup
<div class="js-clearing-table" data-department="Mathematics"></div>
```

<div class="js-clearing-table" data-department="Mathematics"></div>

### Example using department name but hiding entry requirements

This example has a relatively small list of courses for only UK/EU students.

```markup
<div class="js-clearing-table" data-department="Mathematics" data-show-requirements="false"></div>
```

<div class="js-clearing-table" data-department="Mathematics" data-show-requirements="false"></div>


### Further example using department name

This example has a larger list (>25) of courses for both UK/EU and International students.

```markup
<div class="js-clearing-table" data-department="Physics"></div>
```

<div class="js-clearing-table" data-department="Physics"></div>

And this example has a no courses available.

```markup
<div class="js-clearing-table" data-department="Chemistry"></div>
```

<div class="js-clearing-table" data-department="Chemistry"></div>

### Example using department name and specific type

```markup
<div class="js-clearing-table" data-department="Physics" data-type="UK/EU"></div>
```

<div class="js-clearing-table" data-department="Physics" data-type="UK/EU"></div>

### Example using course panel layout

Any content wrapped in the `js-clearing-table` div will be overwritten if the course is in clearing.

```markup
<div class="js-clearing-table" data-layout="Course panel" data-course="F3F8">
  <div class="c-panel c-panel--highlight">
    <div class="c-panel__content">
      <h3>Results 2017</h3>
      <p>Whether you're looking for a late place or you've already got an offer, find out all you need to know about joining us in September.</p>
      <a class="c-btn c-btn--medium" href="https://www.york.ac.uk/clearing">Find out more</a>
    </div>
  </div>
</div>
```

<div class="js-clearing-table" data-layout="Course panel" data-course="F3F8">
  <div class="c-panel c-panel--highlight">
    <div class="c-panel__content">
      <h3>Results 2017</h3>
      <p>Whether you're looking for a late place or you've already got an offer, find out all you need to know about joining us in September.</p>
      <a class="c-btn c-btn--medium" href="https://www.york.ac.uk/clearing">Find out more</a>
    </div>
  </div>
</div>

### Example using defaults

This shows all available classes, with a toggle for UK/EU and International students, plus an A to Z and row headers (presuming there are still enough courses in the list).

```markup
<div class="js-clearing-table"></div>
```

<div class="js-clearing-table"></div>


### Options

  Pass an _options_ object with the following keys:

  * **type** - either 'UK/EU', 'International' or 'Both'. Defaults to 'Both'.
  * **department** - the name of an academic department to filter the courses. Defaults to 'All'.
  * **layout** - either 'Department', 'Courses' or 'Course panel'. Defaults to 'Courses'.
  * **course** - the UCAS code of the course you wamnt details for. Defaults to `false`
  * **container** - the element into which the courses will go
