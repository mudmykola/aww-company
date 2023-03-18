const openBtn = document.querySelector(".navigation-btn");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal-close");

openBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show-modal");
    document.body.style.overflow = "auto";
  }
});
