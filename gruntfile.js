module.exports = function (grunt) {

  var path = require('path');

  // Load all the tasks from config/grunt
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'config/grunt')
  });

  grunt.registerTask('default', ['dev']);

  grunt.registerTask('dev', ['hologram:dev', 'connect', 'compass', 'autoprefixer', 'watch']);
  grunt.registerTask('build', ['modernizr']);
  grunt.registerTask('docs', ['hologram:build']);

}