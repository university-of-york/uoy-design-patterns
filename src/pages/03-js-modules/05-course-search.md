---

title: Course search
name: course-search
category: modules
subcategory: General modules
layout: q+tq
id: course-search-page

---

<div class="lead"><p>A separate bit of code in `main.js` deals with switching the _action_ attribute of the form when the user switches from UG to PG. This bit of functionality is too specialised to need its own module. This will act by default on a form marked `js-course-search`.</p></div>

### Use

<form action="https://www.york.ac.uk/study/undergraduate/courses/search" method="get" id="Course-Search" class="c-form c-form--joined js-course-search">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--hidden" type="hidden" id="mode" name="mode" value="">
      <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search by course name, keywords or UCAS code">
      <a class="c-btn c-btn--medium js-submit-form" href="#" role="button"><i class="c-icon c-icon--search c-icon--after"></i></a>
    </div>
    <div class="c-form__element">
      <div class="c-form__radio-group">
        <input class="c-form__radio" type="radio" id="level-undergraduate" name="level" value="undergraduate" checked="checked">
        <label for="level-undergraduate" class="c-form__label">Undergraduate</label>
      </div>
      <div class="c-form__radio-group">
        <input class="c-form__radio" type="radio" id="level-postgraduate-taught" name="level" value="postgraduate">
        <label for="level-postgraduate-taught" class="c-form__label">Postgraduate taught</label>
      </div>
      <div class="c-form__radio-group">
        <input class="c-form__radio" type="radio" id="level-postgraduate-research" name="level" value="postgraduate">
        <label for="level-postgraduate-research" class="c-form__label">Research</label>
      </div>
    </div>
  </fieldset>
</form>

<!--
Here's the old version of the form, just for testing. You can't put both on the page as the repeated IDs really mess things up.

<form action="/study/undergraduate/courses/search/" method="get" id="Course-Search" class="c-form c-form--joined js-course-search">
  <fieldset>
    <div class="c-form__element">
      <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search by course name, keywords or UCAS code">
      <a class="c-btn c-btn--medium js-submit-form" href="#" role="button"><i class="c-icon c-icon--search c-icon--after"></i></a>
    </div>
    <div class="c-form__element">
      <div class="c-form__radio-group">
        <input class="c-form__radio" type="radio" id="level-undergraduate" name="level" value="undergraduate" checked="checked">
        <label for="level-undergraduate" class="c-form__label">Undergraduate</label>
      </div>
      <div class="c-form__radio-group">
        <input class="c-form__radio" type="radio" id="level-postgraduate" name="level" value="postgraduate">
        <label for="level-postgraduate" class="c-form__label">Postgraduate</label>
      </div>
    </div>
  </fieldset>
</form>

-->
