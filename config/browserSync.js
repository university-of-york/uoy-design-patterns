module.exports = {
  dev: {
    bsFiles: {
      src: ['dev/css/*.css', '!dev/css/*.raw.css', 'dev/js/**.js', 'dev/*.html']
    },
    options: {
      server: {
        baseDir: "dev/"
      },
      watchTask: true
    }
  }
};