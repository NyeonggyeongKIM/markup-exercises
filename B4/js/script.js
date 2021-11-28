// script

$(document).ready(function(){
   $('.main-menu').mouseenter(function(){
      $('.nav-con , .sub').stop().slideDown();
   });
   $('.main-menu').mouseleave(function(){
      $('.nav-con , .sub').stop().slideUp();
   });

   
});

// slide
const slide = document.querySelectorAll('#slide-pic');
console.log(slide.length)

let index = 0;
setInterval(() => {
   if(index < slide.length -1){
      slide[index].style.marginLeft = '-1200px';
      index += 1;
   } else {
      index = 0;
      for(let i = 0; i<slide.length; i++){
         slide[i].style.marginLeft = '0px';
      }
   }
}, 3000);