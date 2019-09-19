const navbar = document.getElementById('nav');
const footer = document.getElementById('footer');
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

const skillsList = document.querySelectorAll('.skills__item');
const navLogo = document.querySelectorAll('.nav__logo');
const headings = document.querySelectorAll('.header__heading');
const navItems = document.querySelectorAll('.nav__item');
const menuItems = document.querySelectorAll('.menu__link');
const bioText = document.querySelectorAll('.bio__all-text');
const projectTextFadeIn = document.querySelectorAll('.project-fade-in');

let invert = true;

function toggleMenu() {
  // add visibility to menu
  menu.classList.toggle('visible');

  // prevent scroll on body
  document.body.classList.toggle('visible');

  // change menu button text content
  if (menuButton.textContent === 'Menu') {
    menuButton.textContent = 'Close';
  } else {
    menuButton.textContent = 'Menu';
    ScrollReveal().clean(menuItems);
  }

  // change navbar color if not in footer
  if (invert) {
    navbar.classList.toggle('invert');
  }

  // add white class to navbar if in project page
  if (navbar.dataset.page === 'project') {
    menu.classList.toggle('white');
  }
}

function detectFooterPosition(e) {
  y = footer.getBoundingClientRect().y;

  /*
  The invert boolean is used to control the navbar
  class toggle.
  
  The navbar invert class is toggled based on both
  the y position of the footer and the invert boolean.
  Invert boolean is initially set to true. Once the navbar
  hits the footer and if invert is true, invert class is 
  toggled, and invert boolean is set to false. This 
  prevents the class from being constantly toggled when
  scrolling within the footer. When the navbar leaves the 
  footer, invert class will be toggled when invert is
  false, and invert boolean is again set to true.
  */

  if (y < 34 && invert) {
    navbar.classList.toggle('invert');
    invert = false;
  } else if (y > 34 && !invert) {
    navbar.classList.toggle('invert');
    invert = true;
  }
}

window.addEventListener('scroll', detectFooterPosition);
menuButton.addEventListener('click', toggleMenu);

// ANIMATIONS //

let delay = 200;

// Animate nav logo
ScrollReveal().reveal(navLogo, {
  distance: '20px',
  origin: 'bottom',
});

// Animate menu button for mobile
ScrollReveal().reveal(menuButton, {
  delay,
  distance: '20px',
  origin: 'bottom',
});

// Animate navlist items
ScrollReveal().reveal(navItems, {
  delay,
  interval: delay,
  distance: '20px',
  origin: 'bottom',
});

// Animate headings
ScrollReveal().reveal(headings, {
  delay: delay * 2,
  interval: delay,
  distance: '20px',
  origin: 'bottom',
});

// Animate menu list items
// ScrollReveal().reveal(menuItems, {
//   interval: delay,
//   distance: '20px',
//   origin: 'bottom',
//   reset: true,
// });

// Animate skills list
ScrollReveal().reveal(skillsList, {
  delay,
  interval: delay,
  distance: '20px',
  origin: 'bottom',
});

ScrollReveal().reveal(bioText, {
  delay,
  distance: '20px',
  origin: 'bottom',
});

ScrollReveal().reveal(projectTextFadeIn, {
  delay,
  interval: delay,
  distance: '20px',
  origin: 'bottom',
});
