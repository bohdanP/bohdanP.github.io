// Quick feature detection
var mapTop = jQuery( '#mapwrapper' ).offset().top;
var mapLeft = jQuery( '#mapwrapper' ).offset().left;
function isTouchEnabled() {
	return (('ontouchstart' in window)
		|| (navigator.MaxTouchPoints > 0)
		|| (navigator.msMaxTouchPoints > 0));
}

jQuery(function(){
	addEvent('map_1');
	addEvent('map_2');
	addEvent('map_3');
	addEvent('map_4');
	addEvent('map_5');
	addEvent('map_6');
	addEvent('map_7');
	addEvent('map_8');
	addEvent('map_9');
	addEvent('map_10');
	addEvent('map_11');
	addEvent('map_12');
	addEvent('map_13');
	addEvent('map_14');
	addEvent('map_15');
	addEvent('map_16');
	addEvent('map_17');
	addEvent('map_18');
	addEvent('map_19');
	addEvent('map_20');
	addEvent('map_21');
	addEvent('map_22');
	addEvent('map_23');
	addEvent('map_24');
	addEvent('map_25');
	addEvent('map_26');
	addEvent('map_27');
	addEvent('map_28');
	addEvent('map_29');
	addEvent('map_30');
	addEvent('map_31');
	addEvent('map_32');
	addEvent('map_33');
	addEvent('map_34');
	addEvent('map_35');
	addEvent('map_36');
	addEvent('map_37');
	addEvent('map_38');
	addEvent('map_39');
	addEvent('map_40');
	addEvent('map_41');
	addEvent('map_42');
	addEvent('map_43');
	addEvent('map_44');
	addEvent('map_45');
	addEvent('map_46');
	addEvent('map_47');
	addEvent('map_48');
	addEvent('map_49');
	addEvent('map_50');
	addEvent('map_51');
	addEvent('map_52');
	addEvent('map_53');
	addEvent('map_54');
	addEvent('map_55');
	addEvent('map_56');
	addEvent('map_57');
	addEvent('map_58');
	addEvent('map_59');
	addEvent('map_60');
	addEvent('map_61');
	addEvent('map_62');
	addEvent('map_63');
	addEvent('map_64');
	addEvent('map_65');
	addEvent('map_66');
	addEvent('map_67');
	addEvent('map_68');
	addEvent('map_69');
	addEvent('map_70');
	addEvent('map_71');
}) 
jQuery(function(){
	if(jQuery('#lakes').find('path').eq(0).attr('fill') != 'undefined'){
		jQuery('#lakes').find('path').attr({'fill':map_config['default']['lakesColor']}).css({'stroke':map_config['default']['borderColor']});
	}

	jQuery('#map-tip').css({
		'box-shadow':'1px 2px 4px '+map_config['default']['hoverShadow'],
		'-moz-box-shadow':'2px 3px 6px '+map_config['default']['hoverShadow'],
		'-webkit-box-shadow':'2px 3px 6px '+map_config['default']['hoverShadow'],
	});

	if(jQuery('#shadow').find('path').eq(0).attr('fill') != 'undefined'){
		var shadowOpacity = map_config['default']['shadowOpacity'];
		var shadowOpacity = parseInt(shadowOpacity);
		if (shadowOpacity >=100){shadowOpacity = 1;}else if(shadowOpacity <=0){shadowOpacity =0;}else{shadowOpacity = shadowOpacity/100;}
		
		jQuery('#shadow').find('path').attr({'fill':map_config['default']['mapShadow']}).css({'fill-opacity':shadowOpacity})
	}
});

