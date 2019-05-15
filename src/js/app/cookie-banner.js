/*

---

title: Cookie banner
name: cookie-banner
category: modules

---

*/

define(['jquery', 'jscookie'], function ($, COOKIES) {

    // --------------------------------------------------

    var cookieName = 'cookie-banner-dismissed';
    var bodyClass = 'has-c-cookie-banner';

    var cookiesPageURL = 'https://www.york.ac.uk/about/legal-statements/cookies/';
    var bannerText = "<p>By continuing to use the site you confirm that you're happy with <a href=\""+cookiesPageURL+"\">our use of cookies</a>.</p>";

    var bannerHTML = "" +
        "<div class=\"c-cookie-banner\">" +
            "<div class=\"c-cookie-banner__content\">" +
                bannerText +
            "</div>" +
            "<div class=\"c-cookie-banner__controls\">" +
                "<a title=\"Dismiss this notification\" class=\"c-cookie-banner__dismiss\" href=\"#\"><i class=\"c-icon c-icon--close\"></i></a>" +
            "</div>" +
        "</div>";

    // --------------------------------------------------

    var COOKIEBANNER = function() {

        // No cookies? No banner needed.
        if( !this.cookiesEnabled() ) return;

        // We'll store our banner element here
        this.$banner = null;

        // Check for the cookie...
        if( !this.hasCookie() ) {
            // Generate our banner if the cookie isn't set
            this.addBanner();
        }

    };

    // --------------------------------------------------
    // Check for the cookie banner cookie

    COOKIEBANNER.prototype.addBanner = function() {

        // Inject our banner
        this.$banner = $( bannerHTML ).appendTo( 'body' );

        // Add a body class to increase footer's bottom padding
        $( 'body' ).addClass( bodyClass );

        // Add a listener for the dismiss button
        this.$banner.on( 'click' , '.c-cookie-banner__dismiss' , this.dismissClickHandler.bind( this ) );
    };

    // --------------------------------------------------
    // Click handler for dismiss button

    COOKIEBANNER.prototype.dismissClickHandler = function( e ) {

        // Prevent anything else happening (not that it should)
        e.preventDefault();

        // Nuke the banner
        this.destroyBanner();
    };

    // --------------------------------------------------
    // Destroys our cookie banner

    COOKIEBANNER.prototype.destroyBanner = function() {

        // Destroy our banner element
        this.$banner.remove();

        // Remove the body class to collapse the footer
        $( 'body' ).removeClass( bodyClass );

        // Set our cookie to mark the banner as being dismissed
        this.setCookie();
    };

    // --------------------------------------------------
    // Check that cookies are enabled and functioning
    // Via: https://github.com/Modernizr/Modernizr/commit/33f00fbbeb12e92bf24711ea386e722cce6f60cc

    COOKIEBANNER.prototype.cookiesEnabled = function() {

        // Quick test if browser has cookieEnabled host property
        if( navigator.cookieEnabled ) return true;

        // Create a test cookie
        document.cookie = "cookietest=1";
        var ret = document.cookie.indexOf( "cookietest=" ) != -1;

        // Delete the test cookie
        document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";

        return ret;
    };

    // --------------------------------------------------
    // Check for the cookie banner cookie

    COOKIEBANNER.prototype.hasCookie = function() {
        return COOKIES.get( cookieName );
    };

    // --------------------------------------------------
    // Set our cookie banner cookie to indicate the banner has been dimissed

    COOKIEBANNER.prototype.setCookie = function() {
        COOKIES.set( cookieName , true , { domain: this.getDomain() } );
    };

    // --------------------------------------------------
    // Retrieves the domain for which the cookie should be set

    COOKIEBANNER.prototype.getDomain = function() {

        var hostname = document.location.hostname;

        // Return all subdomains for york.ac.uk if on york.ac.uk...
        if( hostname.indexOf( 'york.ac.uk' ) != -1 ) {
            return '.york.ac.uk';
        }

        // ...else leave blank to apply to current domain only
        return null;
    };

    // --------------------------------------------------

    return COOKIEBANNER;
});
