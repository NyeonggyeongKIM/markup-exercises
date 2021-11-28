// script


// modal +++++++++++++++++++++++++++++++++++++++++++++++++++++
const modal = document.querySelector('#modal');
const noticeOne = document.querySelector('#modal-btn');
const close = document.querySelector('#close-btn');

console.log(close);

close.addEventListener('click', function(){
  modal.style.display = 'none';
  modal.style.zIndex = '0';
});

noticeOne.addEventListener('click', function(){
  modal.style.display = 'flex';
});

// menu +++++++++++++++++++++++++++++++++++++++++++++++++++++++
const mainMenu = document.querySelectorAll('#gnb');
const sub = document.querySelectorAll('#sub');
const subMenu = document.querySelectorAll('#sub-menu');
const nav = document.querySelector('nav');
const gnbWrap = document.querySelector('#gnb-wrap');

for(let i =0; i < mainMenu.length; i++){
  mainMenu[i].addEventListener('mouseover' , function(){
    gnbWrap.style.height = '150px';
    for(let j=0; j<sub.length; j++){
      sub[j].style.display = 'flex';
      sub[j].style.transition = '1s';
    }
  });
}

for(let i =0; i < mainMenu.length; i++){
  mainMenu[i].addEventListener('mouseout' , function(){
    gnbWrap.style.height = '0';
    gnbWrap.style.zIndex = '0';
    for(let j=0; j<sub.length; j++){
      sub[j].style.display = 'none';
    }
  });
}