$(document).ready(function (){
	$(".top_banner").mousemove(function (e){
		var moveX = (e.pageX * -1 / 25);
		var moveY = (e.pageY * -1 / 25);
		$(this).css("background-position", moveX + "px "+ moveY + "px");
	});
});





var slideWidth=528;
var sliderTimer;
$(function(){
$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
     /* sliderTimer=setInterval(nextSlide,1000);*/
   $('.viewport').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(prevSlide,2000);
    });

    $('#next_slide').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
        /* sliderTimer=setInterval(nextSlide,1000);*/
    });

    $('#prev_slide').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
       /* sliderTimer=setInterval(nextSlide,1000);*/
    });
});

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size())
    {
        $('.slidewrapper').css('left',-(currentSlide-2)*slideWidth);  
        $('.slidewrapper').append($('.slidewrapper').children().first().clone()); 
        $('.slidewrapper').children().first().remove();
        currentSlide--;                        
    }
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},500).data('current',currentSlide);
    
    
}

function prevSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        $('.slidewrapper').css('left',-(currentSlide+2)*slideWidth);  
        $('.slidewrapper').prepend($('.slidewrapper').children().last().clone()); 
        $('.slidewrapper').children().last().remove();
        currentSlide++;   
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},500).data('current',currentSlide);
}