$(document).ready(function() {
	
	$('.button-mobile').click(function() {
		$(this).toggleClass('active');
		
		$('.navigation-holder').toggleClass('show-mobile');	
		
	});	
	
	
	$(window).resize(function () {
		var vid = $(window).width();
		
		if (vid > 940) {
			$('.navigation-holder').removeClass('show-mobile');
			$('.button-mobile').removeClass('active');
		}
		
	});
	
	
	
	
});