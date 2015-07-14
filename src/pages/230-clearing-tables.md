---

title: Clearing tables
name: clearing-tables
category: components
subcategory: Molecules
layout: q+tq
id: clearing-tables-page

---

<p class="lead">The table layout for courses in clearing (bit of a misnomer, since it doesn't actually use a table).</p>

<script>
component("clearing-table", {
  "title":"Economics",
  "link":"http://www.york.ac.uk/economics/undergraduate/courses/bsc-economics/",
  "requirements": "AAB",
  "ucas-code": "V400",
  "phone-numbers" : [
    "01904 324107",
    "01904 324108",
    "01904 324109"
  ],
  "course-length": "3 years",
  "additional-requirements":[
    "GCSE Mathematics grade B",
    "Maths A level, no less than a B"
  ]
});
</script>

Usually, these are used within an <a href="accordion.html">accordion</a>. Have a look at the <a href="clearing-tables-module.html">clearing tables</a> page.

Some other examples of courses with more or less data.

<script>
component("clearing-table", {
  "title":"Economics"
})+
component("clearing-table", {
  "title":"Economics",
  "link":"http://www.york.ac.uk/economics/undergraduate/courses/bsc-economics/",
  "ucas-code": "V400",
  "course-length": "3 years"
})+
component("clearing-table", {
  "title":"Economics",
  "requirements": "AAB",
  "phone-numbers" : [
    "01904 324107"
  ],
  "additional-requirements":[
    "Maths A level, no less than a B"
  ]
});
</script>



### Options

#### Atoms

* **clearing-table**
  * **title** The course title
  * **link** A URL that links to the course page (optional)
  * **requirements** The entry requirements (optional)
  * **ucas-code** (optional)
  * **phone-numbers** An array of phone numbers to call (optional)
  * **course-length** How long the course is (optional)
  * **additional-requirements**: An array of additional entry requirements (optional)
