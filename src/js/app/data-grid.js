/*

---
title: Datagrid module
name: data-grid-module
category: Javascript
---

 */

define(['jquery', 'app/utils', 'app/data-firebase', 'app/data-google-sheets'],
    function ($, UTILS, DATAFIREBASE, DATAGSHEETS) {

        var DATAGRID = function() {

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
                firebaseConfig: '',
                filter: '',
                eventIdentifier: ''
            };

            // Private functions
            var callHtmlMaker = function(htmlBuildFunction) {

            };

            var makeListItem = function(rowData, useKeys) {
                var listItem = document.createElement('li');

                Object.keys(rowData).forEach(function(key) {
                    listItem.innerHTML += (useKeys ? key : rowData[key]) + ' ';
                });

                return listItem;
            };

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
                    var newText = document.createTextNode(useKeys ? key : rowData[key]);

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
                makeTableRow(table, data[0], true, includeHeaderRow);
                // now, process the rest of the rows
                data.forEach(function(rowData) {
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

                // Sheets uses a 'values' property, check for that here
                if(data.values && data.values.length > 0) {
                    for (var i = 0; i < data.values.length; i++) {
                        list.appendChild(makeListItem(data.values[i], false));
                    }

                    return list;
                }

                // Firebase uses an object, so let's build it a different way
                data.forEach(function(rowData) {
                    list.appendChild(makeListItem(rowData, false));
                });

                return list;
            };

            var loadData = function(datasource, options) {
                var dataLoadedPromise;

                switch(datasource) {
                    case DATASOURCE.sheets:
                        dataLoadedPromise = DATAGSHEETS.readData(options.sheetId, options.sheetRange, null, options.filter, options.eventIdentifier);
                        break;
                    case DATASOURCE.firebase:
                        dataLoadedPromise =DATAFIREBASE.readData('/', options.eventIdentifier, options.firebaseConfig);
                        break;
                    default:
                        break;
                }

                return dataLoadedPromise;
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

            var processData = function(data, options) {
                var outputHtml = '';

                // build up the html ready to output
                outputHtml = buildOutputHtml(data, options.layout, options.includeHeaderRow);

                // add in the css classes passed in, if any
                outputHtml.className += ' ' + options.cssClassList;

                // display the data after clearing the container
                options.container.empty();
                options.container.append(outputHtml);
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
                var dataLoading;

                if (!options.container) {
                    return false;
                }

                // merge passed in options with defaults
                options = $.extend({}, _defaultOptions, options);

                // load up the particular data source
                dataLoading = loadData(options.datasource, options);

                // use the passed in unique identifier for the data loaded event, if available
                if(UTILS.doesObjExist(dataLoadedEvent)) {
                    dataLoadedEvent = dataLoadedEvent + options.eventIdentifier;
                }

                // build the HTML once the data is available from the source
                if(!UTILS.doesObjExist(dataLoadedEvent)) {
                    dataLoading.done(function(data) {
                        processData(data, options);
                    });
                } else {
                    $window.on(dataLoadedEvent, function (e, data) {
                        processData(data, options);
                    });
                }
            };

            return {
                init: init,
                ENUM_DATASOURCE: ENUM_DATASOURCE,
                ENUM_LAYOUTTYPE: ENUM_LAYOUTTYPE
            };
        };

        return DATAGRID;
});