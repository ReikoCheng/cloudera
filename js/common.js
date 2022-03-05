$(function () {
  let navbarH = $('.navbar').innerHeight() + 30;
  $('.navbar').css('top','-' + navbarH + 'px')
  $('.navbtn').click(function () {
    $(this).siblings('.navbar').animate({
      top: 0
    }, 200);
  })
  $('.navbar .close').click(function () {
    $('.navbar').animate({
      top: '-' + navbarH + 'px'
    }, 200)
  })
});