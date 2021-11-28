// menu practice

$(document).ready(function(){
  $(".main-menu").mouseenter(function(){
    $('.sub , #nav-box').stop().slideDown();
  });
  $(".main-menu").mouseleave(function(){
    $('.sub , #nav-box').stop().slideUp();
  });
});