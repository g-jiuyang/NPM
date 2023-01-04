var prev = 0;
var $window = $(window);
var $fullCut = $('.full-cut');
var header = $('header');

$window.on('scroll', function () {
	var scrollTop = $window.scrollTop();
	header.toggleClass('hidden', scrollTop > prev);
	prev = scrollTop;
});

$fullCut.on('scroll', function () {
	var scrollTop = $fullCut.scrollTop();
	header.toggleClass('hidden', scrollTop > prev);
	prev = scrollTop;
});