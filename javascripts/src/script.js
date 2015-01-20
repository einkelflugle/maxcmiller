jQuery(document).ready(function($) {

	delay = 0
	clicked = false

	$('a[href*=#drawer]').click(function() {
		nthChild = parseInt($(this).attr('href').substring(7, 8))
		console.log(" " + nthChild);
		if ($('.drawer:nth-child(' + nthChild + ')').css('display') == "none") {
			if (clicked) {
				$('.drawer').slideUp(400);
				delay = 600
			}
			$('.drawer:nth-child(' + nthChild + ')').delay(delay).slideToggle(400);
			clicked = true
		}
	});

	// Thanks to CSS-Tricks for the code below
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});