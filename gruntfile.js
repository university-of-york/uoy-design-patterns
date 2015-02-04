module.exports = function (grunt) {

  var path = require('path');

  // Load all the tasks from config/
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'config')
  });

  grunt.registerTask('default', ['bower']);

  grunt.registerTask('dev', ['makedocs:dev', 'jshint:dev', 'copy:dev', 'compass:dev', 'autoprefixer:dev', 'connect', 'watch', 'clean:dev']);
  grunt.registerTask('build', ['makedocs:build', 'compass:build', 'modernizr', 'cssmin', 'imagemin', 'require', 'jshint:dev', 'clean:build']);
  grunt.registerTask('docs', ['build']);

}