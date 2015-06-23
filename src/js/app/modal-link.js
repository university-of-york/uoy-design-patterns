/*

---
title: Modal Link Module
name: modal-link-module
category: Javascript
---

 */
define(['jquery', 'app/modal'], function ($, MODAL) {

  var validateURL = function(url) {
    var p = document.createElement('a');
    try {
      p.href = url;
      return !!p.hostname;
    } catch (e) {
      return false;
    }
  };

  var MODALLINK = function(options) {

    $a = options.link;

    var aHref = $a.attr('href');
    var modalContent = false;
    var modalTitle = $a.attr('data-title') || false;
    var modalType = $a.hasClass('js-modal--frameless') ? 'frameless' : 'framed';

    if ($a.attr('data-content')) {
      // Content from attribute
      modalContent = $a.attr('data-content');
    } else if (aHref.indexOf('#') === 0) {
      // COntent from fragment
      modalContent = $(aHref).html();
    } else if (validateURL(aHref) === true) {
      // Content from URL (image)
      modalContent = '<img src="'+$a.prop('href')+'">';
    }

    var m = new MODAL({
      content: modalContent,
      title: modalTitle,
      type: modalType
    });

    // console.log(m);

    $a.on('click', function(e) {
      e.preventDefault();
      m.open();
    });

  };

  return MODALLINK;

});
