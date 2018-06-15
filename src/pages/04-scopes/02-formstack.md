---

title: Formstack scope
name: formstack-scope
category: scopes
layout: q+tq
id: formstack-scope-page

---
<!-- copied from https://www.york.ac.uk/study/undergraduate/applying/clearing/alert/ -->

<div class="lead"><p>There is a _formstack.scss_ file under `src/sass/scopes`, which contains specific styles for Formstack forms. Mostly they extend our classes, but there are some specific fixes in for e.g. date pickers.</p></div>

<!-- Add Formstack styles -->
<link rel="stylesheet" href="/css/scopes/formstack.css" />

<div class="o-grid__row">
  <div class="o-grid__box o-grid__box--twothirds">
  <script type="text/javascript" src="https://uni_york.formstack.com/forms/js.php/clearing_2018?nojquery=1&nojqueryui=1&nomodernizr=1&no_style_strict=1"></script><noscript><a href="https://uni_york.formstack.com/forms/clearing_2018" title="Online Form">Online Form - clearing_2018</a></noscript><script type='text/javascript'>if (typeof $ == 'undefined' && jQuery){ $ = jQuery; }</script>
  </div>
</div>

<script>
require(["jquery"], function($) {
  // Add class to select parents
  $(function() {
    $('select').wrap('<div class="fsSelectParent"></div>');
  });
});
</script>

```markup

```
