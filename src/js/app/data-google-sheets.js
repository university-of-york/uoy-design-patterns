/*

---
title: Google Sheets Data Access Module
name: data-google-sheets
category: Javascript
---

 */
define(['jquery', 'gsheetsApp'], function ($, gsheetsApp) {

    var DATA_GSHEETS = (function(){

        // Variables
        var $window = $(window);
        var _gSheetsAPI;
        var _events = {
            apiReady: 'ghseets.api.ready',
            dataLoaded: 'gsheets.data.loaded',
            dataReadError: 'gsheets.data.error'
        };

        // Private functions


        // Public functions
        var getEventNames = function() {
            return _events;
        };

        var init = function(onLoadCallback) {

            // The following Google API script should be loaded already at this point
            // https://apis.google.com/js/api.js

            _gSheetsAPI = gsheetsApp || gapi;

            // load the 'client' library from the Google API
            if(_gSheetsAPI !== null && _gSheetsAPI !== undefined) {
                _gSheetsAPI.load('client:auth2', {
                    callback: function() {
                        // trigger an 'API ready' event to notify waiting modules
                        // they can start their work now
                        $window.trigger(_events.apiReady);
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
            if(_gSheetsAPI !== null && _gSheetsAPI !== undefined) {

                // call the 'client' script initialisation method
                _gSheetsAPI.client.init({
                    apiKey: configObj.apiKey,
                    clientId: configObj.clientId,
                    discoveryDocs: configObj.discoveryDocs,
                    scope: configObj.scopes
                }).then(function () {

                    if(typeof callback === 'function') {
                        callback();
                    }

                    // complete the promise
                    deferred.resolve();
                }).catch(function(error) {

                    // TODO - need to handle this error - Rollbar? something else?
                   deferred.reject(error);
                });
            }

            return deferred.promise();
        };

        var readData = function(spreadsheetId, range, callback) {

            // have to load the Sheets API config first
            // we'll also grab the promise returned from the config method
            var configLoading = loadConfig(window.PL_DATA.gSheetsAPISettings);

            // fire the actual data reading method when we know the library is loaded
            configLoading.done(function() {

                if(_gSheetsAPI !== null && _gSheetsAPI !== undefined) {

                    _gSheetsAPI.client.sheets.spreadsheets.values.get({
                        spreadsheetId: spreadsheetId,
                        range: range,
                    }).then(function (response) {

                        var data = response.result;

                        // notify the waiting modules that the data is loaded
                        // can be consumed using $element.on('gsheets.data.loaded', function(e, data){} );
                        $window.trigger(_events.dataLoaded, [data]);

                        if (typeof callback === 'function') {
                            callback(data);
                        }
                    }, function (error) {
                        $window.trigger(_events.dataReadError, [error]);
                    });
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
