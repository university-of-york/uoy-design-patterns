---

title: Accordion
name: accordion
category: components
subcategory: Molecules
layout: q+tq
id: accordion-page

---

<div class="lead"><p>An accordion list for expandable content.</p></div>

<script>
component("accordion-item", {
  "title": "This accordion title",
  "id": "accordion-1a",
  "content": "<p>This accordion content.</p>"
} );
</script>

And the `accordion` itself is made up of an array of `accordion-item`s:

<script>
component("accordion", { "atoms": [
  { "accordion-item": {
    "title": "Mandatory for all applicants",
    "content": "<h3>Academic transcripts</h3>"+
               "<h4>If you've completed your studies</h4>"+
               "<p>You need to provide copies of your degree certificates and formal transcripts of your academic record. This should include full details of the degrees, classes, grades you've obtained and the modules/units you have taken.</p>"+
               "<p>Documents not in English must be accompanied by a formally certified translation into English.</p>"+
               "<h4>If you've not yet finished your studies</h4>"+
               "<p>If you're still registered for your current course, or your undergraduate or postgraduate results are still pending, please provide an interim transcript of your results to date.</p>"+
               "<p>Any offer you're made will be conditional and subject to completion of the course concerned at a specified level.</p>"+
               "<h3>Academic references</h3>"+
               "<ul>"+
               "<li>For <strong>taught Masters courses</strong> (MSc, MA, PG Dip, PG Cert and MRes) you need to provide one reference.</li>"+
               "<li>For <strong>research degrees</strong> (PhD, MPhil and MA/MSc by research) you need to provide two references.</li>"+
               "</ul>"+
               "<p>This is an important part of the selection process, so it's in your interest to make sure that your referees are both appropriate and informative. You should provide an academic reference if you have graduated within the last five years. Your referees will be contacted automatically by email and asked to provide a reference for you.</p>"+
               "<p>If you do not provide an email address for a referee you must ask them to send us references directly and provide them with a copy of our <a title=\"Guidance for Academic references (opens in a new window)\" href=\"/media/study/documents/postgraduate/Guidance for references.pdf\">Guidance for academic references (PDF, 36kb)</a>.</p>"
  } },
  { "accordion-item": {
    "title": "Course-specific requirements",
    "content": "<h3>Written work</h3>"+
               "<p>Some courses require a sample of your written work to further demonstrate your suitability. If you're required to submit written work, the details of what is required will be in the application form. To help you prepare see <a href=\"/study/postgraduate/apply/supporting-documents/written-work/\">courses with written work requirements</a>.</p>"+
               "<h3>Personal statement</h3>"+
               "<p>A personal statement can be included as part of your application. For some courses it forms a part of the assessment process. Details of what to include in your personal statement will be provided during the application process. To help you prepare see <a href=\"/study/postgraduate/apply/supporting-documents/personal-statement-guidance/\">course-specific requirements for personal statements</a>.</p>"+
               "<h3>Curriculum vitae / resume</h3>"+
               "<p>Your curriculum vitae (CV) or resume can be uploaded as part of your application to provide further information on your prior experience and qualifications.</p>"+
               "<h3>Evidence of financial support</h3>"+
               "<p>In most cases, you're not required to submit evidence of funding. A small number of courses require evidence, for example a bank statement or sponsor's letter. Where applicable you'll be asked to submit this as part of your application.</p>"+
               "<p>The expectation is that you'll make satisfactory arrangements before entry for your financial support, both for <a href=\"/study/postgraduate/fees-funding/\">tuition fees</a> and <a href=\"/study/postgraduate/fees-funding/living-costs/\">living expenses</a>, for the whole period of your proposed course at the University.</p>"
  } },
  { "accordion-item": {
    "title": "Research applicants: additional documents",
    "content": "<h3>Research proposal or outline of academic interests</h3>"+
               "<p>If you're applying to a research degree, you should provide an outline of your proposed research topic. You must indicate whether you're interested in the work of a particular member of academic staff. Details of what to include in your research proposal will be provided during the application process. To help you prepare see our <a href=\"/study/postgraduate/apply/supporting-documents/research-proposal-guidance/\">guidance for research proposals</a>.</p>"
  } }
] } );
</script>

By default, the accordion will allow you to open as many as you like. Passing `"collapse": true` as an option will stop that behaviour and only allow one item to be open. If you want this behaviour you must contain them within a `.c-accordion` block.

