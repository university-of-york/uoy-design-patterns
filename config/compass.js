module.exports = {
  dev: {
    options: {
      sassDir: 'src/sass',
      cssDir: 'dev/css',
      outputStyle: 'expanded'
    }
  },
  build: {
    options: {
      sassDir: 'src/sass',
      cssDir: 'build/css',
      outputStyle: 'expanded'
    }
  }
};