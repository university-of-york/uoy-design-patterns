---

title: Breadcrumb
name: breadcrumb
category: layout
subcategory: General
layout: q+tq
id: breadcrumb-page

---

<div class="lead"><p>The breadcrumb shows you where in the hierarchy you are:</p></div>

<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="/"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/">Undergraduate study</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/applying/">Applying</a>
  </div>
</div>

```markup
<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="/"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/">Undergraduate study</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/applying/">Applying</a>
  </div>
</div>
```

If the bread crumb becomes unmanageably large (I'm talking to you, departmental pages), especially on mobile, we close it up so only the home, level 1, level _n-1_ and level _n_ items are shown. Clicking on the ellipsis expands the rest of the breadcrumb items.

<div class="c-breadcrumb is-closed">
  <div class="c-breadcrumb__items">
    <a href="/"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Chemistry</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">About staff</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Academic staff</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">T to Z</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Professor Richard Taylor</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Taylor Group Pages</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Photo Gallery</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Former Groups</a>
  </div>
</div>

```markup
<div class="c-breadcrumb is-closed">
  <div class="c-breadcrumb__items">
    <a href="/"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Chemistry</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">About staff</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Academic staff</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">T to Z</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Professor Richard Taylor</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Taylor Group Pages</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Photo Gallery</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Former Groups</a>
  </div>
</div>
```

There is also a [JS fix](utils.html#utils-cleanbreadcrumbs-) which removes the last item if it is called "Header".

<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="/"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/">Undergraduate study</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/courses/">Courses</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/courses/header/">Header</a>
  </div>
</div>

```markup
<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="/"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/">Undergraduate study</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/courses/">Courses</a><span class="c-breadcrumb__separator">&gt;</span><a href="/study/undergraduate/courses/header/">Header</a>
  </div>
</div>
```

