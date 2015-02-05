module.exports = {
  compact: '/*! <%= package.name %> <%= package.version %> <%= grunt.template.today("dd-mm-yyyy hh:MM:ss") %>*/',
  full: '/*!\n' +
        ' * <%= package.name %> v<%= package.version %>\n' +
        ' * Copyright <%= grunt.template.today("yyyy") %> <%= package.author.name %>\n' +
        ' *\n' +
        ' * Developed and built by <%= _.pluck(package.contributors, "name").join(", ") %>\n' +
        ' */'
};