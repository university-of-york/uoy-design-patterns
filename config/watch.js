module.exports = {
  compass: {
    files: ['src/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev']
  },
  templates: {
    files: ['src/**/*.mustache'],
    tasks: ['makedocs:dev'],
    options: { livereload: true, spawn:false }
  },
  pages: {
    files: ['src/pages/*.md'],
    tasks: ['newer:makedocs:dev'],
    options: { livereload: true, spawn:false }
  },
  js: {
    files: ['src/js/**/*.js'],
    tasks: ['newer:copy:dev'],
    options: { livereload: true, spawn:false }
  },
  autoprefix: {
    files: ['dev/css/*.raw.css'],
    tasks: ['autoprefixer:dev']
  },
  css: {
    files: ['dev/css/*.css'],
    options: { livereload: true, spawn:false }
  },
  html: {
    files: ['dev/*.html'],
    options: { livereload: true, spawn:false }
  }
};