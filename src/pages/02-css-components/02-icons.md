---

title: Icons
name: icons
category: components
subcategory: Atoms
layout: q+tq
id: icons-page

---

<div class="lead"><p>We're currently using [Font Awesome](http://fortawesome.github.io/Font-Awesome/) as an icon set. All icons are held in an `i` element, as it has no semantic meaning and is very concise (i.e. it's one letter!).</p></div>

<div class="c-alert c-alert--warning">
  <h3>Upgrade to FontAwesome 5</h3>
  <p>We have upgraded to FontAwesome 5, which means there is a broader range of icons available. However, there is a shim in place to cover the differences between v4 and v5.</p>
  <p>Most notably, it means that _brand_ icons (e.g. Twitter, Facebook, Instagram) should have a class of `.fab` in a ddition to `c-icon--twitter` etc.</p>
  <p>The shim covers these for the time being, but we are working on updating existing icons so we can remove the shim in the near future.</p>
  <p>FontAwesome provide a [list of icon name changes](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes) - if you see one of these in the wild, please flag it up for changing.</p>
</div>

<script>
component("icon", { "type": "heart" } );
</script>

### Icon sizes

There are 6 alternative sizes of icon: `hf` is half the size of standard icons, `lg` is 33% bigger than standard, then there are `2x`, `3x`, `4x` and `5x` versions of the icon.

<script>
component("icon", { "type": "heart", "size":"hf" } )+
component("icon", { "type": "heart", "size":"lg" } )+
component("icon", { "type": "heart", "size":"2x" } )+
component("icon", { "type": "heart", "size":"3x" } )+
component("icon", { "type": "heart", "size":"4x" } )+
component("icon", { "type": "heart", "size":"5x" } );
</script>

See the [Font Awesome documentation](http://fortawesome.github.io/Font-Awesome/examples/) for details of all the different things that you can do with them, such as rotating, flipping or animating.

### Inverse colors

If you need a light icon for a dark background, use the `inverse` style.

<script>
component("icon", { "type": "heart", "size":"hf", "style": "inverse" } )+
component("icon", { "type": "heart", "style": "inverse" } )+
component("icon", { "type": "heart", "size":"lg", "style": "inverse" } )+
component("icon", { "type": "heart", "size":"2x", "style": "inverse" } )+
component("icon", { "type": "heart", "size":"3x", "style": "inverse" } )+
component("icon", { "type": "heart", "size":"4x", "style": "inverse" } )+
component("icon", { "type": "heart", "size":"5x", "style": "inverse" } );
</script>

### Accessibility

Empty `<i>` elements aren't very friendly to screen readers or assistive technologies. So make sure they have `aria-hidden="true"`, and if they are standalone non-interactive icons, add some text for screen readers to access. This appears both as the `title` of the icon and as hidden text.

<script>
component("icon", { "type": "heart", "sr-text":"All you need is love" } )+
component("icon", { "type": "calendar", "sr-text":"Eight days a week" } );
</script>

For interactive elements (such as an `<a>` element) you should add an `aria-label` to the anchor.

<a href="https://twitter.com/uniofyork" aria-label="Follow us on Twitter"><i class="c-icon c-icon--twitter" title="Follow us on Twitter" aria-hidden="true"></i></a>

```markup
<a href="https://twitter.com/uniofyork" aria-label="Follow us on Twitter"><i class="c-icon c-icon--twitter" title="Follow us on Twitter" aria-hidden="true"></i></a>
```

See the [Font Awesome docs](http://fontawesome.io/accessibility/) for more details.

### List of icons

Here's a comprehensive list of icons, taken from [FontAwesome's GitHub repo](https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/css/all.min.css).

(The ones which appear as a square are the ones which require a `.fab` class with them - we need to figure out a way to automatically pull the right class in.)

<ul id="icon-list"></ul>

<script>
var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/css/all.min.css', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    var resp = this.response;
    //Get all instances of e.g .fa-align-left:before{content:"\f036"}
    var re = /\.fa-([a-z0-9-]*):before{content:\"\\f[0-9a-z]{3}\"}/g;
    var matches = resp.match(re);
    var iconList = document.getElementById('icon-list');
    matches.forEach(function(item, i) {
      var r = /\.fa-([a-z0-9-]*):before{content:\"\\f[0-9a-z]{3}\"}/g;
      var result = r.exec(item);
      console.log(item, result);
      if (!result) return;
      var li = document.createElement('li');
      // <i class="c-icon c-icon--xxxxxxxx"></i>
      var i = document.createElement('i');
      i.classList.add('c-icon', 'c-icon--'+result[1], 'c-icon--before');
      var p = document.createElement('p');
      var t = document.createTextNode(result[1]);
      p.appendChild(i);
      p.appendChild(t);
      li.appendChild(p);
      iconList.appendChild(li);
    });
    
  } else {
    console.log("Error fetching page")
  }
};

request.onerror = function() {
    console.log("Connection error")
};

request.send();</script>

### Options


#### Atoms


* icon
  * **type**: the type of option you want **(required)**
  * **style**: can be _dark_ (default) or _light_
  * **sr-text**: text for screen readers to access (default _false_)
