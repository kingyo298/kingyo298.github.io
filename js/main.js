$(function(){
  $(".hamburger-menu").click(function(){
    $(".hamburger-menu, .hamburger-menu__line").toggleClass("open");
    $(".hamburger-menu__list").fadeToggle(500);
    $("body").toggleClass("noscroll");
  });

  if($(window).width() < 768){
    $(".menu-list li>a").click(function(){
      $(".hamburger-menu__list").fadeOut(500);
      $(".hamburger-menu, .hamburger-menu__line").removeClass("open");
      $("body").removeClass("noscroll");
    });
  }
});