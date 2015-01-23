module.exports = {
  compass: {
    files: ['src/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev']
  },
  autoprefix: {
    files: ['dev/css/styles.raw.css'],
    tasks: ['autoprefixer']
  },
  templates: {
    files: ['src/**/*.md'],
    tasks: ['hologram:dev']
  },
  css: {
    files: ['dev/css/styles.css'],
    options: { livereload: true, spawn:false }
  },
  js: {
    files: ['src/js/**/*.js'],
    tasks: ['newer:copy:dev'],
    options: { livereload: true, spawn:false }
  },
  html: {
    files: ['dev/*.html'],
    options: { livereload: true, spawn:false }
  }
};