requirejs.config({
  baseUrl: 'js',
  paths: {
    app: 'app',
    jquery: 'vendor/jquery/jquery'
  }
});

requirejs(['app/main']);