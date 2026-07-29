const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 5,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }

});

let typed = new Typed('.typed', {
  strings: ['Web Developer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Android Developer', 'UI/UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  showCursor: true,
  cursorChar: '|',
  smartBackspace: true,
});