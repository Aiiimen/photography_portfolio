var imagesList = [],
    current = "", //current index of photo
    exit = "",
    next = "",
    prev = "",
    carouselWin = "",
    image ="";


$(document).ready(function(){

  next = $('#next');
  prev = $('#prev');
  exit = $('#exit');
  carouselWin = $('#carouselWin');
  image = $('.col')

  loadImages(0, 39);

  //close carousel
  exit.on('click',  function(){
    carouselWin.hide();
    $('body').css({
      overflow: 'auto'
    });
  });
});

$(window).on('load', function(){

  //get index and show carousel
  $('.col').on('click', function(){
     current = parseInt($(this).attr('id'));
     //show carousel
     carousel(current);
   });

});

// get img on click and show carousel
function carousel(current){
  carouselWin.show();
  $('#img').children().attr('src', imagesList[current].src);

  $('body').css({
    overflow: 'hidden'
  });
  carouselNav();
}

function carouselNav(){

  //disable prev if first pic selected
  if (current=== 0){
    prev.hide();
    next.show();
  }
  // //disable next if last pic selected
  if(current === imagesList.length-1){
    next.hide();
    prev.show();
  }

  if(current > 0 && current < imagesList.length-1){
    prev.show();
    next.show();
  }

  next.on('click', function(){
    console.log(current);

    if(current+1 === imagesList.length-1){

      $('#img').children().attr('src', imagesList[++current].src);
      next.hide();
      prev.show()
    }else{
      $('#img').children().attr('src', imagesList[++current].src);
      next.show();
      prev.show();
    }
  });

  prev.on('click', function(){
    console.log(current);

    if(current === 1){
      $('#img').children().attr('src', imagesList[--current].src);
      prev.hide();
      next.show();
    }else{
      $('#img').children().attr('src', imagesList[--current].src);
      prev.show();
      next.show();
    }
  });
}


function loadImages(start, stop) {
  var img = document.createElement("img");
  img.src = "/css/img/event/photo-" + start + "-min.jpg";
  //console.log(img.src);
  if (start === stop) { //all assests are loaded
    img.onload= function(){
        imagesList.push(this);
        $('#' + start).hide().prepend(this).fadeIn(500);
    }
    $('.loading').hide()
  } else {
    img.onload = function() {
      imagesList.push(this); //add img to array

      $('#' + start).hide().prepend(this).fadeIn(500);
      start++;
      loadImages(start, stop); //push image till all imgs are added

    }
  }
}//end of loadImages
