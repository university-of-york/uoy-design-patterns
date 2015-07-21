module.exports = {
  build: {
    options: {
      keepSpecialComments: 0,
      sourceMap: true
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