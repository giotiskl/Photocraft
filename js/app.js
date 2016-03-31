$(function() {

    /*******************************
    *        MAIN NAVIGATION
    ********************************/
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
        $('.main-nav ul li').toggleClass('open');
        $('.overlay').toggleClass('open');
    }

    /*******************************
    *      PORTFOLIO CONTROLS
    ********************************/
    $('.portfolio .portfolio-btn').click(function() {
        $(this).toggleClass('active');
    });

    $('.filtr-container').filterizr({
        delay: 25,
        filterOutCss: {
            opacity: 0,
            transform: 'scale(0.75)',
            visibility: 'hidden'
        },
        filterInCss: {
            opacity: 1,
            transform: 'scale(1)',
            visibility: 'visible'
        },
        layout: 'sameWidth',
    });

});
