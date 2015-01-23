module.exports = {
  dev: {
    files: [{
      expand: true,
      src: ['dev/js/app.js', 'dev/js/app/**']
    }]
  },
  build: {
    src: 'build/js/app.js'
  }
};