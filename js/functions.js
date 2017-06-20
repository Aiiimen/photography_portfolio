$(document).ready(function(){


  //nav bar on click
  $('.cato_link:first').css("color", "#110f0f");

  $('.cato_link').click(function(e){

    $('.cato_link').css("color","#bfbfbf");
    $(this).css("color","#110f0f");

  });

  //photo belt

  $('.cato_link:first').click(function(){

    $('.photos_belt').animate({

      left: "0%"},500);
  });

  $('.cato_link:nth-child(2)').click(function(){

    $('.photos_belt').animate({
      left: "-100%"},500);
  });


  //thumbs on click

  $('.thumbs img:nth-child(2)').click(function(){

    $('.photo_holder').animate({
      height: '100%',
      width: '100%'
    },800);
  });

  $('.thumbs img:nth-child(1)').click(function(){
    console.log("hello");
    $('.photo_holder').animate({
      height: '250px',
      width: '400px'
    },800);
  });

  //scroll back top
  var wHeight = $(window).height();
  var showScroll = $(window).height() / 2;

  console.log(wHeight);
  console.log(showScroll);

  if($(window).scrollTop() == showScroll){
    console.log("we reached the half point");
  }

});
