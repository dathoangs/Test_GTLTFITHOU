/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
});

function rickRoll(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}



var typeWriter = document.querySelector(".typeWriter");
var txtPost = 0, msgIndex = 0, msgCur;
var speed = 80;
var msgArr = ["Chúng mình là Câu lạc bộ Giải thuật Lập trình.",
"Chúng mình đẹp try nhất Vịnh Bắc Bộ!", "Tham gia cùng chúng mình nhé ❤",
"Chúng mình tìm hiểu thuật toán"];

writeFunc = function (){
    msgCur = msgArr[msgIndex].substring(0, txtPost);
    typeWriter.innerHTML = msgCur + "<span></span>" ;

    if (txtPost == msgArr[msgIndex].length){
        setTimeout(eraseFunc, 7000);
    }
    if (txtPost++ != msgArr[0].length){
        setTimeout(writeFunc, speed);
    }
};
setTimeout(window.addEventListener("load", writeFunc), 10000);


eraseFunc = function(){
    msgCur = msgCur.substring(0, msgCur.length - 1);
    typeWriter.innerHTML = msgCur + "<span></span>" ;

    if (msgCur.length == 0){
        msgIndex = Math.floor(Math.random() * msgArr.length);;
        txtPost = 0;
        setTimeout(writeFunc, speed);
    }
    if (msgCur.length != 0){
        setTimeout(eraseFunc, speed-30);
    }    
}


