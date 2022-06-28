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

/*===============================================
紹介の写真をホバーすると文字が傾く
===============================================*/
  let hoverimgs = document.getElementsByClassName('introduce__item__img');
  hoverimgs = Array.from(hoverimgs);

  hoverimgs.forEach(function(hoverimg) {

  hoverimg.addEventListener('mouseenter', function() {
    hoverimg.parentNode.parentNode.lastElementChild.classList.add('lean');
  });

  hoverimg.addEventListener('mouseleave', function() {
    hoverimg.parentNode.parentNode.lastElementChild.classList.remove('lean');
  });
});

