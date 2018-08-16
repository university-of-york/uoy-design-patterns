/*

---
title: Google Sheets Data Access Module
name: data-google-sheets
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

    var DATA_GSHEETS = (function(){

        // Variables
        var $window = $(window);
        var _events = {
            dataLoaded: 'gsheets.data.loaded',
            dataReadError: 'gsheets.data.error'
        };

        // Private functions


        // Public functions
        var getEventNames = function() {
            return _events;
        };

        var loadConfig = function(configObj, callback) {

            // if we don't have a valid configuration, reject
            if(!configObj) {
                return;
            }

            // Ensure that the script is loaded here
            if(gapi !== null && gapi !== undefined) {

                gapi.client.init({
                    apiKey: configObj.apiKey,
                    clientId: configObj.clientId,
                    discoveryDocs: configObj.discoveryDocs,
                    scope: configObj.scopes
                }).then(function () {

                    if(typeof callback === 'function') {
                        callback();
                    }
                });
            }
        };

        var init = function(onLoadCallback) {

            //<script async defer src="https://apis.google.com/js/api.js"
            //         onload="this.onload=function(){};handleClientLoad()"
            //         onreadystatechange="if (this.readyState === 'complete') this.onload()">
            // </script>

            $.getScript(window.PL_DATA.gSheetsAPISettings.gSheetsScript, function() {
                gapi.load(
                    'client:auth2',
                    loadConfig(window.PL_DATA.gSheetsAPISettings, onLoadCallback)
                );
            });
        };

        var readData = function(spreadsheetId, range, callback) {

            if(gapi !== null && gapi !== undefined) {

                gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: spreadsheetId,
                    range: range,
                }).then(function (response) {

                    var data = response.result;

                    $window.trigger(_events.dataLoaded, [data]);

                    if (typeof callback === 'function') {
                        callback(data);
                    }
                    var range = response.result;
                    if (range.values.length > 0) {
                        //appendPre('Name, Major:');
                        for (i = 0; i < range.values.length; i++) {
                            var row = range.values[i];
                            // Print columns A and E, which correspond to indices 0 and 4.
                            //appendPre(row[0] + ', ' + row[4]);
                            console.log(row);
                            makeTableRow(row);
                            //outputTable.innerHTML += row;
                        }
                    } else {
                        makeTableRow('No data found.');
                    }
                }, function (response) {
                    $window.trigger(_events.dataReadError)
                    makeTableRow('Error: ' + response.result.error.message);
                });
            }
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
