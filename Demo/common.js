$(document).ready(function () {
	$('.btn').click(function(){
		$('.mini-menu').slideToggle();
	});

	$('.sub > a').click(function(){
		$('.sub ul').slideUp();
		if ($(this).next().is(":visible")){
			$(this).next().slideUp();
		} else {
			$(this).next().slideToggle();
			
		}
		return false;
	});
	$('.mini-menu > ul > li > a').click(function(){
		$('.mini-menu > ul > li > a, .sub a').removeClass('active');
		$(this).addClass('active');

	}),
	$('.sub ul li a').click(function(){
		$('.sub ul li a').removeClass('active');
		$(this).addClass('active');


	});
	$('.sub>a').click(function(){
		$(this).prev().toggleClass('rotate');
	});
});