---

title: Tables
name: tables
category: components
subcategory: Atoms
layout: q+tq
id: tables-page

---

## Tables

### Basic tables

A basic table is very straightforward: remember to include a `caption`, add your table headers to `th`s in the `thead` and the main content in the `tbody`.

<table>
  <caption>Just a normal table</caption>
  <thead>
    <tr>
      <th>Bathroom</th>
      <th>Meals</th>
      <th>Price per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ensuite</td>
      <td>Catered</td>
      <td>&pound;6062</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Catered</td>
      <td>&pound;5115.60</td>
    </tr>
  </tbody>
</table>

```markup
<table>
  <caption>Just a normal table</caption>
  <thead>
    <tr>
      <th>Bathroom</th>
      <th>Meals</th>
      <th>Price per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ensuite</td>
      <td>Catered</td>
      <td>&pound;6062</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Catered</td>
      <td>&pound;5115.60</td>
    </tr>
  </tbody>
</table>
```
### Row headings

Tables can also have row headings

<table>
  <thead>
    <tr>
      <th colspan="2">Room type</th>
      <th>Price per week*</th>
      <th>Price per year*</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Economy</th>
      <td>Catered, shared bathroom</td>
      <td>£128 </td>
      <td>£5,116</td>
    </tr>
    <tr>
      <th rowspan="3">Standard</th>
      <td>Self-catered, ensuite<br>Nursing and Midwifery students only</td>
      <td>£132 </td>
      <td>£5,278</td>
    </tr>
    <tr>
      <td>Catered, ensuite</td>
      <td>£168</td>
      <td>£6,706</td>
    </tr>
    <tr>
      <td> Catered, shared bathroom</td>
      <td>£152</td>
      <td>£6,062</td>
    </tr>
    <tr>
      <th>Premium</th>
      <td>Self-catered, ensuite<br>36 week let, room must be vacated at Easter</td>
      <td>£135</td>
      <td>£4,869</td>
    </tr>
  </tbody>
</table>

```markup
<table>
  <thead>
    <tr>
      <th colspan="2">Room type</th>
      <th>Price per week*</th>
      <th>Price per year*</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Economy</th>
      <td>Catered, shared bathroom</td>
      <td>£128 </td>
      <td>£5,116</td>
    </tr>
    <tr>
      <th rowspan="3">Standard</th>
      <td>Self-catered, ensuite<br>Nursing and Midwifery students only</td>
      <td>£132 </td>
      <td>£5,278</td>
    </tr>
    <tr>
      <td>Catered, ensuite</td>
      <td>£168</td>
      <td>£6,706</td>
    </tr>
    <tr>
      <td> Catered, shared bathroom</td>
      <td>£152</td>
      <td>£6,062</td>
    </tr>
    <tr>
      <th>Premium</th>
      <td>Self-catered, ensuite<br>36 week let, room must be vacated at Easter</td>
      <td>£135</td>
      <td>£4,869</td>
    </tr>
  </tbody>
</table>
```
### Zebra striped tables

Alternate rows can be given a different background colour.

<table class="c-table--striped">
  <caption>A striped table</caption>
  <thead>
    <tr>
      <th>Bathroom</th>
      <th>Meals</th>
      <th>Price per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ensuite</td>
      <td>Catered</td>
      <td>&pound;6062</td>
    </tr>
    <tr>
      <td>Ensuite</td>
      <td>Self-catered</td>
      <td>&pound;1234</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Catered</td>
      <td>&pound;5115.60</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Self-catered</td>
      <td>&pound;5432</td>
    </tr>
  </tbody>
</table>

```markup
<table class="c-table--striped">
  <caption>A striped table</caption>
  <thead>
    <tr>
      <th>Bathroom</th>
      <th>Meals</th>
      <th>Price per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ensuite</td>
      <td>Catered</td>
      <td>&pound;6062</td>
    </tr>
    <tr>
      <td>Ensuite</td>
      <td>Self-catered</td>
      <td>&pound;1234</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Catered</td>
      <td>&pound;5115.60</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Self-catered</td>
      <td>&pound;5432</td>
    </tr>
  </tbody>
</table>
```
### Responsive tables

There are several techniques that can be used to ensure that your tables remain usable at small screen sizes. The technique to use will depend on the content of your table.

#### Prioritised columns

Add a `.js-prioritised-table` class to the table and a `colgroup` containing `col`s with appropriate [visibility classes](visibility.html) to make the table fit on smaller screens by hiding columns. You can use `span` attributes if required.

