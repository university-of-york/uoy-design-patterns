# Release notes

v1.6.0 (next minor release)

v1.5.2 (next patch release)

v1.5.1 (released 12 Jun 2017)
* [Added new scope for the Conversation embeds](../../tree/scope/conversation)
* [Moved Formstack CSS into standalone](../../tree/update/formstack)

v1.5.0 (released 5 Jun 2017)
* [Changes to sticky nav functionality](../../tree/component/sticky-nav)
* [Update to Font Awesome 4.7](../../tree/update/font-awesome)
* [Remove text-decoration from abbr](../../tree/fix/abbr)

v1.4.10-0 (released 18 May 2017)
v1.4.9 (released 18 May 2017)
* Updated .htaccess in /fonts to allow localhost domains (added to master)
* [Create a new 'Show more' component](../../tree/component/show-more)

v1.4.8 (released 9 May 2017)
* [Update course search for PGT/PGR](../../tree/module/course-search)

v1.4.7 (released 4 May 2017)
* [Updated links on documentation pages to be relative](../../tree/feature/nav-process)
* Updated opensearch.xml to new marketing-support email address (added to master)
* [Remeasure accordions on image load](../../tree/fix/accordions)

v1.4.6 (released 2 Mar 2017)
* [Fix for banner classname not updating on resize](../../tree/fix/figure)
* [Fix for main wrapper not resizing when empty](../../tree/fix/js-wrapper-height)

v1.4.5 (released 1 Dec 2016)
* [Tidy up Formstack - remove imports, take out separate files](../../tree/fix/formstack)
* [Media body fills available space; media picture shrinks to content size](../../tree/component/key-fact)
* [Form label style updates](../../tree/component/forms)
* White PNG version of logo (added retrospectively)

v1.4.4 (released 21 Nov 2016)
* Include Formstack styles (added to master)
* Modernizr config updated to exclude 'hidden' test (added to master)

v1.4.3 (released 15 Nov 2016)
* Update tinymce stylesheet (added to master)
* [Add opensearch data](../../tree/feature/opensearch)
* [Fix accordion height calculation](../../tree/fix/accordions)
* [Update equal height rows on image load](../../tree/fix/equal-height-rows)
* [Add white version of logo](../../tree/update/logo)
* [Added webkit prefix for transforms (autoprefixer doesn't like PhantomJS)](../../tree/feature/postcss)

v1.4.2 (released 26 Oct 2016)
* [Update nav heights](../../tree/fix/nav-padding)
* [News date font size updated](../../tree/fix/component/news)

v1.4.1 (released 24 Oct 2016)
* [tweaks to main wrapper margin after breadcrumb on small screens, plus adding SVGs to imagemin](../../tree/master)
* [Add markup for interactive icons](../../tree/component/icons)
* [Accessibility functionality for the utility nav](../../tree/component/utility-nav)
* [Use tiny-padding mixin for page title, nav and breadcrumb](../../tree/fix/padding)
* [Add in eventDate as an option in a news excerpt](../../tree/component/news)

v1.4.0 (released 13 Oct 2016)
* [Update to new logo](../../tree/update/logo)
* [Add BackstopJS to release process](../../tree/feature/backstop)
* [Accessibility features for signpost icons](../../tree/component/signpost)

v1.3.15 (released 11 Oct 2016)
* [Wait until image has loaded before measuring its height](../../tree/component/figure)

v1.3.14 (released 6 Oct 2016)
* [Add accessibility features to utility navigation and tweak positioning on small screens](../../tree/component/utility-nav)
* [Add accessibility features to icons](../../tree/component/icons)
* [Standardise content.updated event which resizes accordions when content changes (e.g. with YoTube embed loading)](../../tree/fix/accordions)
* [Update to block link style](../../tree/component/block-link)
* [Stop breaking figures with no content](../../tree/component/figure)

v1.3.13 (released 4 Oct 2016)
* [More figure fun, separated out into different pages, added --full-width modifier and added a 'clickable' type](../../tree/component/figure)
* [Add a custom GTM event when you search a searchable](../../tree/module/searchables)
* [Update the list of icons](../../tree/update/font-awesome)

v1.3.12 (released 14 Sep 2016)
* [Add divided grid rows](../../tree/component/bordered-grid)
* [Make linked news items display:block](../../tree/component/news)
* [Automate releases, add a checksum](../../tree/feature/release-process)
* [Remove bottom margin from videos in figures, added full-width figure examples](../../tree/component/figure)
* [Remove top padding from docs pages](../../tree/fix/docs)
* [Remove bottom margin from last item in main wrapper](../../tree/fix/footer-margin)
* [Use a mixin to reduce left/right padding on tiny screens](../../tree/fix/padding)

v1.3.11 (released 6 Sep 2016)
* [Moved the `bordered` modifier to the `c-page-title__wrapper`](../../tree/component/page-title)
* [Set min-height on wrapper properly and on resize](../../tree/module/wrapper-height)

v1.3.10 (released 18 Aug 2016)
* [Add labels to component library](../../tree/component/label)
* [Allow CORS for fonts from any york.ac.uk subdomain](../../tree/fix/icon-fonts)
* [Add 'No grades' text to clearing table](../../tree/module/clearing-tables)

v1.3.9 (released 17 Aug 2016)
* [Added a `--bordered` modifier to the `page-title` component](../../tree/component/page-title)
* [Updated `alert` component to include a `dismissable` option](../../tree/component/alert)
* [Fixed margin overflow on multi-column list items](../../tree/fix/multi-column)
* Grunt bump now commits and pushes the version tag automatically
* [Fixed tel: links in clearing table](../../tree/module/clearing-tables)

v1.3.8 (released 12 Aug 2016)
* Fixed clearing tables search box so it counts number of _available_ courses not _total_ courses
* [Updated clearing tables tariff point text](../../tree/module/clearing-tables)
* Added message when there are no courses in clearing
* Fixed multi-column lists so LI margin doesn't affect second row

v1.3.7 (released 2 Aug 2016)
* [Keep checkboxes/radios and their labels on the same line](../../tree/component/forms) - this requires new markup for forms
* [Amend utility nav spacing and link appearance](../../tree/component/utility-nav)
* [Update colour on page title when it's not a link](../../tree/fix/page-title)

v1.3.6 (released 21 July 2016)
* [New clearing course lists and departmental lists for Clearing 2016](../../tree/module/clearing-tables)
* [Add a `<wbr>` to email addresses to stop them overflowing their bounding box](../../tree/fix/long-email-addresses)
* Fix broken data-label in searchables
* Added margin-top to .o-wrapper--main (for pages without breadcrumbs)

v1.3.4 (released 8 July 2016)
* [New block link component added](../../tree/component/block-link)

v1.3.3 (released 6 July 2016)
* Axis resizing utility function added
* [Accordions only to update on horizontal resize](../../tree/module/accordion)

v1.3.2 (released 30 June 2016)<br>
v1.3.1 (released 30 June 2016)
* Captions go below image banners on small screens

v1.3.0 (released 17 June 2016)
* Updated `grunt-modernizr`
