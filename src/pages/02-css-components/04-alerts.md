---

title: Alerts
name: alerts
category: components
subcategory: Atoms
layout: q+tq
id: alerts-page

---

## Alerts

<div class="lead"><p>_Alerts_ are used to notify users of important information, often as feedback on an action they've just performed.</p></div>

_Success_ alerts show users they've done something successfully, _info_ alerts provide useful contextual info that doesn't necessarily require action, a _warning_ alert tells the user that something unexpected might have occurred and a _danger_ alert should only be used when the user has caused an error or malfunction of some sort, not just as a noticeable signal.

_Alerts_ can be _dismissable_, useful if their interaction is still needed on the page.

<script>
component("alert", { "type": "success", "content": "<strong>Congratulations!</strong> You have successfully completed a thing." } )
+component("alert", { "type": "info", "content": "<strong>FYI.</strong> You need to know this thing." } )
+component("alert", { "type": "warning", "content": "<strong>Attention!</strong> Don't forget to do a thing.", "dismissable": true } )
+component("alert", { "type": "danger", "content": "<p><strong>Danger! You have forgotten to do a thing.</strong></p><p>Danger! You have forgotten to do a thing.</p><p>Danger! You have forgotten to do a thing. Danger! You have forgotten to do a thing. Danger! You have forgotten to do a thing.</p>", "dismissable": true } );
</script>

### Accessibility notes

## Using alert boxes dynamically

If you are inserting alerts into the DOM dynamically and you want screen readers or other assisitive technology to bring them to your users' attention then you should include a `role="alert"` attribute on the `.c-alert` element.

The alert component previously contained this attribute but was removed following an accessibility review as this is typically not the intended effect when an alert is included in a statically rendered page. 

### Options

#### Atoms

* **alert**
  * **type**: Choose from _success_, _info_, _warning_ or _danger_ (required)
  * **content**: The text to go in the alert. Can include HTML markup (required)
  * **dismissable**: Boolean. Whether the alert is dismissable or not (optional, default _false_)
