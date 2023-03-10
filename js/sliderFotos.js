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
