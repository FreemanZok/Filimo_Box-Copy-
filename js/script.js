// swiper
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 1,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
  breakpoints: {
    700: {
      spaceBetween: 3,
      slidesPerView: 5,
    },
  }

});


//  AOS waypoint
AOS.init();


$(".filimobox_button-view").on("click", function () {
  if ($(".filimobox_inner-button_click").hasClass("back-view")) {
    $(".filimobox_inner-button_click.back-view").html("نمای کناری");
    $(".filimobox_inner-button_click").toggleClass("back-view");
    $(".filimobox_sliding-wrapper").css("transform", "translateX(0)");
  } else {
    $(".filimobox_inner-button_click").toggleClass("back-view");
    $(".filimobox_inner-button_click.back-view").html("نمای پشت");
    $(".filimobox_sliding-wrapper").css("transform", "translateX(40%)");
  }
});

$(".ghader").on("click",function(){
  $(".hide").slideToggle();
})
