define(['jquery'], function ($) {
    return {
        clearingData: {
            noCourseMessage: "<p>There are no vacancies in this department for September 2018. <a href=\"//www.york.ac.uk/study/undergraduate/courses/all\">Explore your options for 2019 entry.</a></p>",
            docID: "1w8XM3NZeYThYpfYBLfEiJBj7SbA2xL-JABHnDW_w",
            backupDoc: "http://www.york.ac.uk/static/data/clearing/2018.json",
            callToApplyText: "Call Admissions on <a href='tel:+441904234000'>01904 234000</a>"
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