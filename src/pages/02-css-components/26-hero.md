---

title: Hero 
name: hero
category: components
subcategory: Molecules
layout: default
id: hero-page

---

<script>
component("hero", { "type":"hero", "image": "/media/stained-glass-1900x1200.jpg", "content": { "text" :"<h1>Undergraduate study</h1>\n<p>Study at York and you'll graduate with more than a qualification.</p>\n<p><a href=\"#\" class=\"c-btn c-btn--small\">Find a course <i class=\"c-icon c-icon--search c-icon-after\"></i> </a><a href=\"#\" class=\"c-btn c-btn--small\">Book an open day</a></p>\n</div>", "position": "bottom-centre" } } )
</script>

<div class="lead"><p>A Hero will stretch an image to the full width of the screen. The caption will be centred at the bottom of the c-hero container.</p></div>


### Options 

#### Atoms

* **Hero**
  * **image**: the URL of an image **(required)**
  * **content**:
    * **text**: the text to appear in the caption (string) **(required)**
    * **cta**: text to be used on the cta button
    * **href**: target URL for the cta button 
