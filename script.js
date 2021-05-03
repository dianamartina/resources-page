const buttonMenu = document.getElementById("button-menu");
const nav = document.getElementById("nav");

buttonMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
