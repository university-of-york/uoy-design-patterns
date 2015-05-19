module.exports = function (grunt) {

  var path = require('path');

  return {
    options: {
      layoutsDir: 'src/layouts/',
      partialsDir: 'src/partials/',
      componentsDir: 'src/components/',
      nav: function(pages) {
        var navPage = "src/partials/nav.mustache";
        var subNavPage = "src/partials/subnav.mustache";
        var categories = {};
        pages.forEach(function(page, i) {
          if (page.category === false) {
            if (typeof categories[page.name] === 'undefined') {
              categories[page.name] = {};
            }
            // Top level page
            categories[page.name].page = page;
          } else {
            if (typeof categories[page.category] === 'undefined') {
              categories[page.category] = {};
              var catTitle = page.category.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
              categories[page.category].page = { dest:'#', title:catTitle };
            }
            if (typeof categories[page.category]['children'] === 'undefined') {
              categories[page.category]['children'] = [];
            }
            categories[page.category]['children'].push(page);
          }
          if (i === pages.length - 1) {
            var output = '<ul class="c-nav__list">\n',
                suboutput = '';
            for (var c in categories) {
              var cat = categories[c];
              var dest = cat.page.dest || '#';
              var title = cat.page.title || '#';
              output+= '  <li class="c-nav__item">\n';
              output+= '    <a class="c-nav__link" href="'+path.basename(cat.page.dest)+'">'+cat.page.title+'</a>\n';
              if (typeof cat['children'] !== 'undefined') {
                var currentSubcategory = '';
                suboutput+= '    <ul class="c-subnav__list c-subnav--'+cat.page.name+'">\n';
                // Loop through category pages
                cat['children'].forEach(function(p, j) {
                  if (p.subcategory && p.subcategory !== currentSubcategory) {
                    currentSubcategory = p.subcategory;
                    suboutput+= '      <li class="c-subnav__item c-subnav__title"><a class="c-subnav__link">'+p.subcategory+'</a></li>\n';
                  }
                  suboutput+= '      <li class="c-subnav__item"><a class="c-subnav__link" href="'+path.basename(p.dest)+'">'+p.title+'</a></li>\n';
                });
                suboutput+= '    </ul>\n';
              }
              output+= '  </li>\n';
            }
            output+= '</ul>\n';
            grunt.file.write(navPage, output);
            grunt.log.ok("Wrote file to " + navPage);
            grunt.file.write(subNavPage, suboutput);
            grunt.log.ok("Wrote file to " + subNavPage);
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
          rename: function(dest, src) {
            // remove numbers from start
            return dest + src.replace(/\d+\-/, '');
          },
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
          src: ['*.md', '!sample.md'],
          dest: 'build/',
          rename: function(dest, src) {
            // remove numbers from start
            return dest + src.replace(/\d+\-/, '');
          },
          ext: '.html'
        }
      ]
    }
  }
};