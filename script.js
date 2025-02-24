const body = document.querySelector('body');

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 800,
    effect: 'coverflow',
    fadeEffect: {
        rotate: 20,
        stretch: 50,
        // slideShadows: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        slideChangeTransitionStart: function() {
            let activeSlide = document.querySelector('.swiper-slide-active');

            if (activeSlide) {
                let bgColor50 = activeSlide.getAttribute('data-bg-50%') || '#FFFFFF';
                let bgColor100 = activeSlide.getAttribute('data-bg-100%') || '#EEEEEE';

                body.style.background = `linear-gradient(to right, ${bgColor50}, ${bgColor100})`;
            }
        }
    }
});