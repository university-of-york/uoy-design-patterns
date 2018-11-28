/*

---
title: Google Sheets Data Access Module
name: data-google-sheets
category: Javascript
---

 */
define(['jquery', 'gsheetsApp', 'app/globaldata', 'app/utils'], function ($, gsheetsApp, globalData, utils) {

    // From requireJS > config > paths in app.js, the gsheetsApp variable loads the
    // Google Sheets API from here '//apis.google.com/js/api'.
    // When this module is called by requireJS, the GSheets API should be loaded and ready to use

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

        /* Checks for the existence of a filter string if we're asking to filter the results */
        var doesFilterExist = function(filter) {
            return (typeof filter === 'string' &&
                filter.length > 0);
        };

        /* Simple matching function that compares 2 values based on supplied comparison operator */
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

        /* This is a fancy method that does something relatively simple:
         * - accept a filter (array) looking like this, [filteron:eq:value]
         * - breaks it up and loops through each filter row
         * - builds a more friendly object (as below) to return back to our main filtering method
         * - more importantly, it finds out which column in the data is the one to match our filter value against
         * Return an object with a list of filter values and matches, e.g.
         * { filter0: { columnname: 'department', columnindex: 0, matchtype: 'eq', filtervalue: 'biology' }
         * */
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

                // if we don't have a complete set of things to filter (i.e. type, match, value)
                // then skip this filter row
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

        /* Create a filter object and run through the returned data to match against the filter(s) supplied.
         * If no filters are found then simply return the data
         * */
        var filterData = function(data, filter) {

            // Sheets data uses the 'ROW' listing by default
            var filteredData,
                filterObj,
                filterObjKeys,
                // in case the filter's empty, check the query string for one
                querystringFilter = utils.getUrlParameter('dg-filter');

            // perform a little validation on the data we've been given because we can't filter what doesn't exist!
            if(!data.values ||
                data.values.length < 1 ||
                (!doesFilterExist(filter) &&
                !doesFilterExist(querystringFilter))) {
                return data;
            }

            // use the passed in filter or the query string version depending what is available
            // preference given to the supplied filter value(s)
            filter = filter || querystringFilter;
            
            // build a more friendly/useful filter object
            filterObj = buildFilterObj(filter, data.values[0]);
            filterObjKeys = Object.keys(filterObj);

            // if we don't have anything valid to filter on/by, just return the original data
            if(filterObjKeys.length < 1) {
                return data;
            }

            // we're going to loop through all the rows in the returned data (data.values)
            // and only return ones that satisfy the filtering work below
            filteredData = $.grep(data.values, function(row, index) {
                var match = false;

                if(index === 0) {
                    return true; // skip the header row
                }

                // loop through the filter objects (e.g. filter0, filter1, filter2, etc.)
                // match values that satisfy the checkFilterMatch() function
                filterObjKeys.forEach(function(key) {
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

        /* Called by a number of places across the module, if we encounter an error:
         * - broadcast the error via window.trigger for potential wider error handling
         * - reject the associated/passed in promise object
         * - log a console error for nosey developers ;)
         * */
        var errorHandler = function(message, errorObj, promiseObj, eventIdentifier) {

            eventIdentifier = eventIdentifier || '';

            // first, trigger the error event on the Window
            $window.trigger(_events.dataReadError + eventIdentifier, [errorObj]);

            // next, reject the promise, if it exists
            if(utils.doesObjExist(promiseObj)) {
                promiseObj.reject([message, errorObj]);
            }

            // finally, log the error in the console
            console.log('Sheets module error > ' + message + ': ' + errorObj);
        };


        // Public functions

        /* Simply return the _events private object */
        var getEventNames = function() {
            return _events;
        };

        /* Our set up function that does a number of things:
         *  - checks that the GSheets API has loaded
         *  - if so, loads the 'client:auth2' library from Google
         *  - once loaded, it triggers the 'apiReady' method on the window
         *  - finally, we call our passed in callback function (if applicable)
         *  */
        var init = function(onLoadCallback) {

            // The following Google API script should be loaded already at this point
            // https://apis.google.com/js/api.js
            // If it's loaded, the global variable, 'gapi' is loaded by Google onto the page
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

        /* Because the GSheets API is fussy and has a lot of moving parts, we have to do a few things before we start:
        * (load the API, load the client library, then initialise the client library, THEN do what we need to do).
        * - create a promise to return and simply initialises the GSheets client library, resolving when it's ready
        * Returns a promise that completes once the GSheets clients library is ready to rock 'n' roll
        * */
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
                        errorHandler('A GSheets init error occured: ', error, deferred);
                });
            }

            return deferred.promise();
        };

        /* The function where the data loading from the API occurs:
         * - load in the GSheets configuration using loadConfig() function (returns a promise)
         * - create a promise object, gettingData
         * - when the config has loaded, check for availability of the _gSheetsAPI object
         * and call the GSheets API get method to fetch the physical data
         * - when we have the data, filter it using filterData() method, trigger a window event
         * and resolve the promise
         * Returns a promise that fulfils with the returned, filtered data from the API
         * */
        var readData = function(spreadsheetId, range, callback, filter, eventIdentifier) {

            // have to load the Sheets API config first
            // we'll also grab the promise returned from the config method
            var configLoading = loadConfig(globalData.gSheetsAPISettings),
                gettingData = $.Deferred();

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

                                // complete the promise for those waiting on that, rather than window event
                                gettingData.resolve(data);

                                // if we've been passed a callback function, fire that
                                if (typeof callback === 'function') {
                                    callback(data);
                                }
                            }, function (error) {
                                errorHandler('A Sheets values call resulted in an error: ', {}, gettingData, eventIdentifier);
                            }
                        );
                } else {
                    errorHandler('The Sheets obj isn\'t available or did not load correctly: ', {}, gettingData, eventIdentifier);
                }
            }).fail(function(error) {
                errorHandler('An error occurred when loading the Sheets config option: ', error, gettingData, eventIdentifier);
            });

            return gettingData.promise();
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
