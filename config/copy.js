module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'img/**', 'fonts/**', 'media/**'],
      dest: 'dev/'
    }]
  },
  templates: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['templates/**'],
      dest: 'dev/'
    }]
  },
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['fonts/**', 'media/**', 'js/prism.js', 'js/iframeResizer.contentWindow.min.js'],
      dest: 'build/'
    }]
  }
};