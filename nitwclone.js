let index = 0;

function changeSlide() {
    let slides = document.querySelector(".slides");
    index++;
    if (index > 2) { index = 0; }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(changeSlide, 2000);  // हर 2 सेकंड में स्लाइड बदलेगी
let index = 0;

function showSlide(n) {
    let slides = document.querySelector(".slides");
    let totalSlides = document.querySelectorAll(".slides img").length;
    
    if (n >= totalSlides) { index = 0; }
    else if (n < 0) { index = totalSlides - 1; }
    else { index = n; }

    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

setInterval(nextSlide, 3000); // 3 सेकंड में स्लाइड ऑटोमेटिक बदलेगी
