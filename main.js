window.addEventListener('load', function () {
    const myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
        interval: 2500, // 6.5 segundos entre las imágenes
        ride: 'carousel', // para que empiece a girar inmediatamente
    });
});