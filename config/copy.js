module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src',
      src: ['js/**', 'img/**', 'fonts/**', 'media/**'],
      dest: 'dev'
    }]
  }
};