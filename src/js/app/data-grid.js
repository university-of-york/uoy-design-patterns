/*

---
title: Datagrid module
name: data-grid-module
category: Javascript
---

 */

define(['jquery', 'app/utils', 'app/google-sheets'],
    function ($, UTILS, DATAGSHEETS) {

        var DATAGRID = (function() {

            // Enums
            var DATASOURCE = {
                sheets: 'sheets',
                firebase: 'firebase'
            };
            var LAYOUTTYPE = {
                table: 'table',
                flex: 'flex',
                list: 'list'
            };


            // Private variables
            var _defaultOptions = {
                container: false,
                datasource: DATASOURCE.sheets,
                layout: LAYOUTTYPE.table,
                includeHeaderRow: true,
                cssClassList: '',
                sheetId: '',
                sheetRange: '',
                firebaseConfig: ''
            };

            // Private functions
            var makeTableRow = function(table, rowData, useKeys, isHeaderRow) {
                var row,
                    thead,
                    cell;

                if(isHeaderRow) {
                    thead = table.createTHead();
                    row = thead.insertRow(0);
                } else {
                    row = table.insertRow(-1);
                }

                Object.keys(rowData).forEach(function(key) {
                    var newText  = document.createTextNode(useKeys ? key : rowData[key]);

                    if(isHeaderRow) {
                        cell = document.createElement("TH");
                        row.appendChild(cell);
                    } else {
                        cell = row.insertCell(-1);
                    }

                    cell.appendChild(newText);
                });

                return row;
            };

            var buildTableHtml = function(data, includeHeaderRow) {
                var table = document.createElement('table');

                // Sheets uses a 'values' property, check for that here
                if(data.values && data.values.length > 0) {
                    for (var i = 0; i < data.values.length; i++) {
                        makeTableRow(
                            table,
                            data.values[i],
                            false,
                            (i === 0) ? includeHeaderRow : false);
                    }

                    return table;
                }

                // Firebase uses an object, so let's build it a different way
                // first, make a header row
                makeTableRow(table, rows[0], true);
                // now, process the rest of the rows
                rows.forEach(function(rowData) {
                    makeTableRow(table, rowData);
                });

                return table;
            };

            var buildFlexHtml = function(data) {
                var html = '';

                return html;
            };

            var buildListHtml = function(data) {
                var list = document.createElement('ul');

                return list;
            };

            var fetchDataFromSheets = function(sheetId, sheetRange) {
                DATAGSHEETS.readData(sheetId, sheetRange);
            };

            var fetchDataFromFirebase = function(configStr) {

            };

            var loadData = function(datasource, options) {
                switch(datasource) {
                    case DATASOURCE.sheets:
                        fetchDataFromSheets(options.sheetId, options.sheetRange);
                        break;
                    case DATASOURCE.firebase:
                        fetchDataFromFirebase(options.firebaseConfig);
                        break;
                    default:
                        break;
                }
            };

            var buildOutputHtml = function(data, displayType, includeHeaderRow) {
                var outputHtml = '';

                switch(displayType) {
                    case LAYOUTTYPE.table:
                        // do something
                        outputHtml = buildTableHtml(data, includeHeaderRow || false);
                        break;
                    case LAYOUTTYPE.flex:
                        outputHtml = buildFlexHtml(data);
                        break;
                    case LAYOUTTYPE.list:
                        outputHtml = buildListHtml(data);
                        break;
                    default:
                        break;
                }

                return outputHtml;
            };

            // Getters / Setters
            var ENUM_DATASOURCE = function() {
                return DATASOURCE;
            };

            var ENUM_LAYOUTTYPE = function() {
                return LAYOUTTYPE;
            };

            // Public functions
            var init = function(options, dataLoadedEvent) {
                var data,
                    outputHtml = '';

                if (!options.container) return false;

                // merge passed in options with defaults
                options = $.extend({}, _defaultOptions, options);

                // load up the particular data source
                loadData(options.datasource, options);

                // build the HTML once the data is available from the source
                $window.on(dataLoadedEvent, function(e, data){
                    // build up the html ready to output
                    outputHtml = buildOutputHtml(data, options.layout, options.includeHeaderRow);

                    // add in the css classes passed in, if any
                    if(options.cssClassList !== 'undefined') {
                        outputHtml.className += ' ' + options.cssClassList;
                    }

                    // display the data after clearing the container
                    options.container.empty();
                    options.container.append(outputHtml);
                });
            };

            return {
                init: init,
                ENUM_DATASOURCE: ENUM_DATASOURCE,
                ENUM_LAYOUTTYPE: ENUM_LAYOUTTYPE
            };
        }());

        return DATAGRID;
});