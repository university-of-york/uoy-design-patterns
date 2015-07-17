module.exports = {
  dev: ['dev/css/styles.raw.css'],
  build: {
    options: {
      force: true
    },
    src: ['build/']
  },
  precssmin: ['build/css/*.raw.css'],
  postbuild: ['build/css/*', '!build/css/*.min.css'],
  live: ['build/*.html', 'build/css/docs.min.css']
};