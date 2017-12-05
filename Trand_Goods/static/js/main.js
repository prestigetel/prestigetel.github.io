
/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
	"use strict";
    $('.js_our_packets_slider').slick({
		speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
		nextArrow: '.packets_slider_next',
		prevArrow: '.packets_slider_prev',
		responsive: [{
            breakpoint: 1250,
            settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				nextArrow: '.packets_slider_next',
				prevArrow: '.packets_slider_prev'
            }
        }, {
			breakpoint: 950,
            settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				nextArrow: '.packets_slider_next',
				prevArrow: '.packets_slider_prev'
		    }
		}]
		
    });
	
	$(' .js-doing-icons').slick({
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            }
              
            
        }]
    });
	
    $('.js_review_slider').slick({
		dots: true,
		nextArrow: '.review_slider_next',
		prevArrow: '.review_slider_prev',
		responsive: [{
            breakpoint: 1150,
            settings: {
				arrows: false
            }
        }]
    });

    $('.nav_mobile').click(function () {
        $(this).toggleClass('active');
        $('.main_nav_list').toggleClass('mobile_show');
    });
	
	
	
	$('.go_to').click(function () {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length !== 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top
			}, 1500);
		}
		return false;
	});
	
	$('.popup-link').magnificPopup({
		type: 'inline'
	});
        
});