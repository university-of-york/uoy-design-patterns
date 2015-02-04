module.exports = {
  compact: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy hh:MM:ss") %>*/',
  full: '/*!\n' +
        ' * <%= pkg.name %> v<%= pkg.version %>\n' +
        ' * Copyright (c) <%= pkg.author =%>\n' +
        ' *\n' +
        ' * This was developed and built by <%= _.pluck(pkg.contributors, "name").join(", ") %>\n' +
        ' */'
}