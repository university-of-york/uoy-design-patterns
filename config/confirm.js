module.exports = {
  release: {
    options: {
      question: function(files) {
        var type = 'patch';
        var version = '1.3.12';
        return 'Are you sure you want to release '+type+' version '+version+' (y/n)? ';
      },
      input: '_key:y'
    }
  }
};