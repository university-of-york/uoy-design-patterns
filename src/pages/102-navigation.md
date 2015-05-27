---

title: Navigation
name: navigation
category: layout
layout: wide
id: navigation-page

---

<p class="lead">In general, navigation is kept up at the top of the page, so we can use the whole width of the page for content.</p>

<!--
## Structural navigation

The top-level **structural navigation** (Study, Research, Business) is kept at the top of every page as a way to navigate back to any section of the site.

<nav class="c-structural-nav">
  <ul class="c-structural-nav__list">
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Study</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Research</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Business</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Departments</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">International</a></li>
  </ul>
</nav>
-->

## Utility navigation

**Utility navigation** is links that aren't directly related to page content, but are important for general site navigation. This includes _Jobs_, _Staff_, _Current students_ and the _Search_ functionality. These are kept in a top banner on the homepage but hidden elsewhere. THey also appear in the footer.

<nav class="c-utility-nav">
  <ul class="c-utility-nav__list">
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Jobs</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Visitors</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Alumni</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Current students</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Staff</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">News</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Events</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Contact us</a></li>
  </ul>
  <div class="c-utility-nav__search">
    <form action="" method="get" class="c-form">
      <input class="c-form__input c-form__input--text" type="text" placeholder="Enter your search">
      <button class="c-btn c-btn--small"><i class="c-icon c-icon--magnifying-glass"></i></button>
    </form>
  </div>
</nav>

## Main menu

The selected level 2 title will appear in larger text (this will be something like _Postgraduate Study_, or _Chemistry_). This means that the other Level 2 navigation won't be immediately clickable, which is intentional: if you've gone to Undergraduate study, you're unlikely to need Postgraduate study as well, if you're looking at Chemistry you're unlikely to need Archaeology as well.

#### Homepage menu

The homepage navigation won't match the rest of the site. The structural navigation will move down to the position of the level 2 title (much as it is on the current site and on these pages). This is to ensure the homepage content can be displayed higher up the page.

### Menu title

<div class="c-page-title">
  <h1 class="c-page-title__header"><a class="c-page-title__link" href="#">Study</a></h1>
</div>

### Menu navigation

Unopened, the main navigation shows the pages currently in this section (children if available, siblings if not). Open it up and you can see the "In this section" and "Other sections".

<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-2">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item">
      <a class="c-nav__link" href="choosing-a-course.html">Choosing a course</a>
    </li>
    <li class="c-nav__item is-current">
      <a class="c-nav__link" href="combined-courses.html">Combined courses</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="teaching-and-learning.html">Teaching and learning</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="international-foundation.html">International foundation</a>
    </li>
    <li class="c-nav__item c-nav__item--more">
      <a class="c-nav__link js-toggle-button" href="#Main-Navigation-2">More&hellip;</a>
    </li>
  </ul>
  <h4 class="c-nav__header">Other sections</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item">
      <a class="c-nav__link" href="courses.html">Courses</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="accommodation.html">Accommodation</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="open-days.html">Open days</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="fees-and-funding.html">Fees and funding</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="applying.html">Applying</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="why-york.html">Why York?</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="prospectus.html">Prospectus</a>
    </li>
  </ul>
</nav>

## Breadcrumb navigation

<nav class="c-breadcrumb">
  <a class="c-breadcrumb__link" href="#">Home</a>
  <a class="c-breadcrumb__link" href="#">Study</a>
  <a class="c-breadcrumb__link" href="#">Postgraduate study</a>
</nav>

## Putting it all together

<nav class="c-utility-nav">
  <ul class="c-utility-nav__list">
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Jobs</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Visitors</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Alumni</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Current students</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Staff</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">News</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Events</a></li>
    <li class="c-utility-nav__item"><a class="c-utility-nav__link" href="#">Contact us</a></li>
  </ul>
  <div class="c-utility-nav__search">
    <form action="" method="get" class="c-form">
      <input class="c-form__input c-form__input--text" type="text" placeholder="Enter your search">
      <button class="c-btn c-btn--small"><i class="c-icon c-icon--magnifying-glass"></i></button>
    </form>
  </div>
</nav>

<header class="c-main-header" role="banner">
  <div class="o-wrapper">
    <h2 class="c-main-header__title"><img class="c-main-header__logo" src="img/logo.jpg" alt="University of York logo" width="264" height="41"></h2>
    <nav class="c-structural-nav">
      <ul class="c-structural-nav__list">
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Study</a></li>
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Research</a></li>
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Business</a></li>
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Departments</a></li>
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">International</a></li>
      </ul>
    </nav>
  </div>
</header>

<div class="c-page-title">
  <h1 class="c-page-title__header"><a class="c-page-title__link" href="#">Study</a></h1>
</div>

<div class="c-breadcrumb">
  <a class="c-breadcrumb__link">Study</a>
  <a class="c-breadcrumb__link">Undergraduate</a>
  <a class="c-breadcrumb__link">Applying</a>
</div>

<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-3">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item">
      <a class="c-nav__link" href="choosing-a-course.html">Choosing a course</a>
    </li>
    <li class="c-nav__item is-current">
      <a class="c-nav__link" href="combined-courses.html">Combined courses</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="teaching-and-learning.html">Teaching and learning</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="international-foundation.html">International foundation</a>
    </li>
    <li class="c-nav__item c-nav__item--more">
      <a class="c-nav__link js-toggle-button" href="#Main-Navigation-3">More&hellip;</a>
    </li>
  </ul>
  <h4 class="c-nav__header">Other sections</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item">
      <a class="c-nav__link" href="courses.html">Courses</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="accommodation.html">Accommodation</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="open-days.html">Open days</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="fees-and-funding.html">Fees and funding</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="applying.html">Applying</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="why-york.html">Why York?</a>
    </li>
    <li class="c-nav__item">
      <a class="c-nav__link" href="prospectus.html">Prospectus</a>
    </li>
  </ul>
</nav>
