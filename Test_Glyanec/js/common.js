$(document).ready(function() {
	$('.toggle_mnu').click(function(){
		$('.sandwich').toggleClass('active');
	});
	
	
	//Мобильное меню
	$('.toggle_mnu').click(function(){
		if($('.navigation-list').is(':visible')){
			$('.navigation-list').fadeOut(400);
			$('.navigation-list li a ').removeClass('fadeInUp animated')
		}
		else{
			$('.navigation-list').fadeIn(400);
			$('.navigation-list').css('display', 'flex');
			$('.navigation-list li a ').addClass('fadeInUp animated')
		}
	});
	
	
	//Пропадание мобильной навигации и изменение вида кнопки открывания мобильного меню при клике на ссылку
	$('.navigation-list li').click(function() {
		if ($('.sandwich').hasClass('active')){
			$('.navigation-list').fadeOut(400);
			$('.sandwich').toggleClass('active');
		}
		
	})
	
	
	//Раскрывающийся список телефонов при клике на стрелочку в хедере
	$('.top').click(function(){
		if($(' .top-phones').is(':visible')){
			$('.top-phones').fadeOut();
		}
		else{
			$('.top-phones').fadeIn();
		}
		
	})
	
	
	//Раскрывающийся список телефонов при клике на стрелочку в футере
	$('.bottom').click(function(){
		if($(' .bottom-phones').is(':visible')){
			$('.bottom-phones').fadeOut();
		}
		else{
			$('.bottom-phones').fadeIn();
		}
	})
	
	
	//Чтобы навигация правильно отображалась при изменении ширины окна
	$(window).resize(function () {
		var vid = $(window).width();
		
		if (vid > 992 && $('.navigation-list').is(':hidden')) {
			$('.navigation-list').removeAttr('style');
			
		}
		
		if (vid > 992) {
			$('.sandwich').removeClass('active');
			$('.navigation-list').removeAttr('style');			
		
		}		
		
	});
	
	
	//Прелоадер
	$(window).load(function () {	
	$('.loader').delay(400).fadeOut('slow');
	$('.loader_inner').fadeOut(); 
	 
});
	
	
});