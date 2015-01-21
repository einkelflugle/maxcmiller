jQuery(document).ready(function($) {
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

	delay = 0
	clicked = false

	$('a[href*=#drawer]').click(function() {
		nthChild = parseInt($(this).attr('href').substring(7, 8));

		if ($('.drawer:nth-child(' + nthChild + ')').css('display') == "none") {
			if (clicked) {
				$('.drawer').slideUp(400);
				delay = 600
			}

			$drawer = $('.drawer:nth-child(' + nthChild + ')')
			$drawer.delay(delay).slideToggle(400);
			console.log(nthChild);

			clicked = true
		}

		setTimeout(function() {
			$('html,body').animate({
				scrollTop: $("#drawer" + nthChild).offset().top
			}, 500);
		}, 100);
	});
});

function displayFormMessage() {
	$('#contact .container').append("<p class='form-message'>Thanks for your input!</p>")
}