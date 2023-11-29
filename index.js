document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.querySelector('.menu-btn');
  menuBtn.addEventListener('click', toggleNavbar);
});

function toggleNavbar() {
  var navbar = document.querySelector('.navbar ul');
  navbar.classList.toggle('show');
}
