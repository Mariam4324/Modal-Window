const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");

openBtn.addEventListener("click", (ev) => {
  ev.stopPropagation();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", (ev) => {
  ev.stopPropagation();
  modal.style.display = "none";
});

window.addEventListener("click", (ev) => {
  if (ev.target === modal) {
    modal.style.display = "none";
  }
});

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
});
