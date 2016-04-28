---

title: Analytics
name: analytics-module
category: modules
subcategory: General modules
layout: q+tq
id: modal-link-module-page

---

<div class="lead"><p>The main Google Analytics code is contained in `app/main.js` as it needs to live outside of the main 'onload' script. The Google Analytics module contains all the rules for tracking pageviews and events.</p></div>

### Events

In addition to pageviews, we track events, such as the user downloading a file, visiting an external link, and so on. Each event has a _category_, an _action_ and a _label_.

The events _categories_ are:

* Outbound - any URL that does not have `york.ac.uk` (i.e. subdomains aren't counted as outbound links)
* Contact - clicks on `mailto:` and `tel:` links
* Download - clicks on links to documents (currently set as pdf, .xls, .xlsx, .doc and .docx)

The _action_ is the `href` of the link, and the `label` is the text content (or alt text) of the link content.

<a href="https://www.google.com">An external link</a> (should fire an 'Outbound' event)

<a href="https://www.google.com" target="_blank">An external link in a new window</a> (should fire an 'Outbound' event)

<a href="mailto:chris.marsh@york.ac.uk">Email chris.marsh@york.ac.uk</a> (should fire a 'Contact' event)

<a href="tel:01904324107">Call 01904 324107</a> (should fire a 'Contact' event)

<a href="media/test.pdf">A `.pdf` document</a> (should fire a 'Download' event)

<a href="media/test.xls">An `.xls` document</a> (should fire a 'Download' event)

<a href="media/test.xlsx" target="_blank">An `.xlsx` document in a new window</a> (should fire a 'Download' event)

<a href="media/test.doc">A `.doc` document</a> (should fire a 'Download' event)

<a href="media/test.docx" target="_blank">A `.docx` document in a new window</a> (should fire a 'Download' event)

Links that contain image will use the images alt text as the label. If it doesn't exist the label will simply be 'image'.

<a href="https://unsplash.it/1000/1000/?random"><img src="https://unsplash.it/100/100/?random" alt="Some alt text for this image"></a> (should fire a 'Download' event with alt text as the label)

<a href="https://unsplash.it/1000/1000/?random"><img src="https://unsplash.it/100/100/?random"></a> (should fire a 'Download' event with 'image' as the label)

### How to use

You don't need to do anything. Simply add rules to `app/analytics.js` and they will be included on the page.