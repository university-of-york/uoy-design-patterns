var semver = require("semver");

module.exports = function(grunt) {

  // Run with --dry-run when testing
  // Run with --dev when uploading to /dev on CDN
  grunt.registerTask('release', 'Publish a new release to the CDN', function(type) {

    type = type || 'patch';

    var isDev = grunt.option('dev');
    var isDryRun = grunt.option('dry-run');

    var tasklist = [];

    tasklist.push('confirm:release:'+type);

    grunt.option('dry-run', true);

    tasklist.push('bump:'+type);
    tasklist.push('build');
    tasklist.push('copy:release');
    tasklist.push('md5sum');

    // Run SFTP three times: for minor version, patch version and stable
    // (check for --dev=true argument, in which case just upload to /dev)
    if (isDryRun === true) {
      grunt.verbose.writeln('Dry-running - no SFTP');
    } else if (isDev !== true) {
      grunt.verbose.writeln('Running SFTP tasks for stable release');
      var pkg = grunt.file.readJSON('package.json');
      var newVersion = semver.inc(pkg.version, type);
      var newMajor = semver.major(newVersion);
      var newMinor = semver.minor(newVersion);
      var newPatch = semver.patch(newVersion);
      tasklist.push('confirm:ftp');
      tasklist.push('sftp:cdn:'+newMajor+'.'+newMinor);
      tasklist.push('sftp:cdn:'+newMajor+'.'+newMinor+'.'+newPatch);
      tasklist.push('sftp:cdn:stable');
    } else {
      grunt.verbose.writeln('Running SFTP tasks for dev release');
      tasklist.push('sftp:cdn:dev');
    }

    grunt.task.run(tasklist);

  });

};