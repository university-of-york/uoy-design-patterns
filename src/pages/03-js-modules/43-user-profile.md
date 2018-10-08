---

title: User Profile
name: user-profile-module
category: modules
subcategory: Component modules
layout: q+tq
id: user-profile-module-page

---

<div class="lead"><p>The User Profile is a flexible component that allows you to display a range of staff or user profile data in different ways</p></div>

For example, we can load a set of data from the `PURE api` and display those results in either a table, list element or even using flexbox.

It can be called using JavaScript as a stand alone module, or it can be automatically applied to a container using the class, `js-user-profile` and supplying a set of `data-xyz` attributes (these are listed in the 'options' section below).

### Use (via JavaScript call)

```javascript
USERPROFILE.init({
    container: $('#id-of-a-container'),
    datasource: 'pure',
    dataTypePure: 'persons',
    idValuePure: '123456',
    layout: 'table',
    includeHeaderRow: true,
    cssClassList: 'some-class another-class__here',
    eventIdentifier: 'someuniquevalue'
});
```

**Note**: like the Data Grid component, the User Profile has to use an underlying datasource to load the required data. Currently, only the academic profile system, PURE, is supported.


### Example using Google Sheets in the Table layout

```markup
<div class="js-user-profile" 
data-source="pure"
data-type-pure="persons"
data-id-value="941881"
data-layout="table"
data-include-header="false"
data-css=""
></div>
```

<div class="js-user-profile" 
data-source="pure"
data-type-pure="persons"
data-id-value="941881"
data-layout="table"
data-include-header="false"
data-css=""
></div>