---

title: Navigation
name: navigation
category: layout
layout: wide
id: navigation-page

---

# Navigation

In general, navigation is kept up at the top of the page, so we can use the whole width of the page for content. The sub-navigation (levels 4+) acts as a breadcrumb when needed.

### Structural navigation

The top-level **structural navigation** (Study, Research, Business) is kept at the top of every page as a way to navigate back to any section of the site.

The selected level 2 title will appear in larger text (this will be something like _Postgraduate Study_, or _Chemistry_). This means that the other Level 2 navigation won't be immediately clickable, which is intentional: if you've gone to Undergraduate study, you're unlikely to need Postgraduate study as well, if you're looking at Chemistry you're unlikely to need Archaeology as well.

### Associative navigation

**Associative navigation** are links to pages that are (usually) siblings of the current page - directly relevant links to pages in the same section. It also includes direct parents and grandparents of the current page (i.e. the breadcrumb).

The major (alpha) associative navigation is made up of level 3 options (e.g. _Courses_, _Open Days &amp; Visits_, _Accommodation_ for **Undergraduate Study**, _About the department_, _About staff_, _Research_ for **Chemistry**). This can overflow, with a **More &#9660;** option at the end.

The minor (beta) associative navigation starts as level 4 navigation and then becomes the breadcrumb for all subsequent levels. This can overflow for the level 4 options, and will accordion up when used as a breadcrumb.

Finally, the lowest (gamma) level of associative navigation is the subnavigation for whichever level is below the current page. This can overflow when needed.

The deepest level I can find in the site audit is six levels deep (e.g. /study/study-abroad/outgoing/europe/partners/music/), but, as the content is user-generated, we need to make allowances for large numbers of option per level and almost endless levels.

### Utility navigation

**Utility navigation** is links that aren't directly related to page content, but are important for general site navigation. This includes _Jobs_, _Staff_, _Current students_ and the _Search_ functionality. These are kept in a sitewide top banner.

### Homepage navigation

The homepage navigation won't match the rest of the site. The structural navigation will move down to the position of the level 2 title (much as it is on the current site and on these pages). This is to ensure the homepage content can be displayed higher up the page.

## Utility navigation

<nav class="utility-nav">
  <ul class="utility-links">
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Visitors</a></li>
    <li><a href="#">Alumni</a></li>
    <li><a href="#">Current students</a></li>
    <li><a href="#">Staff</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Contact us</a></li>
  </ul>
  <div class="utility-search">
    <form action="" method="get">
      <input type="text" placeholder="Enter your search">
      <button class="btn"><i class="icon-search"></i></button>
    </form>
  </div>
</nav>

## Homepage navigation

<nav class="main-menu">
<ul class="menu-lv1">
  <li><a href="#">Study</a></li>
  <li><a href="#">Research</a></li>
  <li><a href="#">Business</a></li>
  <li><a href="#">Departments</a></li>
  <li><a href="#">International</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">Events</a></li>
  <li><a href="#">Contact</a></li>
</ul>
</nav>

## Structural navigation

<nav class="structural-nav">
  <ul>
    <li><a href="#">Study</a></li>
    <li><a href="#">Research</a></li>
    <li><a href="#">Business</a></li>
    <li><a href="#">Departments</a></li>
    <li><a href="#">International</a></li>
  </ul>
</nav>


## Associative navigation - level 1 <small>(e.g. on /study)</small>

<nav class="main-menu">
<div class="main-menu-title">
  <h1><a href="#">Study</a></h1>
</div>
<ul class="menu-lv1">
  <li><a href="#">Undergraduate</a></li>
  <li><a href="#">Postgraduate</a></li>
  <li><a href="#">International students</a></li>
  <li><a href="#">Distance learning</a></li>
  <li><a href="#">Student life</a></li>
</ul>
</nav>

## Associative navigation - level 2 <small>(e.g. /study/undergraduate)</small>

<nav class="main-menu">
<div class="main-menu-title">
  <h1><a href="#">Undergraduate study</a></h1>
