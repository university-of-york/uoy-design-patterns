---

title: Breadcrumb
name: breadcrumb
category: layout
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

