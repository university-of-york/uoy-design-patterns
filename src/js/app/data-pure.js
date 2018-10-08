/*

---
title: PURE Api Data Access Module
name: data-pure
category: Javascript
---

 */
define(['jquery', 'app/globaldata', 'app/utils'],
    function ($, globalData, Utils) {

    var DATA_PURE = (function(){

        // Variables
        var _baseDataUrl = '',
            $window = $(window),
            _events = {
                apiReady: 'pure.api.ready',
                dataLoaded: 'pure.data.loaded',
                dataReadError: 'pure.data.error'
            },
            _pureDataTypes = {
                persons: '/persons/{0}',
                datasets: '/datasets/{0}'
            };


        // Private functions
        var errorHandler = function(message, errorObj, promiseObj, eventIdentifier) {

            eventIdentifier = eventIdentifier || '';

            // first, trigger the error event on the Window
            $window.trigger(_events.dataReadError + eventIdentifier, [errorObj]);

            // next, reject the promise, if it exists
            if(Utils.doesObjExist(promiseObj)) {
                promiseObj.reject([message, errorObj]);
            }

            // finally, log the error in the console
            console.log('PURE api module error > ' + message + ': ' + errorObj);
        };

        // this function just gets a string, e.g. '/persons/{0}' from the private property
        // and replaces it with the actual id value. It may need to be more functional
        // in the future, but for now it is quite simple
        var getDataTypeApiPart = function(dataTypeString, id) {

            var apiPart = '';

            apiPart = dataTypeString.replace('{0}', id);

            return apiPart;
        };

        // Public functions
        var getEventNames = function() {
            return _events;
        };

        var getDataTypes = function() {
            return _pureDataTypes;
        };

        var loadConfig = function(configObj) {

            // if we don't have a valid configuration, reject
            if(!configObj) {
                return;
            }

            // let's build up an api url string, ready to call
            // note, '{0}' is the placeholder to be replaced with the api function to call
            // e.g. _baseDataUrl.replace('{0}', 'persons/123456');
            _baseDataUrl = configObj.apiUrl + '{0}?apiKey=' + configObj.apiKey;
        };

        var init = function() {

            // load up the config file
            loadConfig(globalData.pureAPISettings);

            $window.trigger(_events.apiReady);
        };

        var readData = function(dataType, id, eventIdentifier) {

            var gettingData,
                apiPart,
                apiUrl;

            gettingData = $.Deferred();
            apiPart = getDataTypeApiPart(dataType, id);
            eventIdentifier = eventIdentifier || '';

            apiUrl = _baseDataUrl.replace('{0}', apiPart);

            $.ajax(apiUrl, {
                method: 'GET',
                dataType: 'xml',
                success: function(data) {
                    $window.trigger(_events.dataLoaded + eventIdentifier, [data]);

                    // complete the promise for those waiting on that, rather than window event
                    gettingData.resolve(data);
                },
                error: function(jqXHRObj, textStatus, errorThrown) {
                    errorHandler('Problem loading PURE data', errorThrown, gettingData, eventIdentifier);
                }
            });


            return gettingData.promise();
        };


        return {
            init: init,
            loadConfig: loadConfig,
            readData: readData,
            getEventNames: getEventNames,
            getDataTypes: getDataTypes
        };
    }());

    return DATA_PURE;
});
