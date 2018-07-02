// requirejs.config({
//   baseUrl: '/js',
//   paths: {
//     app: 'app',
//     picturefill: 'vendor/picturefill/picturefill',
//     es5shim: 'vendor/es5-shim/es5-shim',
//     jscookie: 'vendor/js-cookie/js.cookie',
//     iframeResizer: 'vendor/iframe-resizer/iframeResizer',
//     fuse: 'vendor/fuse/dist/fuse.min',
//     jquery: 'vendor/jquery/jquery'
//   }
// });
//
// requirejs(['app/main']);


// Import the styles in
import styles from 'sass/styles.raw.scss';
import docStyles from 'sass/docs.raw.scss';

// Kick off the main JS requirement
console.log('Loading project...');

import Main from 'js/app/main';

$(function() {
    // Init the project
    Main();
});

