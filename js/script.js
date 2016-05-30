jQuery(document).ready(function() {

	//collapsible nav

	//header slider
	var owl = $('.title-member');
	owl.owlCarousel({
		loop : true,
		dots : false,
		nav : true,
		margin : 20,
		navText : ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		autoHeight : true,
		responsive : {
			0 : {
				items : 2
			},
			600 : {
				items : 3
			},
			960 : {
				items : 4
			},
			1200 : {
				items : 6
			}
		}
	});

	//select box for
	$('.selectpicker').selectpicker({
		width : '100%',
		size : 3,
	});

	$(".flp label").each(function() {
		var sop = '<span class="ch">';
		//span opening
		var scl = '</span>';
		//span closing
		//split the label into single letters and inject span tags around them
		$(this).html(sop + $(this).html().split("").join(scl + sop) + scl);
		//to prevent space-only spans from collapsing
		$(".ch:contains(' ')").html("&nbsp;");
	});
	var d;
	//animation time
	$(".flp input").focus(function() {
		//calculate movement for .ch = half of input height
		var tm = $(this).outerHeight() / 2 * -1 + "px";
		//label = next sibling of input
		//to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
		$(this).next().addClass("focussed").children().stop(true).each(function(i) {
			d = i * 50;
			//delay
			$(this).delay(d).animate({
				top : tm
			}, 200, 'easeOutBack');
		});
	});
	$(".flp input").blur(function() {
		//animate the label down if content of the input is empty
		if ($(this).val() == "") {
			$(this).next().removeClass("focussed").children().stop(true).each(function(i) {
				d = i * 50;
				$(this).delay(d).animate({
					top : 0
				}, 500, 'easeInOutBack');
			});
		}
	});

	// 	Owl Carousel
	// For Members
	var owl = $('.members');
	owl.owlCarousel({
		center : true,
		loop : true,
		nav : false,
		margin : 0,
		itemsScaleUp : true,
		autoHeight : true,
		responsive : {
			0 : {
				items : 2
			},
			600 : {
				items : 5
			},
			960 : {
				items : 8
			},
			1200 : {
				items : 10
			}
		}
	});
	// owl.on('mousewheel', '.owl-stage', function(e) {
	// if (e.deltaY > 0) {
	// owl.trigger('next.owl');
	// } else {
	// owl.trigger('prev.owl');
	// }
	// e.preventDefault();
	// });

	//For Client say
	var cls = $('.client-speech');
	cls.owlCarousel({
		loop : true,
		nav : false,
		margin : 30,
		autoHeight : true,
		responsive : {
			0 : {
				items : 1
			},
			600 : {
				items : 1
			},
			960 : {
				items : 1
			},
			1200 : {
				items : 1
			}
		}
	});

	$("#demo").birthdayPicker();

});
