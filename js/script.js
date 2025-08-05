// ===== UTILS =====
function onReady(fn) {
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
}

// ===== NAVIGATION & STICKY HEADER =====
onReady(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__list a");
  const header = document.querySelector(".header");
  const SCROLL_THRESHOLD = 50;

  // Toggle mobile menu
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuToggle.classList.toggle("open");
    });
  }

  // Close menu
  if (menuClose) {
    menuClose.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.classList.remove("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.classList.remove("open");
    });
  });

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > SCROLL_THRESHOLD);
  });
});

// ===== BEFORE-AFTER SLIDER (TwentyTwenty) =====
window.addEventListener("load", () => {
  if (typeof jQuery !== "undefined" && $.fn.twentytwenty) {
    $(".twentytwenty-container").twentytwenty({
      default_offset_pct: 0.5,
      orientation: "horizontal",
      before_label: "Sebelum",
      after_label: "Sesudah",
      no_overlay: false,
      move_slider_on_hover: false,
      move_with_handle_only: true,
      click_to_move: false,
    });
  }
});

// ===== SWIPER: TESTIMONIAL SLIDER =====
onReady(() => {
  if (window.Swiper) {
    const testiEl = document.querySelector(".testimonial__swiper");
    if (testiEl) {
      new Swiper(".testimonial__swiper", {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 16,
        grabCursor: true,
        speed: 600,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  }
});
