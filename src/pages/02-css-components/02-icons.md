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
  <p>We have upgraded to FontAwesome 5, which means there is a broader range of icons available. However, it means that _brand_ icons (e.g. Twitter, Facebook, Instagram) should have a class of `.c-icon--brand` in addition to `c-icon--twitter` etc.</p>
  <p>There is a [shim](https://en.wikipedia.org/wiki/Shim_%28computing%29) in place to cover the differences between v4 and v5.</p>
  <p>The shim covers these for the time being, but we are working on updating existing icons so we can remove this in the near future.</p>
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

<ul id="icon-list"></ul>

<script>

// The list of 'Brand' icons which need .fab class
var brands = ["500px", "accessible-icon", "accusoft", "acquisitions-incorporated", "adn", "adobe", "adversal", "affiliatetheme", "algolia", "alipay", "amazon", "amazon-pay", "amilia", "android", "angellist", "angrycreative", "angular", "app-store", "app-store-ios", "apper", "apple", "apple-pay", "artstation", "asymmetrik", "atlassian", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance-square", "bimobject", "bitbucket", "bitcoin", "bity", "black-tie", "blackberry", "blogger", "blogger-b", "bluetooth", "bluetooth-b", "btc", "buromobelexperte", "buysellads", "canadian-maple-leaf", "cc-amazon-pay", "cc-amex", "cc-apple-pay", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "centercode", "centos", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "confluence", "connectdevelop", "contao", "cpanel", "creative-commons", "creative-commons-by", "creative-commons-nc", "creative-commons-nc-eu", "creative-commons-nc-jp", "creative-commons-nd", "creative-commons-pd", "creative-commons-pd-alt", "creative-commons-remix", "creative-commons-sa", "creative-commons-sampling", "creative-commons-sampling-plus", "creative-commons-share", "creative-commons-zero", "critical-role", "css3", "css3-alt", "cuttlefish", "d-and-d", "d-and-d-beyond", "dashcube", "delicious", "deploydog", "deskpro", "dev", "deviantart", "dhl", "diaspora", "digg", "digital-ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble-square", "dropbox", "drupal", "dyalog", "earlybirds", "ebay", "edge", "elementor", "ello", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook-f", "facebook-messenger", "facebook-square", "fantasy-flight-games", "fedex", "fedora", "figma", "firefox", "first-order", "first-order-alt", "firstdraft", "flickr", "flipboard", "fly", "font-awesome", "font-awesome-alt", "font-awesome-flag", "font-awesome-logo-full", "fonticons", "fonticons-fi", "fort-awesome", "fort-awesome-alt", "forumbee", "foursquare", "free-code-camp", "freebsd", "fulcrum", "galactic-republic", "galactic-senate", "get-pocket", "gg", "gg-circle", "git", "git-square", "github", "github-alt", "github-square", "gitkraken", "gitlab", "gitter", "glide", "glide-g", "gofore", "goodreads", "goodreads-g", "google", "google-drive", "google-play", "google-plus", "google-plus-g", "google-plus-square", "google-wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker-news", "hacker-news-square", "hackerrank", "hips", "hire-a-helper", "hooli", "hornbill", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "intercom", "internet-explorer", "invision", "ioxhost", "itunes", "itunes-note", "java", "jedi-order", "jenkins", "jira", "joget", "joomla", "js", "js-square", "jsfiddle", "kaggle", "keybase", "keycdn", "kickstarter", "kickstarter-k", "korvue", "laravel", "lastfm", "lastfm-square", "leanpub", "less", "line", "linkedin", "linkedin-in", "linode", "linux", "lyft", "magento", "mailchimp", "mandalorian", "markdown", "mastodon", "maxcdn", "medapps", "medium", "medium-m", "medrt", "meetup", "megaport", "mendeley", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "neos", "nimblr", "nintendo-switch", "node", "node-js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki-square", "old-republic", "opencart", "openid", "opera", "optin-monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "penny-arcade", "periscope", "phabricator", "phoenix-framework", "phoenix-squadron", "php", "pied-piper", "pied-piper-alt", "pied-piper-hat", "pied-piper-pp", "pinterest", "pinterest-p", "pinterest-square", "playstation", "product-hunt", "pushed", "python", "qq", "quinscape", "quora", "r-project", "raspberry-pi", "ravelry", "react", "reacteurope", "readme", "rebel", "red-river", "reddit", "reddit-alien", "reddit-square", "redhat", "renren", "replyd", "researchgate", "resolving", "rev", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "shopware", "simplybuilt", "sistrix", "sith", "sketch", "skyatlas", "skype", "slack", "slack-hash", "slideshare", "snapchat", "snapchat-ghost", "snapchat-square", "soundcloud", "sourcetree", "speakap", "spotify", "squarespace", "stack-exchange", "stack-overflow", "staylinked", "steam", "steam-square", "steam-symbol", "sticker-mule", "strava", "stripe", "stripe-s", "studiovinari", "stumbleupon", "stumbleupon-circle", "superpowers", "supple", "suse", "teamspeak", "telegram", "telegram-plane", "tencent-weibo", "the-red-yeti", "themeco", "themeisle", "think-peaks", "trade-federation", "trello", "tripadvisor", "tumblr", "tumblr-square", "twitch", "twitter", "twitter-square", "typo3", "uber", "ubuntu", "uikit", "uniregistry", "untappd", "ups", "usb", "usps", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo-square", "viber", "vimeo", "vimeo-square", "vimeo-v", "vine", "vk", "vnv", "vuejs", "weebly", "weibo", "weixin", "whatsapp", "whatsapp-square", "whmcs", "wikipedia-w", "windows", "wix", "wizards-of-the-coast", "wolf-pack-battalion", "wordpress", "wordpress-simple", "wpbeginner", "wpexplorer", "wpforms", "wpressr", "xbox", "xing", "xing-square", "y-combinator", "yahoo", "yandex", "yandex-international", "yarn", "yelp", "yoast", "youtube", "youtube-square", "zhihu"
]

// Then get whole icon list from CSS file
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
      // console.log(item, result);
      if (!result) return;
      if (result[1] === 'font-awesome-logo-full') return;
      var li = document.createElement('li');
      // <i class="c-icon c-icon--xxxxxxxx"></i>
      var i = document.createElement('i');
      i.classList.add('c-icon', 'c-icon--'+result[1], 'c-icon--3x');
      if (brands.indexOf(result[1]) > -1) {
        i.classList.add('c-icon--brand');
      }
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

request.send();
</script>

### Options


#### Atoms


* icon
  * **type**: the type of option you want **(required)**
  * **style**: can be _dark_ (default) or _light_
  * **sr-text**: text for screen readers to access (default _false_)
