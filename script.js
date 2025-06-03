// 1) Efeito de Digitação para o Hero (quando a página carrega)
//    O texto já deve estar completo em <h1 id="typed-hero">No HTML</h1>
function typeEffect(elementId, text, speed = 50) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.textContent = ""; // limpa antes de digitar
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
  // Texto original no HTML:
  const heroEl = document.getElementById("typed-hero");
  if (heroEl) {
    const fullText = heroEl.textContent.trim();
    typeEffect("typed-hero", fullText, 70);
  }
});

// 2) Animação de cards com IntersectionObserver (revelar ao rolar)
//    Para garantir que as cards façam fade-in quando ficarem visíveis
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

// == Inicialização do Swiper para o slider de fotos ==
document.addEventListener("DOMContentLoaded", () => {
  // Verifica se existe um container Swiper na página
  const swiperContainer = document.querySelector(".swiper-container");
  if (swiperContainer) {
    const photoSwiper = new Swiper(".swiper-container", {
      loop: true,            // repete infinitamente
      speed: 600,            // velocidade de transição (ms)
      autoplay: {
        delay: 3000,         // 3 segundos entre slides
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
      slidesPerView: 1,      // quantas imagens são exibidas por vez
      spaceBetween: 20,      // espaçamento entre slides (px)
      grabCursor: true,
      effect: "slide",       // animação de slide; pode usar "fade" se quiser
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

<script> 
  function openFull(img) {
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
  }

  function closeFull() {
    document.getElementById("imgModal").style.display = "none";
  }
</script>
<script>
  const swiper = new Swiper(".mySwiper", {
    loop: true,
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
    }
  });

  // Modal fullscreen
  function openFull(img) {
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
  }

  function closeFull() {
    document.getElementById("imgModal").style.display = "none";
  }
</script>
