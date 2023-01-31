$('#go-top').click(function () {
	$('html,body').animate({ scrollTop: 0 }, 100);
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		$('#go-top').removeClass('hidden');
	} else {
		$('#go-top').addClass('hidden');
	}
}).scroll();