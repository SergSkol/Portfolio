const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const menuBox = document.querySelector("#menuBox");
const menuItems = document.querySelectorAll(".menuItem");

menuIcon.addEventListener("click", () => {
  menuBox.classList.toggle("open-menu");
});

closeIcon.addEventListener("click", () => {
  menuBox.classList.toggle("open-menu");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuBox.classList.toggle("open-menu");
  });
});
