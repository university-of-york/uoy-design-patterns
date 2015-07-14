var path = require('path');

module.exports = function(grunt) {

  grunt.registerTask('tinymce', 'Task to create custom TinyMCE stylesheet.', function() {

    var done = this.async();

    grunt.log.writeln('Hello, world.', this);

    var fullStylesheet = path.resolve('dev/css/styles.css');

    var tinyMCEStylesheet = path.resolve('dev/css/tinymce.css');

    var tinyMCESass = path.resolve('src/sass/scopes/tinymce.scss');

    done();

  });

};
