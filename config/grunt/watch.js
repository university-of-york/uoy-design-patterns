module.exports = {
  compass: {
    files: ['src/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev']
  },
  autoprefix: {
    files: ['src/css/styles.raw.css'],
    tasks: ['autoprefixer']
  },
  css: {
    files: ['src/css/styles.css'],
    options: { livereload: true}
  },
  js: {
    files: ['src/js/**/*.js'],
    options: { livereload: true}
  },
  html: {
    files: ['src/templates/*.html'],
    tasks: ['newer:processhtml:dev'],
    options: { livereload: true}
  }
};