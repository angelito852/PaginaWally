document.addEventListener('DOMContentLoaded', function() {
    const initCarousel = (carousel) => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        
        let currentIndex = 0;
        const totalItems = items.length;

        const updateCarousel = () => {
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        };

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Touch events para móviles
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
        }, {passive: true});

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        }, {passive: true});

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 30) nextSlide();
            if (touchEndX > touchStartX + 30) prevSlide();
        };
    };

    // Inicializar todos los carruseles
    document.querySelectorAll('.mobile-carousel').forEach(initCarousel);
});