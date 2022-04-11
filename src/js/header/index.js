$('.header__logo').hover(() => {
    $('.header__description').removeClass('opacity-d')
}, () => {
    $('.header__description').addClass('opacity-d')
})