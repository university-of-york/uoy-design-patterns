module.exports = function (grunt) {

  var path = require('path');

  require('time-grunt')(grunt);

  // Load all the tasks from config/
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'config')
  });

  // Load custom tasks
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['bower']);

  grunt.registerTask('icons', ['clean:icons', 'copy:darkicons', 'copy:lighticons', 'newer:svgmin', 'grunticon']);

  grunt.registerTask('dev', ['makedocs:dev', 'copy:dev', 'jshint:dev', 'compass:dev', 'autoprefixer:dev', 'browserSync:dev', 'watch', 'clean:dev']);
  grunt.registerTask('build', ['clean:build', 'makedocs:build', 'copy:build', 'compass:build', 'autoprefixer:build', 'clean:precssmin', 'modernizr', 'cssmin', 'newer:imagemin', 'requirejs', 'jshint:dev', 'clean:postbuild']);
  grunt.registerTask('docs', ['build']);
  grunt.registerTask('live', ['build', 'clean:live']);

}