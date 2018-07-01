module.exports = function (grunt) {

  var path = require('path');

  require('time-grunt')(grunt);

  // Load all the tasks from config/
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'config')
  });

  // Load custom tasks
  grunt.loadTasks('tasks');

  // Build Additional stylesheets
  grunt.registerTask('formstack', ['compass:dev', 'newer:postcss:dev', 'scopedCSS:formstackDev']);
  grunt.registerTask('csstest', ['compass:dev', 'newer:postcss:dev', 'scopedCSS:test']);


  grunt.registerTask('generate', ['makedocs:webpack']);



  // Local development
  grunt.registerTask('dev', [
      'makedocs:dev',
      'copy:dev',
      'copy:templates',

      'jshint:dev',
      'compass:dev',
      'postcss:dev',
      'browserSync:dev',
      'watch',
      'clean:dev']);

  // Build process - minified CSS and JS

  grunt.registerTask('build', [
      'clean:build',
      'makedocs:build',
      'copy:build',
      'compass:build',
      'postcss:build',
      'scopedCSS',
      'clean:precssmin',
      'modernizr',
      'cssmin',
      'newer:imagemin',
      'jshint:dev',
      'requirejs',
      'header:build',
      'clean:postbuild']);

  // Build process for preview
    grunt.registerTask('preview', [
        'clean:build',
        'makedocs:preview',
        'copy:build',
        'compass:build',
        'postcss:build',
        'scopedCSS',
        'clean:precssmin',
        'modernizr',
        'cssmin',
        'newer:imagemin',
        'jshint:dev',
        'requirejs',
        'header:preview',
        'clean:postbuild']);

  // Release process - copies necessary files to a '/release' folder
    grunt.registerTask('release', ['build', 'copy:release', 'md5sum']);

};