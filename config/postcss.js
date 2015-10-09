module.exports = {
  options: {
    processors: [
      require('autoprefixer')({ browsers: ['last 1 version'] })
    ]
  },
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