---

title: Tabs
name: tabs
category: components
subcategory: Molecules
layout: q+tq
id: tabs-page

---

<div class="lead"><p>Tabs are an easy way to fit lots of related content on a page without overwhelming the page with content.</p></div>

Individual tabs can be referenced by the page hash.

Tabs will automatically expand to fit to 100% of the width of the container.

## Horizontal tabs (default)

<script>
component("tabbed-content", { "type": "horizontal", "tabs": [
  {
    "id": "about/test",
    "title": "About the university",
    "content": "<h3>Founded on principles of excellence</h3><p>Founded on principles of excellence, equality and opportunity for all, the University of York opened in 1963 with just 230 students.</p><p>Since then we have become one of the world's leading universities, carving out a reputation as an academic powerhouse where a clear focus on excellence has secured national and international recognition alongside longer established institutions.</p>"
  },
  {
    "id": "excellence",
    "title": "Academic excellence",
    "content": "<h3>A member of the elite Russell Group of universities</h3><p>We are a dynamic, research-intensive university committed to the development of life-saving discoveries and new technologies to tackle some of the most pressing global challenges.</p><p>There are now over 30 academic departments and research centres and the student body has expanded to nearly 16,000.</p><ul><li><a href=\"#\">Research at York</a></li><li><a href=\"#\">Studying at York</a></li><li><a href=\"#\">Mission and strategies: the University Plan 2009-19</a></li></ul>"
  },
  {
    "id": "investing",
    "title": "Investing in our campus",
    "content": "<h3>Vision for a 21st-century campus</h3><p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"
  }
]});
</script>

## Horizontal tabs (dark)

<script>
component("tabbed-content", { "type": "horizontal", "mode": "dark", "tabs": [
  {
    "id": "about/test",
    "title": "About the university",
    "content": "<h3>Founded on principles of excellence</h3><p>Founded on principles of excellence, equality and opportunity for all, the University of York opened in 1963 with just 230 students.</p><p>Since then we have become one of the world's leading universities, carving out a reputation as an academic powerhouse where a clear focus on excellence has secured national and international recognition alongside longer established institutions.</p>"
  },
  {
    "id": "excellence",
    "title": "Academic excellence",
    "content": "<h3>A member of the elite Russell Group of universities</h3><p>We are a dynamic, research-intensive university committed to the development of life-saving discoveries and new technologies to tackle some of the most pressing global challenges.</p><p>There are now over 30 academic departments and research centres and the student body has expanded to nearly 16,000.</p><ul><li><a href=\"#\">Research at York</a></li><li><a href=\"#\">Studying at York</a></li><li><a href=\"#\">Mission and strategies: the University Plan 2009-19</a></li></ul>"
  },
  {
    "id": "investing",
    "title": "Investing in our campus",
    "content": "<h3>Vision for a 21st-century campus</h3><p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"
  }
]});
</script>

## Vertical tabs

You can also place tabs vertically, and just add `.c-tabs--vertical` to the tab container.

<script>
component("tabbed-content", { "type": "vertical", "tabs": [
  {
    "id": "about-2",
    "title": "About the university",
    "content": "<h3>Founded on principles of excellence</h3><p>Founded on principles of excellence, equality and opportunity for all, the University of York opened in 1963 with just 230 students.</p><p>Since then we have become one of the world's leading universities, carving out a reputation as an academic powerhouse where a clear focus on excellence has secured national and international recognition alongside longer established institutions.</p>"
  },
  {
    "id": "excellence-2",
    "title": "Academic excellence",
    "content": "<h3>A member of the elite Russell Group of universities</h3><p>We are a dynamic, research-intensive university committed to the development of life-saving discoveries and new technologies to tackle some of the most pressing global challenges.</p><p>There are now over 30 academic departments and research centres and the student body has expanded to nearly 16,000.</p><ul><li><a href=\"#\">Research at York</a></li><li><a href=\"#\">Studying at York</a></li><li><a href=\"#\">Mission and strategies: the University Plan 2009-19</a></li></ul>"
  },
  {
    "id": "investing-2",
    "title": "Investing in our campus",
    "content": "<h3>Vision for a 21st-century campus</h3><p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"
  }
]});
</script>

<script>
component("tabbed-content", { "type": "vertical", "mode": "dark", "tabs": [
  {
    "id": "about-2",
    "title": "About the university",
    "content": "<h3>Founded on principles of excellence</h3><p>Founded on principles of excellence, equality and opportunity for all, the University of York opened in 1963 with just 230 students.</p><p>Since then we have become one of the world's leading universities, carving out a reputation as an academic powerhouse where a clear focus on excellence has secured national and international recognition alongside longer established institutions.</p>"
  },
  {
    "id": "excellence-2",
    "title": "Academic excellence",
    "content": "<h3>A member of the elite Russell Group of universities</h3><p>We are a dynamic, research-intensive university committed to the development of life-saving discoveries and new technologies to tackle some of the most pressing global challenges.</p><p>There are now over 30 academic departments and research centres and the student body has expanded to nearly 16,000.</p><ul><li><a href=\"#\">Research at York</a></li><li><a href=\"#\">Studying at York</a></li><li><a href=\"#\">Mission and strategies: the University Plan 2009-19</a></li></ul>"
  },
  {
    "id": "investing-2",
    "title": "Investing in our campus",
    "content": "<h3>Vision for a 21st-century campus</h3><p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion at Heslington East.</p><p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"
  }
]});
</script>

### Options

#### Atoms

* **tabs**
  * **id**: the _id_ of the tab - used for identifying the tab content and updating the URL hash **(required)**
  * **title**: the text to appear in the tab nav **(required)**
  * **content**: A string of HTML to appear in the tab content **(required)** **TODO:** can be a collection of _components_

#### Molecules

* **tabbed-content**
  * **type**: either _horizontal_ or _vertical_
  * **mode**:  _dark_
  * **tabs**: an array of _tabs_