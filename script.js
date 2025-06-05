// Efeito de digitação no título
function typeEffect(elementId, text, speed = 50) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  const heroEl = document.getElementById("typed-hero");
  if (heroEl) {
    const fullText = heroEl.textContent.trim();
    typeEffect("typed-hero", fullText, 70);
  }

  // Fade-in para os cards
  const cards = document.querySelectorAll(".fade-in-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  // Swiper (caso esteja usando)
  const swiperContainer = document.querySelector(".swiper-container");
  if (swiperContainer) {
    new Swiper(".swiper-container", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true
    });
  }
});

// Modal de imagem
function openFull(img) {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeFull() {
  document.getElementById("imgModal").style.display = "none";
}
