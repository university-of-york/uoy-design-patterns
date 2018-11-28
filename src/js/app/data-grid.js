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
                // TODO: function implementation
            };

            /* For a given data row, build a list item element and stuff it with relevant content
             * Returns a list item element with values built from supplied row data
             * */
            var makeListItem = function(rowData, useKeys) {
                var listItem = document.createElement('li');

                Object.keys(rowData).forEach(function(key) {
                    listItem.innerHTML += (useKeys ? key : rowData[key]) + ' ';
                });

                return listItem;
            };

            /* For a given data row, build a table row (tr) element and stuff it with relevant content
             * Returns a table row (tr) element with values built from supplied row data
             * */
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

            /* From the supplied data, loop through each data row, building a table row
             * that is added to an overall table element that is returned once complete
             * Returns a table element with values built from supplied data source data
             * */
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

            /* TBC */
            var buildFlexHtml = function(data) {
                var html = '';

                // TODO - implementation

                return html;
            };

            /* Disects the data and builds a standard unordered list of values to return
             * Returns an unordered list
             * */
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

            /* An intermediary function that simply calls the data loading function, readData(), from the
             * supplied data source.
             * Returns a promise object that is fulfilled when the data source returns
             * */
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

            /* Depending on the supplied output type (e.g. table, list, etc.), call the appropriate HTML builder
             * Returns the formatted HTML built by the appropriate method
             * */
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

            /* By now, we've successfully got some filtered data from our data source, so we can:
             * - build some useful HTML content to display
             * - add any optional/additional CSS classes to the output HTML
             * - append the final HTML content to the supplied container
             * */
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

            /* Clear the holding content container and display the relevant error message to the user */
            var handleErrors = function(error, options) {
                // display the data after clearing the container
                options.container.empty();
                options.container.append(error);
            };


            // Getters / Setters
            var ENUM_DATASOURCE = function() {
                return DATASOURCE;
            };

            var ENUM_LAYOUTTYPE = function() {
                return LAYOUTTYPE;
            };


            // Public functions

            /* Our script setup function that performs a few things:
             * - checks that the passed in options are all fine and dandy
             * - fires the loadData function to fetch the data from the passed in datasource
             * - finally, fires the processData function to do something meaningful with the data once it's loaded
             * */
            var init = function(options, dataLoadedEvent) {
                var dataLoading;

                if (!options.container) {
                    return false;
                }

                // merge passed in options with defaults
                options = $.extend({}, _defaultOptions, options);

                // load up the particular data source to fetch the data it provides
                dataLoading = loadData(options.datasource, options);

                // use the passed in unique identifier for the data loaded event (if available)
                if(UTILS.doesObjExist(dataLoadedEvent)) {
                    dataLoadedEvent = dataLoadedEvent + options.eventIdentifier;
                }

                // once we have the data (loadData returns a promise), do something
                // meaningful, such as build the HTML to display on the page
                if(!UTILS.doesObjExist(dataLoadedEvent)) {
                    dataLoading
                        .done(function(data) {
                            processData(data, options);
                        })
                        .fail(function(error) {
                            handleErrors(error, options);
                        });
                } else {
                    $window.on(dataLoadedEvent, function (e, data) {
                        processData(data, options);
                    });
                    // TODO: add data-load specific error messaging/handling here, e.g. GSheets, Firebase
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