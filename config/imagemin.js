module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['img/**/*.{png,jpg,gif}', 'media/**/*.{png,jpg,gif}'],
      dest: 'build/'
    }]
  }
};