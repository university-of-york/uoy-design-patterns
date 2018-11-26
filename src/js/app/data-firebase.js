/*

---
title: Firebase Data Access Module
name: data-firebase
category: Javascript
---

 */
define(['jquery', 'firebaseApp', 'app/globaldata', 'app/utils'], function ($, firebaseApp, globalData, Utils) {

    var DATA_FIREBASE = (function(){

        // Variables
        var _database,
            _firebase,
            $window = $(window),
            _events = {
                apiReady: 'firebase.api.ready',
                dataLoaded: 'firebase.data.loaded',
                dataReadError: 'gsheets.data.error'
            };


        // Private functions
        var filterData = function() {
            // TODO: add filtering to Firebase, might be able to do it at the request level!
        };

        /* Because our config object might be passed as a 'data-' variable on the HTML element
         * it's likely not going to be valid, parsable JSON. We need to do a little correcting if that is the case
         * Returns a suitable config JSON object or - if something goes wrong - the global config instead
         * */
        var convertConfigObj = function(config) {
            var convertedConfigObj;

            try {
                convertedConfigObj = $.parseJSON(config.replace(/'/g, '"'));
            } catch(err) {
                // load it from config instead
                return globalData.firebaseConfigs[config];
            }

            return convertedConfigObj;
        };

        /* This sanitises the supplied config object and then adds in the secret API key from the global config
         * Returns the processed configuration object for Firebase to continue
         * */
        var processConfigObj = function(configObj) {

            var processedConfigObj = convertConfigObj(configObj);

            // add in the API key here as it shouldn't be passed in plan text
            processedConfigObj.apiKey = globalData.firebaseAPISettings.apiKey;
            return processedConfigObj;
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
        var getEventNames = function() {
            return _events;
        };

        /* Process out config object (if available) and then initialise the Firebase app using said config object */
        var loadConfig = function(configObj) {

            // if we don't have a valid configuration, reject
            if(!configObj) {
                return;
            }

            // need to either convert this to an object or load it from global
            configObj = processConfigObj(configObj);

            // Ensure that the script is loaded here
            // Note: 'firebase' is a global object loaded by the FB script(s)
            if(_firebase !== null && _firebase !== undefined) {

                // make sure we only load the Firebase App once
                if (!_firebase.apps.length) {
                    _firebase.initializeApp(configObj);
                }
                // TODO: might need to adjust this to load different projects
                // see: https://firebase.google.com/docs/web/setup?authuser=0

                // store the database reference
                _database = _firebase.database();
            } else {
                // TODO: need a better way to check for the firebase object being loaded (async? promises?)
                errorHandler('Firebase library isn\'t loaded', {}, null, '');
            }
        };

        /* Our set up function that does 2 things:
         *  - loads the firebaseApp library into out local private variable _firebase
         *  - triggers the 'apiReady' method on the window
         *  */
        var init = function() {

            // first thing is to load the firebase api script(s)
            // we need the main App script, and the Database one
            // this saves on load time
            _firebase = firebaseApp;
            $window.trigger(_events.apiReady);
        };

        /* The function where the data loading from the API occurs:
         * - create a promise object, gettingData
         * - check that we've got the database (Firebase's database object) available so we can then load the physical data
         * - when we have the data, trigger a window event and resolve the promise
         * Returns a promise that fulfils with the returned, filtered data from the API
         * */
        var readData = function(ref, eventIdentifier, configStr) {

            var gettingData;

            if(!Utils.doesObjExist(_database) && Utils.doesObjExist(configStr)) {
                loadConfig(configStr);
            }

            gettingData = $.Deferred();
            eventIdentifier = eventIdentifier || '';

            // Get a reference to the database service
            if(_database) {

                // load the default root value, '/', if ref == undefined
                 _database.ref(ref || '/').once('value').then(function(snapshot) {
                    var data = snapshot.val();

                     // notify the waiting modules that the data is loaded
                    // can be consumed using $element.on('firebase.data.loaded', function(e, data){} );
                     $window.trigger(_events.dataLoaded + eventIdentifier, [data]);

                     // complete the promise for those waiting on that, rather than window event
                     gettingData.resolve(data);
                })
                .catch(
                    function(error) {
                        errorHandler('Firebase library isn\'t loaded', error, gettingData, eventIdentifier);
                    }
                );

            } else {
                errorHandler('Database hasn\'t been loaded', {}, gettingData, eventIdentifier);
            }

            return gettingData.promise();
        };

        return {
            init: init,
            loadConfig: loadConfig,
            readData: readData,
            getEventNames: getEventNames
        };
    }());

    return DATA_FIREBASE;
});
