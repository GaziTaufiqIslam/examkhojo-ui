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


// User Dashboard/Log In Dropwon Toggle
var toggleButton = document.querySelector(".toggle-button");
var dropdown = document.querySelector(".user-dropdown");
function toggleDropdown() {
  dropdown.classList.toggle('visible');
}
toggleButton.addEventListener("click", toggleDropdown);


// Sticky Navabar Effect
window.onscroll = function() {scrollFunction()};

var navbar = document.querySelector("nav");
//var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset > 0) {
    navbar.classList.remove("above-the-fold");
  } else {
    //alert("Scrolling");
    navbar.classList.add("above-the-fold");
  }
}


// Hamburger Menu Toggling
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


// Toggling Search Modal
var searchBox = document.querySelectorAll(".search-bar_large, .search-bar_small");
var closeModal = document.querySelector(".close-modal");
var searchModal = document.querySelector(".search-modal");

var modalInput = document.querySelectorAll(".modal-input")

var popularResultItems = document.querySelectorAll('.search-results-items[data-value="Popular"]');

var searchResultHeader = document.querySelector(".search-results-header");

var li = document.getElementsByClassName('search-results-items');

// Object.entries(searchBox).map((object) => { console.log(object) });


Object.entries(searchBox).map((object) => {
  object[1].onclick = function() {
    // alert(" Search Box Clicked");
    searchModal.style.display = "block";
    Object.entries(modalInput).map((object) => {
      object[1].focus();
    });
    
  }
  
});

closeModal.onclick = function() {
  searchModal.style.display = "none";
  
  Object.entries(li).map((object) => {
    object[1].style.display = "none";
  });
  Object.entries(popularResultItems).map((object) => {
    object[1].style.display = "flex";
  });
  Object.entries(modalInput).map((object) => {
    object[1].value = '';
  });

  searchResultHeader.innerHTML = "Popular Searches";
}



// Search Prototype

Object.entries(modalInput).map((object) => {
  object[1].onkeyup = function() {
    //  alert(" Search Box Key Pressed");
    // Declare variables
    var filter, a, i, txtValue;
    
    var input = object[1].value;
    filter = input.toLowerCase();
    
    searchResultHeader.innerHTML = "Search Results";
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      
      if (!li[i].innerHTML.toLowerCase().includes(filter)) {
        li[i].style.display = "none";
      } else {
        li[i].style.display = "flex";
      }
    }
    
  }

});



