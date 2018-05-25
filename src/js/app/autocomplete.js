/*

---
title: Autocomplete
name: equal-height-row-module
category: Javascript
---

 */
define(['jquery', 'fuse', 'app/utils'], function ($, FUSE, UTILS) {

  var $window = $(window);

  var defaultSearchFunction = function(searchTerm, onComplete) {

    var fuseOptions = {
      keys: [{
        name: 'title',
        weight: 0.7
      }, {
        name: 'subtitle',
        weight: 0.3
      }],
      threshold: 0.3,
      includeScore: true,
      includeMatches: true,
      tokenize:true,
      minMatchCharLength: 3
    };

    var fuse = new FUSE(this.results, fuseOptions);

    var fuseResult = fuse.search(searchTerm);

    // console.log(fuseResult);
    onComplete(fuseResult);

  };


  var AUTOCOMPLETE = function (options) {

    if (!options.input) return false;
    if (!options.results) return false;
    this.input = options.input;
    this.searchFunction = defaultSearchFunction;
    if (typeof options.results === 'function') {
      this.searchFunction = options.results;
    } else {
      if (options.results.length === 0) return false;
      this.results = options.results;
    }
    this.followLinks = options.followLinks || false;
    this.form = this.input.closest('form');
    this.list = $('.c-autocomplete__list', this.form);

    this.input.on('keyup', { that: this }, this.suggest);
    // Stop enter submitting form
    this.input.on('keypress keydown', function(e){
       if (e.keyCode === 13) { e.preventDefault(); }
    });
    this.input.on('focus', { that: this }, this.suggest);

    console.info(this);

    return true;

  };

  AUTOCOMPLETE.prototype.navigate = function(dir) {
    // Move selected item to next
    var $autocompleteItems = $('.c-autocomplete__item', this.list);
    var selectedItem = $autocompleteItems.filter('.is-selected');
    var selectedIndex = false;
    if (selectedItem.length === 1) {
      selectedIndex = selectedItem.index();
    }
    if (dir === 'down') {
      if (selectedIndex === false) {
        // Nothing selected yet
        selectedIndex = 0;
      } else {
        selectedIndex++;
        // Loop back round
        if (selectedIndex > $autocompleteItems.length-1) selectedIndex = 0;
      }
    }
    if (dir === 'up') {
      if (selectedIndex === false) {
        // Nothing selected yet
        selectedIndex = -1;
      } else {
        selectedIndex--;
      }
    }
    // Select correct item
    $autocompleteItems.removeClass('is-selected');
    $($autocompleteItems.get(selectedIndex)).addClass('is-selected');
    return true;
  };

  AUTOCOMPLETE.prototype.submitForm = function(e) {

    var that = e.data.that;

    // Update input with query
    var searchTerm = $('.c-autocomplete__item.is-selected .c-autocomplete__title', that.list).text();
    that.input.val(searchTerm);
    that.form.submit();

  };

  AUTOCOMPLETE.prototype.makeFeatureItem = function(feature) {

    var featureTitle = feature.item.title;
    var featureSubtitle = feature.item.subtitle;
    var featureItem = $('<li>').addClass("c-autocomplete__item");
    var featureLink = $('<a>').addClass("c-autocomplete__link")
                              .attr({
                                "href": feature.item.link || '#'
                              })
                              .appendTo(featureItem);
    var featureSpan = $('<span>').addClass("c-autocomplete__title")
                                 .text(featureTitle)
                                 .appendTo(featureLink);
    if (featureSubtitle !== 'null') {
      var featureSmall = $('<small>').addClass("c-autocomplete__subtitle")
                                     .text(featureSubtitle)
                                     .appendTo(featureLink);
    }
    //   /* Highlighting matches in text
    //    * This is buggy - needs fixing before we can use it
    //   $.each(feature.matches, function(j, match) {
    //     var newText = pathIndex(feature.item, match.key);
    //     var l = match.indices.length-1;
    //     // Start from the end so you don't disrupt indices
    //     for (;l > -1; l--) {
    //       var startText = newText.slice(0, match.indices[l][0]);
    //       var midText = newText.slice(match.indices[l][0], match.indices[l][1]+1);
    //       var endText = newText.slice(match.indices[l][1]+1);
    //       newText = startText+'<b>'+midText+'</b>'+endText;
    //     }
    //     if (match.key === "properties.title") {
    //       featureSpan.html(newText);
    //     } else if (match.key === "properties.subtitle") {
    //       featureSmall.html(newText);
    //     }
    //   });*/

    var that = this;
    featureLink.on('click', {that: that }, function(e) {
      // Should we follow the link or submit the form?
      if (that.followLinks !== true) {
        e.preventDefault();
        // Mark clicked item as is-selected and submit form
        var $thisItem = $(this).parent('.c-autocomplete__item');
        $thisItem.siblings().removeClass('is-selected');
        $thisItem.addClass('is-selected');
        that.submitForm(e);
      }
    });

    this.list.append(featureItem);

  };

   // Update autosuggest on keyup
  AUTOCOMPLETE.prototype.suggest = function(e) {

    e.preventDefault();

    var that = e.data.that;

    // Check if it's certain keys
    var keyCode = e.keyCode;
    var stopReturn = false;
    var searchTerm = that.input.val();

    if (searchTerm === '') {
      that.list.empty();
      return false;
    }

    switch (keyCode) {
      // Return
      case 13:

        if (that.list.children().length > 0 && searchTerm !== '') {
          if (that.followLinks === true) {
            // Go to the link!
            var $selectedLink = $('.c-autocomplete__item.is-selected a', this.list)[0];
            window.location = $selectedLink.href;
          } else {
            // If there's a selected option, update value
            that.submitForm(e);
          }
          stopReturn = true;
        }
        break;
      // Up
      case 38:
        that.navigate('up');
        stopReturn = true;
        break;
      // Down
      case 40:
        that.navigate('down');
        stopReturn = true;
        break;
      // Escape
      case 27:
        that.list.empty();
        // Send 'no selection' event to GA
        //addAnalyticsEvent('Search', 'No selection (query: '+searchTerm+')');
        stopReturn = true;
        break;
    }
    if (stopReturn === true) return false;

    that.list.empty();

    // Run the search function
    that.searchFunction(searchTerm, function(results) {

      if (results.length === 0) {
        // Send 'no results' event to GA
        // addAnalyticsEvent('Search', 'No results (query: '+searchTerm+')');
        that.makeFeatureItem({ title: "There are no results for that search term" });
        return false;
      }

      // Clicking elsewhere closes autocomplete
      $window.off('click.list');
      $window.on('click.list', function(e) {
        //console.log($(that.list).find($(e.target)));
        // Find out if click is on autocomplete
        if ($(that.list).find($(e.target)).length === 0) {
          that.list.empty();
        }
      });


      $.each(results, function(i, feature) {
        if (i > 9) return false;
        that.makeFeatureItem(feature);
      });

    });

    return true;
  };

  return AUTOCOMPLETE;

});
