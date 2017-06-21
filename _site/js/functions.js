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
  var h = $('.photo_holder').height();
  var w = $('.photo_holder').width();

  var photoContainer = $('.photos_containers').width();

  console.log(h);
  console.log(w);
  console.log(photoContainer);

//expand
  $('.thumbs img:nth-child(2)').click(function(){

    $('.photo_holder').animate({
      height: photoContainer * 60 / 100,
      width: photoContainer
    },800);
  });

//shrink
  $('.thumbs img:nth-child(1)').click(function(){
    console.log("hello");
    $('.photo_holder').animate({
      height: h,
      width: w
    },800);
  });


});
