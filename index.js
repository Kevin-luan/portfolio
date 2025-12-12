const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;
let interval;

// muda para próxima imagem (loop infinito)
function nextImage() {
  index = (index + 1) % images.length; // volta para 0 quando chega no fim
  slides.style.transform = `translateX(-${index * 600}px)`; // 600 = largura
}

// inicia o loop quando passar o mouse
carousel.addEventListener("mouseenter", () => {
  interval = setInterval(nextImage, 1500); // muda a cada 1.5s
});

// para quando tira o mouse
carousel.addEventListener("mouseleave", () => {
  clearInterval(interval);
});
