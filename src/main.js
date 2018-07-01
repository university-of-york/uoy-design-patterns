// const requirejs = require('requirejs');
//
// requirejs.config({
//     baseUrl: '/js',
//     paths: {
//         app: 'app',
//         picturefill: 'picturefill',
//         es5shim: 'es5-shim',
//         jscookie: 'js.cookie',
//         iframeResizer: 'iframeResizer',
//         fuse: 'fuse.min',
//         jquery: 'jquery'
//     },
//     nodeRequire: require
// });

//requirejs(['app/main']);

// Import the styles in
import styles from 'sass/styles.raw.scss';
import docStyles from 'sass/docs.raw.scss';

// Kick off the main JS requirement
require('main');
