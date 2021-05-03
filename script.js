const buttonMenu = document.getElementById("menu-button");
const nav = document.getElementById("nav");

buttonMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

nav.addEventListener("click", () => {
  nav.classList.toggle("active");
});
