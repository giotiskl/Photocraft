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
    *            PORTFOLIO
    ********************************/
    //Initialize controls
    $('.portfolio .portfolio-btn').click(function() {
        $(this).toggleClass('active');
    });
    //Initialize Filterizr
    var fltr = $('.filtr-container').filterizr({
        delay: 25,
        filterOutCss: {
            opacity: 0,
            transform: 'scale(0.75)',
        },
        filterInCss: {
            opacity: 1,
            transform: 'scale(1)',
        },
        layout: 'sameWidth',
    });
    //Initialize Swipebox
    $('.filtr-item').click(function() {
        //Update swipebox links based on whether the item is filtered out or not
        $('.filtr-item').each(function(i, e) {
            var item = $(e),
                isFilteredOut = item.hasClass('filteredOut');
                itemLink = $(e).find('a');

            if (isFilteredOut)
                itemLink.removeClass('swipebox');
            else
                itemLink.addClass('swipebox');
        });
        $('.swipebox').swipebox();
    });
});
