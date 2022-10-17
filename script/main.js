let menuIcon = document.querySelector('#menuIcon');
let closeIcon = document.querySelector('#closeIcon');
let menuBox = document.querySelector('#menuBox');
let menuItems = document.querySelectorAll('.menuItem');

menuIcon.addEventListener('click',function (event) {
  menuBox.classList.toggle("open-menu");
});

closeIcon.addEventListener('click',function (event) {
  menuBox.classList.toggle("open-menu");
});

for (let item of menuItems) {
  item.addEventListener('click', function (event) {
    menuBox.classList.toggle("open-menu");
  });
}
