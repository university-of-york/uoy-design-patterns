module.exports = function(grunt) {

  grunt.registerTask('release', 'Publish a new release to the CDN', function(type) {

    type = type || 'patch';

    // Run with --dry-run when testing
    // TODO Add sftp:cdn
    grunt.task.run('confirm', 'bump:'+type, 'build', 'copy:release', 'md5sum');

  });

};