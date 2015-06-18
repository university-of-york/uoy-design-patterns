/*

---
title: Google Docs Module
name: google-docs-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  var makeURL = function(id) {
    return 'https://spreadsheets.google.com/feeds/cells/'+id+'/od6/public/full?alt=json';
  };


  // Define your 'class'
  // Better to pass an options object instead of multiple arguments
  var GOOGLEDOC = function(options) {
    // Get the options or their defaults
    if (!options.id) return false;

    var id = options.id;
    var data = [];

    // Create the data array
    var docURL = makeURL(id);
    $.getJSON(docURL, function(r) {
      for (var i = 0; i < r.feed.entry.length; i++) {
        var cell = r.feed.entry[i].gs$cell;
        var row = parseInt(cell.row) - 1;
        var col = parseInt(cell.col) - 1;
        // Get column name from first results of feed
        var colName = r.feed.entry[col].gs$cell.inputValue;
        // console.log(row, col, colName);
        if (!data[row]) data[row] = [];
        data[row][colName] = cell.inputValue;
        if (i == r.feed.entry.length - 1) {
          var headers = data.shift();
          $(window).trigger('data:loaded', [id, data]);
        }
      }
    });

    // Return true or false (or something else)
  };

  return GOOGLEDOC;

});
