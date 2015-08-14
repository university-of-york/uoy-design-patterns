/*

---
title: Searchable Table Module
name: searchable-table-module
category: Javascript
---

 */

define(['jquery', 'app/utils'], function ($, UTILS) {

  var SEARCHABLE = function (options) {
    if (!options.table) return false;
    this.table = options.table;
    this.header = options.header || this.Defaults.header;
    this.cols = options.cols || this.Defaults.cols;
    this.caseSensitive = options.caseSensitive || this.Defaults.caseSensitive;
    if (!this.table.attr('id')) {
      var id = setTimeout(null, 0);
      this.table.attr('id', 'searchable-table-'+id);
    }
    this.id = this.table.attr('id');

    var rows = this.table.children('tbody').children('tr');

    // Load searchable items into memory
    this.searchRows = rows;

    if (this.header === true) {
      this.searchRows = rows.not('tr:first-of-type');
    }

    // Create table search form
    var form = this.createForm();
    // Add above table
    this.table.before(form);

  };

  SEARCHABLE.prototype.Defaults = {
    header: false,
    cols: false,
    caseSensitive: false
  };

  SEARCHABLE.prototype.createForm = function () {

    var f = $('<form>').attr({
      'action': '#'+this.id,
      'method': 'get'
    }).addClass('c-form c-form--bordered');
    var fs = $('<fieldset>')
    var fe = $('<div>').addClass('c-form__element');
    var inputName = this.id+'-input';
    var fl = $('<label>').addClass('c-form__label')
                         .attr('for', inputName)
                         .text('Search this table');
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
    that.searchRows.each(function(i, row) {
      var hideIt = true;
      var $row = $(row)
      $row.children().each(function(j, cell) {
        if (hideIt === false) return;
        if (that.cols !== false) {
          // Remove cells that match column numbers
          // colNo needs to be a string
          var colNo = (j+1)+'';
          if ($.inArray(colNo, that.cols) > -1) {
            return;
          }
        }
        var $cell = $(cell);
        var cellText = $cell.text();
        if (that.caseSensitive !== true) cellText = cellText.toLowerCase();
        var searchIndex = cellText.indexOf(inputContent);
        if (searchIndex > -1 || inputContent === '') {
          hideIt = false;
        }
      });
      $row.toggleClass('is-hidden', hideIt);
    });
  };

  return SEARCHABLE;

});
