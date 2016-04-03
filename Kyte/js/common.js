$(document).ready(function() {



 $('a[href*=#]').bind('click', function(e) {

 e.preventDefault();
 
 var target = $(this).attr("href");
 
 $('html, body').stop().animate({ scrollTop: $(target).offset().top-91}, 900, function() {
 location.hash = target;
 });
 
 return false;
 });
});




window.onscroll = function() {

	var html = document.documentElement;
var body = document.body;
var home1=$('#about').offset().top-91;
var about1=$('#portfolio').offset().top-91;
var portfolio1=$('#journal').offset().top-91;
var journal1=$('#features').offset().top-91;
var features1=$('#contact').offset().top-91;




var scrollTop = html.scrollTop || body && body.scrollTop || 0;
scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)

if (scrollTop>=0&&scrollTop<home1) {$('#home1').addClass('active')} else {$('#home1').removeClass('active')} 

if (scrollTop>=home1&&scrollTop<about1) {$('#about1').addClass('active')} else {$('#about1').removeClass('active')} 

if (scrollTop>=about1&&scrollTop<portfolio1) {$('#portfolio1').addClass('active')} else {$('#portfolio1').removeClass('active')} 

if (scrollTop>=portfolio1&&scrollTop<journal1) {$('#journal1').addClass('active')} else {$('#journal1').removeClass('active')} 

if (scrollTop>=journal1&&scrollTop<features1) {$('#features1').addClass('active')} else {$('#features1').removeClass('active')} 

if (scrollTop>=features1) {$('#contact1').addClass('active')} else {$('#contact1').removeClass('active')} 

}


var hwSlideSpeed = 1200;
var hwTimeOut = 3000;
var hwNeedLinks = true;
 
$(document).ready(function(e) {
	$(".word1").animated("fadeInLeft", "zoomOutDown");
	$(".word2").animated("fadeInRight", "zoomOutDown");

    $('.slide').css(
        {"position" : "absolute",
         "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function(arrow){


    	   setTimeout(func, 3000);
$(".word2").animated("fadeInRight", "zoomOutDown");

        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
            }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
            }
        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');


        }
if(hwNeedLinks){
var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
    .prependTo('#slider');      
    $('#nextbutton').click(function(){
        animSlide("next");
 
        })
    $('#prewbutton').click(function(){
        animSlide("prew");
        })
}
    var $adderSpan = '';
    $('.slide').each(function(index) {
            $adderSpan += '<span class = "control-slide">' + index + '</span>';
        });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
    $(".control-slide:first").addClass("active");
     
    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);  }
            }
    $('#slider-wrap').hover(    
        function(){
        	clearTimeout(slideTime); pause = true; 
        	$('#prewbutton').css("opacity",0.7);
       		$('#nextbutton').css("opacity",0.7);},
        function(){
        	pause = false; rotator(); 
        	$('#prewbutton').css("opacity",0);
        	$('#nextbutton').css("opacity",0);
        });

    rotator();
    

var func = function(){


if(!pause){$(".word2").animated("zoomOutDown", "zoomOutDown");}}

    
});

