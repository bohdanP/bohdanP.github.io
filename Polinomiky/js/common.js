$(document).ready(function() {

	var xCH=0;
	var arr = [];
	var yCH=0;
	var arr2 = [];
	var res=[];
	var arr3=[];
	var i;
	var www=0;
	
	$('#chd').click(function(){
		var q="dre";
		$(".chysl").append("<input class="+q+">"); 
		xCH++;
	});

	$('#znd').click(function(){
		var q="dre1";
		$(".znamen").append("<input class="+q+">"); 
		yCH++;
	});


	$('#chdel').click(function(){
		$(".dre:last").remove(); 
		xCH--;
	});

	$('#zndel2').click(function(){
		$(".dre1").focus(function(){
			$(this).remove();
		});
		yCH--;
	});

	$('#chdel').click(function(){
		$(".dre:last").remove(); 
		xCH--;
	});

	$('#zndel').click(function(){
		$(".dre1:last").remove(); 
		yCH--;
	});

	var clone;

	$('#result').click(function(){
		$('.new').remove();
		var aar=[];
		arr3=aar;
		www=0;
		i=0;

		$('.dre1').each(function(){
			arr2[i]= $(this).val();
			i++;
		});
		i=0;      
		$('.dre').each(function(){
			arr[i]= $(this).val();
			i++;
		});
		arr.sort(function(a,b){return b - a}) 
		arr2.sort(function(a,b){return b - a}) 

		var i=1;
		var j=1;
		clone=arr[0]+"";
		if(arr[0]==0) $("#qqq").text("1"); else $("#qqq").html("x"+clone.sup());
		clone=arr2[0];
		if(clone==0) $("#eee").text("1"); else $("#eee").html("x"+clone.sup());

		while(i<xCH){
			clone=arr[i]+"";
			if(arr[i]==0) $("#qqq").html($("#qqq").html()+"+1"); else $("#qqq").html($("#qqq").html()+"+x"+clone.sup());
			i++;
		};
		while(j<yCH){
			clone=arr2[j];
			if(clone==0) $("#eee").html($("#eee").html()+"+1"); else $("#eee").html($("#eee").html()+"+x"+clone.sup());
			j++;
		};
		j=1;
		res[0]=arr[0]-arr2[0];
		
		clone=arr[0];
		if(arr[0]==0) $("#aaa").html("1"); $("#aaa").html("x"+clone.sup());
		clone=res[0]+"";
		if(clone==0) $("#rrr").html("1"); else $("#rrr").html("x"+clone.sup());
		
		arr.push(arr[0]);

		while(j<yCH){
			var tt=res[0]-(-1*arr2[j]);
			arr.push(tt);
			clone=tt+"";

			if(tt==0) $("#aaa").html($("#aaa").html()+"+1"); else $("#aaa").html($("#aaa").html()+"+x"+clone.sup());
			j++;
		};

		var y=0;
		var o=0;
		var count=0;

		while(y<arr.length){
			while(o<arr.length){
				if(arr[y]==arr[o]&&y!=o) count=-1;
				o++;
			};
			if(count==0) arr3.push(arr[y]);
			y++; o=0;
			count=0;
		};
		arr=arr3;
		arr.sort(function(a,b){return b - a}) 
		
		if(arr[0]!=0&&arr.length!=0&&arr[0]>arr2[0])
		{
			if (res[0]!=0) result(); else result2();
		}
		else result2();
	});


	function result()
	{
		var aar=[];
		arr3=aar;
		y=1;

		$('table').append("<tr class='new'><td class='zzz new'></td></tr>");

		clone=arr[0]+"";
		if(arr[0]==0) $(".zzz").html("1"); else $('.zzz').html("x"+clone.sup());
		
		while(y<arr.length){
			clone=arr[y]+"";
			if(arr[y]==0) $(".zzz").html($(".zzz").html()+"+1"); else $('.zzz').html($('.zzz').html()+"+x"+clone.sup());
			y++; 
		};

		res[0]=arr[0]-arr2[0];
		clone=res[0]+"";

		if(res[0]==0) $("#rrr").html($("#rrr").html()+"+1"); else $("#rrr").html($("#rrr").html()+"+x"+clone.sup());
		
		arr.push(arr[0]);

		$('table').append("<tr class='new'><td class='xxx bottom new'></td></tr>");

		clone=arr[0]+"";
		$(".xxx").html("x"+clone.sup());
		j=1;
		
		while(j<yCH){
			var tt=res[0]-(-1*arr2[j]);
			arr.push(tt);
			clone=tt+"";
			if(tt==0) $(".xxx").html($(".xxx").html()+"+1"); else $(".xxx").html($(".xxx").html()+"+x"+clone.sup());
			j++;
		};

		var y=0;
		var o=0;
		var count=0;
		while(y<arr.length){
			while(o<arr.length){
				if(arr[y]==arr[o]&&y!=o) count=-1;
				o++;
			};
			if(count==0) arr3.push(arr[y]);
			y++; o=0;
			count=0;
		};
		arr=arr3;
		arr.sort(function(a,b){return b - a}) 
		$('.zzz').removeClass('zzz');
		$('.xxx').removeClass('xxx');

		if(arr[0]>arr2[0]) result();
		if(arr[0]==arr2[0]) {result(); result2();}
		if(arr[0]<arr2[0]) result2();
		
	};

	function result2()
	{
		if(www==0){
			y=1;

			$('table').append("<tr class='new'><td class='zzz new'></td></tr>");
			if(arr.length!=0) 
			{
				clone=arr[0]+"";
				if(arr[0]==0) $(".zzz").html("1"); else $('.zzz').html("x"+clone.sup());

				while(y<arr.length){
					clone=arr[y]+"";
					if(arr[y]==0) $(".zzz").html($(".zzz").html()+"+1"); else $('.zzz').html($('.zzz').html()+"+x"+clone.sup());
					y++; 
				};


			}
			else $(".zzz").text('0');
			www=1;
		}
	};
});

