var path = require('path');
var css = require('css');
var fs = require('fs');
var fullStylesheet = path.resolve('dev/css/styles.css');
var tinyMCESass = path.resolve('src/sass/scopes/_tinymce.scss');
var tinyMCEStylesheet = path.resolve('dev/css/tinymce.css');

module.exports = function(grunt) {

  'use strict';

  var getStyles = function(pathToFile, callback) {
    fs.readFile(pathToFile, 'utf-8', function(err, data) {
      if (err) throw err;
      // Replace @extend lines and Sass-style comments - CSS parser doesn't like them
      var extendRe = /@extend .+|\/\/\s/g;
      var newData = data.replace(extendRe, '');
      var parsedStyles = css.parse(newData);
      callback(parsedStyles);
    });
  };

  var getSelectorList = function(parsedStyles, callback) {
    var selectorList = [];
    parsedStyles.stylesheet.rules.forEach(function(rule, i, allRules) {
      if (rule.type === 'rule') {
        rule.selectors.forEach(function(selector, j, allSelectors) {
          selectorList.push(selector);
        });
      }
      if (i === allRules.length - 1) {
        callback(selectorList);
      }
    });
  };

  var addRules = function(styles, list, done) {
    styles.stylesheet.rules.forEach(function(rule, i, allRules) {
      if (rule.type === 'rule') {
        rule.selectors.forEach(function(selector, j, allSelectors) {
          if (!list || list.indexOf(selector) > -1) {
            var ruleText = selector+' {\n';
            // Don't write declaration-less selectors!
            var declarationCount = 0;
            rule.declarations.forEach(function(declaration, k, allDeclarations) {
              if (declaration.type === "declaration") {
                declarationCount++;
                ruleText+= '  '+declaration.property+':'+declaration.value+';\n';
              }
            });
            ruleText+= '}\n';
            if (declarationCount === 0) return false;
            fs.appendFile(tinyMCEStylesheet, ruleText, function (err) {
              if (err) {
                grunt.log.warn('Could not create the rules for "'+selector+'"');
                throw err;
              }
              grunt.log.ok('The rules for "'+selector+'" were appended to the stylesheet!');
              return true;
            });
          }
        });
      }
      if (i === allRules.length - 1 && done) done();
    });
  };

  grunt.registerTask('tinymce', 'Task to create custom TinyMCE stylesheet.', function() {

    var done = this.async();

    // Remove existing stylesheet
    try {
      fs.unlinkSync(tinyMCEStylesheet);
      grunt.log.ok('Successfully deleted TinyMCE stylesheet!');
    } catch (e) {
      grunt.log.warn('Cannot delete non-existent TinyMCE stylesheet!');
    }

    // Find the styles we need to match first
    getStyles(tinyMCESass, function(tinyParsedStyles) {

      // Write the additional editor styles to the stylesheet
      addRules(tinyParsedStyles);

      // Get the main stylesheet styles
      getSelectorList(tinyParsedStyles, function(selectorList) {

        // Get the matchable styles
        getStyles(fullStylesheet, function(parsedStyles) {

          // Add rules (if selector matches our list)
          addRules(parsedStyles, selectorList, done);

        });

      });

    });

  });

};
