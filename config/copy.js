module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'img/**', 'fonts/**', 'media/**'],
      dest: 'dev/'
    }]
  },
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['fonts/**', 'js/prism.js'],
      dest: 'build/'
    }]
  }
};