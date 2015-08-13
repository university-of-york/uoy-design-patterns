/*

---
title: Google Docs Module
name: google-docs-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  var makeURL = function (id) {
    var api_key = 'AIzaSyCDjI0iMdVB66iHUQVqWC_F9CbvDeaOm5Y';
    return 'https://www.googleapis.com/fusiontables/v2/query?sql=SELECT * FROM '+id+'&key='+api_key+'&callback=?';
  };

  // Define your 'class'
  var GOOGLEDOC = function (options) {

    if (!options.id) return false;

    this.id = options.id;
    this.backup = options.backup || false;

    // 'this' placeholder
    var that = this;
    var docURL = makeURL(this.id);

    $.getJSON(docURL, function(data) {
      if (data.error) {
        console.warn(data.error.message);
        return that.runBackup();
      }
      that.processData(data);
    }).fail(function() {
      that.runBackup();
   });

  };

  GOOGLEDOC.prototype.runBackup = function() {
    console.log('Failed! Using backup file');
    // 'this' placeholder
    var that = this;
    if (this.backup) {
      $.getJSON(this.backup, function(backupData) {
        that.processData(backupData);
      }).fail(function() {
        console.log('Backup failed. Uh-oh.');
      });
    }

  };

  // Create the data array from JSON source
  GOOGLEDOC.prototype.processData = function (r) {
    var data = [];
    for (var i = 0; i < r.rows.length; i++) {
      if (!data[i]) data[i] = {};
      for (var j = 0; j < r.rows[i].length; j++) {
        var colName = r.columns[j];
        data[i][colName] = r.rows[i][j];
      }
      if (i == r.rows.length - 1) {
        $(window).trigger('data:loaded', [this.id, data]);
      }
    }
  };

  return GOOGLEDOC;

});
