---

title: Alerts
name: alerts
category: atoms
layout: q+tq
id: alerts-page

---

<script>
component("alert", { "type": "success", "content": "<strong>Congratulations!</strong> You have successfully completed a thing."} );
</script>

### Options

#### Atoms

* **alert**
  * **type**: Choose from _success_, _info_, _warning_ or _danger_ (required)
  * **content**: The text to go in the alert. Can include HTML markup (required)
  * **dismiss**: Boolean. Whether the alert is dismissable or not
