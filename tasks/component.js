/*!
 * Local module sed to build templates from
 * component() function calls in page layouts
 */
/*jslint node: true */

"use strict";

var beautify = require('js-beautify').html;
var diveSync = require('diveSync');
var cheerio = require('cheerio');
var path = require('path');
var vm = require('vm');
var fs = require('fs');
var Handlebars = require('handlebars');

// For internationalisation
var intlData = {
  locales: ['en-GB']
};

// Load and use polyfill for ECMA-402.
if (!global.Intl) {
    global.Intl = require('intl');
}
var HandlebarsIntl = require('handlebars-intl');
// Register helpers for date/time helpers
HandlebarsIntl.registerWith(Handlebars);

var templates = [];

// https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

var component = function(type, config) {

  var templateFile = templates[type];

  var data = fs.readFileSync(templateFile, 'utf-8');

  var template = Handlebars.compile(data, { noEscape: true });

  if (!template) throw new Error();

  // if config is just a string, it's simple content
  var configType = toType(config);
  if (configType === 'string') {
    config = { "content": config };
  }

  // if config has an atoms key, compile those and replace atom object with HTML
  var atomsType = toType(config.atoms);
  var atomHTML;
  if (atomsType !== 'undefined') {
    if (atomsType === 'object') {
      // Just a single atom
      var c = Object.keys(config.atoms)[0];
      var o = config.atoms[c];
      if (toType(o) === 'object') {
        o.parentConfig = config;
      }
      atomHTML = component(c, o);
      config.atoms = [atomHTML];
    } else if (atomsType === 'array') {
      // Multiple atoms
      config.atoms.forEach(function(atom, i) {
        var c, o;
        var t = toType(atom);
        if (toType(atom.component) !== 'undefined') {
          // object passed with "component" key and "options" key
          c = atom.component;
          o = atom.options;
          o.parentConfig = config;
          atomHTML = component(c, o);
         } else if (t === 'string') {
          // Using var that has already been parsed
          c = atom;
          o = false;
          atomHTML = atom;
         } else {
          // Shorthand { "component": "options" } object
          c = Object.keys(atom)[0];
          o = atom[c];
          o.parentConfig = config;
          atomHTML = component(c, o);
        }
        config.atoms[i] = atomHTML;
      });
    }
  }

  // compile it with options
  var html = template(config, { data: { intl: intlData } });
  return html;

};

// Compile component templates
var setupComponents = function() {
  console.log("e");
  var componentsPath = path.resolve('src/components/');
  diveSync(componentsPath, function(err, file) {
    if (err) throw err;
    var componentName = path.basename(file, path.extname(file));
    //console.log(componentName, file);
    templates[componentName] = file;
  });
};
setupComponents();

/**
 * component fucntion - checks scripts to see if
 * they have component() calls, and renders them into HTML
 * @param {string} html The HTML string of the page
 * @param {object} options An object containing (at least)
 *                         the following:
 *                         componentsDir - where are the components held?
 *                         isDocs - if true, outputs the HTML and code sample (default true)
 */

module.exports = function addComponent(html, options, onComplete) {

  if (!html || !onComplete) return false;

  try {

    var $ = cheerio.load(html, { decodeEntities: false });
    // Get all the scripts
    var scripts = $('body script');
    var htmlEntities = function(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };

    var beautifyOptions = {
      "indent_size": 2,
      "indent_char": " "
    };

    if (scripts.length === 0) {
      onComplete(null, html);
    }

    // For each script, get the individual lines
    scripts.each(function(i, script) {

      // Safe eval()
      if (script.children.length !== 0) {

        // Only run scripts that contain "component"
        if (script.children[0].data.indexOf("component") === -1) { return; }

        var ev = vm.runInNewContext(script.children[0].data, { component: component });

        if (typeof ev === 'undefined') {
          return;
        }

        var scriptContent = beautify(ev, beautifyOptions);

        var docContent = '';
        // If we're doing documentation
        //if (options.isDoc === true) {
        docContent+= '<pre><code class="language-markup">';
        docContent+= htmlEntities(scriptContent);
        docContent+= '\n</code></pre>';
        $(script).after('\n\n'+docContent);
        //}

        $(script).after('\n\n'+scriptContent).remove();

      }

      if (i === scripts.length - 1) {
        onComplete(null, $.html());
      }

    });

    return true;

  } catch(e) {

    onComplete("Could not compile components");

  }

};




