---

title: Event Page
name: event-page
category: components
subcategory: Organisms
layout: q+tq
id: event-page

---

## With image

<script>
    component("event-page",{ "image": "https://www.york.ac.uk/media/news-and-events/publiclectures/19-20/800%20x%20400%20OL%20banner%20-%20beige.jpg", "title": "Watch again - York Festival of Ideas 2019: Farid Chenoune discusses Is Fashion Only French?", "type-text": "Talk", "type-icon": "comment"});
</script>

## Without image

<script>
    component("event-page",{"title": "Watch again - York Festival of Ideas 2019: Farid Chenoune discusses Is Fashion Only French?", "type-text": "Talk", "type-icon": "comment"});
</script>

### Options

* **Event page**
 * **image**: the URL of an image
 * **title**: The title of the event **(required)**
 * **subtitle**: Appears below the title, in smaller text
 * **type-text**: The text to display for event type
 * **type-icon**: icon to be used before text