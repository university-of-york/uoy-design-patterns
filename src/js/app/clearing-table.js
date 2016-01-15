/*

---
title: Clearing table module
name: clearing-table-module
category: Javascript
---

 */
define(['jquery', 'app/google-docs', 'app/accordion', 'app/utils'], function ($, GOOGLEDOC, ACCORDION, UTILS) {

  var $window = $(window);

  var CLEARINGTABLE = function (options) {

    if (!options.container) return false;

    var type = options.type || 'Both';
    var container = options.container;

    container.addClass('c-accordion');

    var docID = '1u6AjJqtDAnOH8_rEKDb0lBjlp0ScCqzg0Q_q0Xlh';
    var backupDoc = 'http://www.york.ac.uk/about/maps/campus/data/clearing.json';

    var t = new GOOGLEDOC({
      id: docID,
      backup: backupDoc
    });

    $window.on('data.loaded', function (e, id, data) {
      if (id === docID) {
        // Sort by department name
        data.sort(function (a, b) {
          if (a.Subject === b.Subject) {
            return (a['Title of course'] > b['Title of course']) ? 1 : -1 ;
          }
          return (a.Subject > b.Subject) ? 1 : -1 ;
        });
        var currentSubject = false;
        var currentAccordion = false;
        var trimAndAdd = function (numbers) {
          var output = '';
          $.each(numbers, function (i, v) {
            var vt = v.trim();
            if (i == numbers.length - 1 && i !== 0) output+= ' or ';
            output+= '<a class="c-clearing-table__phone-number" href="tel:'+vt+'">'+vt+'</a>';
            if (i < numbers.length - 2) output+= ', ';
          });
          return output;
        };
        for (var i = 0; i < data.length; i++) {
          if (type === 'Both' || data[i][type] === 'y') {
            // Set up new current accordion
            if (data[i].Subject !== currentSubject) {
              var a = new ACCORDION({
                container: currentAccordion
              });
              if (currentAccordion !== false) {
                UTILS.fontsActive(a.setAccordionHeight, a);
              }
              var accordion = $('<div>').addClass('c-accordion__item js-accordion__item').appendTo(container);
              var accordionTitle = $('<a>').addClass('c-accordion__title').attr('href', '#').html(data[i].Subject+'<i class="c-accordion__icon c-icon c-icon--plus c-icon--after"></i>').appendTo(accordion);
              var accordionContent = $('<div>').addClass('c-accordion__content').appendTo(accordion);
              currentAccordion = accordion;
              currentAccordionContent = accordionContent;
              currentSubject = data[i].Subject;
            }
            var isAdjustmentOnly = false;
            if (data[i]['Adjustment only'] === 'y') {
              isAdjustmentOnly = true;
            } else if (data[i]['Adjustment only'] === 'h' && (type === 'Home/EU' || type === 'Both')) {
              isAdjustmentOnly = true;
            } else if (data[i]['Adjustment only'] === 'i' && (type === 'International' || type === 'Both')) {
              isAdjustmentOnly = true;
            }
            var output = '';
            if (data[i]['Link to course page']) {
              output+= '    <h4 class="c-clearing-table__title"><a href="'+data[i]['Link to course page']+'">'+data[i]['Qualification earned']+' '+data[i]['Title of course']+'</a></h4>\n';
            } else {
              output+= '    <h4 class="c-clearing-table__title">'+data[i]['Qualification earned']+' '+data[i]['Title of course']+'</h4>\n';
            }
            if (isAdjustmentOnly === true) output+= '    <p class="c-clearing-table__adjustment-only">Adjustment places only</p>\n';
            if (data[i]['Entry requirements']) output+= '    <div class="c-clearing-table__requirements"><small>Entry requirements</small> '+data[i]['Entry requirements']+' <small>or equivalent tariff points</small></div>\n';
            if (data[i]['Bullet 1'] || data[i]['Bullet 2'] || data[i]['Bullet 3']) {
              output+= '    <p class="c-clearing-table__additional-requirements">Including:</p>';
              output+= '    <ul class="c-clearing-table__list">';
            }
            if (data[i]['Bullet 1']) output+= '      <li class="c-clearing-table__list-item">'+data[i]['Bullet 1']+'</li>\n';
            if (data[i]['Bullet 2']) output+= '      <li class="c-clearing-table__list-item">'+data[i]['Bullet 2']+'</li>\n';
            if (data[i]['Bullet 3']) output+= '      <li class="c-clearing-table__list-item">'+data[i]['Bullet 3']+'</li>\n';
            if (data[i]['Bullet 1'] || data[i]['Bullet 2'] || data[i]['Bullet 3']) output+= '    </ul>';
            if (data[i]['UCAS code']) output+= '    <p class="c-clearing-table__ucas-code">UCAS code: '+data[i]['UCAS code']+'</p>\n';
            if (data[i]['Course length']) output+= '    <p class="c-clearing-table__course-length">Course length: '+data[i]['Course length']+'</p>\n';
            if (data[i]['Phone number(s)']) {
              // See if it's more than one number
              var numbers = data[i]['Phone number(s)'].split(',');
              output+= '    <p class="c-clearing-table__phone-numbers">To apply for this course, please call:<br>';
              output+= trimAndAdd(numbers);
              output+= '</p>';
            }
            var thisContent = $('<div>').addClass('c-clearing-table').html(output).appendTo(currentAccordionContent);
          }
          // Set up accordion if next one is different or if last one
          if (i === data.length - 1) {
            var ac = new ACCORDION({
              container: currentAccordion
            });
            UTILS.fontsActive(ac.setAccordionHeight, ac);
          }
        }
      }

    });

    console.info(this);

  };

  return CLEARINGTABLE;

});
