
// Начинать писать отсюда!!!!
/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
	"use strict";
	//Слайдер на главной странице
    $('.js-index-slider').bxSlider({
		pagerCustom: '.js-index-slider_pager',
		controls: false
	});
	//Слайдер продукта(превью) 
	$('.product_item_slider').bxSlider({
		pagerCustom: '.product_item_colors',
		controls: false
	});
	
	$('.sizes_list li').click(function () {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		
	});
	
	//Слайдер продукта 
	$('.js-product-view-slider').bxSlider({
		pagerCustom: '.js-product-slider-pager',
		controls: false
	});
	//Адаптивное меню
	$(document).ready(function () {
		var touch = $('.touch_menu'),
		    menu = $('.header-nav_list');

		$(touch).on('click', function (e) {
			e.preventDefault();
			menu.slideToggle();
		});
        $(window).resize(function () {
            var wid = $(window).width();
            if (wid > 350 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
	});
    
    
    $(document).ready(function () {
		var touch_i = $('.touch_icons'),
		    menu_i = $('.header_action');

		$(touch_i).on('click', function (e) {
			e.preventDefault();
			menu_i.slideToggle();
		});
        $(window).resize(function () {
            var wid = $(window).width();
            if (wid > 350 && menu_i.is(':hidden')) {
                menu_i.removeAttr('style');
            }
        });
	});
	
	
	
});