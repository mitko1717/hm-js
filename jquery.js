/* 1) Создать Табы. Макет Game_ui_Tabs.psd: */

// need to refactoring here, im sure
// what exactly should i change?

$('.information').on('click', function (e) {
  e.preventDefault();
  $('.ratings').removeClass('tabs__active');
  $('.wheretobuy').removeClass('tabs__active');
  $('.ratings-tab').addClass('notactive-tab');
  $('.wheretobuy-tab').addClass('notactive-tab');
  $(this).addClass('tabs__active');
  $('.information').addClass('tabs__active');
  $('.information-tab').removeClass('notactive-tab');
});

$('.ratings').on('click', function (e) {
  e.preventDefault();
  $('.information').removeClass('tabs__active');
  $('.wheretobuy').removeClass('tabs__active');
  $('.information-tab').addClass('notactive-tab');
  $('.wheretobuy-tab').addClass('notactive-tab');
  $(this).addClass('tabs__active');
  $('.ratings-tab').removeClass('notactive-tab');
  $('.ratings-tab').addClass('active-tab');
});

$('.wheretobuy').on('click', function (e) {
  e.preventDefault();
  $('.ratings').removeClass('tabs__active');
  $('.information').removeClass('tabs__active');
  $(this).addClass('tabs__active');
  $('.information-tab').addClass('notactive-tab');
  $('.ratings-tab').addClass('notactive-tab');
  $('.wheretobuy-tab').removeClass('notactive-tab');
  $('.wheretobuy-tab').addClass('active-tab');
});

//notactive-tab
/* 2) Создать Калькулятор. Реализовать его функциональность. */

$(function () {
  $('.calc-btn').on('click', function (e) {
    e.preventDefault();
    $('.result').val($('.result').val() + $(this).html());
  });

  $('.equal').on('click', function (e) {
    e.preventDefault();
    let exp = $('.result').val();
    $('.result').val(eval(exp));
  });

  $('.clear').on('click', function () {
    $('.result').val('');
  });

  $('.back').on('click', function () {
    let ex = $('.result').val();
    $('.result').val(ex.substring(0, ex.length - 1));
  });
});
