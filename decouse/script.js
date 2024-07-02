let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    const newIndex = index % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(-${newIndex * 100}%)`;
    currentIndex = newIndex;
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);
