
var i = 0;
var txt = 'Jestem web developerem. Tworzę strony';
var speed = 70;

function init() {
    typeWriterEffect();

    const menuOpen = document.getElementById("menu-btn");
    const menuClose = document.getElementById("menu-close-btn");

    menuOpen.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
}

function typeWriterEffect() {
    const info = document.getElementById("info")
    if (i < txt.length) {
        info.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterEffect, speed);
    };
    if (i === txt.length) {
        info.style.borderColor = "#9b3c70";
    }
}

function openMenu() {
    const overlay = document.getElementById("menu-overlay");
    const menuOpen = document.getElementById("menu-btn");
    const leftSide = document.getElementById("left");
    const rightSide = document.getElementById("right");

 
    // overlay.style.display = "block";

    overlay.classList.remove("close");
    overlay.classList.add("open");
    menuOpen.classList.add("hidden");
    // leftSide.style.width = "100%";
    // rightSide.style.width = "0%";
}

function closeMenu() {
    const overlay = document.getElementById("menu-overlay");
    const menuOpen = document.getElementById("menu-btn");
    const leftSide = document.getElementById("left");
    const rightSide = document.getElementById("right");

    // overlay.style.display = "none";
    overlay.classList.remove("open");
    overlay.classList.add("close");
    menuOpen.classList.remove("hidden");
    // leftSide.style.width = "50%";
    // rightSide.style.width = "50%";
}

// $("#menu-btn").click(function() {
    // $(".bar1").toggleClass("active-1");  
    // $(".bar2").toggleClass("active-2"); 
    // $(".bar3").toggleClass("active-3");
//     $("#overlay").toggleClass("visible"); 
//   });


