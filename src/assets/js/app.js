import axios from 'axios';

/* window.addEventListener('load', () => {

  const api = 'http://www.colr.org/json/color/random';
  const body = document.querySelector('body');

  function randomColor() {
    axios.get(api).then(res => {
      let color = res.data.colors[0].hex;

      if (!color) {
        console.error('Random color could not be fetched.');
      }

      color = '#' + color;

      body.style.backgroundColor = color;
    }).catch(() => console.error('Random color could not be fetched.'));
  }

  randomColor();

  setInterval(randomColor, 8000);

});

*/



var toggleButton = document.querySelector(".toggle-button");
var dropdown = document.querySelector(".user-dropdown");
function toggleDropdown() {
  dropdown.classList.toggle('visible');
}
toggleButton.addEventListener("click", toggleDropdown);


window.onscroll = function() {myFunction()};

var navbar = document.querySelector("nav");
//var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > 0) {
    navbar.classList.remove("above-the-fold");
  } else {
    //alert("Scrolling");
    navbar.classList.add("above-the-fold");
  }
}

var hamburgerMenu = document.querySelector(".hamburger-menu");
var closeMenu = document.querySelector(".close-menu");
var hamburgerContent = document.querySelector(".hamburger-content");
var overlay = document.querySelector(".overlay");
function MenuContentShow() {
  //alert("Hamburger");
  overlay.style.display = "block";
  hamburgerContent.classList.add("hamburger-content-show");
  
}
function MenuContentHide() {
  //alert("Hamburger");
  overlay.style.display = "none";
  hamburgerContent.classList.remove("hamburger-content-show");
}

hamburgerMenu.addEventListener("click", MenuContentShow);
closeMenu.addEventListener("click", MenuContentHide);
overlay.addEventListener("click", MenuContentHide);
