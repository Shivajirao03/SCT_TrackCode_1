console.log("javascriptt is connected");
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show-menu'); 
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(40, 44, 52, 1)'; 
  } else {
    navbar.style.backgroundColor = 'rgba(40, 44, 52, 0.9)';
  }
});
