const modal = document.getElementById("modalPromo");

const myTimeout = setTimeout(myModal, 3000);

function myModal() {
  const close = document.getElementById("close");
  modal.classList.add("modal-show");

  close.addEventListener("click", () => {
    modal.classList.remove("modal-show");
  });
}
