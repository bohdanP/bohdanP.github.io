var colorBlueZone='#042084';
var colorGreenZone='#007527';
var colorRedZone='#FF0012';

var colorBlueZoneHover='#84C8EF';
var colorGreenZoneHover='#C8E6C9';
var colorRedZoneHover='#E57373';

var downColor='#F0F4C3';

var map_config = {
	'default':{
		'borderColor':'#9CA8B6', //inter-state borders
		'lakesColor':'#ACE9FC', // lakes color
		'namesColor':'#fff', //color of short names
		'mapShadow':'#000', //shadow color below the map
		'shadowOpacity':'50', //shadow opacity, value, 0-100
		'hoverShadow':'#666666', //tooltip shadow color
	},
	/*BlueZone*/
	'map_1':{
		'hover': 'Patient First <br> P: (703) 357-9707 <br> 2199 OLD BRIDGE RD.', //state hover content
		'url':'', //Goto URL
		'target':'same_window', //open link in new window:new_window, open in current window:same_window, or none for nothing.
		'upColor':colorBlueZone, //state's color when page loads
		'overColor':colorBlueZoneHover, //state's color when mouse hover
		'downColor':downColor,//state's color when mouse clicking
		'enable':true,//true/false to enable/disable this state
	},
	'map_2':{
		'hover': 'Dunkin Donuts <br> (703) 490-5135 <br> 2201 OLD BRIDGE RD..', 
		'url':'', 
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_3':{
		'hover': ' Safeway <br> P: (703) 494-8858 <br> 2205 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_4':{
		'hover': 'Layla’s Lebanese Restaurant <br> P: (703) 492-1500 <br> 2217 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_5':{
		'hover': 'Massage <br> P: (703) 497-5567 <br> 2219 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_6':{
		'hover': 'Edgemoor Art Studio <br> P: (703) 490-2355<br> 2221 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_7':{
		'hover': 'Curves <br> P: (703) 497-4244 <br> 2223 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_8':{
		'hover': 'Virginia ABC <br> P: (703) 494-0329 <br> 2225 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_9':{
		'hover': 'Classic Travel <br> P: (703) 494-2882 <br> 2227 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_10':{
		'hover': 'Lake Ridge Pizzeria <br> P: (703) 494-2134 <br> 2229 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_11':{
		'hover': 'NT Salon <br> P: (703) 492-935 <br> 2231 OLD BRIDGE DR.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_12':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_13':{
		'hover': 'Pet Value <br> P: (571) 408-4129 <br> 2231A OLD BRIDGE DR.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_14':{
		'hover': 'Woodbridge Academy of Dance <br> P: (703) 583-2623 <br> 2235 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_15':{
		'hover': 'Tackett`s Mill Barber Shop <br> P: (703) 490-1499 <br> 2237 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_16':{
		'hover': 'Lake Ridge Library <br> P: (703) 792-5675 <br> 2239 OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_17':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_18':{
		'hover': '9Round Kickboxing <br> P: (866) 619-797 <br> 2243C OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_19':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_20':{
		'hover': 'PenFed Realty <br> P: (703) 897-4663 <br> 2253A OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_21':{
		'hover': 'Lake Ridge Florist / Boomers <br> P: (703) 494-2299 <br> 2253B OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_22':{
		'hover': 'May, Hettler, and Assoc. Optometrists <br> P: (703) 494-8900 <br> 2253C OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_23':{
		'hover': 'Statements The Salon <br> P: (703) 494-2400 <br> 2253D OLD BRIDGE RD.',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_24':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_25':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window', 
		'upColor':colorBlueZone,
		'overColor':colorBlueZoneHover, 
		'downColor':downColor,
		'enable':true,
	},

	/*BlueZone END*/

	/*GreenZone*/

	'map_26':{
		'hover': 'Polaris Press <br> P: (703) 680-6060 <br> 2212 TACKETTS MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_27':{
		'hover': 'Kumon Learning Center <br> P: (703) 492-0690<br> 2214 TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_28':{
		'hover': 'The Arc <br> P: (703) 670-4800 <br> 2216 TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_29':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_30':{
		'hover': 'RGS Title <br> P: (703) 491-9600 <br> 2220 TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_31':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_32':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_33':{
		'hover': 'Clearbrook Center of the Arts <br> P: (703) 491-2611 <br> 2230B TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_34':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_35':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_37':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_36':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':false,
	},
	'map_38':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_39':{
		'hover': 'Pediatric Achievements <br> P: (703) 491-1044 <br> 2239 C/D TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_40':{
		'hover': 'Pediatric Achievements <br> P: (703) 491-1044 <br> 2239 C/D TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_41':{
		'hover': 'RDT, INC. <br> P: (703) 499-9188 <br> 2235B TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_42':{
		'hover': 'Slender Spa <br> P: (703) 490-6667 <br> 2235A TACKETT1S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_43':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_44':{
		'hover': 'State Farm <br> P: (703) 490-6324 <br> 2237C TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorGreenZone,
		'overColor':colorGreenZoneHover, 
		'downColor':downColor,
		'enable':true,
	},

	/*GreenZone END*/

	/*RedZone*/

	'map_45':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_46':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_47':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_48':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_49':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_50':{
		'hover': 'After the Fall <br> P: (703) 497-0333 <br> 2239K TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_51':{
		'hover': 'Joel R. Braunfeld, DDS <br> P: (703) 491-2200 <br> 2239L TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_52':{
		'hover': 'Kite Architecture <br> P: (703) 492-2002 <br> 2239M TACKETT1S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_53':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_54':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_55':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_56':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_57':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_58':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_59':{
		'hover': 'Occoquan Supervisor <br> 2241K TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_60':{
		'hover': 'Jenn Elisabeth Studios <br> 2241H TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_61':{
		'hover': 'Benjamin`s Counseling <br> P: (703) 494-1434 <br> 2241G TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_62':{
		'hover': 'Prince William Conservation Alliance <br> P: (703) 459-4954 <br> 2241F TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_63':{
		'hover': 'VA State Referee Program <br> P: (703) 491-1717 <br> 2241E TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_64':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_65':{
		'hover': 'Congressman Gerry Connolly <br> P: (571) 408-4407 <br> 2241D TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_66':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_67':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_68':{
		'hover': 'Panda Chinese <br> P: (703) 497-6688 <br> 2241A TACKETT`S MILL DR.',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_69':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	},
	'map_70':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':false,
	},
	'map_71':{
		'hover': 'VACANT',
		'url':'',
		'target':'same_window',
		'upColor':colorRedZone,
		'overColor':colorRedZoneHover, 
		'downColor':downColor,
		'enable':true,
	}
}
