
module.exports = function(grunt) {

  var filename = 'secret.json';
  if (!grunt.file.exists(filename)) {
    grunt.log.warn('Please add a scret.json file to the root of the project');
    return false;
  }
  var secret = grunt.file.readJSON(filename);

  return {
    build: {
      files: {
        src: ["build/**/*"]
      },
      options: {
        path: '/usr/yorkweb/web/pattern-library/',
        host: secret.host,
        username: secret.username,
        password: secret.password,
        srcBasePath: "build/",
        createDirectories: true,
        showProgress: true
      }
    }
  }
};