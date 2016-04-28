---

title: Course search
name: course-search
category: modules
subcategory: General modules
layout: q+tq
id: course-search-page

---

<div class="lead"><p>A separate bit of code in `main.js` deals with switching the _action_ attribute of the form when the user switches from UG to PG. This bit of functionality is too specialised to need its own module.</p></div>


### Use

<form method="get" action="/study/undergraduate/courses/search" class="c-form" id="Course-Search">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text" type="text" name="q" placeholder="Enter course title, keywords or UCAS code">
    </div>
    <div class="c-form__element">
      <label class="c-form__label is-hidden" for="level">Level:</label>
      <input class="c-form__radio" type="radio" id="level-undergraduate" name="level" value="undergraduate" checked="checked"><label for="level-undergraduate" class="c-form__label">Undergraduate</label>
      <input class="c-form__radio" type="radio" id="level-postgraduate" name="level" value="postgraduate"><label for="level-postgraduate" class="c-form__label">Postgraduate</label>
    </div>
    <div class="c-form__element">
      <input id="level" type="hidden" name="level" value="undergraduate"><button class="c-btn  c-btn--block c-btn--medium" type="submit">Search courses<i class="c-icon c-icon--after c-icon--search"></i></button>
    </div>
  </fieldset>
</form>