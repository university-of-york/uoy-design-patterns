module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src',
      src: ['js/**'],
      dest: 'dev'
    }]
  },
  build: {
    files: [{
      expand: true,
      cwd: 'dev',
      src: ['img/**'],
      dest: 'build'
    }]
  }
};