var regions=[
    {
        "Property_Name": "Lot 1",
        "region_code": "lot_1",
		"lot": "Lot #1",
		"group": "Ocean View Lot",
        "Size":9152.6,
		"street": "20 Keigan Dr",
		"Original": "$48,000"
    },
     {
        "Property_Name": "Lot 2",
        "region_code": "lot_2",
		"lot": "Lot #2",
		"group": "Ocean View Lot",
        "Size":6670,
		"street": 55,
		"Original": "$297,000"
    },
	
	 {
        "Property_Name": "Lot 3",
        "region_code": "lot_3",
		"group": "Ocean View Lot",
		"lot": "Lot #3",
        "group": "Ocean View Lot",
        "Size":6670,
		"street": 55,
		"Original": "$297,000"
    },
	 {
        "Property_Name": "Lot 4",
        "region_code": "lot_4",
		"group": "Ocean View Lot",
		"lot": "Lot #4",
        "group": "Ocean View Lot",
        "Size":6670,
		"street": 55,
		"Original": "$297,000"
    },
	 {
        "Property_Name": "Lot 5",
        "region_code": "lot_5",
		"group": "Ocean View Lot",
		"lot": "Lot #5",
        "group": "Ocean View Lot",
        "Size":6670,
		"street": 55,
		"Original": "$297,000"
    },
	 {
        "Property_Name": "Lot 6",
        "region_code": "lot_6",
		"group": "Coastal Lot",
		"lot": "Lot #6",
        "group": "Ocean View Lot",
        "Size":6396,
		"street": 60,
		"Original": "$315,000"
    },
	 {
        "Property_Name": "Lot 7",
        "region_code": "lot_7",
		"group": "Coastal Lot",
		"lot": "Lot #7",
        "group": "Ocean View Lot",
        "Size":6240,
		"street": 38,
		"Original": "$283,000"
    },
	 {
         "Property_Name": "Lot 8",
        "region_code": "lot_8",
		"group": "Coastal Lot",
		"lot": "Lot #8",
        "group": "Ocean View Lot",
        "Size":5752,
		"street": 67,
		"Original": "$274,000"
    },
	/*
	 {
        "Property_Name": "Lot 7",
        "region_code": "lot_7",
		"group": "SOLD Lot",
		"lot": "Lot #9",
        "group": "Ocean View Lot",
        "Size":5752,
		"street": 67,
		"Original": "$274,000"
    },
	*/
	{
        "Property_Name": "Lot 9",
        "region_code": "lot_9",
		"group": "SOLD Lot",
		"lot": "Lot #9",
        "group": "Ocean View Lot",
        "Size":5752,
		"street": 67,
		"Original": "$274,000"
    },
	 {
        "Property_Name": "Lot 10",
        "region_code": "lot_10",
		"group": "Coastal Lot",
		"lot": "Lot #10",
        "group": "Ocean View Lot",
        "Size":5752,
		"street": 67,
		"Original": "$274,000"
    },
	 {
        "Property_Name": "Lot 11",
        "region_code": "lot_11",
		"group": "Coastal Lot",
		"lot": "Lot #11",
        "group": "Ocean View Lot",
        "Size":5752,
		"street": 67,
		"Original": "$274,000"
    },
	 {
        "Property_Name": "Lot 12",
        "region_code": "lot_12",
		"group": "SOLD Lot",
		"lot": "Lot #12",
        "group": "Ocean View Lot",
        "Size":'18,974' ,
		"street": 0,
		"Original": "$95,000"
    }
	,
	 {
        "Property_Name": "Lot 13",
        "region_code": "lot_13",
		"group": "Prestige Lot",
		"lot": "Lot #13",
        "group": "Ocean View Lot",
        "Size":'18,974' ,
		"street": 67,
		"Original": "$95,000"
    },
	 {
        "Property_Name": "Lot 14",
        "region_code": "lot_14",
		"group": "Prestige Lot",
		"lot": "Lot #14",
        "group": "Ocean View Lot",
        "Size":'18,974' ,
		"street": 67,
		"Original": "$95,000"
    },
	 {
        "Property_Name": "Lot 15",
        "region_code": "lot_15",
		"group": "Prestige Lot",
		"lot": "Lot #15",
        "group": "Ocean View Lot",
        "Size":'11,500',
		"street": 0,
		"Original": "$39,000"
    }
];

var temp_array= regions.map(function(item){
    return item.population;
});
var highest_value = Math.max.apply(Math, temp_array);



