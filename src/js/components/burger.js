const menuBtn = document.querySelector(".menu-inner__btn");
const menuContent = document.querySelector(".menu-inner__content");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuContent.classList.toggle("active");
});
