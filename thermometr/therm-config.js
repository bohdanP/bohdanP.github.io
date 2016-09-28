jQuery.noConflict();

jQuery(document).ready(function(){


var delay=500, setTimeoutConst;

var selected= new Date();


jQuery('#datepicker-1').datepicker({
	dateFormat: 'yy,mm,dd',
	minDate: 0,
});



var d = new Date();
var m = d.getMonth();
var day=d.getDate();
var y=d.getFullYear();

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(y,m,day);
var startDate = new Date(2016,09,03); //month+1 !!!

var diffDays = Math.round(Math.abs((firstDate.getTime() - startDate.getTime())/(oneDay)));

numberOfWeeks=~~(diffDays/7);

var startPrice=639090;
var currentPrice=startPrice-(5000*numberOfWeeks);

//alert("d  "+d+"fird  "+firstDate+"startD  "+startDate+"diffw  "+diffDays+" numbw  "+numberOfWeeks);

jQuery("#datepicker-1").on("change",function(){
	selected = jQuery(this).val();

	var selectedDate = new Date(selected);
	var diffDaysSelected = Math.round(Math.abs((selectedDate.getTime() - startDate.getTime())/(oneDay)));
	numberOfWeeksSelected=~~(diffDaysSelected/7);
	var selectedPrice=startPrice-(5000*numberOfWeeksSelected);


	//alert("selected  "+selected+"  seldate  "+selectedDate+"  diffwSel  "+diffDaysSelected+" numbwSel  "+numberOfWeeksSelected);

	jQuery(".weeks *, .prices *, #animated").css({
		"opacity": "0"
	});
	jQuery(".weeks *, .prices #button1").css({
		"opacity": ".5"
	});
	jQuery(".weeks #button7, .prices #button7").css({
		"opacity": "1"
	});

	jQuery(".prices #button7").text((selectedPrice)).formatCurrency();

	var m1 = selectedDate.getMonth()+1;
	var day1=selectedDate.getDate();
	var y1=selectedDate.getFullYear();
	jQuery(".weeks #button7").text((y1+"-"+m1+"-"+day1));

	
});



actual();

function actual()
{
	jQuery(".prices #button1").text(currentPrice).formatCurrency();
	jQuery(".prices #button2").text((currentPrice-5000)).formatCurrency();
	jQuery(".prices #button3").text((currentPrice-10000)).formatCurrency();
	jQuery(".prices #button4").text((currentPrice-15000)).formatCurrency();
	jQuery(".prices #button5").text((currentPrice-20000)).formatCurrency();
	jQuery(".prices #button6").text((currentPrice-25000)).formatCurrency();
	jQuery( "#datepicker-1" ).datepicker("hide");
};



jQuery(".bottomTherm").click(function(){

	jQuery( "#datepicker-1" ).focus();
});

jQuery('.weeks #button7').hover(function(){


	jQuery( "#datepicker-1" ).focus();
});





jQuery('.weeks #button2').hover(
	function() {
		jQuery(".prices *").css({
			"opacity": "0"
		}); actual(); jQuery("#animated").css({
			"opacity": "1"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		jQuery(this).css({
			"opacity": "1"
		});
		jQuery(".prices #button2").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			jQuery('#animated')
			.css({
				"min-height": 0
			})
			.animate({
				"min-height": 50
			}, {
				duration: 300,
				step: function (top) {
					this.setAttribute("transform", "translate(0," + top + ")");
				}
			});
		}, delay);

	},
	function() {
		clearTimeout(setTimeoutConst );
		jQuery(".prices *").css({
			"opacity": "0"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		jQuery('#animated')
		.css({
			"min-height": -50
		})
		.animate({
			"min-height": 0
		}, {
			duration: 300,
			step: function (top) {
				this.setAttribute("transform", "translate(0," + top + ")");
			}
		});

	}
	);

jQuery('.weeks #button3').hover(
	function() {
		jQuery(".weeks *, .prices *").css({
			"opacity": "0"
		}); actual(); jQuery("#animated").css({
			"opacity": "1"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		jQuery(this).css({
			"opacity": "1"
		});
		jQuery(".prices #button3").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			jQuery('#animated')
			.css({
				"min-height": 0
			})
			.animate({
				"min-height": 80
			}, {
				duration: 500,
				step: function (top) {
					this.setAttribute("transform", "translate(0," + top + ")");
				}
			});
		}, delay);

	},
	function() {
		clearTimeout(setTimeoutConst );
		jQuery(".prices *").css({
			"opacity": "0"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		jQuery('#animated')
		.css({
			"min-height": -80
		})
		.animate({
			"min-height": 0
		}, {
			duration: 500,
			step: function (top) {
				this.setAttribute("transform", "translate(0," + top + ")");
			}
		});

	}
	);

jQuery('.weeks #button4').hover(
	function() {
		jQuery(".weeks *, .prices *").css({
			"opacity": "0"
		}); actual(); jQuery("#animated").css({
			"opacity": "1"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		jQuery(this).css({
			"opacity": "1"
		});
		jQuery(".prices #button4").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			jQuery('#animated')
			.css({
				"min-height": 0
			})
			.animate({
				"min-height": 110
			}, {
				duration: 500,
				step: function (top) {
					this.setAttribute("transform", "translate(0," + top + ")");
				}
			});
		}, delay);

	},
	function() {
		clearTimeout(setTimeoutConst );
		jQuery(".prices *").css({
			"opacity": "0"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		jQuery('#animated')
		.css({
			"min-height": -110
		})
		.animate({
			"min-height": 0
		}, {
			duration: 500,
			step: function (top) {
				this.setAttribute("transform", "translate(0," + top + ")");
			}
		});

	}
	);

jQuery('.weeks #button5').hover(
	function() {
		jQuery(".weeks *, .prices *").css({
			"opacity": "0"
		}); actual(); jQuery("#animated").css({
			"opacity": "1"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		jQuery(this).css({
			"opacity": "1"
		});
		jQuery(".prices #button5").css({
			"opacity": "1"
		});

		jQuery('#animated')
		.css({
			"min-height": 0
		})
		setTimeoutConst = setTimeout(function(){
			jQuery('#animated')
			.css({
				"min-height": 0
			})
			.animate({
				"min-height": 140
			}, {
				duration: 500,
				step: function (top) {
					this.setAttribute("transform", "translate(0," + top + ")");
				}
			});
		}, delay);

	},
	function() {
		clearTimeout(setTimeoutConst );
		jQuery(".prices *").css({
			"opacity": "0"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		jQuery('#animated')
		.css({
			"min-height": -140
		})
		.animate({
			"min-height": 0
		}, {
			duration: 500,
			step: function (top) {
				this.setAttribute("transform", "translate(0," + top + ")");
			}
		});

	}
	);
jQuery('.weeks #button6').hover(
	function() {
		jQuery(".weeks *, .prices *").css({
			"opacity": "0"
		}); actual(); jQuery("#animated").css({
			"opacity": "1"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		jQuery(this).css({
			"opacity": "1"
		});
		jQuery(".prices #button6").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			jQuery('#animated')
			.css({
				"min-height": 0
			})
			.animate({
				"min-height": 170
			}, {
				duration: 500,
				step: function (top) {
					this.setAttribute("transform", "translate(0," + top + ")");
				}
			});
		}, delay);

	},
	function() {
		clearTimeout(setTimeoutConst );
		jQuery(".prices *").css({
			"opacity": "0"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		jQuery('#animated')
		.css({
			"min-height": -170
		})
		.animate({
			"min-height": 0
		}, {
			duration: 500,
			step: function (top) {
				this.setAttribute("transform", "translate(0," + top + ")");
			}
		});

	}
	);
jQuery('.weeks #button7').hover(
	function() {
		jQuery(".weeks *, .prices *").css({
			"opacity": "0"
		});  jQuery("#animated").css({
			"opacity": "1"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		jQuery(this).css({
			"opacity": "1"
		});
		jQuery(".prices #button7").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			jQuery('#animated')
			.css({
				"min-height": 0
			})
			.animate({
				"min-height": 210
			}, {
				duration: 500,
				step: function (top) {
					this.setAttribute("transform", "translate(0," + top + ")");
				}
			});
		}, delay);

	},
	function() {
		clearTimeout(setTimeoutConst );
		jQuery(".prices *").css({
			"opacity": "0"
		});
		jQuery(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		jQuery('#animated')
		.css({
			"min-height": -200
		})
		.animate({
			"min-height": 0
		}, {
			duration: 500,
			step: function (top) {
				this.setAttribute("transform", "translate(0," + top + ")");
			}
		});

	}
	);





});