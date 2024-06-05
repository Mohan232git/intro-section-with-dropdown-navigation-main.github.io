var temp = true ;
var tempBtn2 = true ;
document.querySelector(".btn1").addEventListener('click' , ()=>{
    let dropdown1 = document.querySelector('.dropdown-menu1');
    let upArrsrc ="images/icon-arrow-up.svg";
    let image = document.querySelector('.arrow-img1');
    let downArrSrc= "images/icon-arrow-down.svg";
    if(temp){
        dropdown1.classList.remove('hidden');
        image.src= upArrsrc;
        temp = false ;
    }else{
        dropdown1.classList.add('hidden');
        image.src = downArrSrc;
        temp = true ;
    }  
});
document.querySelector(".btn2").addEventListener('click' , ()=>{
    let dropdown2= document.querySelector('.dropdown-menu2');
    let upArrsrc ="images/icon-arrow-up.svg";
    let image = document.querySelector('.arrow-img2');
    let downArrSrc= "images/icon-arrow-down.svg";
    if(tempBtn2){
        dropdown2.classList.remove('hidden');
        image.src= upArrsrc;
        tempBtn2 = false ;
    }else{
        dropdown2.classList.add('hidden');
        image.src = downArrSrc;
        tempBtn2 = true ;
    }  
});