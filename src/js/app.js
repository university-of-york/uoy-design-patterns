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
    gsheetsApp: '//apis.google.com/js/api',
    firebaseApp: '//www.gstatic.com/firebasejs/5.3.0/firebase'
  }
});


requirejs(['app/globaldata'], function(data) {
    window.PL_DATA = data;
});


requirejs(['app/main']);