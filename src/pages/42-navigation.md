---

title: Navigation
name: navigation
category: layout
layout: wide
id: navigation-page

---

<p class="lead">In general, navigation is kept up at the top of the page, so we can use the whole width of the page for content. The sub-navigation (levels 4+) acts as a breadcrumb when needed.</p>

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

## Utility navigation

**Utility navigation** is links that aren't directly related to page content, but are important for general site navigation. This includes _Jobs_, _Staff_, _Current students_ and the _Search_ functionality. These are kept in a sitewide top banner.

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

<div class="c-menu-title">
  <h1 class="c-menu-title__header"><a class="c-menu-title__link" href="#">Study</a></h1>
</div>

### Menu navigation

<nav class="c-menu-nav">
<ul class="c-menu-nav__list">
  <li class="c-menu-nav__item"><a class="c-menu-nav__link" href="#">Study</a></li>
  <li class="c-menu-nav__item"><a class="c-menu-nav__link" href="#">Research</a></li>
  <li class="c-menu-nav__item"><a class="c-menu-nav__link" href="#">Business</a></li>
  <li class="c-menu-nav__item"><a class="c-menu-nav__link" href="#">Departments</a></li>
  <li class="c-menu-nav__item"><a class="c-menu-nav__link" href="#">International</a></li>
  <li class="c-menu-nav__item"><a class="c-menu-nav__link" href="#">News</a></li>
  <li class="c-menu-nav__item"><a class="c-menu-nav__link" href="#">Events</a></li>
  <li class="c-menu-nav__item"><a class="c-menu-nav__link" href="#">Contact</a></li>
</ul>
</nav>

## Associative navigation

**Associative navigation** are links to pages that are (usually) siblings of the current page - directly relevant links to pages in the same section.

We are using a `subnav` element in the left hand column to display the associative nav. Pretty standard really. There's no other way to keep track of the level of page you are in. The `subnav` contains as its first item a link to the parent page.

The current item is given a class of `.is-current`. You can add a `.c-icon--before` or `.c-icon--after` to the sub nav elements.

<!-- held in a grid to make it a bit easier to see -->
<div class="o-grid">

<div class="o-grid__row">

  <div class="o-grid__box o-grid__box--third">
  </div>

  <div class="o-grid__box o-grid__box--third">
    <nav class="c-subnav">
      <ul class="c-subnav__list c-subnav--study">
        <li class="c-subnav__item c-subnav__title"><a class="c-subnav__link" href="#"><i class="c-icon c-icon--light c-icon--large c-icon--book c-icon--before"></i> Study <i class="c-icon c-icon--light c-icon--medium c-icon--chevron-bottom c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Undergraduate study <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item is-current"><a class="c-subnav__link" href="#">Postgraduate study <i class="c-icon c-icon--light c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">International students <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Distance learning <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Student life <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Study, work and volunteer abroad <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Careers and skills <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Visit us <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">A to Z <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Contacts <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Get a prospectus <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
      </ul>
    </nav>
  </div>

  <div class="o-grid__box o-grid__box--third">
  </div>

</div>

</div>

## Breadcrumb navigation

<nav class="c-breadcrumb">
  <ul class="c-breadcrumb__list">
    <li class="c-breadcrumb__item"><a class="c-breadcrumb__link" href="#">Home</a></li>
    <li class="c-breadcrumb__item"><a class="c-breadcrumb__link" href="#">Study</a></li>
    <li class="c-breadcrumb__item"><a class="c-breadcrumb__link" href="#">Postgraduate study</a></li>
  </ul>
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
  <div class="c-menu mobile-hidden" role="navigation">
    <div class="c-menu-title">
      <h1 class="c-menu-title__header"><a class="c-menu-title__link" href="#">Study</a></h1>
    </div>
    <nav class="c-menu-nav">
      <ul class="c-menu-nav__list">
        <li class="c-menu-nav__item">
          <a class="c-menu-nav__link" href="#">Undergraduate</a>
        </li>
        <li class="c-menu-nav__item">
          <a class="c-menu-nav__link" href="#">Postgraduate</a>
        </li>
        <li class="c-menu-nav__item">
          <a class="c-menu-nav__link" href="#">International students</a>
        </li>
        <li class="c-menu-nav__item">
          <a class="c-menu-nav__link" href="#">Distance learning</a>
        </li>
        <li class="c-menu-nav__item">
          <a class="c-menu-nav__link" href="#">Student life</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<div class="o-wrapper o-grid">

<div class="o-grid__row">

  <div class="o-grid__box o-grid__box--quarter">
    <nav class="c-subnav">
      <ul class="c-subnav__list c-subnav--study">
        <li class="c-subnav__item c-subnav__title"><a class="c-subnav__link" href="#"><i class="c-icon c-icon--light c-icon--large c-icon--book c-icon--before"></i> Study <i class="c-icon c-icon--light c-icon--medium c-icon--chevron-bottom c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Undergraduate study <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item is-current"><a class="c-subnav__link" href="#">Postgraduate study <i class="c-icon c-icon--light c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">International students <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Distance learning <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Student life <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Study, work and volunteer abroad <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Careers and skills <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Visit us <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">A to Z <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Contacts <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
        <li class="c-subnav__item"><a class="c-subnav__link" href="#">Get a prospectus <i class="c-icon c-icon--medium c-icon--chevron-right c-icon--after"></i></a></li>
      </ul>
    </nav>
  </div>

  <div class="o-grid__box o-grid__box--three-quarters">

    <p>Your content goes here.</p>

  </div>

</div>

</div>

