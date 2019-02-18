


// initialize color, randomize layout for dev, and init masonry.js
var $grid = $('.grid').masonry({
  columnWidth: 200
});

let sizeBoxes = function(boxes){
  boxes.each(function(){
    let sizeRoll = Math.floor(Math.random() * 3) + 1;
    if(sizeRoll === 1){
      $(this).addClass('black');
    }else if (sizeRoll === 2) {
      $(this).addClass('blue');
    } else {
      $(this).addClass('yellow');
    }
  });
}

let paintBoxes = function(boxes){
  boxes.each(function(){
  let paintRoll = Math.floor(Math.random() * 3) + 1;
    if(paintRoll === 1){
      $(this).addClass('gd-sm');
    }else if (paintRoll === 2) {
      $(this).addClass('gd-md');
    } else {
      $(this).addClass('gd-lg');
    }
  });
}

let masonryInit = function() {
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200,
    gutter: 10
  });
}
// redraw utility function
let redraw = function(){
  $grid.masonry('layout');
}

// setup the filter controllers
$('.filter-button').click(function(){
  let filterColor = $(this).attr('data-filter');
  console.log(filterColor);
//handle the bar
  if( $(this).hasClass('active') ){
    console.log('already filterd');
  } else {
    $('.filter-button').removeClass('active');
    $(this).addClass('active');
  }
// apply or remove filtered class
  if( filterColor === 'all'){
    $('.grid-item').removeClass('filtered');
  } else {
    $('.grid-item').each(function(){
      if($(this).hasClass(filterColor)){
        $(this).removeClass('filtered');
      } else {
        $(this).addClass('filtered');
      }
    })
  }
  // redraw the layout
  redraw();
});


// item expand controller
$('.grid-item').click(function(){
  $('.grid-item').removeClass('expanded');
  $(this).addClass('expanded');
  setTimeout(redraw,400);
});

$(".close").click(function(e){
  e.stopPropagation();
  $(this).parent().removeClass('expanded');
  setTimeout(redraw,400);
})
// initialize on load
$(document).ready(function(){
  let gridItems = $('.grid-item');

  paintBoxes(gridItems);
  sizeBoxes(gridItems);
  setTimeout(masonryInit,400);
});
