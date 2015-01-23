module.exports = {
  dev: {
    files: [
      {
        expand: true,
        cwd: 'src/templates/',
        src: '*.html',
        dest: 'src/'
      }
    ]
  },
  build: {}
};