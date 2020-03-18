 /*

---
title: Show more
name: show-more
category: Javascript
---

*/

define([], function () {
	// --------------------------------------------------
	// Contructor
	
	var SHOWMORE = function ( $context , options ) 
	{
		// Set our options and defaults	
		var defaultOptions = {
			contentID: Math.random().toString(36).substr(2, 9),
			elementsVisible: 2,
			buttonTextMore: 'Show more',
			buttonTextLess: 'Show less'
	  };
	
		// Modify options, merge defaults
		Object.keys(defaultOptions).forEach(function(key) {
			if( options[key] === undefined || options[key] === null )
				options[key] = defaultOptions[key];
		});
		
		// Merged options and defaults
		this.options = options;
			
		// The containing element for our show more
		this.$context = $context;
		
		// The containing element for our content
		this.content = this.$context.querySelector(".c-show-more__content");
	
		// Children of our content
		this.numberOfElements = this.content.children.length;
		
		// Set the initial state on container
		this.content.setAttribute("tabindex", "-1");
		this.isExpanded = false;
		
		// Make a list of elements inside the content div
		this.elements = [];
		for( var e = 0 ; e < this.content.children.length ; e ++ ) {
			this.elements.push( this.content.children[ e ] );
		}
	
		console.log( this.options );
	
		// Quit now if there are no elements to hide
		if( this.numberOfElements <= this.options.elementsVisible ) return;
	
	
	
	
		this.initialise();
	};
	
	// --------------------------------------------------
	// Initialisation
	
	SHOWMORE.prototype.initialise = function()
	{
		// Initialise button
		this.create_button();
		
		// Initialise wrapper
		this.create_wrapper();
	
		// Initialise content toggle and bind this to it
		this.button.addEventListener('click' , this.toggle.bind(this));
	};
	
	// --------------------------------------------------
	// Create a button
	
	SHOWMORE.prototype.create_button = function(  )
	{ 
		// Create a button
		this.button = document.createElement( 'button' );
		// Set initial button text
		this.buttonText = ( this.button.innerHTML = this.options.buttonTextMore + '<i class="c-icon c-icon--chevron-down c-icon--after"></i>' );
		// Set style
		this.button.setAttribute('class', 'c-btn c-btn--medium c-btn--secondary');
		// Set initial aria-label
		this.button.setAttribute( 'aria-label', this.options.buttonTextMore );
		// Set aria-controls
		this.button.setAttribute( 'aria-controls', this.options.contentID );
		// Place the button at the botton of the container
		this.content.parentNode.appendChild(this.button);
	};
	
	// --------------------------------------------------
	// Wrap hidden content in new container
	
	SHOWMORE.prototype.create_wrapper = function()
	{
		// Move hidden elements in to div
		var wrapper = document.createElement('div');
	
		// Set the wrapper ID 
		wrapper.setAttribute('id', this.options.contentID);
		
		// Add class to reference and set initial is-closed state
		wrapper.setAttribute('class', 'hidden-content is-closed');	
	
		// Gather up the elements that need to be placed in the wrapper
		for (var i = this.options.elementsVisible; i < this.numberOfElements; i++) 
		{
			// Add each element to the wrapper
			  wrapper.append( this.elements[i] );
		}
	
		// Add our wrapper + contents to the container
		this.content.appendChild(wrapper);
	
		// Get the name of the div containing the hidden content
		this.hiddenElements = wrapper;
		this.hiddenElements.setAttribute("aria-expanded", "false");
	};
	
	// --------------------------------------------------
	// Content toggle
	
	SHOWMORE.prototype.toggle = function()
	{
		// Set classes based on aria-expanded true/false	
		if (!this.isExpanded) {
			this.hiddenElements.classList.remove('is-closed');
			this.hiddenElements.classList.add('is-open');
			this.buttonText = this.options.buttonTextLess + '<i class="c-icon c-icon--chevron-up c-icon--after"></i>';
			this.isExpanded = true;		
		} else {
			this.hiddenElements.classList.remove('is-open');
			this.hiddenElements.classList.add('is-closed');
			this.buttonText =  this.options.buttonTextMore + '<i class="c-icon c-icon--chevron-down c-icon--after"></i>';
			this.isExpanded = false;
	
		}
		// Set the button state on toggle
		this.hiddenElements.setAttribute("aria-expanded", this.isExpanded);
		this.button.innerHTML = this.buttonText;
		this.button.setAttribute("aria-label", this.buttonText);
		
	};
	
	return SHOWMORE;
	});