const hamburgerBtn = document.getElementById('hamburger__btn');
const navMenu = document.getElementById('header_nav-menu');
const overlay = document.getElementById('overlay_nav');
const body = document.body;

// Handle menu open/close
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  navMenu.classList.toggle('max-h-0');
  navMenu.classList.toggle('max-h-[400px]');

  if (hamburgerBtn.classList.contains('open')) {
    body.classList.add('h-screen', 'overflow-hidden');
    overlay.classList.add('opacity-50', 'inset-1');
    hamburgerBtn.children[0].style.transform = 'rotate(45deg)';
    hamburgerBtn.children[0].style.top = '1rem';
    hamburgerBtn.children[1].style.opacity = '0';
    hamburgerBtn.children[2].style.transform = 'rotate(-45deg)';
    hamburgerBtn.children[2].style.top = '1rem';
  } else {
    body.classList.remove('h-screen', 'overflow-hidden');
    overlay.classList.remove('opacity-50', 'inset-1');
    hamburgerBtn.children[0].style.transform = 'rotate(0)';
    hamburgerBtn.children[0].style.top = '0.5rem';
    hamburgerBtn.children[1].style.opacity = '1';
    hamburgerBtn.children[2].style.transform = 'rotate(0)';
    hamburgerBtn.children[2].style.top = '1.5rem';
  }
});

// Close menu when overlay is clicked
overlay.addEventListener('click', () => {
  closeNavMenu();
});

// Close menu when a section link is clicked
const navLinks = document.querySelectorAll('#header_nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeNavMenu();
  });
});

function closeNavMenu() {
  hamburgerBtn.classList.remove('open');
  navMenu.classList.remove('max-h-[400px]');
  navMenu.classList.add('max-h-0');
  body.classList.remove('h-screen', 'overflow-hidden');
  overlay.classList.remove('opacity-50', 'inset-1');

  hamburgerBtn.children[0].style.transform = 'rotate(0)';
  hamburgerBtn.children[0].style.top = '0.5rem';
  hamburgerBtn.children[1].style.opacity = '1';
  hamburgerBtn.children[2].style.transform = 'rotate(0)';
  hamburgerBtn.children[2].style.top = '1.5rem';
}