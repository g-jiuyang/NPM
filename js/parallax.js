$('.full-cut').scroll(function () {
	var scrollPositionY = $('.full-cut').offset().top;
	var mainBanner = $('.banner');
	mainBanner.css('transform', 'translateY(' + scrollPositionY + 'px');
	console.log(scrollPositionY);
})