var path = require('path');
var css = require('css');
var fs = require('fs');
var fullStylesheet = path.resolve('dev/css/styles.css');
var includeExtends = false;

module.exports = function(grunt) {

  'use strict';

  var getStyles = function(pathToFile, removeRegular, callback) {
    fs.readFile(pathToFile, 'utf-8', function(err, data) {
      if (err) throw err;
      //grunt.log.ok('data\n'+'====================\n'+data+'====================\n');
      // Remove @extend and @include lines (and maybe regular lines too)
      // Declaration lines must have a trailing semicolon - it's what differentiates them from selectors
      var sassRegex = /(\n\s*@[a-zA-Z0-9!@.:;$_()\-\s]*;)/g;
      var regRegex = /(\n\s*[a-zA-Z0-9!@.:;$_()\-\s]*;)/g;
      var data2;
      if (removeRegular === true) {
        data2 = data.replace(regRegex, '');
      } else {
        data2 = data.replace(sassRegex, '');
      }
      //grunt.log.ok('data2\n'+'====================\n'+data2+'====================\n');
      var commentRegex = /\/\/\s*/g;
      var data3 = data2.replace(commentRegex, '');
      //grunt.log.ok('data3\n'+'====================\n'+data3+'====================\n');
      var parsedStyles = css.parse(data3);
      callback(parsedStyles);
    });
  };

  var getSelectorList = function(parsedStyles, callback) {
    var selectorList = [];
    parsedStyles.stylesheet.rules.forEach(function(rule, i, allRules) {
      if (rule.type === 'rule') {
        rule.selectors.forEach(function(selector, j, allSelectors) {
          selectorList.push(selector);
          //grunt.log.writeln(selector)
        });
      }
      if (i === allRules.length - 1) {
        callback(selectorList);
      }
    });
  };

  var addRules = function(styles, stylesheetPath, list, done) {
    styles.stylesheet.rules.forEach(function(rule, i, allRules) {
      if (rule.type === 'rule') {
        // console.log(rule.selectors[0], rule.declarations.length);
        // console.log(rule.position.start.line, rule.position.start.column, rule.position.end.line, rule.position.end.column);
        rule.selectors.forEach(function(selector, j, allSelectors) {
          if (!list || list.indexOf(selector) > -1) {
            //console.log(selector, rule.declarations.length);
            var ruleText = selector+' {\n';
            // Don't write declaration-less selectors!
            var declarationCount = 0;
            rule.declarations.forEach(function(declaration, k, allDeclarations) {
              // Skip declaration if it contains a variable
              //console.log(declaration.value);
              if (declaration.type === "declaration" && declaration.value.indexOf('$') === -1) {
                declarationCount++;
                ruleText+= '  '+declaration.property+':'+declaration.value+';\n';
              }
            });
            ruleText+= '}\n';
            if (declarationCount === 0) {
              grunt.log.warn('No declarations for "'+selector+'"');
              return false;
            }
            fs.appendFile(stylesheetPath, ruleText, function (err) {
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

  grunt.registerMultiTask('scopedCSS', 'Task to create custom scoped stylesheets.', function() {

    var done = this.async();

    var srcPath = path.resolve(this.data.srcPath);
    var buildPath = path.resolve(this.data.buildPath);
    includeExtends = this.data.includeExtends || false;

    // Remove existing stylesheet
    try {
      fs.unlinkSync(buildPath);
      grunt.log.ok('Successfully deleted existing stylesheet!');
    } catch (e) {
      grunt.log.warn('Cannot delete non-existent stylesheet!');
    }

    // Find the styles we need to match first
    getStyles(srcPath, true, function(parsedStyles1) {

      // Write the additional editor styles to the stylesheet
      addRules(parsedStyles1, buildPath);

      // Get the main stylesheet styles
      getSelectorList(parsedStyles1, function(selectorList) {

        // Get the matchable styles
        getStyles(fullStylesheet, false, function(parsedStyles2) {

          // Add rules (if selector matches our list)
          addRules(parsedStyles2, buildPath, selectorList, done);

        });

      });

    });

  });

};
