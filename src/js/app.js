requirejs.config({
  baseUrl: '/js',
  paths: {
    app: 'app',
    picturefill: 'vendor/picturefill/picturefill',
    es5shim: 'vendor/es5-shim/es5-shim',
    jscookie: 'vendor/js-cookie/js.cookie',
    iframeResizer: 'vendor/iframe-resizer/iframeResizer',
    fuse: 'vendor/fuse/dist/fuse',
    jquery: 'vendor/jquery/jquery'
  }
});

requirejs(['app/main']);