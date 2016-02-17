var radius = 200,
	steps = $(".step"),
	numOfItems = steps.length;

$.each(steps, function(i, e) {
	var slide = $(e);
	slide.attr({
		"data-x": slide.outerWidth(true) * i, //Math.sin
		"data-y": slide.outerHeight(true) * i, //Math.cos
		"data-z": 0,
		"data-rotate-x": 0,
		"data-rotate-y": 360 / numOfItems * i,
		"data-rotate-z": 0, //180 * Math.PI / numOfItems * i,
		"data-scale": 1
	});
});

impress().init();
prettyPrint();