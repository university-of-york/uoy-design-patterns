---

title: Events
name: events
category: organisms
layout: default
id: events-page

---

## Events

Each event in a list is made up of an `event` atom (which uses the [media object](media.html) markup).

<script>
component("event", {
  "datetime":"2015-04-07 19:00",
  "day":"Tuesday",
  "date":"7",
  "month": "April",
  "year": "2015",
  "title": "The energy crisis: Is nuclear fusion a solution?",
  "details": "<p>This year's Science Discovery event will focus on nuclear fusion.</p>"
});
</script>

To list events, use the `event-listing` organism.
<script>
component("events-listing", { "atoms": [
  {
    "event": {
      "datetime":"2015-04-08 19:00",
      "title": "Creativity and Reality in Philosophy of Yi and Dao: What difference does it make?",
      "details": "<p>Opening public lecture to the annual British Society for the History of Philosophy conference.</p>"
    }
  },
  {
    "event": {
      "datetime":"2015-03-31 18:30",
      "title": "The energy crisis: Is nuclear fusion a solution?",
      "details": "<p>This year's Science Discovery event will focus on nuclear fusion.</p>"
    }
  },
  {
    "event": {
      "datetime":"2015-03-24 16:00",
      "title": "Integration Challenges of the EU Rail Industry in the Formation of a Single European Rail Area",
      "details": "<p>CEGBI seminar</p>"
    }
  }
]});
</script>


### Options

#### Atoms

* **event**
    * **datetime**:
    * **day**:
    * **date**:
    * **month**:
    * **datetime**:
    * **datetime**:
    * **datetime**:
    * **datetime**:

#### Molecules


* gallery
  * **atoms**: an array of grid-row molecules