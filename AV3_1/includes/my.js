
$(document).ready(function(){
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1500, //speed of transitions between slides
    autoplaySpeed: 15000, //length of pause between slides
    touchThreshold: 100, //move 1/n of slide to get movement - 5 is default
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true
  });
}); 