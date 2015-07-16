/*

---

title: Responsive tables
name: responsive-table-module
category: modules

---

*/

define(['jquery'], function ($) {

  // "Private" variables (only available inside the module)

  var columns,
      rows,
      columnClasses = [];

  var addRowClasses = function () {

    $.each(rows, function (i, row) {
      var cells = $(row).children('th, td');
      $.each(cells, function (j, cell) {
        $(cells[j]).addClass(columnClasses[j]);
      });
    });

  };

  var getColClasses = function (onComplete) {

    $.each(columns, function (i, column) {
      var $column = $(column);
      var span = $column.attr('span') || 1;
      for (var j = 0; j < span; j++) {
        columnClasses.push(column.className);
      }
      if (i === columns.length-1) {
        onComplete(columnClasses);
      }

    });

  };


  // Define your 'class'
  var TABLE = function (options) {

    if (!options.container) return false;

    this.container = $(options.container);
    columns = this.container.find('col');
    rows = this.container.find('tr');

    getColClasses(addRowClasses);

    // Return true or false (or something else)
    return true;

  };

  return TABLE;

});
