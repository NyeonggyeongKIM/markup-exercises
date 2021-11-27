// test script 

const gnbUl = document.querySelector('#gnb');
const gnbLi = document.querySelectorAll('#main-menu');
const subUl = document.querySelectorAll('#sub');
const subLi = document.querySelectorAll('#sub-menu');

for(let i=0; i < gnbLi.length; i++){
  gnbLi[i].addEventListener('mouseover',function(){
    for(let j=0; j < subUl.length; j++){
      subUl[j].style.height = '200px';
    }
    for(let k =0; k < subLi.length; k++){
      subLi[k].style.display = 'block';
    }
  });
}

for(let i=0; i < gnbLi.length; i++){
  gnbLi[i].addEventListener('mouseout',function(){
    for(let j=0; j < subUl.length; j++){
      subUl[j].style.height = '0';
    }
    for(let k =0; k < subLi.length; k++){
      subLi[k].style.display = 'none';
    }
  });
}

// for(let i =0; i < gnbLi.length; i++){
//   gnbLi[i].addEventListener('mouseover' , (evt)=>{
//     for(let j=0; j <subUl.length; j++){
//       subUl[j].style.height = '200px';
//     }
//     for(let i =0; i < subLi.length; i++){
//       subLi[i].style.display = 'block';
//     }
//   });
// }










// const $gnb = document.querySelectorAll('#gnb>li');
// console.log($gnb);
// const $sub = document.querySelectorAll('#sub');
// console.log($sub);
// const $subAll = document.querySelectorAll('#sub>li')




// for(let i = 0; i < $gnb.length; i++) {
//   $gnb[i].addEventListener('mouseover', (evt) => {
//       for(let j = 0; j < $sub.length; j++) {
//       $sub[j].style.height = "20vh";
//     }
//   for (let i = 0; i<$subAll.length; i++)
//       $subAll[i].style.display = "block";
//       // sub안의 li를 제어 해주는 건데, #sub가 4개이고 그 안에 li가 4개이기 때문에 4x4로 총 16개라서 포문을 따로 써줘야 함
//   })

//   $gnb[i].addEventListener('mouseout', (evt) => {
//     evt.currentTarget.style.background = "white";
//     for(let j = 0; j < $sub.length; j++) {
//       $sub[j].style.height = "0vh";
//     }
//       for (let i = 0; i<$subAll.length; i++)
//       $subAll[i].style.display = "none";
//   })
// }
