define(['jquery'], function ($) {
// --------------------------------------------------
// Focus trap

var FOCUSTRAP = function( $element )
{
    this.element = $element;

    // Attach our keydown event listener
    $element.addEventListener( "keydown" , this.keydown_handler.bind( this ) );
};

// --------------------------------------------------

FOCUSTRAP.prototype.keydown_handler = function( e )
{
    // Has tab been pressed?
    var tab_is_pressed = ( e.key === "Tab" || e.keyCode === 9 );

    if( !tab_is_pressed ) return; // If not abandon now

    // Elements that can be focussed
    var focusables = this.element.querySelectorAll( 'a[href]:not([disabled]) , button:not([disabled]) , textarea:not([disabled]) , input[type="text"]:not([disabled]) , input[type="radio"]:not([disabled]) , input[type="checkbox"]:not([disabled]) , select:not([disabled])' );
    
    // Get the first and last of them
    var first_focusable = focusables[ 0 ];
    var last_focusable = focusables[ focusables.length - 1 ];

    console.log( first_focusable );
    console.log( last_focusable );
    
    if( e.shiftKey ) // Tabbing backwards?
    {
        if( document.activeElement === first_focusable )
        {
            last_focusable.focus();
            e.preventDefault();
        }
    }
    else // ...or tabbing forwards?
    {
        if( document.activeElement === last_focusable )
        {
            first_focusable.focus();
            e.preventDefault();
        }
    }
    
};

// --------------------------------------------------


return FOCUSTRAP;
});
