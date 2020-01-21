module.exports = {
  dev: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'src/',
      src: ['js/**', 'img/**', 'fonts/**', 'media/**', 'data/**'],
      dest: 'dev/'
    }]
  },
  templates: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'src/',
      src: ['templates/**'],
      dest: 'dev/'
    }]
  },
  preview: {
      files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          src: ['templates/**', 'img/favicons/webmanifest.json', 'img/favicons/browserconfig.xml'],
          dest: 'build/'
      }]
  },
  build: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'src/',
      src: ['fonts/**', 'media/**', 'js/prism.js', 'js/iframeResizer.contentWindow.min.js', 'opensearch.xml', 'data/**', 'img/favicons/webmanifest.json', 'img/favicons/browserconfig.xml'],
      dest: 'build/'
    }]
  },
  release: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'build/',
      src: ['css/**', 'fonts/**', 'img/**', 'js/**', 'opensearch.xml', 'data/**'],
      dest: 'release/'
    },
    {
        expand: true,
        dot: true,
        cwd: './',
        src: ['package.json', 'readme.md'],
        dest: 'release/'
    }]
  }
};