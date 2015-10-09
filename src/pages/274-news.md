---

title: News
name: news
category: components
subcategory: Organisms
layout: q+tq
id: news-page

---

<div class="lead"><p>A common `news` component can be used in multiple locations with differnt modifiers but a common set of elements: title, category, date and so on.</p></div>

The three modifiers that you can use are `c-news--excerpt`, `c-news--listing` and `c-news--article`.

## News excerpt

The basic `excerpt` has a category, title and teaser text. You can optionally have a _poster_ image too.

<script>
component("news-excerpt", {
  "category":"Technologies for the future",
  "title": "Vehicle for success",
  "date": "1 October 2015",
  "teaser": "Our computer scientists are driving the latest advances in car electronics.",
  "link":"#"
});
</script>

And with a poster image:

<script>
component("news-excerpt", {
  "category":"Technologies for the future",
  "title": "Vehicle for success",
  "date": "1 October 2015",
  "teaser": "Our computer scientists are driving the latest advances in car electronics.",
  "poster": "/media/traffic-banner.jpg",
  "link":"#"
});
</script>

You can see this in action on the [demo research front page](/templates/research/index.html)

## News listing

The basic `news-listing` atom is as follows:

<script>
component("news-listing", {
  "title": "Vehicle for success",
  "lead": "Millions of cars across the world owe the efficiency and reliability of their electronic systems to research carried out by our computer scientists.",
  "date": "8 September 2015",
  "thumbnail": "/media/traffic-thumbnail.jpg",
  "link":"#"
});
</script>

And can be joined together in an array to make a whole long list of news listings:

<script>
component("news-list", { "atoms":[
  { "news-listing": {
    "title": "Vehicle for success",
    "lead": "Millions of cars across the world owe the efficiency and reliability of their electronic systems to research carried out by our computer scientists.",
    "date": "8 September 2015",
    "thumbnail": "/media/traffic-thumbnail.jpg",
  "link":"#"
  } },
  { "news-listing": {
    "title": "Vehicle for success",
    "lead": "Millions of cars across the world owe the efficiency and reliability of their electronic systems to research carried out by our computer scientists.",
    "date": "8 September 2015",
    "thumbnail": "/media/traffic-thumbnail.jpg",
  "link":"#"
  } },
  { "news-listing": {
    "title": "Vehicle for success",
    "lead": "Millions of cars across the world owe the efficiency and reliability of their electronic systems to research carried out by our computer scientists.",
    "date": "8 September 2015",
    "thumbnail": "/media/traffic-thumbnail.jpg",
  "link":"#"
  } }
]});
</script>

You can see this in action on the [demo research front page](/templates/research/index.html)

## News article

<script>
component("news-article", {
  "category": [
    "<a class=\"c-tag\" href=\"#\">Technologies for the future</a>",
    "<a class=\"c-tag\" href=\"#\">Risk, evidence and decision making</a>"
  ],
  "title": "How research at York fuelled a revolution in automotive electronics",
  "lead": "Millions of cars across the world owe the efficiency and reliability of their electronic systems to research carried out by our computer scientists.",
  "date": "8 September 2015",
  "banner": "/media/traffic-banner.jpg",
  "license": "The text of this article is licensed under a <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">Creative Commons Licence</a>. You're free to republish it, as long as you link back to this page and credit us.",
  "content": "<p>Work by experts in our pioneering Real-Time Systems Research Group ensures the smooth running of programmes that control everything from fuel injection to brake lights.</p>\n<p>And with new innovations such as driverless cars just around the corner, the demand for their specialist skills is accelerating.</p>\n<p>&ldquo;Car brakes are a simple example of the real time behaviour studied at York,&rdquo; explains Dr Rob Davis, a Senior Research Fellow who joined the real time systems group as a PhD student shortly after its launch in the early 90s. &ldquo;If you imagine approaching traffic lights – you put your foot on the brake, the brake lights go on and you slow to a stop. But there’s a lot more going on than that.</p>\n<p><a class=\"youtube-video-embed\" href=\"https://www.youtube.com/watch?v=zPBBHo3NiYs\">Watch the video here</a></p>\n<p>&ldquo;Pressing the brake pedal closes a switch. This is detected by an Electronic Control Unit, also known as an ECU. The ECU passes a message over the network to another control unit at the back of the car. This message is then decoded, causing the brake lights to go on - this all happens in a fraction of a second.</p>\n<p>&ldquo;Now imagine similar events and responses happening hundreds of times a second throughout your car controlling everything from gear changes to fuel injection – and each action has to be executed within a strict time limit.&rdquo;</p>"
});
</script>

You can see this in action on the [demo research article](/research/themes/car-electronics/index.html)

### Options

#### Atoms

* **news**
  * **title** - the title of the news article (required)
  * **category** - the category the news article sits in, or an array of `tag`s (optional)
  * **author** - the name (or linked name) of the author (optional)
  * **date** - the publish date of the article (optional)
  * **teaser** - a sentence describing the news article (required for _news-excerpt_, optional elsewhere)
  * **lead** - a paragraph of text to introduce the article. _Should not be replicated at the beginning of the article._ (required for _news-article_, optional elsewhere)
  * **license** - the details of the license for use (optional)
  * **thumbnail** - the URL of the image to use as the thumbnail image (should be 280px x 280px (i.e. 140px for double density screens))  (required for _news-listing_, optional elsewhere)
  * **poster** - the URL of the image to use as the poster image (should be 2:1 ratio)  (optional)
  * **banner** - the URL of the image to use as the banner image (should be 2:1 ratio) (optional)
  * **content** - an HTML string with the content of the news article (required for _news-article_, optional elsewhere)
  * **link** - the URL of the main article (required for _news-excerpt and _news-listing_, optional for _news-article_)

#### Molecules

* **news-list**
  * **atoms** - an array of `news-listing` atoms