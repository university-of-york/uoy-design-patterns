/*

---
title: User Profile Display Module
name: user-profile-module
category: Javascript
---

 */

define(['jquery', 'app/utils', 'app/data-pure', 'app/xml-reader'],
    function ($, UTILS, DATAPURE, XMLReader) {

        var USER_PROFILE = function() {

            // Enums
            var DATASOURCE = {
                pure: 'pure'
            };
            var LAYOUTTYPE = {
                table: 'table',
                list: 'list'
            };


            // Private variables
            var _defaultOptions = {
                container: false,
                datasource: DATASOURCE.pure,
                dataTypePure: DATAPURE.getDataTypes().persons,
                idValuePure: '',
                layout: LAYOUTTYPE.table,
                includeHeaderRow: true,
                cssClassList: '',
                eventIdentifier: ''
            };


            // Private functions

            var makeListItem = function(rowData, useKeys) {
                var listItem = document.createElement('li');

                Object.keys(rowData).forEach(function(key) {
                    listItem.innerHTML += (useKeys ? key : rowData[key]) + ' ';
                });

                return listItem;
            };

            var makeTableCell = function(row, cellData, isHeaderRow) {
                var cell,
                    newText = document.createTextNode(cellData);

                if(isHeaderRow) {
                    cell = document.createElement("TH");
                    row.appendChild(cell);
                } else {
                    cell = row.insertCell(-1);
                }

                cell.appendChild(newText);

                return cell;
            };

            var makeTableRow = function(table, rowData, useKeys, isHeaderRow) {
                var row,
                    thead;

                if(isHeaderRow) {
                    thead = table.createTHead();
                    row = thead.insertRow(0);
                } else {
                    row = table.insertRow(-1);
                }

                if(rowData.constructor === Array) {

                    for (var i = 0; i < rowData.length; i++) {
                        makeTableCell(row, rowData[i], isHeaderRow);
                    }
                } else {
                    makeTableCell(row, rowData, isHeaderRow);
                }

                return row;
            };

            var buildTableHtml = function(data, includeHeaderRow) {
                var table = document.createElement('table');

                // now, process the rest of the rows
                Object.keys(data).forEach(function(key) {
                   makeTableRow(table, data[key], false, false);
                });

                return table;
            };

            var buildListHtml = function(data) {
                var list = document.createElement('ul');

                // // Sheets uses a 'values' property, check for that here
                // if(data.values && data.values.length > 0) {
                //     for (var i = 0; i < data.values.length; i++) {
                //         list.appendChild(makeListItem(data.values[i], false));
                //     }
                //
                //     return list;
                // }

                // TODO: list builder needs rewriting to cope with things like PURE

                return list;
            };

            var loadData = function(datasource, options) {
                var dataLoadedPromise;

                switch(datasource) {
                    case DATASOURCE.pure:
                        DATAPURE.init();
                        dataLoadedPromise = DATAPURE.readData(options.dataTypePure, options.idValuePure, options.eventIdentifier);
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
                    dataLoading
                        .done(function(data) {

                            // the PURE api returns an xml object, so we need to convert it here
                            if(options.datasource === DATASOURCE.pure) {
                                XMLReader.init(data);
                                data = XMLReader.getObjFromXml(['titles', 'name'], [1, 1]);
                            }

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

        return USER_PROFILE;
    });