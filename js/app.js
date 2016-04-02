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
    $('.portfolio').imagesLoaded(function() {
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

        /*******************************
        *           ABOUT ME
        ********************************/
        $('.story-container').waypoint(function() {
            $('#photographer-img').addClass('animated fadeInUp');
            $('#story-now').addClass('animated fadeInRight');
            $('#story-senior').addClass('animated fadeInRight');
            $('#story-junior').addClass('animated fadeInRight');
            $('#story-education').addClass('animated fadeInRight');
        }, {
            offset: '80%'
        });
    });

    /*******************************
    *           CONTACT
    ********************************/
    $('#contact').waypoint(function() {
        $('.contact-details').addClass('animated fadeInUp');
    }, {
        offset: '80%'
    });

    /*******************************
    *           MISC
    ********************************/
    //Smooth scroll navigations
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        $('.navlink').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 500) {
                $('.navlink').not(this).removeClass('active');
                $(this).addClass('active');
            }
        });
    });
});
