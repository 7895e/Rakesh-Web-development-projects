document.addEventListener("DOMContentLoaded", function() {
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_previous');
const next_btn = document.querySelector('.control_next');
let n =0;
function changeSlide(){
    for(let i=0; i<imgs.length;i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
changeSlide();
}
prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;

    }
    else{
        n= imgs.length -1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length -1){
        n++;

    }
    else{
        n= 0;
    }
    changeSlide();
})
const scrollContainer = document.querySelectorAll('.products');

for(const item of scrollContainer ){
    item.addEventListener('wheel',(event)=>{
        event.preventDefault();
        item.scrollLeft+= event.deltaY;
    });
    
}
var dropdownImage = document.querySelector(".dropdown");
var languageOptions = document.querySelector(".language-options");
dropdownImage.addEventListener("click", function() {
    languageOptions.style.visibility = (languageOptions.style.visibility === "visible") ? "hidden" : "visible";
  
});
var menuImage = document.querySelector(".menu-icon");
var menuOptions = document.querySelector(".menu");


menuImage.addEventListener("click", function() {
    menuOptions.style.visibility = (menuOptions.style.visibility === "hidden") ? "visible" : "hidden";
    // Select the user image
    
    if(menuClose.style.visibility === "visible"){

        document.body.classList.add("menu-visible");
    }
   
});

var cancelImg = document.querySelector('#cancel');
var menuClose = document.querySelector(".menu");
cancelImg.addEventListener("click", function() {
    menuClose.style.visibility = (menuClose.style.visibility === "hidden") ? "visible" : "hidden";
   
    document.body.classList.remove("menu-visible");
});
});