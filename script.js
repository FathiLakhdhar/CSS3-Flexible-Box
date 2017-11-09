var container = document.querySelector('.container');
var fd= document.getElementsByName('flex-direction');
var fw= document.getElementsByName('flex-wrap');
var AlignItems= document.getElementsByName('align-items');
var ac= document.getElementsByName('align-content');
var jc= document.getElementsByName('justify-content');
var ob = document.getElementsByName('order-box');
var as = document.getElementsByName('align-self');


fd.forEach(e=> {e.onclick= ()=> container.style.flexDirection =e.value;});
fw.forEach(e=> {e.onclick= ()=> container.style.flexWrap =e.value;});
AlignItems.forEach(e=> {e.onclick= ()=> container.style.alignItems =e.value;});
ac.forEach(e=> {e.onclick= ()=> container.style.alignContent =e.value;});
jc.forEach(e=> {e.onclick= ()=> container.style.justifyContent =e.value;});
ob.forEach(e=> {e.onclick= ()=> {
  if(e.value == 1){
    container.children[0].style.order = 3;
    container.children[1].style.order = 2;
    container.children[2].style.order = 4;
    container.children[3].style.order = 1;
  }else{//Init
    container.children[0].style.order = 1;
    container.children[1].style.order = 2;
    container.children[2].style.order = 3;
    container.children[3].style.order = 4;
  }
}});

/* align-self -> box 3  */
as.forEach(e=> {e.onclick= ()=> container.children[2].style.alignSelf =e.value;});