module.exports = {
  build: {
    options: {
      keepSpecialComments: 1
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