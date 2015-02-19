requirejs.config({
  baseUrl: 'js',
  paths: {
    app: 'app',
    picturefill: 'vendor/picturefill/picturefill',
    jquery: 'vendor/jquery/jquery'
  }
});

requirejs(['app/main']);