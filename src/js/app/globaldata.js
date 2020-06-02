define(['jquery'], function ($) {
    return {
        clearingData: {
            year: 2020,
            noCourseMessage: "<p>There are no vacancies in this department for September 2020. <a href=\"//www.york.ac.uk/study/undergraduate/courses/all\">Explore your options for 2021 entry.</a></p>",
            sheetId: "1CdCBA-Ygmyi6JpLdu3H0MA2dlTfoSA1vniDdjXtGC3o",
            backupDoc: "https://www.york.ac.uk/static/data/clearing/2020.json",
            phoneNumber: "<a href=\"tel:+441904234868\">+44 (0)1904 234868</a>"
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