module.exports = function (grunt) {

  var path = require('path');

  return {
    options: {
      layoutsDir: 'src/layouts/',
      partialsDir: 'src/partials/',
      componentsDir: 'src/components/',
      nav: function(pages) {
        var navPage = "src/partials/nav.mustache";
        var categories = {};
        pages.forEach(function(page, i) {
          if (page.category === false) {
            // Top level page
            categories[page.name] = page;
          } else {
            if (typeof categories[page.category] === 'undefined') {
              categories[page.category] = [];
            }
            categories[page.category].push(page);
          }
          if (i === pages.length - 1) {
            var output = '<nav>\n';
            output+= '<ul>\n';
            for (var c in categories) {
              // Top level pages have a 'false' category value
              if (categories[c].category === false) {
                output+= '  <li><a href="'+path.basename(categories[c].dest)+'">'+categories[c].title+'</a></li>\n';
              } else {
                output+= '  <li>\n';
                output+= '    <a href="#">'+c+'</a>\n';
                output+= '    <ul>\n';
                // Loop through category pages
                categories[c].forEach(function(j, p) {
                  var thisPage = categories[c][p];
                  output+= '      <li><a href="'+path.basename(thisPage.dest)+'">'+thisPage.title+'</a></li>\n';
                });
                output+= '    </ul>\n';
                output+= '  </li>\n';
              }
            }
            output+= '</ul>\n';
            output+= '</nav>\n';
            grunt.file.write(navPage, output);

          }
        });
      }
    },
    dev: {
      files: [
        {
          expand: true,
          cwd: 'src/pages/',
          src: ['*.md', '!sample.md'],
          dest: 'dev/',
          ext: '.html'
        }
      ]
    },
    build: {
      options: {
        build: true
      },
      files: [
        {
          expand: true,
          cwd: 'src/pages/',
          src: ['*.md'],
          dest: 'build/',
          ext: '.html'
        }
      ]
    }
  }
};