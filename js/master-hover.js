$(".div1").on({
  mouseenter: function () {
    console.log('hello');
    $('.div2, .div3').addClass('widthlow');
    $('.div1').addClass('widthmax');
    $(".widthmax").addClass('opacity');
  },
  mouseleave: function () {
    $('.div2, .div3').removeClass('widthlow');
    $('.div1').removeClass('widthmax');
    $('.div1').removeClass('opacity');
  }
});

$(".div2").on({
  mouseenter: function () {
    console.log('hello');
    $('.div1, .div3').addClass('widthlow');
    $('.div2').addClass('widthmax');
    $('.widthmax').addClass('opacity');
  },
  mouseleave: function () {
    $('.div1, .div3').removeClass('widthlow');
    $('.div2').removeClass('widthmax');
    $('.div2').removeClass('opacity');
  }
});

$(".div3").on({
  mouseenter: function () {
    console.log('hello');
    $('.div1, .div2').addClass('widthlow');
    $('.div3').addClass('widthmax');
    $('.widthmax').addClass('opacity');
  },
  mouseleave: function () {
    $('.div1, .div2').removeClass('widthlow');
    $('.div3').removeClass('widthmax');
    $('.div3').removeClass('opacity');
  }
});