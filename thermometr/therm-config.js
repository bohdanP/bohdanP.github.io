$( "#datepicker-1" ).datepicker();

var d = new Date();
var m = d.getMonth()+1;
var day=d.getDate();
var y=d.getFullYear();

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(y,m,day);
var secondDate = new Date(2016,09,9);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

numberOfWeeks=~~(diffDays/7);

var startPrice=639090;
var currentPrice=startPrice-(5000*numberOfWeeks);


(function blink() { 
	$('#questionSymbol').fadeOut(800).fadeIn(800, blink); 
})();




$(".prices #button1").text(currentPrice).formatCurrency();
$(".prices #button2").text((currentPrice-5000)).formatCurrency();
$(".prices #button3").text((currentPrice-10000)).formatCurrency();
$(".prices #button4").text((currentPrice-15000)).formatCurrency();
$(".prices #button5").text((currentPrice-20000)).formatCurrency();
$(".prices #button6").text((currentPrice-25000)).formatCurrency();
$(".prices #button7").text((currentPrice-30000)).formatCurrency();




$(".bottomTherm").click(function(){

	
	alert(numberOfWeeks);

});


var delay=500, setTimeoutConst;

$('.weeks #button2').hover(
	function() {
		$(".weeks *, .prices *").css({
			"opacity": "0"
		});
		$(".weeks #button1, .prices #button1").css({
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
		$(".weeks *, .prices #button1").css({
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
		});
		$(".weeks #button1, .prices #button1").css({
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
		$(".weeks *, .prices #button1").css({
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
		});
		$(".weeks #button1, .prices #button1").css({
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
		$(".weeks *, .prices #button1").css({
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
		});
		$(".weeks #button1, .prices #button1").css({
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
		$(".weeks *, .prices #button1").css({
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
		});
		$(".weeks #button1, .prices #button1").css({
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
		$(".weeks *, .prices #button1").css({
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
		});
		$(".weeks #button1, .prices #button1").css({
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
		$(".weeks *, .prices #button1").css({
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