
module.exports = function(grunt) {

  var secret = grunt.file.readJSON('../secret.json');

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