module.exports = {
  build: {
    options: {
      level: {
        1: {
          all: true,
          specialComments: 0
        }
      }
    },
    files: [{
      expand: true,
      flatten: true,
      cwd: 'build/css/',
      src: ['**/*.css'],
      dest: 'build/css/',
      ext: '.min.css'
    }]
  }
};