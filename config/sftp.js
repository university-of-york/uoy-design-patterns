
module.exports = function(grunt) {

  var filename = 'secret.json';
  if (!grunt.file.exists(filename)) {
    grunt.log.warn('Please add a secret.json file to the root of the project');
    return false;
  }
  var secret = grunt.file.readJSON(filename);

  return {
    patternlibrary: {
      files: {
        src: ["build/**/*"]
      },
      options: {
        path: "/usr/yorkweb/web/pattern-library/",
        host: secret.patternlibrary.host,
        username: secret.patternlibrary.username,
        password: secret.patternlibrary.password,
        srcBasePath: "build/",
        createDirectories: true,
        showProgress: true
      }
    },
    cdn: {
      files: {
        src: ["build/css/**/*","build/fonts/**/*","build/img/**/*","build/js/**/*"]
      },
      options: {
        path: "/usr/yorkweb/web/static/test/a/",
        host: secret.cdn.host,
        username: secret.cdn.username,
        password: secret.cdn.password,
        srcBasePath: "build/",
        createDirectories: true,
        showProgress: true
      }
    }
  }
};