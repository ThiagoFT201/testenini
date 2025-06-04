// Efeito de digitação para o Hero
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

window.addEventListener("DOMContentLoaded", () => {
  const heroEl = document.getElementById("typed-hero");
  if (heroEl) {
    const fullText = heroEl.textContent.trim();
    typeEffect("typed-hero", fullText, 70);
  }
});

// Animação de fade-in nos cards usando IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fade-in-card");
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
  });
});

// Inicializa Swiper para o slider de fotos
document.addEventListener("DOMContentLoaded", () => {
  const swiperContainer = document.querySelector(".swiper-container");
  if (swiperContainer) {
    new Swiper(".swiper-container", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      effect: "slide",
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });
  }
});

// Modal fullscreen para imagens
function openFull(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = img.src;
  }
}

function closeFull() {
  const modal = document.getElementById("imgModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Fecha o modal ao clicar fora da imagem
document.addEventListener("click", (event) => {
  const modal = document.getElementById("imgModal");
  if (modal && event.target === modal) {
    modal.style.display = "none";
  }
});
