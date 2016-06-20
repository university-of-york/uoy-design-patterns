module.exports = {
  build: {
    devFile : "src/js/vendor/modernizr/modernizr.js",
    dest : "build/js/modernizr.min.js",
    files : {
      src: ['src/js/app/**/*.js', 'src/sass/**/*']
     }
   }
};