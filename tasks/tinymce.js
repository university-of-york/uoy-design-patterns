var path = require('path');
var css = require('css');
var fs = require('fs');

module.exports = function(grunt) {

  'use strict';

  var getSelectorList = function(pathToFile, callback) {
    var selectorList = [];
    fs.readFile(pathToFile, 'utf-8', function(err, data) {
      if (err) throw err;
      // Replace @extend lines - CSS parser doesn't like them
      var extendRe = /@extend .+/g;
      grunt.log.writeln(data.match(extendRe));
      // var parsedStyles = css.parse(data);
      // parsedStyles.stylesheet.rules.forEach(function(rule, i, allRules) {
      //     if (rule.type === 'rule') {
      //       rule.selectors.forEach(function(selector, j, allSelectors) {
      //         selectorList.push(selector);
      //        if (i === allRules.length - 1 && j === allSelectors.length - 1) {
      //          grunt.log.writeln(selectorList);
                  callback(selectorList);
      //        }
      //      });
      //     }
      // });
    });
  };

  grunt.registerTask('tinymce', 'Task to create custom TinyMCE stylesheet.', function() {

    var done = this.async();

    var fullStylesheet = path.resolve('dev/css/styles.css');

    var tinyMCEStylesheet = path.resolve('dev/css/tinymce.css');

    var tinyMCESass = path.resolve('src/sass/scopes/_tinymce.scss');

    getSelectorList(tinyMCESass, function(selectorList) {
      grunt.log.ok('Got here!')
      done();
    });

    // fs.readFile(fullStylesheet, 'utf-8', function(err, data) {

    //   if (err) throw err;

    //   var parsedStyles = css.parse(data, { source: fullStylesheet });

    //   parsedStyles.stylesheet.rules.forEach(function(rule, i, allRules) {

    //     if (rule.type === 'rule') {

    //       rule.selectors.forEach(function(selector, j, allSelectors) {

    //         grunt.log.writeln(selector);

    //       });

    //     }

    //     if (i === allRules.length - 1) done();

    //   });

    // });

  });

};
