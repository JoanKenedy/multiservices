let iconMenu = document.getElementById("icon-menu");
let menu = document.getElementById("menu");

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("open");
});
let link = document.querySelectorAll(".linea-menu");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    iconMenu.classList.remove("active");
    menu.classList.remove("open");
  });
}
let index = 0,
  slides,
  timer,
  next,
  prev;
document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos solo una vez y ocultarlos
 slides = document.querySelectorAll(".mySlider");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Obtener botones y asignar evento
  document.querySelector('.prev').addEventListener('click', () => showSlides(-1));
  document.querySelector('.next').addEventListener('click', () => showSlides(1));
  // Asignar evento para funcionar con teclado
  document.addEventListener('keyup', (e) => {
    if(e.keyCode == 37) {
      // Tecla izquierda
      showSlides(-1);
    } else if(e.keyCode == 39) {
      // Tecla derecha
      showSlides(1);
    }
  });
  showSlides(0);
});

function showSlides(n) {
  // Cancelar temporizador para evitar comportamientos extraños
  clearTimeout(timer);
  // Ocultar elemento actual
  slides[index].style.display = 'none';
  index += n;
  if (index >= slides.length) {
    // Ir al inicio
    index = 0;
  } else if(index < 0) {
    // Ir al final
    index = slides.length - 1;
  }
  // Mostrar elemento
  slides[index].style.display = "block";  
  timer = setTimeout(showSlides, 4000, 1);
}
