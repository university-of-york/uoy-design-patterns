module.exports = {
  build: {
    options: {
      keepSpecialComments: 0
    },
    files: [{
      expand: true,
      cwd: 'build/css/',
      src: ['*.css'],
      dest: 'build/css/',
      ext: '.min.css'
    }]
  }
};