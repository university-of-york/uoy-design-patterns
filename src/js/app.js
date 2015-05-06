requirejs.config({
  baseUrl: 'js',
  paths: {
    app: 'app',
    picturefill: 'vendor/picturefill/picturefill',
    es5shim: 'vendor/es5-shim/es5-shim',
    jquery: 'vendor/jquery/jquery'
  }
});

requirejs(['app/main']);