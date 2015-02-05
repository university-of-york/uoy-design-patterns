module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'dev/css/',
      src: ['*.raw.css'],
      dest: 'dev/css',
      ext: '.css'
    }]
  },
  build: {
    files: [{
      expand: true,
      cwd: 'build/css/',
      src: ['*.raw.css'],
      dest: 'build/css',
      ext: '.css'
    }]
  }
};