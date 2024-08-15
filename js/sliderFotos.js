// const btnFotos = document.getElementById("fotos");
// const containerFotos = document.getElementById("containerFotos");
// const ftsClose = document.getElementById("fts-close");

// btnFotos.addEventListener("click", () => {
//   containerFotos.classList.add("modal-fotos");
// });

// ftsClose.addEventListener("click", () => {
//   containerFotos.classList.remove("modal-fotos");
// });

const comprasMembresia = document.getElementById("comprasMembresia");

/*imgArray.forEach((element) => {
  console.log(element);

  comprasMembresia.innerHTML += `
  <div class="item-galery">
  <img src="${element.img1}" alt=""  />
  
</div>

  `;
});*/

let txt = ` `;

for (i = 1; i < 67; i++) {
  txt = `
    <div class="item-galery">
      <img src="imagenes/${i}.jpeg" alt="Dueños" loading="lazy" decoding="async"/>
    </div>
  `;
  comprasMembresia.insertAdjacentHTML("afterbegin", txt);
}
