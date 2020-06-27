window.addEventListener('scroll', test);

const navbar = document.querySelector('.navbar');

function test() {
  if (window.scrollY >= 59) {
    fixedNavBar(navbar);
  } else {
    removeFixednavbar(navbar);
  }
}

function fixedNavBar(navbar) {
  navbar.style.color = '#42dca3';
  navbar.style.top = 0;
  navbar.style.padding = '2rem';
  navbar.style.backgroundColor = 'black';
}
function removeFixednavbar(navbar) {
  navbar.style.backgroundColor = '';
  navbar.style.color = 'white';
}
