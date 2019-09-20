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

const headingFadeIn = document.querySelectorAll('.heading-fade-in');
const projectTextFadeIn = document.querySelectorAll('.project-fade-in');
const footerFadeIn = document.querySelectorAll('.footer-fade-in');

const staggeredFadeIn = document.querySelectorAll('.staggered-fade-in');

let invert = true;
let toggle = false;

// if (navbar.dataset.page === 'project') {
//   document.body.classList.toggle('dark');
// }

function toggleMenu() {
  toggle = !toggle;
  // add visibility to menu
  navbar.style.pointerEvents = 'none';

  if (toggle) {
    menu.classList.toggle('visible');

    if (navbar.dataset.page === 'project') {
      const bodyFadeIn = anime({
        targets: 'body',
        backgroundColor: 'rgb(255,255,255)',
        easing: 'linear',
        duration: 500,
      });
    } else {
      const bodyFadeIn = anime({
        targets: 'body',
        backgroundColor: 'rgb(17,17,17)',
        easing: 'linear',
        duration: 500,
      });
    }

    // const bodyFadeOut = anime({
    //   targets: 'body',
    //   backgroundColor: 'rgb(17,17,17)',
    //   easing: 'linear',
    //   duration: 450,
    // });

    const imageFadeOut = anime({
      targets: 'img',
      opacity: 0,
      easing: 'linear',
      duration: 450,
    });

    const menuFadeIn = anime({
      targets: '.menu',
      opacity: [0, 1],
      translateY: ['100%', 0],
      easing: 'easeOutQuart',
      duration: 1000,
    });

    const menuItemsDropIn = anime({
      targets: '.menu__item',
      opacity: [0, 1],
      easing: 'linear',
      delay: anime.stagger(100, { start: 500 }),
    });

    if (navbar.dataset.page === 'project') {
      setTimeout(function() {
        if (invert) {
          navbar.classList.toggle('invert');
        }
      }, 450);
    } else {
      setTimeout(function() {
        if (invert) {
          navbar.classList.toggle('invert');
        }
      }, 100);
    }

    // disable clicks until animation completes
    setTimeout(function() {
      navbar.style.pointerEvents = 'auto';
    }, 1000);
  } else {
    const menuFadeOut = anime({
      targets: menu,
      opacity: [1, 0],
      translateY: '100%',
      easing: 'easeOutQuart',
      // delay: 500,
      duration: 1000,
    });

    if (navbar.dataset.page === 'project') {
      const bodyFadeIn = anime({
        targets: '.project-page',
        backgroundColor: 'rgb(17,17,17)',
        easing: 'linear',
        duration: 500,
      });
    } else {
      const bodyFadeIn = anime({
        targets: 'body',
        backgroundColor: 'rgb(255,255,255)',
        easing: 'linear',
        duration: 500,
      });
    }

    const imageFadeIn = anime({
      targets: 'img',
      opacity: 1,
      easing: 'linear',
      duration: 450,
    });

    const menuItemsFadeOut = anime({
      targets: '.menu__item',
      opacity: 0,
      easing: 'linear',
      delay: 250,
    });

    if (invert) {
      setTimeout(function() {
        navbar.classList.toggle('invert');
      }, 100);
    }

    // disable clicks until animation completes
    setTimeout(function() {
      menu.classList.toggle('visible');
      navbar.style.pointerEvents = 'auto';
    }, 750);
  }

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

// Animate headings
ScrollReveal().reveal(headings, {
  delay,
  interval: delay,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-out',
});

ScrollReveal().reveal(bioText, {
  delay,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-out',
});

ScrollReveal().reveal(staggeredFadeIn, {
  // delay,
  interval: delay,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-out',
});

ScrollReveal().reveal(headingFadeIn, {
  delay,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-out',
});
