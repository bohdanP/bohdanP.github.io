function dismiss(){
    $("#myModal").slideUp();
    $(".map g").attr("style","");
}

var regions=[
{
    "Property_Name": "2",
    "region_code": "lot_2",
},
{
    "Property_Name": "3",
    "region_code": "lot_3",
},
{
    "Property_Name": "4",
    "region_code": "lot_4",
},
{
    "Property_Name": "5",
    "region_code": "lot_5",
},
{
    "Property_Name": "17",
    "region_code": "lot_17",
},
{
    "Property_Name": "18",
    "region_code": "lot_18",
},
{
    "Property_Name": "19",
    "region_code": "lot_19",
},
{
    "Property_Name": "43AB",
    "region_code": "lot_43AB",
},
{
    "Property_Name": "60",
    "region_code": "lot_60",
},
{
    "Property_Name": "66",
    "region_code": "lot_66",
},
{
    "Property_Name": "67",
    "region_code": "lot_67",
},
{
    "Property_Name": "68",
    "region_code": "lot_68",
},
{
    "Property_Name": "69",
    "region_code": "lot_69",
},
{
    "Property_Name": "76",
    "region_code": "lot_76",
},
{
    "Property_Name": "77",
    "region_code": "lot_77",
},
{
    "Property_Name": "78",
    "region_code": "lot_78",
},
{
    "Property_Name": "79",
    "region_code": "lot_79",
},
{
    "Property_Name": "82",
    "region_code": "lot_82",
},
{
    "Property_Name": "84",
    "region_code": "lot_84",
},
{
    "Property_Name": "109",
    "region_code": "lot_109",
},
{
    "Property_Name": "110",
    "region_code": "lot_110",
},
{
    "Property_Name": "111",
    "region_code": "lot_111",
},
{
    "Property_Name": "112",
    "region_code": "lot_112",
},
{
    "Property_Name": "113",
    "region_code": "lot_113",
},
{
    "Property_Name": "114",
    "region_code": "lot_114",
},
{
    "Property_Name": "116",
    "region_code": "lot_116",
},
{

    "region_code": "Park",
    "group": "Enjoy two ponds with great fishing!",

},
{
    "Property_Name": "1",
    "region_code": "lot_1",
    "Size":9152.6,
    "MLS": 41265349,
    "Original": "$48,000",

},
{
    "Property_Name": "6",
    "region_code": "lot_6",
    "Size":6218.3,
    "MLS": 41265398,
    "Original": "$47,500"
},
{
    "Property_Name": "7",
    "region_code": "lot_7",
    "Size":7019.8,
    "MLS": 41265406,
    "Original": "$47,500"
},
{
    "Property_Name": "8",
    "region_code": "lot_8",
    "Size":24348.8,
    "MLS": 41265414,
    "Original": "$77,900"
},
{
    "Property_Name": "9",
    "region_code": "lot_9",
    "Size":21570.9,
    "MLS": 41265422,
    "Original": "$77,900"
},
{
    "Property_Name": "10",
    "region_code": "lot_10",
    "Size":24949.4,
    "MLS": 41265430,
    "Original": "$79,900"
},
{
    "Property_Name": "11",
    "region_code": "lot_11",
    "Size":21835.3,
    "MLS": 41265489,
    "Original": "$76,900"
},
{
    "Property_Name": "12",
    "region_code": "lot_12",
    "Size":19925,
    "MLS": 41265497,
    "Original": "$79,900"
},
{
    "Property_Name": "13",
    "region_code": "lot_13",
    "Size":18803.6,
    "MLS": 41265505,
    "Original": "$74,900"
},
{
    "Property_Name": "14",
    "region_code": "lot_14",
    "Size":17887.9,
    "MLS": 41265513,
    "Original": "$74,900"
},
{
    "Property_Name": "15",
    "region_code": "lot_15",
    "Size":17701.2,
    "MLS": 41265521,
    "Original": "$79,900"
},
{
    "Property_Name": "16",
    "region_code": "lot_16",
    "Size":17588,
    "MLS": 41265539,
    "Original": "$74,900"
},
{
    "Property_Name": "20",
    "region_code": "lot_20",
    "Size":19269.9,
    "MLS": 41265570,
    "Original": "$72,500"
},
{
    "Property_Name": "59",
    "region_code": "lot_59",
    "Size":10011.8,
    "MLS": 41265596,
    "Original": "$49,900"
},
{
    "Property_Name": "61",
    "region_code": "lot_61",
    "Size":12983.7,
    "MLS": 41265612,
    "Original": "$475,900"
},
{
    "Property_Name": "62",
    "region_code": "lot_62",
    "Size":14057.1,
    "MLS": 41265620,
    "Original": "$47,500"
},
{
    "Property_Name": "63",
    "region_code": "lot_63",
    "Size":17026.9,
    "MLS": 41265596,
    "Original": "$45,000"
},
{
    "Property_Name": "64",
    "region_code": "lot_64",
    "Size":14997.5,
    "MLS": 41265646,
    "Original": "$47,500"
},
{
    "Property_Name": "65",
    "region_code": "lot_65",
    "Size":24158.6,
    "MLS": 41265653,
    "Original": "$47,500"
},
{
    "Property_Name": "70",
    "region_code": "lot_70",
    "Size":9969,
    "MLS": 41265703,
    "Original": "$52,000"
},
{
    "Property_Name": "71",
    "region_code": "lot_71",
    "Size":7775.3,
    "MLS": 41265711,
    "Original": "$52,000"
},
{
    "Property_Name": "72",
    "region_code": "lot_72",
    "Size":7841.4,
    "MLS": 41265729,
    "Original": "$49,900"
},
{
    "Property_Name": "73",
    "region_code": "lot_73",
    "Size":7448.2,
    "MLS": 41265448,
    "Original": "$52,000"
},
{
    "Property_Name": "74",
    "region_code": "lot_74",
    "Size":74701,
    "MLS": 41265455,
    "Original": "$52,000"
},
{
    "Property_Name": "75",
    "region_code": "lot_75",
    "Size":7471,
    "MLS": 41265463,
    "Original": "$52,000"
},
{
    "Property_Name": "80",
    "region_code": "lot_80",
    "Size":7454.3,
    "MLS": 41265778,
    "Original": "$52,500"
},
{
    "Property_Name": "81",
    "region_code": "lot_81",
    "Size":7536.4,
    "MLS": 41265786,
    "Original": "$52,500"
},
{
    "Property_Name": "83",
    "region_code": "lot_83",
    "Size":8889,
    "MLS": 41265802,
    "Original": "$54,500"
},
{
    "Property_Name": "85",
    "region_code": "lot_85",
    "Size":9519.6,
    "MLS": 41265828,
    "Original": "$39,000"
},
{
    "Property_Name": "86",
    "region_code": "lot_86",
    "Size":10009.1,
    "MLS": 41265836,
    "Original": "$54,000"
},
{
    "Property_Name": "87",
    "region_code": "lot_87",
    "Size":9086.8,
    "MLS": 41265844,
    "Original": "$54,500"
},
{
    "Property_Name": "88",
    "region_code": "lot_88",
    "Size":8718.2,
    "MLS": 41265851,
    "Original": "$54,500"
},
{
    "Property_Name": "112",
    "region_code": "lot_112",
    "Size":10240.4,
    "MLS": 41265893,
    "Original": "$52,500"
},
{
    "Property_Name": "115",
    "region_code": "lot_115",
    "Size":7780.7,
    "MLS": 41265927,
    "Original": "$52,500"
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

  


        if(  map_id =='Park')
        { 

            $(".popup").html('<h4>'+ 'Community park'+ '</h4><a id="cls_btn" onclick="dismiss();" class="close_btn" data-dismiss="modal" aria-label="Close">x</a>' +
                '<ul class="popup_list"><li class="half">'+'<b>'+ region_data.group +'</b>');
        }

        else {

            if($(this).attr('class')!='sell')
            { 

                $(".popup").html('<h4>Lot '+ region_data.Property_Name+ '</h4><a id="cls_btn" onclick="dismiss();" class="close_btn" data-dismiss="modal" aria-label="Close">x</a>' +
                    '<ul class="popup_list">'+
                    '<li class="half">'+' <a  class="sold_out">SOLD</a>' +'</ul>');
            }

            else
            {


              $(".popup").html('<h4>Lot '+ region_data.Property_Name+ '</h4><a id="cls_btn" onclick="dismiss();" class="close_btn" data-dismiss="modal" aria-label="Close">x</a>' +
                '<ul class="popup_list">' +
                '<li class="half">'+'<b>Size (sq meters): </b>' + region_data.Size + '&nbsp; </li>' +
                '<li class="half">'+'<b>MLS/PID: </b>' + region_data.MLS + '&nbsp; </li>' +
                '<li class="half_border"></li>' +   
                '<li class="full m1">'+' Listing Price <span class="c_black">:</span> </b><span class="price_box">' + region_data.Original +'</li>'+
                '<li class="half m2 dl_link"><a href="http://riverdalestates.ca/wp-content/uploads/2016/06/lot-'+region_data.Property_Name+'.pdf" target="_blank" class="myButton dl_icon">Download Lot Plan</a></li>'+ 
                '<li class="half dl_link realtor_link"><a href="http://riverdalestates.ca/contact-us/" target="_blank" class="myButton dl_icon cont_realtor">Contact Mariana</a></li>'+ '</ul>');


        }//else
    }
      }); //click


    }
});
/*
$(function() {

  wW = $('.map').width();
  wH = $('.map').height();

  oT = $('.map').offset().top;
  oL = $('.map').offset().left;

  fW = $('#myModal').width();
  fH = $('#myModal').height();

  $('.map').mousemove(function(e){
    x = e.pageX-fW+25;
    y = e.pageY-25;


    if (x >= wW+oL-fW) {x = wW+oL-fW;};
    if (x <= oL) {x = oL;};
    if (y >= wH+oT-fH) {y = wH+oT-fH;};
    if (y <= oT) {y = oT;};

    $('#myModal').css('top', y).css('left', x);
  });
  
});*/