var btt = "";
var pctScrolled = "";
var nav = "";
var navContainer = "";
var logo = "";
var smallLogo = "";

$(document).ready(function(){

  btt = $('.BTT-trigger');//back to top
  nav = $('.nav_bar'); //nav_bar
  navContainer = $('.nav_container');
  logo = $('.logo');
  smallLogo = $('.logo-small');

  //get back to top
  $(window).on("scroll", function(){
      amountscrolled()
      if(pctScrolled >= 50){
        btt.fadeIn(200);
      }else{
        btt.fadeOut(200);
      }

      navOnScroll();
  });
  menuOnClick();
});


function amountscrolled(){
    var winheight = $(window).height();
    var docheight = $(document).height();
    var scrollTop = $(window).scrollTop();
    var trackLength = docheight - winheight;
    pctScrolled = Math.floor(scrollTop/trackLength * 100); // gets percentage scrolled (ie: 80 NaN if tracklength == 0)

}

//minimize || maximize nav bar on scroll
function navOnScroll(){
  if(pctScrolled >= 10){
    nav.css({
      "padding-top": "19px"
    });
    logo.hide();
    smallLogo.show();
  }else{
    nav.css({
      "padding-top": "39px"
    });
    smallLogo.hide();
    logo.show();
  }
}

//menu on click
function menuOnClick(){
  $('.hamburger-menu .trigger').on('click', function(){

  if(navContainer.height() === 60){
    $('.nav_container').animate({
      height: 190
    }, 600);
    $('.hamburger-menu nav').delay().show(600);
  }else{
    $('.nav_container').animate({
      height: 60
    }, 600);
    $('.hamburger-menu nav').delay().hide(600);
  }
  });
}
