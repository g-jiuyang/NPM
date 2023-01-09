$('#faq dt').click(function () {
	$(this).siblings().removeClass('show');
	$(this).toggleClass('show');
})

var currentY = 0;

$(window).scroll(function () {
	currentY = $('#faq').offset().top;
	console.log(currentY);
});