---

title: Navigation
name: navigation
category: layout
layout: wide
id: navigation-page

---

## Main header

The main header has a button, hidden on larger screens, that pops out the search form on mobile.

<header class="c-main-header o-wrapper o-grid" role="banner">
  <div class="o-grid__row">
    <div class="o-grid__box o-grid__box--threequarters">
      <h2 class="c-main-header__title"><img class="c-main-header__logo" src="img/logo.png" alt="University of York logo" width="264" height="41"></h2>
    </div>
    <div class="o-grid__box o-grid__box--quarter is-hidden@medium-">
      <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header">
        <fieldset>
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
  <a href="#Mobile-Search-2" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
</header><!--
--><form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-2">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form>

```markup
<header class="c-main-header o-wrapper o-grid" role="banner">
  <div class="o-grid__row">
    <div class="o-grid__box o-grid__box--threequarters">
      <h2 class="c-main-header__title"><img class="c-main-header__logo" src="img/logo.png" alt="University of York logo" width="264" height="41"></h2>
    </div>
    <div class="o-grid__box o-grid__box--quarter is-hidden@medium-">
      <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header">
        <fieldset>
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
  <a href="#Mobile-Search-2" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
</header><!--
--><form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-2">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form>
```

## Various navigation

### Sticky nav

The sticky nav strays in place on the page until it hits the top of the screen, at which point it stays fixed to the top, highlighting the nearest section fragment as it goes.

<div class="c-nav__wrapper">
  <nav class="c-nav c-nav--sticky js-sticky-nav js-targeted-nav">
    <ul class="c-nav__list"><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#structural-navigation">Structural nav</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#utility-navigation">Utility nav</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#page-title">Page title</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#menu-navigation">Menu nav</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#breadcrumb-navigation">Breadcrumb</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#putting-it-all-together">Putting it all together</a></li><!--
 --></ul>
  </nav>
</div>

```markup
<div class="c-nav__wrapper">
  <nav class="c-nav c-nav--sticky js-sticky-nav js-targeted-nav">
    <ul class="c-nav__list"><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#structural-navigation">Structural nav</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#utility-navigation">Utility nav</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#page-title">Page title</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#menu-navigation">Menu nav</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#breadcrumb-navigation">Breadcrumb</a></li><!--
   --><li class="c-nav__item"><a class="c-nav__link" href="#putting-it-all-together">Putting it all together</a></li><!--
 --></ul>
  </nav>
</div>
```
<!--
### Structural navigation

The top-level **structural navigation** (Study, Research, Business) can be kept at the top of every page as a way to navigate back to any section of the site.

<nav class="c-structural-nav">
  <ul class="c-structural-nav__list">
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Study</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Research</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Business</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Departments</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">International</a></li>
  </ul>
</nav>

```markup
<nav class="c-structural-nav">
  <ul class="c-structural-nav__list">
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Study</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Research</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Business</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Departments</a></li>
    <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">International</a></li>
  </ul>
</nav>
```
-->
<!--
### Utility navigation

**Utility navigation** is links that aren't directly related to page content, but are important for general site navigation. This includes _Jobs_, _Staff_, _Current students_ and the _Search_ functionality. These are kept in a top banner on the homepage but hidden elsewhere. They also appear in the footer.

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
      <button class="c-btn c-btn--small"><i class="c-icon c-icon--search"></i></button>
    </form>
  </div>
</nav>

```markup
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
      <button class="c-btn c-btn--small"><i class="c-icon c-icon--search"></i></button>
    </form>
  </div>
</nav>
```
-->
## Main menu

The selected level 2 title will appear in larger text (this will be something like _Postgraduate Study_, or _Chemistry_). This means that the other Level 2 navigation won't be immediately clickable, which is intentional: if you've gone to Undergraduate study, you're unlikely to need Postgraduate study as well, if you're looking at Chemistry you're unlikely to need Archaeology as well.

### Page title

<div class="c-page-title">
  <h1 class="c-page-title__header"><a class="c-page-title__link" href="#">Navigation</a></h1>
</div>

```markup
<div class="c-page-title">
  <h1 class="c-page-title__header"><a class="c-page-title__link" href="#">Navigation</a></h1>
</div>
```

### Menu navigation

Unopened, the main navigation shows the pages currently in this section. Open it up and you can see the "In this section" and "Other sections".

<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-2">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Courses</a></li><li class="c-nav__item"><a href="#">Applying</a></li><li class="c-nav__item"><a href="#">Open days and visits</a></li><li class="c-nav__item"><a href="#">Student finance</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Study and work abroad</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li><li class="c-nav__item"><a href="#">Prospectus</a></li><li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-2">More…</a></li>
  </ul>
  <h4 class="c-nav__header">All sections</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><span class="currentbranch0"><a href="#">Undergraduate study</a></span></li><li class="c-nav__item"><a href="#">Postgraduate study</a></li><li class="c-nav__item"><a href="#">International students</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Student life</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li>
  </ul>
</nav>

