define(['jquery'], function ($) {
    return {
        clearingData: {
            noCourseMessage: "<p>There are no vacancies in this department for September 2018. <a href=\"//www.york.ac.uk/study/undergraduate/courses/all\">Explore your options for 2019 entry.</a></p>",
            docID: "1w8XM3NZeYThYpfYBLfEiJBj7SbA2xL-JABHnDW_w",
            backupDoc: "http://www.york.ac.uk/static/data/clearing/2018.json",
            callToApplyText: "Call Admissions on <a href='tel:+441904234000'>01904 234000</a>"
        },
        firebaseAPISettings: {
            firebaseScriptAll: "https://www.gstatic.com/firebasejs/5.3.0/firebase.js",
            firebaseScriptApp: "https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js",
            firebaseScriptDatabase: "https://www.gstatic.com/firebasejs/5.3.0/firebase-database.js",
            apiKey: "AIzaSyCmiHfy-784LY-5Zpaow7Hp4TfUP4liJXU"
        },
        firebaseConfigs: {
            clearingTables: {
                authDomain: "york-ac-uk-api-project-139930501012.firebaseapp.com",
                databaseURL: "https://york-ac-uk-api-project-139930501012.firebaseio.com",
                projectId: "york.ac.uk:api-project-139930501012",
                storageBucket: "",
                messagingSenderId: "139930501012"
            }
        },
        gSheetsAPISettings: {
            gSheetsScript: "https://apis.google.com/js/api.js",
            clientId: '1011030023006-jn35sunpo99d215h3n9br56ob7kstai6.apps.googleusercontent.com',
            clientSecret: 'wsXvwhiyFAsK8X__-iKD4yPA',
            apiKey: 'AIzaSyC4yKgFkHO5iixq1BC81UU7UOl-MbEF_cE',
            discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
            scopes: "https://www.googleapis.com/auth/spreadsheets.readonly"
        }
    };
});