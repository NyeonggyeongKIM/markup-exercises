// script

$(document).ready(function () {
   $('.main-menu').mouseenter(function () {
      $('.nav-con , .sub').stop().slideDown();
   });
   $('.main-menu').mouseleave(function () {
      $('.nav-con , .sub').stop().slideUp();
   });




   // slide
   // method -> id는 할당이 유일하기 때문에 메서드가 제대로 반응 안될 수 가 있어요 :)
   const slide = document.querySelectorAll('#slide-pic');
   // ----
   console.log(slide.length);

   // querySeletor() -> children NodeList 
   const example = document.querySelector('#slide-con').children;


   let index = 0;
   setInterval(() => {
      if (index < slide.length - 1) {
         slide[index].style.marginLeft = '-1200px';
         index += 1;
      } else {
         index = 0;
         for (let i = 0; i < slide.length; i++) {
            slide[i].style.marginLeft = '0px';
         }
      }
   }, 3000);

   // ready() method 스코프 바꿔주었어요 :)
});