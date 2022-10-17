let menuIcon = document.querySelector('#menuIcon');
let menuBox = document.querySelector('#menuBox');
let menuItem = document.querySelector('.menuItem');

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    menuBox.style.display = 'none';
  });
});

menuIcon.addEventListener('click',function (event) {
  menuBox.classList.toggle("open-menu");
  event.preventDefault();
});
