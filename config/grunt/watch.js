module.exports = {
  compass: {
    files: ['src/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev']
  },
  autoprefix: {
    files: ['src/css/styles.raw.css'],
    tasks: ['autoprefixer']
  },
  templates: {
    files: ['src/templates/*.html'],
    tasks: ['newer:processhtml:dev']
  },
  css: {
    files: ['src/css/styles.css'],
    options: { livereload: true, spawn:false }
  },
  js: {
    files: ['src/js/**/*.js'],
    options: { livereload: true, spawn:false }
  },
  html: {
    files: ['src/*.html'],
    options: { livereload: true, spawn:false }
  }
};