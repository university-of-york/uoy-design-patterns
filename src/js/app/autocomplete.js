/*

---
title: Autocomplete
name: equal-height-row-module
category: Javascript
---

 */
define(['jquery', 'fuse', 'app/utils'], function ($, FUSE, UTILS) {

  var $window = $(window);

  // Takes 'oldText' and adds <b> tags in at 'matches' array
  // e.g. [0,2] will add <b> at 0th position, </b> at 2nd position
  var emboldenSearchTerm = function(oldText, indices) {
    var newText;
    var startText = oldText.slice(0, indices[0]);
    var midText = oldText.slice(indices[0], indices[1]+1);
    var endText = oldText.slice(indices[1]+1);
    //console.log(startText, midText, endText);
    newText = startText+'<b>'+midText+'</b>'+endText;
    return newText;
  };

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
    this.category = options.category || 'Autocomplete';
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

    this.input.on('keyup', { that: this }, UTILS.debounce( this.suggest , 200 ) );
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
    var featureBadge = feature.item.badge;
    var featureSubtitle = feature.item.subtitle;
    var featureItem = $('<li>').addClass("c-autocomplete__item");
    // Create div if link is not set (i.e. it's unclickable)
    var featureLink;
    if (feature.item.link) {
      featureLink = $('<a>').attr({ "href": feature.item.link });
    } else {
      featureLink = $('<div>');
    }
    featureLink.addClass("c-autocomplete__link")
               .appendTo(featureItem);
    var featureSpan = $('<span>').addClass("c-autocomplete__title")
                                 .text(featureTitle)
                                 .appendTo(featureLink);
    if (featureBadge) {
      var badge = $(featureBadge).appendTo(featureLink);
    }

    if (featureSubtitle !== 'null') {
      var featureSmall = $('<small>').addClass("c-autocomplete__subtitle")
                                     .text(featureSubtitle)
                                     .appendTo(featureLink);
    }

    // THIS DOESN'T WORK!
    // Was adding in odd </b>s on searching for "James P"
    // Please thoroughly test before putting live
    // Highlighting matches in text
    /*
    if (feature.matches) {
      // Version for FuseJS results
      $.each(feature.matches, function(j, match) {
        var newText = featureTitle;
        var newElem = featureSpan;
        if (match.key === "subtitle") {
          newText = featureSubtitle;
          newElem = featureStrong;
        }
        var l = match.indices.length-1;
        // Start from the end so you don't disrupt indices
        for (;l > -1; l--) {
          newText = emboldenSearchTerm(newText, match.indices[l]);
        }
        newElem.html(newText);
      });
    } else {
      // Manual search using regex
      // Get search term
      var searchTerm = this.input.val();
      var searchre = new RegExp(searchTerm, 'gi');
      var titleSearch;
      var newTitleText = featureTitle;
      var i = 0;
      while ((titleSearch = searchre.exec(featureTitle)) !== null) {
        console.log(titleSearch);
        // Push index forward 7 chars for each match ("<b></b>")
        var startIndex = titleSearch.index+(i*7);
        var endIndex = titleSearch.index+searchTerm.length-1+(i*7);
        var titleIndex = [startIndex, endIndex];
        newTitleText = emboldenSearchTerm(newTitleText, titleIndex);
        featureSpan.html(newTitleText);
        i++;
      }
      if (featureSubtitle !== 'null') {
        var subtitleSearch;
        var newSubtitleText = featureSubtitle;
        var j = 0;
        while ((subtitleSearch = searchre.exec(featureSubtitle)) !== null) {
          var startSubIndex = subtitleSearch.index+(j*7);
          var endSubIndex = subtitleSearch.index+searchTerm.length-1+(j*7);
          var subtitleIndex = [startSubIndex, endSubIndex];
          newSubtitleText = emboldenSearchTerm(newSubtitleText, subtitleIndex);
          featureStrong.html(newSubtitleText);
          j++;
        }
      }
    }
    */

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
      //Close list after a slight pause
      setTimeout(function() {
        that.list.empty();
      }, 400);
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
        UTILS.addAnalyticsEvent(that.category, 'Search', 'No selection (query: '+searchTerm+')');
        stopReturn = true;
        break;
    }
    if (stopReturn === true) return false;

    that.list.empty();

    // Run the search function
    that.searchFunction(searchTerm, function(results) {

      if (results.length === 0) {
        // Send 'no results' event to GA
        UTILS.addAnalyticsEvent(that.category, 'Search', 'No results (query: '+searchTerm+')');
        that.makeFeatureItem({ item: { title: "There are no results for that search term", link: false }});
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
