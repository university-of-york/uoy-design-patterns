module.exports = {
  compass: {
    files: ['src/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev']
  },
  templates: {
    files: ['src/**/*.mustache'],
    tasks: ['makedocs:dev']
  },
  pages: {
    files: ['src/pages/*.md'],
    tasks: ['newer:makedocs:dev']
  },
  js: {
    files: ['src/js/**/*.js'],
    tasks: ['newer:copy:dev']
  },
  autoprefix: {
    files: ['dev/css/*.raw.css'],
    tasks: ['autoprefixer:dev']
  }
};