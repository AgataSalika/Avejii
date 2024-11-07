// /*=============== SWIPER===============*/

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   autoplay: {
//     delay: 1000,
//   },
//   slidesPerView:3,
//   spaceBetween:10,
//   breakpoints:{
//     300:{
//       slidesPerView:1,
//   },
//     800:{
//       slidesPerView:2,
//     },
//     1200:{
//       slidesPerView:3,
//     }
// },

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
// console.log('Hello - swiper works');

  /*=============== BURGER MENU===============*/
  const burgerMenu = document.querySelector('.burger');
  const burger = document.querySelector('.burgerMenu__container');
  const mainContainer = document.querySelectorAll('.main__container');

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle ('active')
    burger.classList.toggle ('hidden')
      /*=============== ЧТОБЫ ЗАФИКСИРОВАТЬ КРЕСТИК===============*/
    if (!burger.classList.contains('hidden')){
        document.body.style.overflow = 'hidden'
        mainContainer.forEach((div)=>{
          div.style.overflow = 'hidden'
        })
    }
    else {
      document.body.style.overflow = 'auto'
      mainContainer.forEach((div)=>{
        div.style.overflow = 'auto'
      })
    }
})