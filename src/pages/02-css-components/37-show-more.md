---
title: Show More
name: show-more
category: components
subcategory: Molecules
layout: q+tq
id: show-more-page
---

<div class="lead"><p>A 'Show More' is used to show a large block of text that is part of a larger piece of content.</p></div>

### Simplest example

<script>
component("show-more", { "content": "<h3>The York approach</h3>"+
                                 "<p>EG. Every course at York has a set of learning outcomes. The learning outcomes tell you what you can expect to be able to do when you graduate and will help you to explain what you can offer to employers. </p>"+
                                 "<h4>Students who complete this course will be able to:</h4>"+
                                 "<ul class=\"u-two-columns\">"+
                                 "  <li>Engage critically in debates around scholarship that inform current archaeological and heritage issues applicable to multiple periods of human society, using evidence from the UK and elsewhere in the world</li>"+
                                 "  <li>Design, execute and evaluate archaeological and heritage research projects to a standard informed by key theoretical, scientific, legal and professional principles and methodologies in an international context</li>"+
                                 "  <li>Generate, document and manage primary archaeological and heritage data from diverse sources of evidence and contexts and conduct analysis using a range of digitial technology</li>"+
                                 "  <li>Operate effectively as constructive and inclusive leaders and confident participants in teamwork in challenging environments and using data from  multi-disciplinary field projects.</li>"+
                                 "  <li>Apply critical and creative approaches to problem-solving in complex situations with diverse, fragmentary datasets that reflect biases in their generation, survival, identification and documentation</li>"+
                                 "  <li>Resolve challenges in interpretation and presentation from an interdisciplinary perspective with agility and awareness of ethical issues</li>"+
                                 "  <li>Confidently explain, communicate and debate ideas through written, visual, and oral forms of presentation to a wide range of public and professional audiences using print and digital media          </li>"+
                                 "  <li>Contribute as independent scholars in the field of archaeological heritage practice through rigorous and imaginative inquiry in multi-disciplinary contexts</li>"+
                                 "</ul>"});
</script>

### Example with a set height and button text

<script>
component("show-more", { 
                        "limit": 2,
                         "moreText": "I'd like to find out more please",
                         "lessText": "Hide",
                         "content": "<h3>The York approach</h3>"+
                                 "<p>EG. Every course at York has a set of learning outcomes. The learning outcomes tell you what you can expect to be able to do when you graduate and will help you to explain what you can offer to employers. </p>"+
                                 "<h4>Students who complete this course will be able to:</h4>"+
                                 "<ul class=\"u-two-columns\">"+
                                 "  <li>Engage critically in debates around scholarship that inform current archaeological and heritage issues applicable to multiple periods of human society, using evidence from the UK and elsewhere in the world</li>"+
                                 "  <li>Design, execute and evaluate archaeological and heritage research projects to a standard informed by key theoretical, scientific, legal and professional principles and methodologies in an international context</li>"+
                                 "  <li>Generate, document and manage primary archaeological and heritage data from diverse sources of evidence and contexts and conduct analysis using a range of digitial technology</li>"+
                                 "  <li>Operate effectively as constructive and inclusive leaders and confident participants in teamwork in challenging environments and using data from  multi-disciplinary field projects.</li>"+
                                 "  <li>Apply critical and creative approaches to problem-solving in complex situations with diverse, fragmentary datasets that reflect biases in their generation, survival, identification and documentation</li>"+
                                 "  <li>Resolve challenges in interpretation and presentation from an interdisciplinary perspective with agility and awareness of ethical issues</li>"+
                                 "  <li>Confidently explain, communicate and debate ideas through written, visual, and oral forms of presentation to a wide range of public and professional audiences using print and digital media          </li>"+
                                 "  <li>Contribute as independent scholars in the field of archaeological heritage practice through rigorous and imaginative inquiry in multi-disciplinary contexts</li>"+
                                 "</ul>"});
</script>

### Options

#### Required

- **content**: (required) the text or markup to go in the show more box
- **height**: _(default 200)_ the height that the box should shrink to
- **moreText**: _(default "Show more")_ the text that appears on the button before the content is expanded
- **lessText**: _(default "Show less")_ the text that appears after the content is expanded
