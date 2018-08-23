/*

---
title: Firebase Data Access Module
name: data-firebase
category: Javascript
---

 */
define(['jquery', 'firebaseApp', 'app/globaldata'], function ($, firebaseApp, globalData) {

    var DATA_FIREBASE = (function(){

        // Variables
        var _database;
        var _firebase;
        var $window = $(window);
        var _events = {
            apiReady: 'firebase.api.ready',
            dataLoaded: 'firebase.data.loaded'
        };

        // Private functions
        var convertConfigObj = function(config) {

            var convertedConfigObj;
            try {
                convertedConfigObj = $.parseJSON(config.replace(/'/g, '"'));
            } catch(err) {
                // load it from config
                convertedConfigObj = globalData.firebaseConfigs[config];
            }

            return convertedConfigObj;
        };
        var processConfigObj = function(configObj) {

            var processedConfigObj = convertConfigObj(configObj);

            // add in the API key here as it shouldn't be passed in plan text
            processedConfigObj.apiKey = globalData.firebaseAPISettings.apiKey;

            return processedConfigObj;
        };


        // Public functions
        var getEventNames = function() {
            return _events;
        };

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

                // store the database reference
                _database = _firebase.database();
            } else {
                // TODO: need a better way to check for the firebase object being loaded (async? promises?)
            }
        };

        var init = function() {

            // first thing is to load the firebase api script(s)
            // we need the main App script, and the Database one
            // this saves on load time
            _firebase = firebaseApp;
            $window.trigger(_events.apiReady);
        };

        var readData = function(ref) {

            // Get a reference to the database service
            if(_database) {

                // load the default root value, '/', if ref == undefined
                 _database.ref(ref || '/').once('value').then(function(snapshot) {
                    var data = snapshot.val();

                     // notify the waiting modules that the data is loaded
                    // can be consumed using $element.on('firebase.data.loaded', function(e, data){} );
                    $window.trigger(_events.dataLoaded, [data]);
                });

                // successful action
                return true;
            }

            return false;
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
