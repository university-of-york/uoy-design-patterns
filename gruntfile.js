module.exports = function (grunt) {

  var path = require('path');

  // Load all the tasks from config/
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'config')
  });

  grunt.registerTask('default', ['bower']);

  grunt.registerTask('dev', ['makenav', 'makedocs:dev', 'copy:dev', 'jshint:dev', 'compass:dev', 'autoprefixer:dev', 'browserSync:dev', 'watch', 'clean:dev']);
  grunt.registerTask('build', ['clean:build', 'makenav', 'makedocs:build', 'compass:build', 'autoprefixer:build', 'modernizr', 'cssmin', 'newer:imagemin', 'requirejs', 'jshint:dev', 'clean:postbuild']);
  grunt.registerTask('docs', ['build']);
  grunt.registerTask('live', ['build', 'clean:live']);

}