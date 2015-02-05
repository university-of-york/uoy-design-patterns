module.exports = {
  dev: ['dev/css/styles.raw.css'],
  build: {
    options: {
      force: true
    },
    src: ['build/']
  },
  postbuild: ['build/css/*', '!build/css/*.min.css'],
  live: ['build/*.html', 'build/css/docs.min.css']
};