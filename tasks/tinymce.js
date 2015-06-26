var path = require('path');
module.exports = function(grunt) {
  grunt.registerTask('tinymce', 'Task to create custom TinyMCE stylesheet.', function() {

    var done = this.async();

    grunt.log.writeln('Hello, world.', this);
    var fullStylesheet = 'dev/css/styles.css';

    done();

  });

};
