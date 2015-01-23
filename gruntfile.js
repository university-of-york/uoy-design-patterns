module.exports = function (grunt) {

  var path = require('path');

  // Load all the tasks from config/grunt
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'config/grunt')
  });

  grunt.registerTask('default', ['dev']);

  grunt.registerTask('dev', ['hologram:dev', 'copy:dev', 'compass', 'autoprefixer', 'connect', 'watch']);
  grunt.registerTask('build', ['modernizr', 'cssmin', 'newer:copy:build']);
  grunt.registerTask('docs', ['build', 'hologram:build']);

}