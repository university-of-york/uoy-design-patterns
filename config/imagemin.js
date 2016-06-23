module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['img/**/*.{png,jpg,gif,ico}', 'media/**/*.{png,jpg,gif}'],
      dest: 'build/'
    }]
  }
};