```markup
<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-2">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Courses</a></li><li class="c-nav__item"><a href="#">Applying</a></li><li class="c-nav__item"><a href="#">Open days and visits</a></li><li class="c-nav__item"><a href="#">Student finance</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Study and work abroad</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li><li class="c-nav__item"><a href="#">Prospectus</a></li><li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-2">More…</a></li>
  </ul>
  <h4 class="c-nav__header">All sections</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><span class="currentbranch0"><a href="#">Undergraduate study</a></span></li><li class="c-nav__item"><a href="#">Postgraduate study</a></li><li class="c-nav__item"><a href="#">International students</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Student life</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li>
  </ul>
</nav>
```

### Breadcrumb navigation

<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="#"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Undergraduate study</a>
  </div>
</div>

```markup
<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="#"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Undergraduate study</a>
  </div>
</div>
```
## Putting it all together

<!--
### On the homepage

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
  <div class="c-utility-nav__search is-hidden@small-">
    <form action="" method="get" class="c-form">
      <input class="c-form__input c-form__input--text" type="text" placeholder="Enter your search">
      <button class="c-btn c-btn--small"><i class="c-icon c-icon--search"></i></button>
    </form>
  </div>
</nav>
<header class="c-main-header" role="banner">
  <div class="o-wrapper">
    <h2 class="c-main-header__title"><img class="c-main-header__logo" src="img/logo.png" alt="University of York logo" width="264" height="41"></h2>
    <nav class="c-structural-nav is-hidden@medium-">
      <ul class="c-structural-nav__list">
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Study</a></li>
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Research</a></li>
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Business</a></li>
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">Departments</a></li>
        <li class="c-structural-nav__item"><a class="c-structural-nav__link" href="#">International</a></li>
      </ul>
    </nav>
  </div>
  <a href="#Mobile-Search-3" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
</header><!--
--><!--<form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-3">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form>
<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-3">
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Study</a></li><li class="c-nav__item"><a href="#">Research</a></li><li class="c-nav__item"><a href="#">Business</a></li><li class="c-nav__item"><a href="#">Departments</a></li><li class="c-nav__item"><a href="#">International</a></li>
  </ul>
</nav>

### Other pages
-->
<header class="c-main-header o-wrapper o-grid" role="banner">
  <div class="o-grid__row">
    <div class="o-grid__box o-grid__box--threequarters">
      <h2 class="c-main-header__title"><img class="c-main-header__logo" src="img/logo.png" alt="University of York logo" width="264" height="41"></h2>
    </div>
    <div class="o-grid__box o-grid__box--quarter is-hidden@medium-">
      <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header">
        <fieldset>
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
  <a href="#Mobile-Search-4" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
</header><!--
--><form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-4">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form><!--
--><div class="o-wrapper o-wrapper--wide c-page-title__wrapper o-grid">
  <div class="o-grid__row">
    <div class="o-grid__box o-grid__box--full">
      <div class="c-page-title">
        <h1 class="c-page-title__header"><a class="c-page-title__link" href="#">Navigation</a></h1>
      </div>
    </div>
  </div>
</div><!--
--><nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-4">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Courses</a></li><li class="c-nav__item"><a href="#">Applying</a></li><li class="c-nav__item"><a href="#">Open days and visits</a></li><li class="c-nav__item"><a href="#">Student finance</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Study and work abroad</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li><li class="c-nav__item"><a href="#">Prospectus</a></li><li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-4">More…</a></li>
  </ul>
  <h4 class="c-nav__header">All sections</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><span class="currentbranch0"><a href="#">Undergraduate study</a></span></li><li class="c-nav__item"><a href="#">Postgraduate study</a></li><li class="c-nav__item"><a href="#">International students</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Student life</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li>
  </ul>
</nav><!--
--><div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="#"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Undergraduate study</a>
  </div>
</div>

```markup
<header class="c-main-header o-wrapper o-grid" role="banner">
  <div class="o-grid__row">
    <div class="o-grid__box o-grid__box--threequarters">
      <h2 class="c-main-header__title"><img class="c-main-header__logo" src="img/logo.png" alt="University of York logo" width="264" height="41"></h2>
    </div>
    <div class="o-grid__box o-grid__box--quarter is-hidden@medium-">
      <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header">
        <fieldset>
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
  <a href="#Mobile-Search-4" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
</header><!--
--><form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-4">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form><!--
--><div class="o-wrapper o-wrapper--wide c-page-title__wrapper o-grid">
  <div class="o-grid__row">
    <div class="o-grid__box o-grid__box--full">
      <div class="c-page-title">
        <h1 class="c-page-title__header"><a class="c-page-title__link" href="#">Navigation</a></h1>
      </div>
    </div>
  </div>
</div><!--
--><nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-4">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Courses</a></li><li class="c-nav__item"><a href="#">Applying</a></li><li class="c-nav__item"><a href="#">Open days and visits</a></li><li class="c-nav__item"><a href="#">Student finance</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Study and work abroad</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li><li class="c-nav__item"><a href="#">Prospectus</a></li><li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-4">More…</a></li>
  </ul>
  <h4 class="c-nav__header">All sections</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><span class="currentbranch0"><a href="#">Undergraduate study</a></span></li><li class="c-nav__item"><a href="#">Postgraduate study</a></li><li class="c-nav__item"><a href="#">International students</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Student life</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li>
  </ul>
</nav><!--
--><div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="#"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Undergraduate study</a>
  </div>
</div>
```

<div class="c-alert c-alert--warning" style="margin:0 20px;">
**N.B. Navigation doesn't use the component library**
</div>