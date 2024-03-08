let burger = document.querySelector('.header-nav-burger');
let menu = document.querySelector('.nav-list');
let menulinks = document.querySelectorAll('.nav-list-item');
// let menuactive = window.getComputedStyle(menu)

burger.addEventListener('click',

    function () {

        burger.classList.toggle('header-nav-burger--active');
        menu.classList.toggle('nav-list--active');
        document.body.classList.toggle('stop-scroll');
    });
    

menulinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('header-nav-burger--active');
        menu.classList.remove('nav-list--active');
        document.body.classList.remove('stop-scroll')

    })
});

// window.onclick = function(e){   
//     if ((document.documentElement.clientWidth <= 1024) && (document.querySelector('.nav-list--active').contains(e.target))) {
//       console.log('in')
//     } else{
//       console.log('out')
//       burger.classList.remove('header-nav-burger--active');
//       menu.classList.remove('nav-list--active');
//       document.body.classList.remove('stop-scroll')
//     }
//   };



  const AdaptSwiper = document.querySelector('#Swiper');
  const SwiperWrapper = document.querySelector('#Swiper-Wrapper');
  const SwiperItem = document.getElementsByClassName('resort');


  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    // spaceBetween: 30,
    createElements: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
  });
  

window.onload = function () {
    if (document.documentElement.clientWidth >= 1024) {
      swiper.disable()
      // swiper.destroy(false, true)
    //   AdaptSwiper.classList.remove('swiper');
    //   SwiperWrapper.classList.remove('swiper-wrapper');
      
    //   for (let Swipers of SwiperItem) {
    //     Swipers.classList.remove('swiper-slide');
    // }
  } else {
  }};

  window.onresize = function () {
    if (document.documentElement.clientWidth <= 1024) {
      swiper.enable()
      // swiper.init()
      //   AdaptSwiper.classList.add('swiper');
      //   SwiperWrapper.classList.add('swiper-wrapper');

      //   for (let Swipers of SwiperItem) {
      //       Swipers.classList.add('swiper-slide');
      //   }
      //   swiper.update()
    } else {
      document.querySelector('.swiper-pagination-bullet').click(); // данная строка совершает клик на страницу слайдера,
      //  а так как querySelector по умолчанию выбирает первый элемент, дополнительные уточнения не требуются, ведь именно он и нужен.
      //  Это необходимо, на случай если слайдер был выставлен на другую страницу, так как это присваивает смещение всему листу, которое по другому не убрать.
        swiper.disable()
        // swiper.destroy(false, true)
        // AdaptSwiper.classList.remove('swiper');
        // SwiperWrapper.classList.remove('swiper-wrapper');

        // for (let Swipers of SwiperItem) {
        //     Swipers.classList.remove('swiper-slide');
        // }
        // swiper.detachEvents()
    }
};

