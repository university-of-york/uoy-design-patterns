//  load our main app
requirejs.config({
  baseUrl: '/js',
  paths: {
    app: 'app',
    picturefill: 'vendor/picturefill/picturefill',
    es5shim: 'vendor/es5-shim/es5-shim',
    jscookie: 'vendor/js-cookie/js.cookie',
    iframeResizer: 'vendor/iframe-resizer/iframeResizer',
    fuse: 'vendor/fuse/dist/fuse.min',
    jquery: 'vendor/jquery/jquery',
    gsheetsApp: '//apis.google.com/js/api'
  }
});

// set PL_DATA variable early to make sure it's available to modules
window.PL_DATA = window.PL_DATA || {};

requirejs(['app/globaldata'], function(data) {
    window.PL_DATA = data;
});


requirejs(['app/main']);