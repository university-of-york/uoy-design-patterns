---

title: Event heading
name: event-heading
category: components
subcategory: Organisms
layout: q+tq
id: event-heading

---

<div class="lead"><p>An event page includes details of an event, such as an open lecture. This component is intended for use in our automated event listings</p></div>

## Event heading with an image

<script>
    component("event-heading",{ "image": "https://www.york.ac.uk/media/news-and-events/publiclectures/19-20/800%20x%20400%20OL%20banner%20-%20beige.jpg", "title": "Watch again - York Festival of Ideas 2019: Farid Chenoune discusses Is Fashion Only French?", "type-text": "Talk", "type-icon": "comment", "datetime": "Friday 19 June 2020, 6pm to 11.59pm", "location": "Online event", "audience": "Open to alumni, staff, students, the public", "admission": "Free admission, booking not required"});
</script>

## Event heading without an image

<script>
    component("event-heading",{"title": "Watch again - York Festival of Ideas 2019: Farid Chenoune discusses Is Fashion Only French?", "type-text": "Talk", "type-icon": "comment", "datetime": "Friday 19 June 2020, 6pm to 11.59pm", "location": "Online event", "audience": "Open to alumni, staff, students, the public", "admission": "Free admission, booking not required"});
</script>



### Options

* **Heading**
 * **image**: the URL of an image
 * **title**: The title of the event **(required)**
 * **subtitle**: Appears below the title, in smaller text
 * **type-text**: The text to display for event type
 * **type-icon**: icon to be used before text

* **Details**
 * **Date and time**: The date and time that the event takes place
 * **Location**: The venue where the event takes place
 * **Audience**: Who is the event for
 * **Admission**: Booking details including cost where applicable