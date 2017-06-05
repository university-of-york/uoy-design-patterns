---

title: Layout
name: layout
category: false
layout: q+tq
id: layout-page

---

<div class="lead"><p>This is how we put the site together. Top-level items, like the [grid system](../layout/grid.html), typography and navigation.</p></div>

## Basic page structure

Every normal page follows the same basic structure. We use an HTML5 `doctype`:

```markup
<!DOCTYPE html>
```

Then in the head section:

```markup
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="author" content="University of York">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="" />

<title>...</title>

<link rel="shortcut icon" href="https://www.york.ac.uk/static/stable/img/favicon.ico">
<link rel="icon" type="image/x-icon" href="https://www.york.ac.uk/static/stable/img/favicon.ico">
<link rel="stylesheet" href="https://www.york.ac.uk/static/stable/css/styles.min.css">

<script src="https://www.york.ac.uk/static/stable/js/modernizr.min.js"></script>
<script src="https://www.york.ac.uk/static/stable/js/app.min.js"></script>

</head>
```

The `body` of the page should contain a main [_header_](../layout/navigation.html#main-header), _wrapper_ and _footer_, and can optionally include a [_page title_](../layout/navigation.html#page-title), a [_main nav_](../layout/navigation.html#menu-navigation) and a [_breadcrumb_](../layout/breadcrumb.html).

```markup
<body>

<header class="c-main-header" role="banner">...</header>

<div class="o-wrapper o-wrapper--wide c-page-title__wrapper o-grid">...</div>

<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation">...</nav>

<div class="c-breadcrumb">...</div>

<div class="o-wrapper o-wrapper--main o-grid js-wrapper--main">...</div>

<footer class="c-footer-main" role="contentinfo">...</footer>

</body>
```

The following is a standard page template.

<a class="c-btn c-btn--medium" href="media/template.txt" target="_blank">Download the page template here</a>

```markup
<!DOCTYPE html>
<html>

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="author" content="University of York">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="" />

<title>...</title>

<link rel="shortcut icon" href="https://www.york.ac.uk/static/stable/img/favicon.ico">
<link rel="icon" type="image/x-icon" href="https://www.york.ac.uk/static/stable/img/favicon.ico">
<link rel="stylesheet" href="https://www.york.ac.uk/static/stable/css/styles.min.css">

<script src="https://www.york.ac.uk/static/stable/js/modernizr.min.js"></script>
<script src="https://www.york.ac.uk/static/stable/js/app.min.js"></script>

</head>

<body>

<header class="c-main-header" role="banner">...</header>

<div class="o-wrapper o-wrapper--wide c-page-title__wrapper o-grid">...</div>

<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation">...</nav>

<div class="c-breadcrumb">...</div>

<div class="o-wrapper o-wrapper--main o-grid js-wrapper--main">...</div>

<footer class="c-footer-main" role="contentinfo">...</footer>

</body>

</html>
```
