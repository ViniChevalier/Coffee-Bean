const carousel = document.querySelector('.carousel-new');
let currentIndex = 0;

function slideTo(index) {
    const offset = -index * 800; // 800 é a largura do slide
    carousel.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
}

// Testando
setInterval(() => {
    const nextIndex = (currentIndex + 1) % 3; // Número de slides
    slideTo(nextIndex);
}, 3000);
