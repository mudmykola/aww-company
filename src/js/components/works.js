let swiper = new Swiper(".works-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".works-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
    },
});
