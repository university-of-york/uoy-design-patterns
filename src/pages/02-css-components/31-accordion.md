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
    "id": "test/accordion-2a",
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
    "id": "accordion-2b",
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
    "id": "accordion-2c",
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

If an accordion content has an ID, then a cookie will be set to remember the state of the accordion, so revisiting the page in the same session will keep the same accordions open.

### Edge cases

#### `content.updated` event

When there's a YouTube embed inside an accordion, the [YouTube embed module](../js-modules/youtube-embed.html) fires the `content.updated` event after it's loaded, which triggers the accordion to reset its height.

This event is also fired by the [searchables module](../js-modules/searchables-module.html), the [clearing tables module](../js-modules/searchables-module.html), the [tabs module](../js-modules/tabs-module.html) and also by the `load` event on any images within an accordion.

The function to reset the accordion height is also triggered by the `font.loaded` event.

<script>
component("accordion", { "atoms": [
  { "accordion-item": {
    "title": "YouTube video embed",
    "id": "accordion-4a",
    "content": "<p><a class=\"youtube-video-embed\" href=\"https://www.youtube.com/watch?v=s67Nb0wpcbE\">Watch the video here</a></p>"
  } },
  { "accordion-item": {
    "title": "Searchable",
    "id": "accordion-4b",
    "content":  "<div class=\"js-searchable\" data-label=\"Enter your search term here\">"+
                "  <table>"+
                "    <thead>"+
                "      <tr>"+
                "        <th>Programme</th>"+
                "        <th>Home/EU</th>"+
                "        <th>Overseas</th>"+
                "      </tr>"+
                "    </thead>"+
                "    <tbody>"+
                "      <tr>"+
                "        <td><a href=\"http://www.york.ac.uk/chemistry/postgraduate/taught/\">Green Chemistry &amp; Sustainable Industrial Technology (PG Diploma)</a></td>"+
                "        <td>&pound;4,830</td>"+
                "        <td>&pound;14,390</td>"+
                "      </tr>"+
                "      <tr>"+
                "        <td><a href=\"http://www.cs.york.ac.uk/postgraduate/taught-courses/msc-scse/\">Safety Critical Systems Engineering</a> (MSc)</td>"+
                "        <td>&pound;17,420</td>"+
                "        <td>&pound;19,500</td>"+
                "      </tr>"+
                "      <tr>"+
                "        <td>"+
                "          <p><a href=\"http://maths.york.ac.uk/www/MscfinMscmathfin\">Mathematical Finance</a> (MSc)</p>"+
                "          <p>The fees for the MSc in Mathematical Finance (Online) vary, please refer to the Online/Distance tab.</p>"+
                "        </td>"+
                "        <td>&pound;18,060</td>"+
                "        <td>&pound;23,490</td>"+
                "      </tr>"+
                "      <tr>"+
                "        <td><a href=\"http://www.york.ac.uk/inst/cws/prospective/dip.htm\">Postgraduate Diploma in Women&#39;s Studies (Social Research)</a></td>"+
                "        <td>&pound;4,830</td>"+
                "        <td>&pound;11,360</td>"+
                "      </tr>"+
                "    </tbody>"+
                "  </table>"+
                "</div>"
  } },
  { "accordion-item": {
    "title": "Clearing tables",
    "id": "accordion-4c",
    "content": "<div class=\"js-clearing-table\" data-department=\"Management\" data-type=\"UK/EU\"></div>"
  } },
  { "accordion-item": {
    "title": "Tabs",
    "id": "accordion-4d",
    "content":  "<div class=\"c-tabs c-tabs--horizontal js-tabs\">"+
                "  <ul class=\"c-tabs__nav\">"+
                "    <li class=\"c-tabs__tab is-active\"><a class=\"c-tabs__link\" href=\"#about\">About the university</a></li>"+
                "    <li class=\"c-tabs__tab\"><a class=\"c-tabs__link\" href=\"#excellence\">Academic excellence</a></li>"+
                "    <li class=\"c-tabs__tab\"><a class=\"c-tabs__link\" href=\"#investing\">Investing in our campus</a></li>"+
                "  </ul>"+
                "  <div class=\"c-tabs__container\">"+
                "    <div class=\"c-tabs__content is-active\" id=\"about\">"+
                "      <h3>Founded on principles of excellence</h3>"+
                "      <p>Founded on principles of excellence, equality and opportunity for all, the University of York opened in 1963 with just 230 students.</p>"+
                "      <p>Since then we have become one of the world's leading universities, carving out a reputation as an academic powerhouse where a clear focus on excellence has secured national and international recognition alongside longer established institutions.</p>"+
                "    </div>"+
                "    <div class=\"c-tabs__content\" id=\"excellence\">"+
                "      <h3>A member of the elite Russell Group of universities</h3>"+
                "      <p>We are a dynamic, research-intensive university committed to the development of life-saving discoveries and new technologies to tackle some of the most pressing global challenges.</p>"+
                "      <p>There are now over 30 academic departments and research centres and the student body has expanded to nearly 16,000.</p>"+
                "      <ul>"+
                "        <li><a href=\"#\">Research at York</a></li>"+
                "        <li><a href=\"#\">Studying at York</a></li>"+
                "        <li><a href=\"#\">Mission and strategies: the University Plan 2009-19</a></li>"+
                "      </ul>"+
                "    </div>"+
                "    <div class=\"c-tabs__content\" id=\"investing\">"+
                "      <h3>Vision for a 21st-century campus</h3>"+
                "      <p>The University is in the middle of an unprecedented period of expansion and renewal. Since 2000, we have invested in 20 new buildings on the original Heslington West campus and have completed the first and second phases of a £750m campus expansion"+
                "        at Heslington East.</p>"+
                "      <p>Our investment in new colleges, teaching and learning space, laboratories, research facilities and a new sport village mean it has never been a better time to join our student body or research groups at York.</p>"+
                "    </div>"+
                "  </div>"+
                "</div>"
  } },
  { "accordion-item": {
    "title": "Images",
    "id": "accordion-4e",
    "content": "<p>Throttle the bandwidth in Chrome Dev Tools in order to make these images load slowly.</p>"+
               "<p><img src=\"../media/massive-image.jpg\" alt=\"\" /> "+
               "<p><img src=\"https://picsum.photos/100/100/?image=200\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=201\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=202\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=203\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=204\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=206\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=208\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=209\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=210\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=211\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=212\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=213\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=214\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=215\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=216\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=217\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=218\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=219\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=220\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=221\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=222\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=223\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=225\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=227\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=228\" alt=\"\" /> "+
               "<img src=\"https://picsum.photos/100/100/?image=229\" alt=\"\" /> </p>"
  } },
] } );
</script>

### Options

#### Atoms

* **accordion-item**
  * **title**: string or HTML to go in the accordion title **(required)**
  * **content**: string or HTML to go in the accordion body **(required)**
  * **collapse**: default _false_. Set to _true_ to allow accordions to be open at once.

#### Molecules

* **accordion**
  * **atoms**: an array of `accordion-item` atoms