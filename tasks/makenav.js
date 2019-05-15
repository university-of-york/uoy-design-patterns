/*
 * grunt-makedocs
 * https://github.com/chris5marsh/makedocs
 *
 * Copyright (c) 2015 Chris Marsh
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('makenav', "Make your documentation nav using Grunt", function() {

    var yfm = require('yaml-front-matter');
    var marked = require('marked');
    var path = require('path');

    var options = this.options({
      build: false,
      nav: false
    });

    function MAKENAV(task) {

      this.task = task;
      this.pages = [];

      this.run = function() {

        // Sort files into alpha order
        task.files.forEach(function(file) {
          file.src.filter(function(filepath) {
            // Remove nonexistent files
            if (!grunt.file.exists(filepath)) {
              grunt.log.warn('Source file "' + filepath + '" not found.');
              return false;
            } else {
              return true;
            }
          }).map(function(filepath) {
            // Read and return the file's YAML front-matter
            var contents = grunt.file.read(filepath);
            var config = yfm.loadFront(contents);
            if (typeof config.layout === 'undefined') {
              config.layout = 'default';
            }
            config.content = marked(config['__content']);
            delete config['__content'];
            config.dest = path.resolve(file.dest);
            config.build = options.build;
            this.pages.push(config);
          }, this);

        }, this);

        // Set up nav if needed
        if (options.nav && typeof options.nav === 'function') {
          options.nav(this.pages);
        }

      };

    }

    var makenav = new MAKENAV(this);
    makenav.run();

  });

};