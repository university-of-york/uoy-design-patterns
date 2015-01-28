module.exports = {
  compass: {
    files: ['src/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev', 'hologram:dev']
  },
  templates: {
    files: ['src/**/*.md'],
    tasks: ['hologram:dev']
  },
  js: {
    files: ['src/js/**/*.js'],
    tasks: ['newer:copy:dev', 'hologram:dev'],
    options: { livereload: true, spawn:false }
  },
  autoprefix: {
    files: ['dev/css/styles.raw.css'],
    tasks: ['autoprefixer']
  },
  css: {
    files: ['dev/css/styles.css'],
    options: { livereload: true, spawn:false }
  },
  html: {
    files: ['dev/*.html'],
    options: { livereload: true, spawn:false }
  }
};