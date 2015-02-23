module.exports = {
  compass: {
    files: ['src/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev']
  },
  components: {
    files: ['src/components/**/*.mustache'],
    tasks: ['makedocs:dev']
  },
  pages: {
    files: ['src/pages/*.md', '!src/pages/sample.md'],
    // tasks: ['newer:makedocs:dev'] // Recreates nav with single, changed file.
    tasks: ['makedocs:dev']
  },
  js: {
    files: ['src/js/**/*.js'],
    tasks: ['newer:copy:dev']
  },
  autoprefix: {
    files: ['dev/css/*.raw.css'],
    tasks: ['newer:autoprefixer:dev']
  }
};