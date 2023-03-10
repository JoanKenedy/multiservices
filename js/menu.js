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