$(function() {

    for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(11, 104, 170,' + regions[i].Property_Name/highest_value +')'})
        .data('region', regions[i]);
    
 

    $('#'+ regions[i].region_code).click(function (e) {
        var region_data=$(this).data('region');
		var map_id=$(this).attr("id"); 
		   $('.map g').attr('style','');
       $(this).attr('style','fill:#c9bc40 !important');
		//$(".popup").fadeOut();
		//$(".popup").fadeIn(500);
		
		 $("#myModal").slideUp(function(){
		   $("#myModal").slideDown(); 
		  });
		if(  map_id =='lot_2' || map_id == 'lot_3' || map_id =='lot_4' || map_id =='lot_5'
			|| map_id =='lot_9' || map_id =='lot_17' || map_id =='lot_18' || map_id =='lot_19')
		{ 
		
		$(".popup").html('<h4>'+ region_data.Property_Name+ '</h4><a id="cls_btn" onclick="dismiss();" class="close_btn" data-dismiss="modal" aria-label="Close">x</a>' +
					  '<ul class="popup_list"><li class="half">'+'<b>'+ region_data.group +'</b><span class="lot_box">' + region_data.lot + '<span></li>' +
					  '<li class="half">'+' <a  class="sold_out">SOLD</a>' +'</ul>');
		}
		
		else
		{
		 // $(".popup").animate({ 'zoom': 1.6}, 400);
		/*$(".popup").html('<h4>'+ region_data.Property_Name+ '</h4><a id="cls_btn" onclick="dismiss();" class="close_btn" data-dismiss="modal" aria-label="Close">X</a>' +
					  '<ul class="popup_list"><li class="half">'+'<b>'+ region_data.group +'</b><span class="lot_box">' + region_data.lot + '<span></li>' +
					  '<li class="half">'+'<b>Area On Deed (Acres): </b>' + region_data.Area_on_Deed + '</li>' +
					  '<li class="half">'+'<b>Land Type: </b>' + region_data.Land_Type + '</li>' +
					  '<li class="half">'+'<b>Ocean Frontage (Feet): </b>' + region_data.Oceanfrontage + '</li>' +
					  
					  '<li class="half">'+'<b>Assessment Account Number: </b>' + region_data.Assessment + '</li>' +
					  '<li class="half">'+'<b>Nova Scotia Land Registry PID Number: </b>' + region_data.Nova + '</li>' +
				   
					  '<li class="full">'+'<b>Special Features: </b>' + region_data.Special + '</li>' +
					  '<li class="half_border"></li>' +	
					  '<li class="full m1">'+' Listing Price <span class="hst">(CAN)</span><span class="c_black">:</span> </b><span class="price_box">' + region_data.Original +'<span class="hst">&nbsp;&nbsp;(plus HST)</span></span></li>' +
					  
					  '<li class="half">'+'<a href="#" class="myButton">Download Detailed Map (PDF)</a>'+'</li>' +
					  '<li class="half m2">'+'<a href="#" class="myButton">Download Covenants <br/>(PDF)</a>'+'</li></ul>');
		*/
		$(".popup").html('<h4>'+ region_data.Property_Name+ '</h4><a id="cls_btn" onclick="dismiss();" class="close_btn" data-dismiss="modal" aria-label="Close">x</a>' +
					  '<ul class="popup_list"><li class="half">'+'<b>'+ region_data.group +'</b><span class="lot_box">' + region_data.lot + '<span></li>' +
					  '<li class="half">'+'<b>Size (sq meters): </b>' + region_data.Size + '&nbsp; </li>' +
					  '<li class="half">'+'<b>Street: </b>' + region_data.street + '&nbsp; </li>' +
					  '<li class="half_border"></li>' +	
					  '<li class="full m1">'+' Listing Price <span class="hst">(CAN)</span><span class="c_black">:</span> </b><span class="price_box">' + region_data.Original +'<span class="hst">&nbsp;&nbsp;(plus HST)</span></span></li>'+
					  '<li class="half m2 dl_link"><a href="http://lloydslanding.com/LL-ProtectiveCovenants.pdf" target="_blank" class="myButton dl_icon">Download Covenants</a></li>'+ 
					  '<li class="half dl_link realtor_link"><a href="http://lloydslanding.com/contact/" target="_blank" class="myButton dl_icon cont_realtor">Contact Mariana C.</a></li>'+ '</ul>');
		

		}//else
      }); //click
	  

}
});
