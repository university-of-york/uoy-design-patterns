/*

---
title: Searchables Module
name: searchablse-module
category: Javascript
---

 */

define(['jquery', 'app/utils'], function ($, UTILS) {

  var SEARCHABLE = function (options) {
    if (!options.container) return false;
    this.container = options.container;
    this.header = options.header || this.Defaults.header;
    this.label = options.label || this.Defaults.label;
    this.cols = options.cols;
    this.type = this.container.prop('nodeName');
    console.log(this.type);

    this.caseSensitive = options.caseSensitive || this.Defaults.caseSensitive;
    if (!this.container.attr('id')) {
      var id = setTimeout(null, 0);
      this.container.attr('id', 'searchable-table-'+id);
    }
    this.id = this.container.attr('id');

    // console.log(this.container.height(), $(window).height());

    var rows = this.type === 'TABLE' ? this.container.children('tbody').children('tr') : this.container.children('li');

    // Load searchable items into memory
    this.searchRows = rows;

    if (this.header === true && this.type === 'TABLE') {
      this.searchRows = rows.not('tr:first-of-type');
    }

    // Create search form
    var form = this.createForm();
    // Add above container
    this.container.before(form);
    // Fire event (for e.g. resizing accordion)
    $(window).trigger('content.updated');

    console.info(this);

  };

  SEARCHABLE.prototype.Defaults = {
    header: false,
    cols: false,
    caseSensitive: false,
    label: 'Search'
  };

  SEARCHABLE.prototype.createForm = function () {

    var f = $('<form>').attr({
      'action': '#'+this.id,
      'method': 'get'
    }).addClass('c-form c-form--bordered').on('submit', function(e) {
      e.preventDefault();
    });
    var fs = $('<fieldset>');
    var fe = $('<div>').addClass('c-form__element');
    var inputName = this.id+'-input';
    var fl = $('<label>').addClass('c-form__label')
                         .attr('for', inputName)
                         .text(this.label);
    var fi = $('<input>').addClass('c-form__input c-form__input--text')
                         .attr({'type': 'text', 'id': inputName, 'name': inputName })
                         .on('keyup', { that: this }, this.checkTable);

    // Join it all together
    fe.append(fl, fi);
    fs.append(fe);
    f.append(fs);

    return f;

  };

  SEARCHABLE.prototype.checkTable = function (e) {
    var that = e.data.that;
    var inputContent = $(this).val();
    if (that.caseSensitive !== true) inputContent = inputContent.toLowerCase();
    var testText = function($cell) {
      var text = $cell.text();
      if (that.caseSensitive !== true) text = text.toLowerCase();
      var searchIndex = text.indexOf(inputContent);
      console.log(text, inputContent, searchIndex);
      return (searchIndex === -1 && inputContent !== '');
    };
    that.searchRows.each(function(i, row) {
      var hideIt = true;
      var $row = $(row);
      var $text;
      if (that.type === 'TABLE') {
        $row.children().each(function(j, cell) {
          if (hideIt === false) return;
          if (that.cols !== false) {
            // colNo needs to be a string
            var colNo = (j+1)+'';
            // Only include cells that match column numbers in include...
            if (that.cols.include && $.inArray(colNo, that.cols.include) === -1) {
              return;
            }
            // ...or don't match column numbers in exclude
            if (that.cols.exclude && $.inArray(colNo, that.cols.exclude) > -1) {
              return;
            }
          }
          var $cell = $(cell);
          hideIt = testText($cell);
        });
      } else {
        hideIt = testText($row);
        console.log(hideIt);
      }
      $row.toggleClass('is-hidden', hideIt);
    });
  };

  return SEARCHABLE;

});