</div>
<ul class="menu-lv1">
  <li><a href="#">Courses</a></li>
  <li><a href="#">Open days &amp; visits</a></li>
  <li><a href="#">Accommodation</a></li>
  <li><a href="#">Fees &amp; funding</a></li>
  <li><a href="#">Applying</a></li>
  <li><a href="#">Student life</a></li>
  <li class="nav-additional">
    <ul>
      <li><a href="#">The city of York</a></li>
      <li><a href="#">Careers &amp; skills</a></li>
      <li><a href="#">Services for schools &amp; colleges</a></li>
      <li><a href="#">Parents &amp; carers</a></li>
      <li><a href="#">Request a prospectus</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
  </li>
  <li class="more"><a href="#">See more <small>&#9660;</small></a></li>
</ul>
</nav>

## Associative navigation - level 2 expanded <small>(when clicking on &ldquo;See more&rdquo;)</small>

<nav class="main-menu">
<div class="main-menu-title">
  <h1><a href="#">Undergraduate study</a></h1>
</div>
<ul class="menu-lv1 open">
  <li><a href="#">Courses</a></li>
  <li><a href="#">Open days &amp; visits</a></li>
  <li><a href="#">Accommodation</a></li>
  <li><a href="#">Fees &amp; funding</a></li>
  <li><a href="#">Applying</a></li>
  <li><a href="#">Student life</a></li>
  <li class="nav-additional">
    <ul>
      <li><a href="#">The city of York</a></li>
      <li><a href="#">Careers &amp; skills</a></li>
      <li><a href="#">Services for schools &amp; colleges</a></li>
      <li><a href="#">Parents &amp; carers</a></li>
      <li><a href="#">Request a prospectus</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
  </li>
  <li class="more"><a href="#">See less <small>&#9650;</small></a></li>
</ul>
</nav>

## Associative navigation - level 3 <small>(e.g. /study/undergraduate/courses)</small>

<nav class="main-menu mobile-hidden">
<div class="main-menu-title">
  <h1><a href="#">Undergraduate study</a></h1>
</div>
<ul class="menu-lv1">
  <li class="active-item">
    <a href="#">Courses</a>
    <ul class="menu-lv2 active-nav">
      <li><a href="#">Choosing a course</a></li>
      <li><a href="#">Combined courses</a></li>
      <li><a href="#">Teaching &amp; learning</a></li>
      <li><a href="#">Other course info</a></li>
      <li><a href="#">How to choose</a></li>
      <li class="nav-additional">
        <ul>
          <li><a href="#">Another thing</a></li>
          <li><a href="#">More course stuff</a></li>
          <li><a href="#">Courses for you</a></li>
        </ul>
      </li>
      <li class="more"><a href="#">See more <small>&#9660;</small></a></li>
    </ul>
  </li>
  <li><a href="#">Open days &amp; visits</a></li>
  <li><a href="#">Accommodation</a></li>
  <li><a href="#">Fees &amp; funding</a></li>
  <li><a href="#">Applying</a></li>
  <li><a href="#">Student life</a></li>
</ul>
</nav>

&nbsp;

## Associative navigation - level 3 expanded <small>(e.g. /study/undergraduate/courses)</small>

<nav class="main-menu mobile-hidden">
<div class="main-menu-title">
  <h1><a href="#">Undergraduate study</a></h1>
</div>
<ul class="menu-lv1">
  <li class="active-item">
    <a href="#">Courses</a>
    <ul class="menu-lv2 active-nav open">
      <li><a href="#">Choosing a course</a></li>
      <li><a href="#">Combined courses</a></li>
      <li><a href="#">Teaching &amp; learning</a></li>
      <li><a href="#">Other course info</a></li>
      <li><a href="#">How to choose</a></li>
      <li class="nav-additional">
        <ul>
          <li><a href="#">Another thing</a></li>
          <li><a href="#">More course stuff</a></li>
          <li><a href="#">Courses for you</a></li>
        </ul>
      </li>
      <li class="more"><a href="#">See less <small>&#9650;</small></a></li>
    </ul>
  </li>
  <li><a href="#">Open days &amp; visits</a></li>
  <li><a href="#">Accommodation</a></li>
  <li><a href="#">Fees &amp; funding</a></li>
  <li><a href="#">Applying</a></li>
  <li><a href="#">Student life</a></li>
