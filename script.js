let currentIndex = 0;
let slideInterval;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');

function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    updateSlides();
}

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[index]?.classList.toggle('active', index === currentIndex);
    });
}

function changeSlide(n) {
    clearInterval(slideInterval);
    showSlide(currentIndex + n);
    startSlideShow();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlide(n - 1);
    startSlideShow();
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', startSlideShow);

slider.addEventListener('click', () => {
    clearInterval(slideInterval);
     
});

startSlideShow();
