---

title: Tables
name: tables
category: components
subcategory: Atoms
layout: q+tq
id: tables-page

---

A basic table is very straighforward: remember to include a `caption`, add your table headers to `th`s in the `thead` and the main content in the `tbody`.

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

If the table is too wide to fit on smaller screens (as many will be), add a `.js-responsive-table` class to the table and a `colgroup` containg `col`s with appropriate [visibility classes](visibility.html) to make the table fit on smaller screens. You can use `span` attributes if required.

<table class="js-responsive-table">
  <caption>Showcasing a responsive table</caption>
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
<table class="js-responsive-table">
  <caption>Showcasing a responsive table</caption>
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
