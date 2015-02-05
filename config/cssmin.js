module.exports = {
  build: {
    options: {
      banner: '<%= banner.compact %>'
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