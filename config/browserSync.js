module.exports = {
  dev: {
    bsFiles: {
      src: ['dev/css/*.css', '!dev/css/*.raw.css', 'dev/js/**.js', 'dev/*.html']
    },
    options: {
      server: {
        baseDir: "dev/"
      },
      // Wait 2 seconds before sending another reload command
      reloadDebounce: 2000,
      minify:false,
      port: 1723,
      watchTask: true
    }
  }
};