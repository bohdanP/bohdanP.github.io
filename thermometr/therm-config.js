jQuery.noConflict();

$(document).ready(function(){


var delay=500, setTimeoutConst;

var selected= new Date();


$('#datepicker-1').datepicker({
	dateFormat: 'yy,mm,dd',
	minDate: 0,
});



var d = new Date();
var m = d.getMonth();
var day=d.getDate();
var y=d.getFullYear();

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(y,m,day);
var startDate = new Date(2016,08,23); //month+1 !!!

var diffDays = Math.round(Math.abs((firstDate.getTime() - startDate.getTime())/(oneDay)));

numberOfWeeks=~~(diffDays/7);

var startPrice=639090;
var currentPrice=startPrice-(5000*numberOfWeeks);

//alert("d  "+d+"fird  "+firstDate+"startD  "+startDate+"diffw  "+diffDays+" numbw  "+numberOfWeeks);

$("#datepicker-1").on("change",function(){
	selected = $(this).val();

	var selectedDate = new Date(selected);
	var diffDaysSelected = Math.round(Math.abs((selectedDate.getTime() - startDate.getTime())/(oneDay)));
	numberOfWeeksSelected=~~(diffDaysSelected/7);
	var selectedPrice=startPrice-(5000*numberOfWeeksSelected);


	//alert("selected  "+selected+"  seldate  "+selectedDate+"  diffwSel  "+diffDaysSelected+" numbwSel  "+numberOfWeeksSelected);

	$(".weeks *, .prices *, #animated").css({
		"opacity": "0"
	});
	$(".weeks *, .prices #button1").css({
		"opacity": ".5"
	});
	$(".weeks #button7, .prices #button7").css({
		"opacity": "1"
	});

	$(".prices #button7").text((selectedPrice)).formatCurrency();

	var m1 = selectedDate.getMonth()+1;
	var day1=selectedDate.getDate();
	var y1=selectedDate.getFullYear();
	$(".weeks #button7").text((y1+"-"+m1+"-"+day1));

	
});



actual();

function actual()
{
	$(".prices #button1").text(currentPrice).formatCurrency();
	$(".prices #button2").text((currentPrice-5000)).formatCurrency();
	$(".prices #button3").text((currentPrice-10000)).formatCurrency();
	$(".prices #button4").text((currentPrice-15000)).formatCurrency();
	$(".prices #button5").text((currentPrice-20000)).formatCurrency();
	$(".prices #button6").text((currentPrice-25000)).formatCurrency();
	$( "#datepicker-1" ).datepicker("hide");
};



$(".bottomTherm").click(function(){

	$( "#datepicker-1" ).focus();
});

$('.weeks #button7').hover(function(){


	$( "#datepicker-1" ).focus();
});





$('.weeks #button2').hover(
	function() {
		$(".prices *").css({
			"opacity": "0"
		}); actual(); $("#animated").css({
			"opacity": "1"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		$(this).css({
			"opacity": "1"
		});
		$(".prices #button2").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			$('#animated')
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
		$(".prices *").css({
			"opacity": "0"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		$('#animated')
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

$('.weeks #button3').hover(
	function() {
		$(".weeks *, .prices *").css({
			"opacity": "0"
		}); actual(); $("#animated").css({
			"opacity": "1"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		$(this).css({
			"opacity": "1"
		});
		$(".prices #button3").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			$('#animated')
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
		$(".prices *").css({
			"opacity": "0"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		$('#animated')
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

$('.weeks #button4').hover(
	function() {
		$(".weeks *, .prices *").css({
			"opacity": "0"
		}); actual(); $("#animated").css({
			"opacity": "1"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		$(this).css({
			"opacity": "1"
		});
		$(".prices #button4").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			$('#animated')
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
		$(".prices *").css({
			"opacity": "0"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		$('#animated')
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

$('.weeks #button5').hover(
	function() {
		$(".weeks *, .prices *").css({
			"opacity": "0"
		}); actual(); $("#animated").css({
			"opacity": "1"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		$(this).css({
			"opacity": "1"
		});
		$(".prices #button5").css({
			"opacity": "1"
		});

		$('#animated')
		.css({
			"min-height": 0
		})
		setTimeoutConst = setTimeout(function(){
			$('#animated')
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
		$(".prices *").css({
			"opacity": "0"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		$('#animated')
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
$('.weeks #button6').hover(
	function() {
		$(".weeks *, .prices *").css({
			"opacity": "0"
		}); actual(); $("#animated").css({
			"opacity": "1"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		$(this).css({
			"opacity": "1"
		});
		$(".prices #button6").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			$('#animated')
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
		$(".prices *").css({
			"opacity": "0"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		$('#animated')
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
$('.weeks #button7').hover(
	function() {
		$(".weeks *, .prices *").css({
			"opacity": "0"
		});  $("#animated").css({
			"opacity": "1"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": ".5"
		});
		$(this).css({
			"opacity": "1"
		});
		$(".prices #button7").css({
			"opacity": "1"
		});

		setTimeoutConst = setTimeout(function(){
			$('#animated')
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
		$(".prices *").css({
			"opacity": "0"
		});
		$(".weeks *, .prices #button1, .prices #button7").css({
			"opacity": "1"
		});

		$('#animated')
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