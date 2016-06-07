module.exports = {
  tinymce: {
    srcPath: 'src/sass/scopes/_tinymce.scss',
    buildPath: 'build/css/tinymce.css'
  },
  formstack: {
    srcPath: 'src/sass/scopes/_formstack.scss',
    buildPath: 'build/css/formstack.css'
  },
  formstackDev: {
    srcPath: 'src/sass/scopes/_formstack.scss',
    buildPath: 'dev/css/formstack.css'
  },
  test: {
    srcPath: 'src/sass/scopes/_test.scss',
    buildPath: 'dev/css/test.css',
    includeExtends: true
  }
};