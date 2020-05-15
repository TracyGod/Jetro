$(function(){

  
 $('.slider__inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<img class="slider-arrows slider-arrows_right" src="images/previous-arrow.png" alt="">',
  nextArrow: '<img class="slider-arrows slider-arrows_left" src="images/next-arrow.png" alt="">',
  asNavFor: '.slider__nav-inner',
  responsive: [
    {
    breakpoint: 960,
    settings: {
      arrows: false,
    }
  }
]
});
$('.slider__nav-inner').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider__inner',
  focusOnSelect: true,
  variableWidth: true,
});

$('.header__menu-btn').on('click', function(){
$('.header__menu > ul').slideToggle();
});
});