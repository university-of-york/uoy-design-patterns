define(['jquery'], function ($) {
    return {
        clearingData: {
            noCourseMessage: "<p>There are no vacancies in this department for September 2018. <a href=\"//www.york.ac.uk/study/undergraduate/courses/all\">Explore your options for 2019 entry.</a></p>",
            docID: "1w8XM3NZeYThYpfYBLfEiJBj7SbA2xL-JABHnDW_w",
            backupDoc: "http://www.york.ac.uk/static/data/clearing/2018.json",
            callToApplyText: "Our clearing hotline will open at 8am on 16 August"
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
            clientId: '907261842760-crettckqohk364k05hcnn1fjur22hdob.apps.googleusercontent.com',
            clientSecret: 'lgMQTZmakbaVZQaCez1zq-Fo',
            apiKey: 'AIzaSyBW_yFGEfY72EnuRUy6_aiVF65ux9UgKic',
            discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
            scopes: "https://www.googleapis.com/auth/spreadsheets.readonly"
        }
    };
});