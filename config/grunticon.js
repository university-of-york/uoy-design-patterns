module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src/icons/svg',
      src: ['*.svg', '*.png'],
      dest: 'src/'
    }],
    options: {
      datasvgcss: 'sass/icons/_svg-icons.scss',
      datapngcss: 'sass/icons/_png-icons.scss',
      urlpngcss: 'sass/icons/_png-urls.scss',
      loadersnippet: 'icons/loader.js',
      pngfolder: 'img/icons/',
      pngpath: '../img/icons/',
      cssprefix: '.icon-',
      defaultWidth: '100px',
      defaultHeight: '100px',
      previewhtml: 'icons/preview.html',
      tmpDir: 'tmp/icons/',
      colors: {
        light: "#fefeff",
        dark: "#000001"
      },
      dynamicColorOnly: true
    }
  }
};