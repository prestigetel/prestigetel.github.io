/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
	"use strict";
	/*//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function () {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}*/
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function (e) {
		var ths = $(this);
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				ths.trigger("reset");
				
				
			}, 1000);
		});
		return false;
	});
	
});

$(document).ready(function () {
	"use strict";
	
	$(".popup").magnificPopup({type: "image"});
	$(".popup_c").magnificPopup();
	
	
	$(".owl-carousel").owlCarousel({
		loop: true,
		responsive : {
			0 : {
				items: 1,
				nav: true
			}
		},
		navText: ""
	});
		
		
		

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});
	function wResize() {
		$("header").css("min-height", $(window).height());
	}
	wResize();
	$(window).resize(function () {
		wResize();
	});
	
	$('.top_phone .wrapper .tab').click(function () {
		$('.top_phone .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.top_phone .tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
	
	$('.bottom_phone .wrapper .tab').click(function () {
		$('.bottom_phone .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.bottom_phone .tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
	
	$('.contacts_top  .tab').click(function () {
		$('.contacts_top .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.s_contacts .tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
	
	$('.tabs_header .wrapper .tab').click(function () {
		$('.tabs_header .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.tabs_header .tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
	
});

$(window).load(function () {
	"use strict";
	$(".top_header h1").animated("fadeInLeft", "fadeOut");
	$(".top_header h2").animated("fadeInRight", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(" .tiz_item").animated("fadeInLeft", "fadeOut");
	$(" .profi_item").animated("fadeInRight", "fadeOut");
	$(" .profi form").animated("zoomIn", "fadeOut");
	$(" .s_back h3").animated("fadeInDown", "fadeOut");
	$(" .s_back a").animated("fadeInUp", "fadeOut");
	$(" .s_contacts h2").animated("fadeInLeft", "fadeOut");
	$(" .s_contacts .tabs").animated("fadeInRight", "fadeOut");
	$(" footer h2").animated("fadeInLeft", "fadeOut");
	$(" footer p").animated("fadeInRight", "fadeOut");
	$(" footer .bottom_phone").animated("fadeInDown", "fadeOut");
	$(" footer .button_wrap").animated("rotateIn", "fadeOut");
});