<script>
component("accordion", { "collapse": true, "atoms": [
  { "accordion-item": {
    "title": "Mandatory for all applicants",
    "id": "accordion-3a",
    "content": "<h3>Academic transcripts</h3>"+
               "<h4>If you've completed your studies</h4>"+
               "<p>You need to provide copies of your degree certificates and formal transcripts of your academic record. This should include full details of the degrees, classes, grades you've obtained and the modules/units you have taken.</p>"+
               "<p>Documents not in English must be accompanied by a formally certified translation into English.</p>"+
               "<h4>If you've not yet finished your studies</h4>"+
               "<p>If you're still registered for your current course, or your undergraduate or postgraduate results are still pending, please provide an interim transcript of your results to date.</p>"+
               "<p>Any offer you're made will be conditional and subject to completion of the course concerned at a specified level.</p>"+
               "<h3>Academic references</h3>"+
               "<ul>"+
               "<li>For <strong>taught Masters courses</strong> (MSc, MA, PG Dip, PG Cert and MRes) you need to provide one reference.</li>"+
               "<li>For <strong>research degrees</strong> (PhD, MPhil and MA/MSc by research) you need to provide two references.</li>"+
               "</ul>"+
               "<p>This is an important part of the selection process, so it's in your interest to make sure that your referees are both appropriate and informative. You should provide an academic reference if you have graduated within the last five years. Your referees will be contacted automatically by email and asked to provide a reference for you.</p>"+
               "<p>If you do not provide an email address for a referee you must ask them to send us references directly and provide them with a copy of our <a title=\"Guidance for Academic references (opens in a new window)\" href=\"/media/study/documents/postgraduate/Guidance for references.pdf\">Guidance for academic references (PDF, 36kb)</a>.</p>"
  } },
  { "accordion-item": {
    "title": "Course-specific requirements",
    "id": "accordion-3b",
    "content": "<h3>Written work</h3>"+
               "<p>Some courses require a sample of your written work to further demonstrate your suitability. If you're required to submit written work, the details of what is required will be in the application form. To help you prepare see <a href=\"/study/postgraduate/apply/supporting-documents/written-work/\">courses with written work requirements</a>.</p>"+
               "<h3>Personal statement</h3>"+
               "<p>A personal statement can be included as part of your application. For some courses it forms a part of the assessment process. Details of what to include in your personal statement will be provided during the application process. To help you prepare see <a href=\"/study/postgraduate/apply/supporting-documents/personal-statement-guidance/\">course-specific requirements for personal statements</a>.</p>"+
               "<h3>Curriculum vitae / resume</h3>"+
               "<p>Your curriculum vitae (CV) or resume can be uploaded as part of your application to provide further information on your prior experience and qualifications.</p>"+
               "<h3>Evidence of financial support</h3>"+
               "<p>In most cases, you're not required to submit evidence of funding. A small number of courses require evidence, for example a bank statement or sponsor's letter. Where applicable you'll be asked to submit this as part of your application.</p>"+
               "<p>The expectation is that you'll make satisfactory arrangements before entry for your financial support, both for <a href=\"/study/postgraduate/fees-funding/\">tuition fees</a> and <a href=\"/study/postgraduate/fees-funding/living-costs/\">living expenses</a>, for the whole period of your proposed course at the University.</p>"
  } },
  { "accordion-item": {
    "title": "Research applicants: additional documents",
    "id": "accordion-3c",
    "content": "<h3>Research proposal or outline of academic interests</h3>"+
               "<p>If you're applying to a research degree, you should provide an outline of your proposed research topic. You must indicate whether you're interested in the work of a particular member of academic staff. Details of what to include in your research proposal will be provided during the application process. To help you prepare see our <a href=\"/study/postgraduate/apply/supporting-documents/research-proposal-guidance/\">guidance for research proposals</a>.</p>"
  } }
] } );
</script>

If an accordion item has an ID, then a cookie will be set to remember the state of the accordion, so revisiting the page in the same session will keep the same accordions open.

### Options

#### Atoms

* **accordion-item**
  * **title**: string or HTML to go in the accordion title **(required)**
  * **content**: string or HTML to go in the accordion body **(required)**
  * **collapse**: default _false_. Set to _true_ to allow accordions to be open at once.

#### Molecules

* **accordion**
  * **atoms**: an array of `accordion-item` atoms