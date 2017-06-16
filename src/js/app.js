requirejs.config({
  baseUrl: '/js',
  paths: {
    app: 'app',
    picturefill: 'vendor/picturefill/picturefill',
    es5shim: 'vendor/es5-shim/es5-shim',
    jscookie: 'vendor/js-cookie/js.cookie',
    select2: 'vendor/select2/select2',
    iframeResizer: 'vendor/iframe-resizer/iframeResizer',
    jquery: 'vendor/jquery/jquery'
  }
});

requirejs(['app/main']);