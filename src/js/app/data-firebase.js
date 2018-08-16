/*

---
title: Firebase Data Access Module
name: data-firebase
category: Javascript
---

 */
define(['jquery', 'firebaseApp'], function ($, firebaseApp) {

    var DATA_FIREBASE = (function(){

        // Variables
        var _database;
        var _firebase;
        var $window = $(window);
        var _events = {
            dataLoaded: 'firebase.data.loaded'
        };

        // Private functions


        // Public functions
        var getEventNames = function() {
            return _events;
        };

        var loadConfig = function(configObj) {

            // if we don't have a valid configuration, reject
            if(!configObj) {
                return;
            }


            // Ensure that the script is loaded here
            // Note: 'firebase' is a global object loaded by the FB script(s)
            if(_firebase !== null && _firebase !== undefined) {
                _firebase.initializeApp(configObj);

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
        };

        var readData = function(ref) {

            // Get a reference to the database service
            if(_database) {

                // load the default root value, '/', if ref == undefined
                 _database.ref(ref || '/').once('value').then(function(snapshot) {
                    var data = snapshot.val();

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
