/*

---
title: Modal Link Module
name: modal-link-module
category: Javascript
---

 */

import $ from 'jquery';
import MODAL from 'modal';

export default function ModalLink() {

  // This doesn't work in IE for relative links - removing for now.
  var validateURL = function (url) {
    var p = document.createElement('a');
    try {
      p.href = url;
      return !!p.hostname;
    } catch (e) {
      return false;
    }
  };

  var MODALLINK = function (options) {

    $a = options.link;

    var aHref = $a.attr('href');
    var modalContent = false;
    var modalTitle = $a.attr('data-title') || false;
    var modalCaption = $a.attr('data-caption') || false;
    var modalType = $a.hasClass('js-modal--frameless') ? 'frameless' : 'framed';
    var prevItem = false ;
    var nextItem = false ;
    if ($a.hasClass('js-modal--gallery')) {
      var galleryItems = $('.js-modal--gallery');
      var thisIndex = galleryItems.index($a);
      prevItem = (thisIndex > 0) ? galleryItems.get(thisIndex-1) : false ;
      nextItem = (thisIndex < galleryItems.length - 1) ? galleryItems.get(thisIndex+1) : false ;
    }

    if ($a.attr('data-content')) {
      // Content from attribute
      modalContent = $a.attr('data-content');
    } else if (aHref.indexOf('#') === 0) {
      // Content from fragment
      modalContent = $(aHref).html();
    // } else if (validateURL(aHref) === true) {
    } else {
      // Content from URL (image)
      modalContent = '<img class="c-modal__image" src="'+$a.prop('href')+'">';
    }

    var m = new MODAL({
      content: modalContent,
      title: modalTitle,
      caption: modalCaption,
      type: modalType,
      prev: prevItem,
      next: nextItem
    });

    $a.on('click', function (e) {
      e.preventDefault();
      m.open();
    });

    console.info(this);

  };

  return MODALLINK;
}
