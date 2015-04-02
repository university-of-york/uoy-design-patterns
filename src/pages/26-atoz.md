---

title: A to Z
name: atoz
category: molecules
layout: q+tq
id: atoz-page

---

When we need an alphabetical list, for example on course pages.

<script>
component("atoz", { "letters": [
  {
    "letter": "A",
    "pages": [
      { "link": "#", "title": "Accounting, Business Finance and Management", "content": "<ul><li>BSc</li><li>3 years</li><li>Single Subject</li><li>NN42</li></ul>"},
      { "link": "#", "title": "Accounting, Business Finance and Management (with a year in industry)", "content": "<ul><li>BSc</li><li>4 years</li><li>Single Subject</li><li>NN4F</li></ul>"},
      { "link": "#", "title": "Applied Social Science", "content": "<ul><li>BA</li><li>3 years</li><li>Single Subject</li><li>L431</li></ul>"},
      { "link": "#", "title": "Applied Social Science (Children and Young People)", "content": "<ul><li>BA</li><li>3 years</li><li>Single Subject</li><li>L432</li></ul>"}
    ]
  },
  {
    "letter": "B",
    "pages": [
      { "link": "#", "title": "Bioarchaeology", "content": "<ul><li>BSc</li><li>3 years</li><li>Single Subject</li><li>V403</li></ul>"},
      { "link": "#", "title": "Biochemistry", "content": "<ul><li>BSc</li><li>4 years</li><li>Combined</li><li>C700</li></ul>"},
      { "link": "#", "title": "Biochemistry", "content": "<ul><li>MBiochem</li><li>4 years</li><li>Combined</li><li>C706</li></ul>"}
    ]
  },
  {
    "letter": "C",
    "pages": [
      { "link": "#", "title": "Chemistry", "content": "<ul><li>MChem</li><li>4 years</li><li>Single Subject</li><li>F103</li></ul>"},
      { "link": "#", "title": "Chemistry", "content": "<ul><li>BSc</li><li>3 years</li><li>Single Subject</li><li>F100</li></ul>"},
      { "link": "#", "title": "Chemistry (with a year abroad)", "content": "<ul><li>MChem</li><li>4 years</li><li>Single Subject</li><li>F101</li></ul>"},
      { "link": "#", "title": "Chemistry (with a year in industry)", "content": "<ul><li>MChem</li><li>4 years</li><li>Single Subject</li><li>F102</li></ul>"},
      { "link": "#", "title": "Chemistry, Biological &amp; Medicinal Chemistry", "content": "<ul><li>BSc</li><li>3 years</li><li>Single Subject</li><li>F152</li></ul>"},
      { "link": "#", "title": "Chemistry, Biological &amp; Medicinal Chemistry", "content": "<ul><li>MChem</li><li>4 years</li><li>Single Subject</li><li>F155</li></ul>"}
    ]
  }
]});
</script>

### Options

#### Atoms

* pages
  * **link**: the URL to link to
  * **title**: the title to appear as the header to the link
  * **content**: (optional) an HTML string to add to the link

* letter: the letter relevant to this section

#### Molecules

* letters: an object with a _letter_ and an array of _pages_

* atoz: an array of _letters_