let widthBody = document.querySelector("body").offsetWidth;
if(widthBody < 1000) {
  alert('Using Desktop for seeing this Page!');
  location.replace("../../html/app/index.html");
}

const swiperPopular = new Swiper("#swiper-popular", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-popular-button-next",
    prevEl: ".swiper-popular-button-prev",
  },
});

const swiperMenu = new Swiper("#swiper-menu", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-menu-pagination",
    clickable: true,
  },
});

const swiperGreatProcess = new Swiper("#swiper-great-process", {
  slidesPerView: "auto",
  spaceBetween: 32,
});
