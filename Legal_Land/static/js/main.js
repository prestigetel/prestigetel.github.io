/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
	"use strict";
	$('.sandvich_top').click(function () {
		var menu = $('.main_mnu');
		$(this).toggleClass('active');
		$('.main_mnu').slideToggle('slow');
	});
	
	$(window).resize(function () {
		var vid = $(window).width();
		
		if (vid > 1200 && $('.main_mnu').is(':hidden')) {
			$('.main_mnu').removeAttr('style');
		}
		
	});
	
	$('.sandvich_bottom').click(function (e) {
		e.preventDefault();
		var menu = $('.main_mnu_bottom');
		$(this).toggleClass('active');
		$('.main_mnu_bottom').slideToggle('slow');
	});
	
	$(window).resize(function () {
		var vid = $(window).width();
		
		if (vid > 1200 && $('.main_mnu_bottom').is(':hidden')) {
			$('.main_mnu_bottom').removeAttr('style');
		}
		
	});
	
	/*плавный скролл вверх при клике на нижнее меню*/
	$('.sandvich_bottom').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $(document).height() }, 'slow');
		return false;
		
	});
	
	/*плавный скролл вверх к секции Независимая оценка имущества*/
	$('.arrow_bottom').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $('.main_head').height() }, 'slow');
		return false;
		
	});
	
	
	$('.arrow_top').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0 }, 'slow');
		return false;
		
	});
	
	
	$('.advantages').waypoint(function () {
		
		$('.advantages .card').each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass('card-off').addClass('card-on');
			}, 200 * index);
		   
		});
		
	},
							  {
	        offset : "30%"
        });
	
	
	
	$('.contact').waypoint(function () {
		
		$('.contact .team').each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass('team-off').addClass('team-on');
			}, 200 * index);
		   
		});
		
	},
							  {
	        offset : "50%"
        });
	
	
	
	
	$('.steps_work').waypoint(function () {
		
		$('.steps_work .step_item').each(function (index) {
			var ths = $(this);
			setTimeout(function () {
				var myAnimation = new DrawFillSVG({
                    elementId: "step-svg-" + index
				});
				
				ths.removeClass('card-off').addClass('card-on');
			}, 700 * index);
			
		   
		});
		
	},
							  {
	        offset : "80%"
        });
	
	/*слайдер отзывов*/
	$('.slider').bxSlider({
		items: 1,
		pager: false
		
	});
	
	$(".section_head h2, .section_head p ").animated("fadeInRight");
	$(".info_item_wrap").animated("zoomIn");
	$(".slider .slide").animated("rollIn");
	$(".proffesionals .forms").animated("fadeInRight");
	
	
	$('.deal').waypoint(function () {
		
		$('.deal .deal_item_wrap').each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.addClass('on');
			}, 200 * index);
		   
		});
		
	},
							  {
	        offset : "30%"
        });
	
	
	$('.proffesionals').waypoint(function () {
		
		$(' .prof_item').each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.addClass('on');
			}, 200 * index);
		   
		});
		
	},
							  {
	        offset : "30%"
        });
	
	$('.buttons').click(function () {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
        type: 'inline'
    });
	
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});
   
   
});

