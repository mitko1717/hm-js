$(function () {
  $('.slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    easing: 'ease',
    loop: true,
  });

  $(document).ready(function () {
    $('.slick-current .cover').css('display', 'block');
  });

  $('.slider').on('beforeChange', function () {
    $('.cover').css('display', 'none');
  });

  $('.slider').on('afterChange', function () {
    $('.slick-current .cover').css('display', 'block');
  });
});
