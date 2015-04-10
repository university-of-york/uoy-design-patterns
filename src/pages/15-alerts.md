---

title: Alerts
name: alerts
category: atoms
layout: q+tq
id: alerts-page

---

<script>
component("alert", { "type": "success", "content": "<strong>Congratulations!</strong> You have successfully completed a thing."} )
+component("alert", { "type": "info", "content": "<strong>FYI.</strong> You need to know this thing."} )
+component("alert", { "type": "warning", "content": "<strong>Attention!</strong> Don't forget to do a thing."} )
+component("alert", { "type": "danger", "content": "<strong>Danger!</strong> You have forgotten to do a thing."} );
</script>

### Options

#### Atoms

* **alert**
  * **type**: Choose from _success_, _info_, _warning_ or _danger_ (required)
  * **content**: The text to go in the alert. Can include HTML markup (required)
  * **dismiss**: Boolean. Whether the alert is dismissable or not
