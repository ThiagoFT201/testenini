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
