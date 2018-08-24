/*

---
title: Google Sheets Data Access Module
name: data-google-sheets
category: Javascript
---

 */
define(['jquery', 'gsheetsApp', 'app/globaldata', 'app/utils'], function ($, gsheetsApp, globalData, utils) {

    var DATA_GSHEETS = (function(){

        // Variables
        var $window = $(window),
            _gSheetsAPI,
            _events = {
            apiReady: 'ghseets.api.ready',
            dataLoaded: 'gsheets.data.loaded',
            dataReadError: 'gsheets.data.error'
        };


        // Private functions
        var checkFilterMatch = function(matchType, valueToMatch, filterValue) {
            var match = false;

            // normalise strings so we can compare regardless of case
            if(typeof valueToMatch === 'string') {
                valueToMatch = valueToMatch.toLowerCase();
            }

            switch(matchType) {
                case 'eq':
                    match = (valueToMatch === filterValue);
                    break;
                case 'ne':
                    match = (valueToMatch !== filterValue);
                    break;
                case 'gt':
                    match = (valueToMatch > filterValue);
                    break;
                case 'lt':
                    match = (valueToMatch < filterValue);
                    break;
                default:
                    break;
            }

            return match;
        };

        var buildFilterObj = function(filter, headerRow) {

            var filterList = filter.split(';'),
                filterObj = {},
                count = 0;

            // filter looks like this initially...
            // [department:eq:biology;another:eq:thing]
            filterList.forEach(function(filterRow) {
                var subFilterValues = filterRow.split(':'), // produces ['department', 'eq', 'biology']
                    columnIndex,
                    newFilter;

                if(subFilterValues.length === 3) {
                    columnIndex = headerRow.findIndex(function(columnName) {
                        return columnName.toLowerCase() === subFilterValues[0].toLowerCase();
                    });

                    newFilter = {
                        columnindex: columnIndex,
                        columnname: subFilterValues[0],
                        matchtype: subFilterValues[1],
                        filtervalue: subFilterValues[2]
                    };

                    filterObj['filter'+count] = newFilter;
                } else {
                    // TODO: skip? throw error?
                }

                count++;
            });

            return filterObj;
        };

        var filterData = function(data, filter) {

            // Sheets data uses the 'ROW' listing by default
            var filteredData,
                filterObj;

            if(!data.values ||
                data.values.length <= 0 ||
                typeof filter !== 'string' ||
                filter === '') {
                return data;
            }

            // filterObj values now looks like this, e.g.
            // { filter0: { columnname: 'department', columnindex: 0, matchtype: 'eq', filtervalue: 'biology' }
            filterObj = buildFilterObj(filter, data.values[0]);

            // now we've built the filter, let's do some filtering
            filteredData = $.grep(data.values, function(row, index) {
                var match = false;

                if(index === 0) {
                    return true; // skip the header row
                }

                Object.keys(filterObj).forEach(function(key) {
                    var thisFilter = filterObj[key],
                        cellValue = row[thisFilter.columnindex];

                    match = checkFilterMatch(thisFilter.matchtype, cellValue, thisFilter.filtervalue);
                });

               return match;
            });

            // update the '.values' property
            data.values = filteredData;

            return data;
        };

        // Public functions
        var getEventNames = function() {
            return _events;
        };

        var init = function(onLoadCallback) {

            // The following Google API script should be loaded already at this point
            // https://apis.google.com/js/api.js
            _gSheetsAPI = gsheetsApp || gapi;

            // load the 'client' library from the Google API
            if(utils.doesObjExist(_gSheetsAPI)) {
                _gSheetsAPI.load('client:auth2', {
                    callback: function() {
                        // trigger an 'API ready' event to notify waiting modules
                        // they can start their work now
                        $window.trigger(_events.apiReady);

                        if(typeof onLoadCallback === 'function') {
                            onLoadCallback();
                        }
                    },
                    onerror: function() {
                        // Handle loading error.
                        // TODO - implement some error handling here - Rollbar?
                    },
                    timeout: 5000, // 5 seconds.
                    ontimeout: function() {
                        // Handle timeout.
                        // TODO - handle timeout error gracefully
                    }
                });
            }
        };

        var loadConfig = function(configObj, callback) {

            var deferred;

            // if we don't have a valid configuration, reject
            if(!configObj) {
                return;
            }

            deferred = $.Deferred();

            // Ensure that the Google API script is loaded here
            if(utils.doesObjExist(_gSheetsAPI)) {

                // call the 'client' script initialisation method
                _gSheetsAPI.client.init({
                    apiKey: configObj.apiKey,
                    clientId: configObj.clientId,
                    discoveryDocs: configObj.discoveryDocs,
                    scope: configObj.scopes
                }).then(
                    function () {
                        if(typeof callback === 'function') {
                            callback();
                        }

                        // complete the promise
                        deferred.resolve();
                }).catch(
                    function(error) {

                        // TODO - need to handle this error - Rollbar? something else?
                        deferred.reject(error);
                });
            }

            return deferred.promise();
        };

        var readData = function(spreadsheetId, range, callback, filter, eventIdentifier) {

            // have to load the Sheets API config first
            // we'll also grab the promise returned from the config method
            var configLoading = loadConfig(globalData.gSheetsAPISettings);

            eventIdentifier = eventIdentifier || '';

            // fire the actual data reading method when we know the library is loaded
            configLoading.done(function() {

                if(utils.doesObjExist(_gSheetsAPI)) {

                    _gSheetsAPI.client.sheets.spreadsheets.values.get({
                            spreadsheetId: spreadsheetId,
                            range: range,
                        })
                        .then(
                            function (response) {
                                var data = filterData(response.result, filter);

                                // notify the waiting modules that the data is loaded
                                // can be consumed using $element.on('gsheets.data.loaded', function(e, data){} );
                                $window.trigger(_events.dataLoaded + eventIdentifier, [data]);

                                if (typeof callback === 'function') {
                                    callback(data);
                                }
                            }, function (error) {
                                $window.trigger(_events.dataReadError, [error]);
                            }
                        );
                }
            });
        };

        return {
            init: init,
            loadConfig: loadConfig,
            readData: readData,
            getEventNames: getEventNames
        };
    }());

    return DATA_GSHEETS;
});
