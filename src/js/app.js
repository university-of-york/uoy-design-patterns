requirejs.config({
  baseUrl: 'js',
  paths: {
    app: 'app',
    picturefill: 'vendor/picturefill/picturefill',
    grunticon: 'vendor/grunticon',
    jquery: 'vendor/jquery/jquery'
  }
});

requirejs(['app/main']);