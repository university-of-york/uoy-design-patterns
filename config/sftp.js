module.exports = function(grunt, options) {

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
        src: ["release/**/*"]
      },
      options: {
        path: function() {
          var versionDir = grunt.task.current.args[0] || "dev";
          return "/usr/yorkweb/web/static/"+versionDir+"/";
        },
        host: secret.cdn.host,
        username: secret.cdn.username,
        password: secret.cdn.password,
        srcBasePath: "release/",
        createDirectories: true,
        showProgress: true
      }
    }
  };
};