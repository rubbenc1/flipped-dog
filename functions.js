const menuBtn = document.querySelector('.menu-btn');
const menuSecondBtn = document.querySelector('.menu-cross-btn');
const changingAtribute = document.querySelector(".pop-up");
const body = document.querySelector("body");
const menuWrap = document.querySelector(".menu-wrap")
let menuOpen = false;

function menuOpenClosed() {

    if (menuOpen) {
        changingAtribute.classList.add('open');
        menuOpen = !menuOpen;
        body.classList.add('body-hidden');
        menuWrap.classList.add('menu-bar-scroll');
        changingAtribute.style.display = 'flex'
    }
    else {
        changingAtribute.classList.remove('open');
        menuOpen = !menuOpen;
        body.classList.remove('body-hidden');
        menuWrap.classList.remove('menu-bar-scroll');
        changingAtribute.style.display = 'none'
    }
}

menuOpenClosed()


menuBtn.addEventListener('click', menuOpenClosed);

menuSecondBtn.addEventListener("click", menuOpenClosed);

// SLIDES BLOCK


// const image_container= document.querySelector('.bottom-combined-pic-title-of-instance')
// if (window.innerWidth<=720){
//     image_container.classList.add('slides')
//}

let slideIndex = 1;
function plusSlides(n) {
    showSlides(slideIndex += n);

    
}

function showSlides(n) {
    let total_slides = document.getElementsByClassName('slides');
    if (window.innerWidth>360){return 1}
    if (n > total_slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = total_slides.length }
    for (let i = 0; i < total_slides.length; i++) {
        total_slides[i].style.display = "none"
    }
    total_slides[slideIndex - 1].style.display = 'block'
}

showSlides(slideIndex)