</ul>
</nav>

&nbsp;

&nbsp;

## Associative navigation - level 4 <small>(e.g. /study/undergraduate/courses/choosing-a-course)</small>

<nav class="main-menu mobile-hidden">
<div class="main-menu-title">
  <h1><a href="#">Undergraduate study</a></h1>
</div>
<ul class="menu-lv1">
  <li class="active-item">
    <a href="#">Courses</a>
    <ul class="menu-lv2">
      <li class="active-item">
        <a href="#">Choosing a course</a>
        <ul class="menu-lv3 active-nav">
          <li><a href="#">Full time</a></li>
          <li><a href="#">Part time</a></li>
          <li><a href="#">Long distance courses</a></li>
          <li><a href="#">Online courses</a></li>
          <li><a href="#">All courses</a></li>
          <li class="nav-additional">
            <ul>
              <li><a href="#">Another course option</a></li>
              <li><a href="#">Why not try this?</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </li>
          <li class="more"><a href="#">See more <small>&#9660;</small></a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#">Open days &amp; visits</a></li>
  <li><a href="#">Accommodation</a></li>
  <li><a href="#">Fees &amp; funding</a></li>
  <li><a href="#">Applying</a></li>
  <li><a href="#">Student life</a></li>
</ul>
</nav>

&nbsp;

&nbsp;

## Associative navigation - level 4 expanded <small>(e.g. /study/undergraduate/courses/choosing-a-course)</small>

<nav class="main-menu mobile-hidden">
<div class="main-menu-title">
  <h1><a href="#">Undergraduate study</a></h1>
</div>
<ul class="menu-lv1">
  <li class="active-item">
    <a href="#">Courses</a>
    <ul class="menu-lv2">
      <li class="active-item">
        <a href="#">Choosing a course</a>
        <ul class="menu-lv3 active-nav open">
          <li><a href="#">Full time</a></li>
          <li><a href="#">Part time</a></li>
          <li><a href="#">Long distance courses</a></li>
          <li><a href="#">Online courses</a></li>
          <li><a href="#">All courses</a></li>
          <li class="nav-additional">
            <ul>
              <li><a href="#">Another course option</a></li>
              <li><a href="#">Why not try this?</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </li>
          <li class="more"><a href="#">See less <small>&#9650;</small></a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#">Open days &amp; visits</a></li>
  <li><a href="#">Accommodation</a></li>
  <li><a href="#">Fees &amp; funding</a></li>
  <li><a href="#">Applying</a></li>
  <li><a href="#">Student life</a></li>
</nav>

&nbsp;

&nbsp;

&nbsp;

## Associative navigation - level 5 <small>(e.g. /study/undergraduate/courses/choosing-a-course/full-time)</small>

<nav class="main-menu mobile-hidden">
<div class="main-menu-title">
  <h1><a href="#">Undergraduate study</a></h1>
</div>
<ul class="menu-lv1">
  <li class="active-item">
    <a href="#">Courses</a>
    <ul class="menu-lv2">
      <li class="active-item">
        <a href="#">Choosing a course</a>
        <ul class="menu-lv3">
          <li class="active-item">
            <a href="#">Full time</a>
            <ul class="menu-lv4 active-nav">
              <li><a href="#">Further options</a></li>
              <li><a href="#">The second option</a></li>
              <li><a href="#">Richard III</a></li>
              <li><a href="#">Born on the Fourth of July</a></li>
              <li class="nav-additional">
                <ul>
                  <li><a href="#">The Fifth Element</a></li>
                  <li><a href="#">Sixth Sense</a></li>
                  <li><a href="#">Se7en</a></li>
                  <li><a href="#">8</a></li>
                  <li><a href="#">A really long ninth option that probably wouldn't exist</a></li>
                  <li><a href="#">Ten (10)</a></li>
                </ul>
              </li>
              <li class="more"><a href="#">See more <small>&#9660;</small></a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#">Open days &amp; visits</a></li>
  <li><a href="#">Accommodation</a></li>
  <li><a href="#">Fees &amp; funding</a></li>
  <li><a href="#">Applying</a></li>
  <li><a href="#">Student life</a></li>
