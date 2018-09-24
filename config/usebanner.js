var uoyReleasePackage = require('uoydesignpatterns/package');

module.exports = function (grunt) {

    var appConfig = JSON.parse(JSON.stringify(uoyReleasePackage));

    return {
        version: {
            options: {
                position: 'top',
                banner: '/*! ' + appConfig.name + ' : ' + appConfig.version + ' : published <%= grunt.template.today("dd-mm-yyyy HH:MM:ss") %> */',
                linebreak: false
            },
            files: {
                src: [
                    'release/js/app.min.js',
                    'release/css/styles.min.css',
                    'release/css/tinymce.min.css']
            }
        }

    };
};