// cruella script


// menu 부분 ++++++++++++++++++++++++++++++++++++++++++++++++++++
const nav = document.querySelector('nav');
const gnb = document.querySelector('#main');
const mainMenu = document.querySelectorAll('.main-menu');
const sub = document.querySelectorAll('.sub');
const subMenu = document.querySelectorAll('.sub-menu');
const closeBtn = document.querySelector('#close');
const menuBtn = document.querySelector('#menu-btn');
const subBox = document.querySelector('#sub-box');

console.log(nav);
console.log(gnb);
console.log(mainMenu);
console.log(sub);
console.log(subMenu);
console.log(menuBtn);


nav.style.visibility = 'hidden';
subBox.style.visibility = 'hidden';

// nav 나타난다 뿅
menuBtn.addEventListener('click', () => {
  nav.style.visibility = 'visible',
    nav.style.zIndex = '10';
});

// sub 나타난다 & nav 색 바뀐다 뿅
for (let i = 0; i < mainMenu.length; i++) {
  mainMenu[i].addEventListener('mouseover', () => {
    gnb.style.backgroundColor = 'black',
      gnb.style.color = 'white',
      subBox.style.visibility = 'visible',
      subBox.style.zIndex = '9';
  });
}

// nav 색 원래대로 돌아온다 뿅
// for(let i=0; i < mainMenu.length; i++){
//   mainMenu[i].addEventListener('mouseout',()=>{
//     gnb.style.backgroundColor = 'white',
//     gnb.style.color = 'black';
//   });
// }

// close 누르면 닫힌다 뿅
closeBtn.addEventListener('click', () => {
  nav.style.visibility = 'hidden',
    nav.style.zIndex = '0',
    subBox.style.visibility = 'hidden',
    subBox.style.zIndex = '0';

});


// scroll 부분 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.dir(window);

window.addEventListener('scroll', () => {
  console.log(scrollY);
});


// 시도1 ---------------------------------------
var widndowH = window.innerHeight;
console.log(widndowH);

var scrollOffset = window.scrollY;

Array.from(
  document.getElementsByClassName('s-ani')
);
console.log(Array);

var images = Array.prototype.slice.call(document.querySelectorAll('.s-ani'));
console.log(images);

var imagesTop = images.getBoundingClientRect(); 
// 왜 오류가 나지... ㅠㅠ 

var imagesAbsolLoca = scrollOffset + imagesTop;

// 시도2 -------------------------------------------------
// const images = document.querySelectorAll('.s-ani');


// const scrollOffset = 100;

// const scrollElement = document.querySelectorAll(".s-ani");

// for(let i = 0; i < scrollElement.length; i++){
//   const elementInView = (el, offset = 0) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return (
//       elementTop <=
//       ((window.innerHeight || document.documentElement.clientHeight) - offset)
//     );
//   };

//   const displayScrollElement = () => {
//     scrollElement[i].classList.add('scrolled');
//   }

//   const hideScrollElement = () => {
//     scrollElement[i].classList.remove('scrolled');
//   }

//   const handleScrollAnimation = () => {
//     if (elementInView(scrollElement[i], scrollOffset)) {
//       displayScrollElement[i]();
//     } else {
//       hideScrollElement[i]();
//     }
//   }

//   window.addEventListener('scroll', () => {
//     handleScrollAnimation();
//   })
// }






// 시도3 --------------------------------------------------

// /* 윈도우의 높이 */
// var winH = window.innerHeight; 

// /* 스크롤 값 */
// var scrollY = window.scrollY; 

// /* item의 top 값 */
// const image = document.querySelectorAll('.s-ani');

// for(let i = 0; i < image.length; i++){
//   var posFromTop = image[i].getBoundingClientRect().top; 
// }


// /* item 4의 절대좌표 값 */
// var absolutePos = scrollY + posFromTop; 
