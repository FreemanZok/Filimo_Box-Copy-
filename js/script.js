// swiper

var swiper = new Swiper(".swiper-container", {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 5,
  loop: true,

  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
});

//  AOS waypoint
AOS.init();

/////////////////
var galleryThumbs = new Swiper(".swiper-container", {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper(".swiper-container", {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

$(".filimobox_button-view").on("click", function () {
  if ($(".filimobox_inner-button_click").hasClass("back-view")) {
    $(".filimobox_inner-button_click.back-view").html("نمای کناری");
    $(".filimobox_inner-button_click").toggleClass("back-view");
    $(".filimobox_sliding-wrapper").css("transform", "translateX(0)");
  } else {
    $(".filimobox_inner-button_click").toggleClass("back-view");
    $(".filimobox_inner-button_click.back-view").html("نمای پشت");
    $(".filimobox_sliding-wrapper").css("transform", "translateX(950px)");
  }
});
