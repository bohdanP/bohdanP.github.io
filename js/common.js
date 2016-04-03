$(document).ready(function() {

	$(".portfolio_item").each(function(i){
		$(this).addClass("col-sm-6").addClass("col-xs-12");
		$(this).find('a').attr("href", "#work_"+i).addClass("popup_content");
		$(this).find('.podr_descr').attr("id", "work_"+i);
		$(this).find('img').attr("src", "img/portfolio-images/"+(i+1)+".jpg");
	});

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});
	
	$('.popup').magnificPopup({ type: 'image',
		
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});


	$('.popup_content').magnificPopup({ 
		type: 'inline', 
	});



	$(".top_text h1").animated("fadeInDown","fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp","fadeOutDown");

	$(".anim_1").animated("fadeInLeft","fadeOutDown");
	$(".anim_2").animated("flipInY","fadeOutUp");
	$(".anim_3").animated("fadeInRight","fadeOutDown");

	$(".left .resume-item").animated("fadeInLeft","fadeOutDown");
	$(".right .resume-item").animated("fadeInRight","fadeOutDown");

	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".toogle_mnu").click(function() {
		$("#sandwich").toggleClass("active");
	});

	$(".top_mnu li a").click(function() {
		$(".top_mnu").fadeOut(600);
		$("#sandwich").toggleClass("active");
		$(".top_text").removeClass("h_oppacity");
	}).append("<span>");

	$(".toogle_mnu").click(function(){
		if($(".top_mnu").is(":visible")) {$(".top_mnu").fadeOut(600);
		$(".top_text").removeClass("h_oppacity");
		$(".top_mnu li a").removeClass("fadeInUp animated");}
		else {$(".top_mnu").fadeIn(600);
		$(".top_text").addClass("h_oppacity");
		$(".top_mnu li a").addClass("fadeInUp animated");}
	});

	$(".top_mnu ul a").mPageScroll2id();


});

$(window).load(function() { 
	$(".loader_Inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});