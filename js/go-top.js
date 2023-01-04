var $window = $(window);
var $fullCut = $('.full-cut');
var goTop = $('#go-top');

$('#go-top').click(function () {
	$window.animate({
		scrollTop: 0
	}, 'fast');

	$fullCut.animate({
		scrollTop: 0
	}, 'fast');
})