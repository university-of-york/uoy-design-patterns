define(['jquery'], function ($) {
    return {
        clearingData: {
            noCourseMessage: "<p>There are no vacancies in this department for September 2018. <a href=\"//www.york.ac.uk/study/undergraduate/courses/all\">Explore your options for 2019 entry.</a></p>",
            docID: "1w8XM3NZeYThYpfYBLfEiJBj7SbA2xL-JABHnDW_w",
            backupDoc: "http://www.york.ac.uk/static/data/clearing/2018.json",
            callToApplyText: "Call {0} to apply"
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