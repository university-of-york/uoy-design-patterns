/*

---
title: Filterable Table Module
name: filterable-table-module
category: Javascript
---

 */

define(['jquery', 'app/utils'], function ($, UTILS) {

  var FILTERABLE = function (options) {
    if (!options.table) return false;
    this.table = options.table;
    this.colgroup = this.table.children('colgroup');
    this.cols = this.expandCols(this.colgroup.children('col'));
    if (this.colgroup.length === 0 || this.cols.length === 0) return false;
    this.header = options.header || this.Defaults.header;
    if (!this.table.attr('id')) {
      var id = setTimeout(null, 0);
      this.table.attr('id', 'filterable-table-'+id);
    }
    this.id = this.table.attr('id');

    var rows = this.table.children('tbody').children('tr');

    // Load filterable items and headings into memory
    if (this.header === true) {
      this.searchRows = rows.not('tr:first-of-type');
      this.headings = this.table.children('tbody').children('tr:first-of-type').children();
    } else {
      this.searchRows = rows;
      this.headings = this.table.children('thead').children('tr').children('th');
    }

    // Create table search form
    var form = this.createForm();
    // Add above table
    this.table.before(form);

  };

  FILTERABLE.prototype.Defaults = {
    header: false
  };

  // expand col elements with colspans to make an array of columns
  FILTERABLE.prototype.expandCols = function ($cols) {
    var colArray = [];
    $cols.each(function(i, v) {
      var colspan = parseInt($(v).attr('span') || 1);
      if (colspan === 1) {
        colArray.push(v);
      } else {
        var p = 0;
        v.removeAttribute('span');
        for (;p < colspan; p++) {
          colArray.push(v);
        }
      }
    });
    return colArray;
  };

  FILTERABLE.prototype.createForm = function () {

    var that = this;
    var f = $('<form>').attr({
      'action': '#'+this.id,
      'method': 'get'
    }).addClass('c-form c-form--bordered');
    var fs = $('<fieldset>');
    $.each(this.cols, function(i, col) {
      var filterType = $(col).attr('data-filter');
      if (!filterType || filterType == 'false') return;
      var fe = $('<div>').addClass('c-form__element');
      var inputName = that.id+'-col-'+i;
      var headingText = that.headings[i].textContent || that.headings[i].innerText;
      var fl = $('<label>').addClass('c-form__label')
                           .attr('for', inputName)
                           .text(headingText);
      var fi;
      switch(filterType) {
        case 'range':
          fi = [];

          break;
        case 'option':
          fe.addClass('c-form__element--select');
          fi = $('<select>').addClass('c-form__input c-form__input--select')
                            .attr({'id': inputName, 'name': inputName })
                            .on('change', { that: that }, that.checkTable);
          var options = that.getOptions(i);
          fi.append(options);

          break;
        case 'text':
          fi = $('<input>').addClass('c-form__input c-form__input--text')
                           .attr({'type': 'text', 'id': inputName, 'name': inputName })
                           .on('keyup', { that: that }, that.checkTable);
          break;
      }

      // // Join it all together
      fe.append(fl, fi);
      fs.append(fe);
    });
    f.append(fs);

    return f;

  };

  // Get all the options from column 'j'
  FILTERABLE.prototype.getOptions = function (j) {
    var values = [];
    var options = [];
    this.searchRows.each(function(i, row) {
      var thisCell = $(row).children('td').get(j);
      var cellContent = thisCell.textContent || thisCell.innerText;
      if ($.inArray(cellContent, values) === -1) {
        values.push(cellContent);
        options.push($('<option>').attr('value', cellContent).text(cellContent));
      }
    });
    return options;
  };

  FILTERABLE.prototype.checkTable = function (e) {
    var that = e.data.that;
    console.log('Checking table');
    // Check all values
    // var inputContent = $(this).val();
    // if (that.caseSensitive !== true) inputContent = inputContent.toLowerCase();
    // that.searchRows.each(function(i, row) {
    //   var hideIt = true;
    //   var $row = $(row);
    //   $row.children().each(function(j, cell) {
    //     if (hideIt === false) return;
    //     var $cell = $(cell);
    //     var cellText = $cell.text();
    //     if (that.caseSensitive !== true) cellText = cellText.toLowerCase();
    //     var searchIndex = cellText.indexOf(inputContent);
    //     if (searchIndex > -1 || inputContent === '') {
    //       hideIt = false;
    //     }
    //   });
    //   $row.toggleClass('is-hidden', hideIt);
    // });
  };

  return FILTERABLE;

});
