//const swiper = new Swiper('.swiper', {
const swiper = new Swiper('.wrapper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,

    // Autoplay
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
        pauseOnMouseEnter:true,
    },

  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints:{
        '@0.2':{   
            //container's width is at least 75% of the viewport width
            slidesPerView:1,
            spaceBetween: 20,
        },
        '@0.6':{
            slidesPerView:2,
            spaceBetween: 20,

        },
        '@0.8':{
            slidesPerView:3,
            spaceBetween: 20,

        },
        '@1.1':{
            slidesPerView:4,
            spaceBetween: 20,
        },
        '@1.5':{
            slidesPerView:5,
            spaceBetween: 30,
        },
    }

  });