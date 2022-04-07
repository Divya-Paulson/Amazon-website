/* Navigation Sidebar script */


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").classList.add("opened");
    document.getElementById("mySidenav").classList.remove("closed");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").classList.remove("opened");
    document.getElementById("mySidenav").classList.add("closed");
}



/* Carousel script */


let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}