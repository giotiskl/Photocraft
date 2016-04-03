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
    });

    /*******************************
    *           ABOUT ME
    ********************************/
    $('.cv-container').imagesLoaded(function() {
        /**
        * (Re)arranges the story pointer buttons in the timeline responsively
        */
        function setupTimelineControls() {
            var onMobile   = $(window).width() < 751,
                distance   = (100 / $('.story-pointer').size()),
                direction  = onMobile ? 'left' : 'top';
                initMargin = distance / 2 - (onMobile ? 2 : 5);

            $('.story-pointer').each(function(i, e) {
                //Reset
                $(e).css({
                    top: 0,
                    left: 0
                });
                //Set left - top responsively
                if (onMobile)
                    $(e).css('top', '-0.75rem');
                else
                    $(e).css('left', '-0.65rem');

                //Set to proper position
                $(e).css(direction, (i * distance + initMargin) + '%');
            });
        }

        //Set up timeline controls functionality & EFX
        setupTimelineControls();

        $('.story-pointer').click(function() {
            var storyToActivate = '#' + $(this).data('target');
            $('.story-pointer').removeClass('active');
            $('.story-pointer .tooltip-time').removeClass('active');
            $(this).addClass('active');
            $(this).find('.tooltip-time').addClass('active');

            $('.story article').css('display', 'none');
            $(storyToActivate).css('display', 'block');
        });

        $('.story-pointer.active').click();

        //Set up a window event to responsively rearrange the timeline controls
        var onMobile = $(window).width() < 751;
        $(window).resize(function() {
            if (onMobile !== $(window).width() < 751) {
                onMobile = !onMobile;
                setupTimelineControls();
            }
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
