/*

---
title: Clearing table module
name: clearing-table-module
category: Javascript
---

 */
define(['jquery', 'app/google-docs', 'app/accordion'], function ($, GOOGLEDOC, ACCORDION) {

  var CLEARINGTABLE = function(options) {

    if (!options.container) return false;

    var type = options.type || 'Both';
    var container = options.container;

    var docID = '1wbTOk0YHux4LxJZxOlE_nhmGBdi7mT9NL-WCwB7-gT8';

    var t = new GOOGLEDOC({
      id: docID
    });

    $(window).on('data:loaded', function(e, id, data) {
      if (id === docID) {
        console.log(data);
        // Sort by department name
        data.sort(function(a, b) {
            return (a.Subject === b.Subject) ? a['Title of course'] > b['Title of course'] : a.Subject > b.Subject;
        });
        var currentSubject = false;
        var currentAccordion = false;
        for (var i = 0; i < data.length; i++) {
          if (type === 'Both' || data[i][type] === 'Yes') {
            // Set up new current accordion
            if (data[i].Subject !== currentSubject) {
              var a = new ACCORDION({
                container: currentAccordion
              });
              var accordion = $('<div>').addClass('c-accordion__item js-accordion__item').appendTo(container);
              var accordionTitle = $('<a>').addClass('c-accordion__title').attr('href', '#').html(data[i].Subject+'<i class="c-accordion__icon c-icon c-icon--plus c-icon--after"></i>').appendTo(accordion);
              currentAccordion = accordion;
              currentSubject = data[i].Subject;
            }
            var output = '';
            output+= '    <h4>'+data[i]['Title of course']+'</h4>\n';
            output+= '    <p>Grade required: '+data[i]['Grade required']+'</p>\n';
            output+= '    <p>UCAS code: '+data[i]['UCAS code']+'</p>\n';
            output+= '    <p>Phone number(s): '+data[i]['Phone number(s)']+'</p>\n';
            output+= '    <p>Qualification earned: '+data[i]['Qualification earned']+'</p>\n';
            output+= '    <p>Course length: '+data[i]['Course length']+'</p>\n';
            output+= '    <p>Type of course: '+data[i]['Type of course']+'</p>\n';
            if (data[i]['Bullet 1'] || data[i]['Bullet 2'] || data[i]['Bullet 3']) output+= '    <ul>';
            if (data[i]['Bullet 1']) output+= '      <li>'+data[i]['Bullet 1']+'</li>\n';
            if (data[i]['Bullet 2']) output+= '      <li>'+data[i]['Bullet 2']+'</li>\n';
            if (data[i]['Bullet 3']) output+= '      <li>'+data[i]['Bullet 3']+'</li>\n';
            if (data[i]['Bullet 1'] || data[i]['Bullet 2'] || data[i]['Bullet 3']) output+= '    </ul>';
            output+= '  </div>\n';
            var accordionContent = $('<div>').addClass('c-accordion__content').html(output).appendTo(currentAccordion);
          }
          // Set up accordion if next one is different or if last one
          if (i === data.length - 1) {
            new ACCORDION({
              container: currentAccordion
            });
          }
        }
      }

    });

  };

  return CLEARINGTABLE;

});
