---

title: Clearing Tables
name: clearing-tables-module
category: modules
subcategory: Component modules
layout: q+tq
id: clearing-tables-module-page

---

<div class="lead"><p>At clearing, we need to update the available courses minute-by-minute to give students the best information. The Clearing Tables module helps to do that. It </p></div>

### Use

```javascript
var c = new CLEARINGTABLE({
  type: 'Home/EU',
  container: $('#clearingcourses-uk-eu')
});
```

### Example

In this example, the data for the clearing courses is fetched from the Google Doc using the [google-docs module](google-docs-module.html), then inserted into the `#clearingcourses-uk-eu` div below. The Clearing Table module takes care of correctly formatting the course data into an [accordion](accordion.html).

```markup
<div id="clearing-courses-uk-eu"></div>
```

```javascript
var c = new CLEARINGTABLE({
  type: 'Home/EU',
  container: $('#clearingcourses-uk-eu')
});
```

<div id="clearing-courses-uk-eu"></div>


### Options

  Pass an _options_ object with the following keys:

  * **type** - either 'Home/EU', 'International' or 'Both'. Defaults to 'Both'.
  * **container** - the element into which the accordions will go
