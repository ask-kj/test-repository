/*====================================
luminousのjs
===================================*/
//querySelectorAll() で全ての luminous2 クラスを指定した a 要素を取得
const luminousGalleryElems = document.querySelectorAll('.luminous');
  
//取得した要素の数が 0 より大きければ
if( luminousGalleryElems.length > 0 ) {
  // LuminousGallery で初期化
  new LuminousGallery(luminousGalleryElems);
};


/*======================================
swiperのjs
=========================================*/
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });