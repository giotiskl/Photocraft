$(function() {

    //Mobile navigation
    $('.hamburger').click(function() {
        toggleNavigation();
    });
    //Nav waypoint
    $('.main-header').waypoint(function() {
        $('.main-nav').toggleClass('sticky');
    }, {
        offset: '-1%',
    });

    /**
    * Toggles the navigation in mobile
    */
    function toggleNavigation() {
        $('body').toggleClass('no-scroll');
        $('.hamburger').toggleClass('open');
        $('.main-nav ul').toggleClass('open');
        $('.overlay').toggleClass('open');
    }
});
