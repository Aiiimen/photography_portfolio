$(document).ready(function(){



//toggle between catogories
  $('.cato_link').click(function(){

    $('.cato_link').removeClass("active");
    $(this).toggleClass("active");

  });

// menu toggle (img)
$('.menu').click(function(){

  $(this).find('img').fadeToggle();
  $('body').toggleClass("overflow");

  $('.menu_container').fadeToggle( function(){
    $(this).toggleClass("menu_active");

  });
})

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




//expand
  $('.thumbs .large').click(function(){

    $('.photo_holder').animate({
      height: photoContainer * 60 / 100,
      width: photoContainer
    },800);
  });

//shrink
  $('.thumbs .small').click(function(){
    $('.photo_holder').animate({
      height: h,
      width: w
    },800);
  });

 $('.thumbs').click(function(){
   $(this).find('div').slideToggle();
 })

});
