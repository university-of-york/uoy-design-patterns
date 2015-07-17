module.exports = {
  build: {
    options: {
      text: '<%= banner.compact %>\n'
    },
    files: {
      'build/js/app.min.js': 'build/js/app.min.js',
      'build/css/styles.min.css': 'build/css/styles.min.css'
    }
  },
  live: {
    options: {
      text: '<%= banner.full %>\n'
    },
    files: {
      'build/js/app.min.js': 'build/js/app.min.js',
      'build/css/styles.min.css': 'build/css/styles.min.css'
    }
  }
};