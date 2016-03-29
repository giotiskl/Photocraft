$(function() {

    //Mobile navigation
    $('.hamburger').click(function() {
        $('body').toggleClass('no-scroll');
        $(this).toggleClass('open');
        $('.main-nav ul').toggleClass('open');
        $('.overlay').toggleClass('open');
    });
    //Nav waypoint
    $('.main-header').waypoint(function() {
        $('.main-nav').toggleClass('sticky');
    }, {
        offset: '-1%',
    });
});
