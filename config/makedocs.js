module.exports = {
  options: {
    layoutsDir: 'src/layouts/',
    partialsDir: 'src/partials/',
    componentsDir: 'src/components/'
  },
  dev: {
    files: [
      {
        expand: true,
        cwd: 'src/pages/',
        src: ['*.md'],
        dest: 'dev/',
        ext: '.html'
      }
    ]
  },
  build: {
    options: {
      build: true
    },
    files: [
      {
        expand: true,
        cwd: 'src/pages/',
        src: ['*.md'],
        dest: 'build/',
        ext: '.html'
      }
    ]
  }
};