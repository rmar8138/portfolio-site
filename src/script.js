const navbar = document.getElementById('nav');
const footer = document.getElementById('footer');
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

let invert = true;

menuButton.addEventListener('click', toggleMenu);

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
  }

  // change navbar color if not in footer
  if (invert) {
    navbar.classList.toggle('invert');
  }
}

window.addEventListener('scroll', detectFooterPosition);

function detectFooterPosition(e) {
  y = footer.getBoundingClientRect().y;
  if (y < 34) {
    // when footer hits navbar, change navbar style
    if (invert) {
      navbar.classList.toggle('invert');
      invert = false;
    }
  } else if (y > 34 && !invert) {
    invert = true;
    navbar.classList.toggle('invert');
  }
}
