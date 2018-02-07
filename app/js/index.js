$(document).ready(function(){
  $('.sl__multiple').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    variableWidth: false,
    prevArrow: '<div class="prev"><img src="app/img/arrow.svg" alt=""></div>',
    nextArrow: '<div class="next"><img src="app/img/arrow.svg" alt=""></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
      ]
  });
  $('.sl__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    dots: true,
    prevArrow: '<div class="sl__prev"><img src="app/img/arrow.svg" alt=""></div>',
    nextArrow: '<div class="sl__next"><img src="app/img/arrow.svg" alt=""></div>'
  });

  $(".send").click(function () {
    $(".popup").css('display',"none");
    $(".popup__desktop").css("display","flex");
  });

  $(".closed").click(function () {
    $(".popup").css('display',"none");
    $(".popup__desktop").css('display',"none");
    $(".popup__fon").css('display',"none");
  });

  $('.sl__button').click(function(){
    if($(window).width() < '1200'){
      $(".popup").css("display","flex");
      $(".popup__fon").css("display","flex");
    }else {
      $(".popup__desktop").css("display","flex");
      $(".popup__fon").css("display","flex");
    }

  });

  $('.menu-toggle').click(function () {
    $('.navigation').css("display","flex");
  });

  $(".mobile__close").click(function mobileClose() {
    $(".navigation").css("display","none");
  });


  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top-80
    }, 800);
    return false;
  });


  $('a[href*=\"#\"]').click( function(){
    if($(window).width() <= '1024'){
      $(".navigation").css("display","none");
    }
  });



});