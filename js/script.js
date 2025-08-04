document.addEventListener("DOMContentLoaded", () => {
  // ===== Toggle Mobile Menu =====
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  // ===== Sticky Header on Scroll =====
  const header = document.querySelector(".header");
  const scrollThreshold = 50; // dalam piksel

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// ===== TwentyTwenty Before-After Slider =====
window.addEventListener("load", () => {
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.5, // posisi pembagi (50%)
    orientation: "horizontal", // 'horizontal' atau 'vertical'
    before_label: "Sebelum", // label sebelum
    after_label: "Sesudah", // label sesudah
    no_overlay: false, // tampilkan overlay label
    move_slider_on_hover: false, // geser saat hover
    move_with_handle_only: true, // hanya bisa digeser dari handle
    click_to_move: false, // klik untuk pindah slider
  });
});

// ===== Swiper Testimoni =====
const swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
