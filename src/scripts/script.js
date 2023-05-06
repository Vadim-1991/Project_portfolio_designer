new WOW().init();

new Swiper('.image-slider', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //Текущее положение прогресс бар
    pagination: {
        el: '.swiper-pagination',
    },
    //Булеты
    clickable: true,
    //Динамичесие булеты
    dynamicBullets: true,
});
