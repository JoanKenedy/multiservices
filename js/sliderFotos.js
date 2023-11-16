const btnFotos = document.getElementById("fotos");
const containerFotos = document.getElementById("containerFotos");
const ftsClose = document.getElementById("fts-close");

btnFotos.addEventListener("click", () => {
  containerFotos.classList.add("modal-fotos");
});

ftsClose.addEventListener("click", () => {
  containerFotos.classList.remove("modal-fotos");
});

const imgArray = [
  {
    img1: "imagenes/38.jpeg",
  },
  {
    img1: "imagenes/36.jpeg",
  },
  {
    img1: "imagenes/39.jpeg",
  },
  {
    img1: "imagenes/40.jpeg",
  },
  {
    img1: "imagenes/41.jpeg",
  },
  {
    img1: "imagenes/42.jpeg",
  },
  {
    img1: "imagenes/43.jpeg",
  },
  {
    img1: "imagenes/44.jpeg",
  },
  {
    img1: "imagenes/45.jpeg",
  },
  {
    img1: "imagenes/46.jpeg",
  },
  {
    img1: "imagenes/47.jpeg",
  },
  {
    img1: "imagenes/48.jpeg",
  },
  {
    img1: "imagenes/49.jpeg",
  },
  {
    img1: "imagenes/50.jpeg",
  },
  {
    img1: "imagenes/51.jpeg",
  },
  {
    img1: "imagenes/52.jpeg",
  },
  {
    img1: "imagenes/53.jpeg",
  },
  {
    img1: "imagenes/54.jpeg",
  },
  {
    img1: "imagenes/55.jpeg",
  },
  {
    img1: "imagenes/37.jpeg",
  },
  {
    img1: "imagenes/2.jpeg",
  },
  {
    img1: "imagenes/4.jpeg",
  },
  {
    img1: "imagenes/5.jpeg",
  },
  {
    img1: "imagenes/6.jpeg",
  },
  {
    img1: "imagenes/7.jpeg",
  },
  {
    img1: "imagenes/8.jpeg",
  },
  {
    img1: "imagenes/9.jpeg",
  },
  {
    img1: "imagenes/10.jpeg",
  },
  {
    img1: "imagenes/11.jpeg",
  },
  {
    img1: "imagenes/12.jpeg",
  },
  {
    img1: "imagenes/13.jpeg",
  },
  {
    img1: "imagenes/14.jpeg",
  },
  {
    img1: "imagenes/15.jpeg",
  },
  {
    img1: "imagenes/16.jpeg",
  },
  {
    img1: "imagenes/17.jpeg",
  },
  {
    img1: "imagenes/18.jpeg",
  },
  {
    img1: "imagenes/19.jpeg",
  },

  {
    img1: "imagenes/21.jpeg",
  },
  {
    img1: "imagenes/1.jpeg",
  },
  {
    img1: "imagenes/20.jpeg",
  },
  {
    img1: "imagenes/21.jpeg",
  },
  {
    img1: "imagenes/22.jpeg",
  },
  {
    img1: "imagenes/23.jpeg",
  },
  {
    img1: "imagenes/24.jpeg",
  },
  {
    img1: "imagenes/25.jpeg",
  },
  {
    img1: "imagenes/26.jpeg",
  },
  {
    img1: "imagenes/27.jpeg",
  },
  {
    img1: "imagenes/28.jpeg",
  },
  {
    img1: "imagenes/29.jpeg",
  },
  {
    img1: "imagenes/30.jpeg",
  },
  {
    img1: "imagenes/31.jpeg",
  },
  {
    img1: "imagenes/32.jpeg",
  },
  {
    img1: "imagenes/33.jpeg",
  },
  {
    img1: "imagenes/34.jpeg",
  },
  {
    img1: "imagenes/35.jpeg",
  },
];

const comprasMembresia = document.getElementById("comprasMembresia");

imgArray.forEach((element) => {
  console.log(element);

  comprasMembresia.innerHTML += `
  <div class="item-galery">
  <img src="${element.img1}" alt=""  />
  
</div>

  `;
});
