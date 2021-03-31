const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: '.next-category',
        prevEl: '.prev-category',
    },

});