</ul>
</nav>

&nbsp;

## Level 6 - 600

As you go deeper into the site structure, the secondary associative navigation becomes a breadcrumb, with the tertiary menu always on one line (until &ldquo;See more&rdquo; is clicked).

<nav class="main-menu mobile-hidden docs-nav">
<div class="main-menu-title">
  <h1><a href="#">Undergraduate study</a></h1>
</div>
<ul class="menu-lv1">
  <li class="active-item">
    <a href="#">Courses</a>
    <ul class="menu-lv2">
      <li class="active-item">
        <a href="#">Choosing a course</a>
        <ul class="menu-lv3">
          <li class="active-item">
            <a href="#">Full time</a>
            <ul class="menu-lv4">
              <li class="active-item">
                <a href="#">Further options</a>
                <ul class="menu-lv5">
                  <li class="active-item">
                    <a href="#">Still more</a>
                    <ul class="menu-lv6">
                      <li class="active-item">
                        <a href="#">Further options</a>
                        <ul class="menu-lv7">
                          <li class="active-item">
                            <a href="#">Deeper and deeper</a>
                            <ul class="menu-lv8">
                              <li class="active-item">
                                <a href="#">Down the rabbit hole</a>
                                <ul class="menu-lv9">
                                  <li class="active-item">
                                    <a href="#">Almost at the bottom now</a>
                                    <ul class="menu-lv10">
                                      <li class="active-item">
                                        <a href="#">Can you see me down here?</a>
                                        <ul class="menu-lv11 active-nav">
                                          <li><a href="#">If you can read this</a></li>
                                          <li><a href="#">You've come too far</a></li>
                                          <li><a href="#">Turn back now</a></li>
                                          <li><a href="#">While you still can</a></li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#">Open days &amp; visits</a></li>
  <li><a href="#">Accommodation</a></li>
  <li><a href="#">Fees &amp; funding</a></li>
  <li><a href="#">Applying</a></li>
  <li><a href="#">Student life</a></li>
</ul>
</nav>

&nbsp;

&nbsp;

## Putting it all together

<nav class="utility-nav">
  <ul class="utility-links">
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Visitors</a></li>
    <li><a href="#">Alumni</a></li>
    <li><a href="#">Current students</a></li>
    <li><a href="#">Staff</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Contact us</a></li>
  </ul>
  <div class="utility-search">
    <form action="" method="get">
      <input type="text" placeholder="Enter your search">
      <button class="btn btn-small">Search</button>
    </form>
  </div>
</nav>

<header class="main-header" role="banner">
  <h2><img src="img/logo.jpg" alt="University of York logo" width="264" height="41"></h2>
  <nav class="structural-nav">
    <ul>
      <li><a href="#">Study</a></li>
      <li><a href="#">Research</a></li>
      <li><a href="#">Business</a></li>
      <li><a href="#">Departments</a></li>
      <li><a href="#">International</a></li>
    </ul>
  </nav>
</header>

<nav class="main-menu">
<div class="main-menu-title">
  <h1><a href="#">Study</a></h1>
</div>
<ul class="menu-lv1">
  <li><a href="#">Undergraduate</a></li>
  <li><a href="#">Postgraduate</a></li>
  <li><a href="#">International students</a></li>
  <li><a href="#">Distance learning</a></li>
  <li><a href="#">Student life</a></li>
</ul>
</nav>