function addEvent(id,relationId){
	var _obj = jQuery('#'+id);
	var _Textobj = jQuery('#'+id+','+'#'+map_config[id]['namesId']);

	jQuery('#'+['text-abb']).attr({'fill':map_config['default']['namesColor']});

	_obj.attr({'fill':map_config[id]['upColor'],'stroke':map_config['default']['borderColor']});
	_Textobj.attr({'cursor':'default'});
	if(map_config[id]['enable'] == true){
		if (isTouchEnabled()) {
			//clicking effect
			_Textobj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10-mapLeft, y=touch.pageY+15-mapTop;
				var tipw=jQuery('#map-tip').outerWidth(), tiph=jQuery('#map-tip').outerHeight(), 
				x=(x+tipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-tiph-10 : y
				jQuery('#'+id).css({'fill':map_config[id]['downColor']});
				jQuery('#map-tip').show().html(map_config[id]['hover']);
				jQuery('#map-tip').css({left:x, top:y})
			})
			_Textobj.on('touchend', function(){
				jQuery('#'+id).css({'fill':map_config[id]['upColor']});
				if(map_config[id]['target'] == 'new_window'){
					//window.open(map_config[id]['url']);	
				}else if(map_config[id]['target'] == 'same_window'){
					//window.parent.location.href=map_config[id]['url'];
				}
			})
		}
		_Textobj.attr({'cursor':'pointer'});
		_Textobj.hover(function(){
			//moving in/out effect
			jQuery('#map-tip').show().html(map_config[id]['hover']);
			_obj.css({'fill':map_config[id]['overColor']})
		},function(){
			jQuery('#map-tip').hide();
			jQuery('#'+id).css({'fill':map_config[id]['upColor']});
		})
		//clicking effect
		_Textobj.mousedown(function(){
			jQuery('#'+id).css({'fill':map_config[id]['downColor']});
		})
		_Textobj.mouseup(function(){
			jQuery('#'+id).css({'fill':map_config[id]['overColor']});
			if(map_config[id]['target'] == 'new_window'){
				//window.open(map_config[id]['url']);	
			}else if(map_config[id]['target'] == 'same_window'){
				//window.parent.location.href=map_config[id]['url'];
			}
		})
		_Textobj.mousemove(function(e){
			var x=e.pageX+10-mapLeft, y=e.pageY+15-mapTop;
			var tipw=jQuery('#map-tip').outerWidth(), tiph=jQuery('#map-tip').outerHeight(), 
			x=(x+tipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-tipw-(20*2) : x
			y=(y+tiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-tiph-10 : y
			jQuery('#map-tip').css({left:x, top:y})
		})
	}	
}

function dynamicAddEvent(id){
	var obj = jQuery('#map_points_'+id);

	if(pin_config['points'][id]['enable'] == true){
		if (isTouchEnabled()) {
			obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10-mapLeft, y=touch.pageY+15-mapTop;
				var tipw=jQuery('#map-tip').outerWidth(), tiph=jQuery('#map-tip').outerHeight(),
				x=(x+tipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-tiph-10 : y
				jQuery('#'+id).css({'fill':pin_config['points'][id]['downColor']});
				jQuery('#map-tip').show().html(pin_config['points'][id]['hover']);
				jQuery('#map-tip').css({left:x, top:y})
			})
			obj.on('touchend', function(){
				jQuery('#'+id).css({'fill':pin_config['points'][id]['upColor']});
				if(pin_config['points'][id]['target'] == 'new_window'){
					window.open(pin_config['points'][id]['url']);
				}else if(pin_config['points'][id]['target'] == 'same_window'){
					window.parent.location.href=pin_config['points'][id]['url'];
				}
			})
		}
		obj.attr({'cursor':'pointer'});
		obj.hover(function(){
			jQuery('#map-tip').show().html(pin_config['points'][id]['hover']);
			obj.css({'fill':pin_config['points'][id]['overColor']})
		},function(){
			jQuery('#map-tip').hide();
			obj.css({'fill':pin_config['points'][id]['upColor']});
		})
		//clicking effect
		obj.mousedown(function(){
			obj.css({'fill':pin_config['points'][id]['downColor']});
		})
		obj.mouseup(function(){
			obj.css({'fill':pin_config['points'][id]['overColor']});
			if(pin_config['points'][id]['target'] == 'new_window'){
				window.open(pin_config['points'][id]['url']);	
			}else if(pin_config['points'][id]['target'] == 'same_window'){
				window.parent.location.href=pin_config['points'][id]['url'];
			}
		})
		obj.mousemove(function(e){
				var x=e.pageX+10-mapLeft, y=e.pageY+15-mapTop;
				var tipw=jQuery('#map-tip').outerWidth(), tiph=jQuery('#map-tip').outerHeight(), 
				x=(x+tipw>jQuery(document).scrollLeft()+jQuery(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>jQuery(document).scrollTop()+jQuery(window).height())? jQuery(document).scrollTop()+jQuery(window).height()-tiph-10 : y
				jQuery('#map-tip').css({left:x, top:y})
		})
	}	
}