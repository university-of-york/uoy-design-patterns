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
    this.cols = this.colgroup.children('col');
    this.filterCount = this.countCols(this.cols);
    if (this.colgroup.length === 0 || this.cols.length === 0) return false;
    this.header = options.header || this.Defaults.header;
    if (!this.table.attr('id')) {
      var id = setTimeout(function(){}, 0);
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
    this.form = this.createForm();
    // Add above table
    this.table.before(this.form);

  };

  FILTERABLE.prototype.Defaults = {
    header: false
  };

  FILTERABLE.prototype.countCols = function ($cols) {
    var filterCount = 0;
    $cols.each(function(i, col) {
      var $col = $(col);
      if (!!$col.attr('data-filter') === true) filterCount++;
    });
    return filterCount;
  };

  FILTERABLE.prototype.createForm = function () {

    var that = this;
    var f = $('<form>').addClass('o-grid').attr({
      'action': '#'+this.id,
      'method': 'get'
    }).addClass('c-form c-form--bordered');
    var fs = $('<fieldset>').addClass('o-grid__row');
    var colName = 'full';
    switch (this.filterCount) {
      case 2:
        colName = 'half';
        break;
      case 3:
      case 5: // A bit weird but best to have 3 + 2
      case 6:
        colName = 'third';
        break;
      case 4:
      case 7: // A bit weird but best to have 4 + 3
      case 8:
        colName = 'quarter';
        break;
    }
    var colNumber = 0;
    // Makes comma separated value from index for spanCount numbers
    // e.g. makeForCols(3, 5) returns "3,4,5,6,7"
    // Used to make a "data-for" attribute
    var makeForCols = function(index, spanCount) {
      var ii = index+1;
      var r = index+'';
      var top = index+spanCount;
      for (;ii < top; ii++) {
        r+= ','+ii;
      }
      return r;
    };
    $.each(this.cols, function(i, col) {
      var $col = $(col);
      var colspan = parseInt($col.attr('span')) || 1;
      var thisColNumber = colNumber;
      colNumber+= colspan;
      var filterType = $col.attr('data-filter');
      if (!filterType || filterType == 'false') return;
      var gb = $('<div>').addClass('o-grid__box o-grid__box--'+colName);
      var forCols = makeForCols(i, colspan);
      var fe = $('<div>').addClass('c-form__element').attr('data-scope', forCols);
      var inputName = that.id+'-filter-'+i;
      var headingText = $col.attr('data-label') || that.headings[thisColNumber].textContent || that.headings[thisColNumber].innerText;
      var fl = $('<label>').addClass('c-form__label')
                           .attr('for', inputName)
                           .text(headingText);
      var fi;
      switch(filterType) {
        case 'range':
          fi = [];
          fe.addClass('c-form__element--range')
          fi.push($('<input>').addClass('c-form__input c-form__input--number')
                              .attr({'type': 'number', 'id': inputName+'-from', 'name': inputName+'-from' })
                              .on('keyup', { that: that }, that.checkTable));
          fi.push($('<span>').addClass('c-form__link-text').text('to'));
          fi.push($('<input>').addClass('c-form__input c-form__input--number')
                              .attr({'type': 'number', 'id': inputName+'-to', 'name': inputName+'-to' })
                              .on('keyup', { that: that }, that.checkTable));
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
      gb.append(fe);
      fs.append(gb);
    });
    f.append(fs);

    return f;

  };

  // Get all the options from column 'j'
  FILTERABLE.prototype.getOptions = function (j) {
    var values = [];
    var options = [];
    options.push($('<option>').attr('value', 'false').text('-'));
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
    // Ignore TAB and ENTER
    if (e.keyCode == 9 || e.keyCode == 13) return;
    var that = e.data.that;
    // Check scope of each element
    var formValues = [];
    that.form.find('.c-form__element').each(function(i, v) {
      var $v = $(v);
      var scopes = $v.attr('data-scope').split(',');
      var value;
      // Get the values for range, selects and text inputs
      if ($v.hasClass('c-form__element--range')) {
        var inputs = $v.find('input');
        value = {
          min: parseInt(inputs[0].value),
          max: parseInt(inputs[1].value)
        };
        if (isNaN(value.min)) value.min = 0;
        if (isNaN(value.max)) value.max = Infinity;
      } else if ($v.hasClass('c-form__element--select')) {
        var select = $v.find('select');
        value = select[0].value;
        if (that.caseSensitive !== true) value = value.toLowerCase();
        if (value == 'false') value = false;
      } else {
        value = $v.find('input')[0].value;
        if (that.caseSensitive !== true) value = value.toLowerCase();
      }
      $.each(scopes, function(j,w) {
        formValues[w] = value;
      });
    });
    that.searchRows.each(function(k, row) {
      // if (k > 1) return;
      var hideIt = false;
      var $row = $(row);
      $row.children().each(function(l, cell) {
        // If it's already failed, skip it
        if (hideIt === true) return;
        // Only test cells with form values
        if (!formValues[l]) return;
        var $cell = $(cell);
        var cellText = $cell.text();
        //if (l === 1) console.log(cellText, cellText.indexOf(formValues[l]));
        if (that.caseSensitive !== true) cellText = cellText.toLowerCase();
        // Ranges
        if (formValues[l].min || formValues[l].max) {
          if (formValues[l].min == '' && formValues[l].max == '') return;
          if (formValues[l].min >= formValues[l].max) {
            // Show range error
            console.log('That\'s not a valid range!');
            return;
          }
          cellText = parseInt(cellText.replace(/[^0-9]/g, ''));
          if ((cellText < formValues[l].min) || (cellText > formValues[l].max)) {
            hideIt = true;
          }
        } else {
          var searchIndex = cellText.indexOf(formValues[l]);
          if (searchIndex === -1) hideIt = true;
        }
        //console.log('Row '+k+', cell '+l+', formValues[l] '+formValues[l]+', cellText: '+cellText+', hideIt: '+hideIt);
      });
      $row.toggleClass('is-hidden', hideIt);
    });
  };

  return FILTERABLE;

});