<table class="js-prioritised-table">
  <caption>Showcasing a prioritised responsive table</caption>
  <colgroup>
    <col>
    <col span="2" class="is-hidden@tiny">
    <col span="2">
    <col class="is-hidden@small is-hidden@tiny">
  </colgroup>
  <thead>
    <tr>
      <th>Bathroom</th>
      <th>Meals</th>
      <th>Let length</th>
      <th>Colleges</th>
      <th>Price per week</th>
      <th>Price per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ensuite</td>
      <td>Catered</td>
      <td>40</td>
      <td>Derwent, Vanbrugh</td>
      <td>&pound;151.55</td>
      <td>&pound;6062</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Catered</td>
      <td>40</td>
      <td>Derwent, James, Vanbrugh</td>
      <td>&pound;127.89</td>
      <td>&pound;5115.60</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Self-catered</td>
      <td>40</td>
      <td>Derwent</td>
      <td>&pound;103.11</td>
      <td>&pound;4124.40</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Breakfast only</td>
      <td>40</td>
      <td>Vanbrugh (Fairfax House)</td>
      <td>&pound;115.22</td>
      <td>&pound;4608.80</td>
    </tr>
  </tbody>
</table>

```markup
<table class="js-prioritised-table">
  <caption>Showcasing a prioritised responsive table</caption>
  <colgroup>
    <col>
    <col span="2" class="is-hidden@tiny">
    <col span="2">
    <col class="is-hidden@small is-hidden@tiny">
  </colgroup>
  <thead>
    <tr>
      <th>Bathroom</th>
      <th>Meals</th>
      <th>Let length</th>
      <th>Colleges</th>
      <th>Price per week</th>
      <th>Price per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ensuite</td>
      <td>Catered</td>
      <td>40</td>
      <td>Derwent, Vanbrugh</td>
      <td>&pound;151.55</td>
      <td>&pound;6062</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Catered</td>
      <td>40</td>
      <td>Derwent, James, Vanbrugh</td>
      <td>&pound;127.89</td>
      <td>&pound;5115.60</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Self-catered</td>
      <td>40</td>
      <td>Derwent</td>
      <td>&pound;103.11</td>
      <td>&pound;4124.40</td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>Breakfast only</td>
      <td>40</td>
      <td>Vanbrugh (Fairfax House)</td>
      <td>&pound;115.22</td>
      <td>&pound;4608.80</td>
    </tr>
  </tbody>
</table>
```
#### Stacked tables

Cells are stacked vertically at small screen sizes and below.

<table class="c-table--stacked">
  <caption>A responsive table with stacked cells</caption>
  <thead>
    <tr>
      <th>Course</th>
      <th>Details</th>
      <th>Apply</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="#"><strong>Archaeological Information Systems</strong></a>
      </td>
      <td>
        <ul>
          <li><abbr title="Master of Science">MSc</abbr></li>
          <li>1 year full-time</li>
          <li>2-3 years part-time</li>
        </ul>
      </td>
      <td>
        <a class="c-btn c-btn--small c-btn--primary" href="#">Apply</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#"><strong>Archaeological Studies (by research)</strong></a>
      </td>
      <td>
        <ul>
          <li><abbr title="Master of Arts">MA</abbr></li>
          <li>1 year full-time</li>
          <li>2 years part-time</li>
        </ul>
      </td>
      <td>
        <a class="c-btn c-btn--small c-btn--primary" href="#">Apply</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#"><strong>Archaeology</strong></a>
      </td>
      <td>
        <ul>
          <li><abbr title="Doctor of Philosophy">PhD</abbr></li>
          <li>3 year full-time</li>
          <li>6 years part-time</li>
        </ul>
      </td>
      <td>
        <a class="c-btn c-btn--small c-btn--primary" href="#">Apply</a>
      </td>
    </tr>
  </tbody>
</table>

```markup
<table class="c-table--stacked">
  <caption>A responsive table with stacked cells</caption>
  <thead>
    <tr>
      <th>Course</th>
      <th>Details</th>
      <th>Apply</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><a href="#"><strong>Archaeological Information Systems</strong></a></p>
        <p>This programme is also available to study at <a href="#">Postgraduate Diploma or Postgraduate Certificate level</a>.</p>
      </td>
      <td>
        <ul>
          <li><abbr title="Master of Science">MSc</abbr></li>
          <li>1 year full-time</li>
          <li>2-3 years part-time</li>
        </ul>
      </td>
      <td>
        <a class="c-btn c-btn--small c-btn--primary" href="#">Apply</a>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="#"><strong>Archaeological Studies (by research)</strong></a></p>
      </td>
      <td>
        <ul>
          <li><abbr title="Master of Arts">MA</abbr></li>
          <li>1 year full-time</li>
          <li>2 years part-time</li>
        </ul>
      </td>
      <td>
        <a class="c-btn c-btn--small c-btn--primary" href="#">Apply</a>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="#"><strong>Archaeology</strong></a></p>
      </td>
      <td>
        <ul>
          <li><abbr title="Doctor of Philosophy">PhD</abbr></li>
          <li>3 year full-time</li>
          <li>6 years part-time</li>
        </ul>
      </td>
      <td>
        <a class="c-btn c-btn--small c-btn--primary" href="#">Apply</a>
      </td>
    </tr>
  </tbody>
</table>
```
