var semver = require('semver');

module.exports = function (grunt) {
  return {
    release: {
      options: {
        question: function(files) {
          var type = grunt.task.current.args[0] || 'patch';
          var pkg = grunt.file.readJSON('package.json');
          var newVersion = semver.inc(pkg.version, type);
          grunt.log.writeln(newVersion)
          return 'Are you sure you want to release '+type+' version '+newVersion+' (y/n)? ';
        },
        input: '_key:y'
      }
    }
  };
};