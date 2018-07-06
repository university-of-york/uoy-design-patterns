module.exports = function (grunt) {

  var path = require('path');
  var component = require('../tasks/component');

  return {
    options: {
      layoutsDir: 'src/layouts/',
      partialsDir: 'src/partials/',
      postRender: component,
      nav: function(pages) {
        var navPage = "src/partials/nav.mustache";
        var subNavPage = "src/partials/subnav.mustache";
        var assocNavPage = "src/partials/assocnav.mustache";
        var categories = {};
        var target = grunt.task.current.files[0].dest;
        //var target = grunt.task.current.target; //grunt.task.current.files[0].dest;
        var taskOptions = grunt.task.current.options();
        var dirPrefix = ''; //!!taskOptions.build === true ? '/pattern-library/' : '/' ;

        if(!!taskOptions.build === true) {
            dirPrefix = '/pattern-library/';

            if(grunt.task.current.target === 'preview') {
                dirPrefix = '/preview' + dirPrefix;
            }
        } else {
            dirPrefix = '/';
        }

        pages.forEach(function(page, i) {
          // Top level page
          if (page.category === false) {
            // Set up category
            if (typeof categories[page.name] === 'undefined') {
              categories[page.name] = {};
            }
            categories[page.name].page = page;
          } else {
            // Set up category
            if (typeof categories[page.category] === 'undefined') {
              categories[page.category] = {};
              var catTitle = page.category.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
              categories[page.category].page = { dest:'#', title:catTitle };
            }
            if (typeof categories[page.category].children === 'undefined') {
              categories[page.category].children = [];
            }
            categories[page.category].children.push(page);
          }
          if (i === pages.length - 1) {
            // Main nav, subnav and associative nav (to go alongside main nav)
            var output = '<ul class="c-nav__list c-nav__list--structural">\n',
                suboutput = '',
                assocOutput = '';
            for (var c in categories) {
              var cat = categories[c];
              var dest = cat.page.dest || '#';
              var title = cat.page.title || '#';
              // Get path relative to cwd/dev or cmd/build

                /*
                using - grunt.task.current.target

                    dirprefix: /pattern-library/
                    path resolve: C:\Projects\design-patterns
                    target: preview
                    path relative: ..\build\css-components\index.html
                    cat page dest: C:\Projects\design-patterns\build\css-components\index.html
                 */
                /*
                using - grunt.task.current.files[0].dest

                    dirprefix: /preview//pattern-library/
                    path resolve: C:\Projects\design-patterns
                    target: build/index.html
                    path relative: ..\css-components\index.html
                    cat page dest: C:\Projects\design-patterns\build\css-components\index.html
                 */

                // output += '<div>';
                // output += 'dirprefix: ' + dirPrefix;
                // output += '<br />';
                // output += 'path resolve: ' + path.resolve(process.cwd());
                // output += '<br />';
                // output += 'target: ' + target;
                // output += '<br />';
                // output += 'current task target: ' + grunt.task.current.target;
                // output += '<br />';
                // output += 'path relative: ' + path.relative(path.resolve(process.cwd(), target+'/'), cat.page.dest);
                // output += '<br />';
                // output += 'cat page dest: ' + cat.page.dest;
                // output += '<br />';
                // output += 'final path: ' + dirPrefix + path.relative(path.resolve(process.cwd(), target+'/'), cat.page.dest).replace('..', '').replace(/\\/g, '/');
                // output += '</div>';



              var catPath = dirPrefix + path.relative(path.resolve(process.cwd(), target+'/'), cat.page.dest);

              // remove '..' and filepath slashes in wrong direction
              catPath = catPath.replace('..', '').replace(/\\/g, '/');

              output+= '  <li class="c-nav__item">\n';
              output+= '    <a class="c-nav__link" href="'+catPath+'">'+cat.page.title+'</a>\n';
              if (typeof cat.children !== 'undefined') {
                var currentSubcategory = '';
                suboutput+= '    <ul class="c-subnav__list c-subnav--'+cat.page.name+'">\n';
                assocOutput+= '    <ul class="c-nav__list c-nav__list--associative c-subnav--'+cat.page.name+'">\n';
                // Loop through category pages
                cat.children.forEach(function(p, j) {
                  // Get path relative to cwd/dev or cwd/build
                  var thisPath = dirPrefix + path.relative(path.resolve(process.cwd(), target+'/'), p.dest);

                    thisPath = thisPath.replace('..', '').replace(/\\/g, '/');

                  if (p.subcategory && p.subcategory !== currentSubcategory) {
                    currentSubcategory = p.subcategory;
                    suboutput+= '      <li class="c-subnav__item c-subnav__title"><a class="c-subnav__link">'+p.subcategory+'</a></li>\n';
                    assocOutput+= '      <li class="c-nav__item c-nav__title"><a class="c-nav__link">'+p.subcategory+'</a></li>\n';
                  }
                  suboutput+= '      <li class="c-subnav__item"><a class="c-subnav__link" href="'+thisPath+'">'+p.title+'</a></li>\n';
                  assocOutput+= '      <li class="c-nav__item"><a class="c-nav__link" href="'+thisPath+'">'+p.title+'</a></li>\n';
                });
                suboutput+= '    </ul>\n';
                assocOutput+= '    </ul>\n';
              }
              output+= '  </li>\n';
            }
            output+= '  <li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation">More&hellip;</a></li>';
            output+= '</ul>\n';
            grunt.file.write(navPage, output);
            grunt.verbose.ok("Wrote file to " + navPage);
            grunt.file.write(subNavPage, suboutput);
            grunt.verbose.ok("Wrote file to " + subNavPage);
            grunt.file.write(assocNavPage, assocOutput);
            grunt.verbose.ok("Wrote file to " + assocNavPage);
          }
        });
      }
    },
    dev: {
        options: {
            build: false
        },
        files: [
            {
              expand: true,
              cwd: 'src/pages/',
              src: ['**/*.md', '!sample.md'],
              dest: 'dev/',
              rename: function(dest, src) {
                // remove numbers from start of file and dir
                return dest + src.replace(/\d+\-/g, '');
              },
              ext: '.html'
            }
        ]
    },
    build: {
        options: {
            build: {
                release: true
            }
        },
        files: [
            {
              expand: true,
              cwd: 'src/pages/',
              src: ['**/*.md', '!sample.md'],
              dest: 'build/',
              rename: function(dest, src) {
                // remove numbers from start of file and dir
                return dest + src.replace(/\d+\-/g, '');
              },
              ext: '.html'
            }
        ]
    },
    preview: {
        options: {
            build: {
                preview: true
            }
        },
        files: [
            {
              expand: true,
              cwd: 'src/pages/',
              src: ['**/*.md', '!sample.md'],
              dest: 'build/',
              rename: function(dest, src) {
                  // remove numbers from start of file and dir
                  return dest + src.replace(/\d+\-/g, '');
              },
              ext: '.html'
            }
        ]
    }
  };
};
