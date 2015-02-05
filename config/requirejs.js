module.exports = {
  build: {
    options: {
      name: 'app',
      baseUrl: 'src/js/',
      mainConfigFile: 'src/js/app.js',
      out: 'build/js/app.min.js',
      include: ['vendor/requirejs/require.js'],
      optimize: 'uglify2',
      uglify2: {
        compress: {
          drop_console: true
        },
        warnings: true
      },
      unsafe: true,
      preserveLicenseComments: true,
      wrap: {
        start: '<%= banner.full %>\n',
        end: ''
      }
    }
  }
};