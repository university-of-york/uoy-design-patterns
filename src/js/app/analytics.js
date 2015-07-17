/*

---

title: Analytics
name: analytics-module
category: modules

---

*/

define(['jquery', 'app/utils'], function ($, UTILS) {

  var isDev = (document.location.hostname === 'localhost');
  var analyticsOptions = isDev ? { 'cookieDomain': 'none' } : 'auto' ;
  var trackerNumber = isDev ? 'UA-1621853-16' : 'UA-1621853-1';

  console.log('isDev is '+isDev);

  // Set up tracker
  ga('create', trackerNumber, analyticsOptions);

  // Send geenric pageview
  ga('send', 'pageview');


  // Track external links, email links and file downloads as events in Google Analytics
  ga_track = function (target){

    UTILS.eachIfExists(target, function (i, t) {

      var $t = $(t);

      $t.click(function (event){

        var href;
        var hrefTarget = $t.prop("target");
        var category;
        var action;
        var label;
        var targetImage = $t.find("img");
        var newTab = false;

        href = $t.attr('href');

        if (href.match(("(.pdf$)|(.xlsx?$)|(.docx?$)"))) {      //if the link ends with .pdf, .xls, .xlsx, .doc, .docx then it's a download
          category = "Download";
          action = href.match(/([^/]+)$/)[1];
        } else if (href.match(("^https?://"))) {   //if the link starts with http:// or https:// then it's an outbound link
          category = "Outbound Link";
          action = href;
        } else if (href.substring(0,7) === "mailto:" || href.substring(0,4) === "tel:") {    //if the link starts with mailto: or tel: then it's a contact link
          category = "Contact";
          action = href;
        }

        if (targetImage.length > 0){    //if this is an image link
          if (targetImage.prop("alt")){
            label = targetImage.prop('alt');
          } else {
            label = "image";
          }
        } else {
          label = $t.text();
        }

        ga('send', 'event', category, action, label);

        return true;

        // if (event.metaKey || event.ctrlKey || hrefTarget == "_blank"){
        //   newTab = true;
        // }

        // if (newTab === false && targetImage.length === 0){
        //   event.preventDefault();
        //   setTimeout('location.href = "'+href+'"', 200); //delay is set before redirection so google gets a chance to send tracking gif
        // }

      });
    });
  };

  ga_track("a[href^='mailto']");
  ga_track("a[href^='tel']");
  ga_track("a[href$='.pdf']");
  ga_track("a[href$='.xls']");
  ga_track("a[href$='.xlsx']");
  ga_track("a[href$='.doc']");
  ga_track("a[href$='.docx']");

  //outbound links that aren't pdf, xls, xlsx, doc, or docx
  ga_track("a[href^='http://']:not([href$='.pdf'],[href$='.xls'],[href$='.xlsx'],[href$='.jpg'],[href*='york.ac.uk'])");
  ga_track("a[href^='https://']:not([href$='.pdf'],[href$='.xls'],[href$='.xlsx'],[href$='.jpg'],[href*='york.ac.uk'])");

});