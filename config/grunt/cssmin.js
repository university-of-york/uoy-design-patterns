module.exports = {
  build: {
    options: {
      banner: '<%= banner.compact %>'
    },
    src: 'dev/css/styles.css',
    dest: 'build/css/styles.min.css'
  }
};