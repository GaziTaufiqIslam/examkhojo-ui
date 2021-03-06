import bouncer from 'formbouncerjs'; //Importing Bouncer.js

// All form client-side validation using Bouncer.js
var formValidate = new bouncer('[data-validate]');

var validate = new bouncer('.form-edu-details, .form-signup', {
	messages: {
    wrongLength: {
      over: "Hello",
      under: "Password must be 8 characters long. You are currently using {length} characters"
    }
	}
});

// Special mime type and size validation for profile image of the user, also using Bouncer.js
// var validate = new bouncer('.form-upload-picture', {
// 	customValidations: {
// 		isHello: function (field) {
//       var fileType = field.files[0].size / 1024 / 1024 ; // Getting file size in MB
//       var fileSize = field.files[0].type; // Getting file type(requires polyfill)
//       if ((fileSize > 1)) return true; 
//       else {
//         switch(fileType){
//           case 'image/jpeg':
//             return false;
//             break;
//           case 'image/png':
//             return false;
//             break;
//           case 'image/gif':
//             return false;
//             break;
//           default:
//             return true;
//         }
//       }
// 		}
// 	},
// 	messages: {
// 		// As a string
// 		isHello: 'Use correct image format and size',

// 		// As a function
// 		isHello: function () {
// 			return 'Use correct image format and size';
// 		}
// 	}
// });

// User Dashboard/Log In Dropwon Toggle
var toggleButton = document.querySelector(".nav-content-links__user");
var dropdown = document.querySelector(".user-dropdown");
var toggleIcon = document.querySelector(".chevron-button");
function toggleDropdown() {
  dropdown.classList.toggle('visible');
  toggleIcon.classList.toggle('button-rotate');
}
toggleButton.addEventListener("click", toggleDropdown);


// Sticky Navabar Effect
window.onscroll = function() {scrollFunction()};

var navbar = document.querySelector(".primary-navbar");
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
var closeSearchModal = document.querySelector(".close-search-modal");
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

closeSearchModal.onclick = function() {
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
    var filter, i;
    
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


// Register Modals
var signUpButton = document.querySelectorAll("#signUpButton");
var logInButton = document.querySelectorAll("#logInButton");
var registerModal = document.querySelector(".register-modal");
var logInModal = registerModal.querySelector(".register-modal_login");
var signUpModal = registerModal.querySelector(".register-modal_signup");

var closeRegisterModal = document.querySelectorAll(".close-register-modal");

var getCounsellingButton = document.querySelectorAll("#counselling button");
var counsellingConfirmation = document.querySelector("#counselling .counselling-confirmation")

Object.entries(getCounsellingButton).map((object) => {
  object[1].onclick = function() {

    if(navbar.classList.contains("logged-in"))
      counsellingConfirmation.style.display = "flex";
    else{
      registerModal.style.display= "block";
      signUpModal.style.display= "none";
      logInModal.style.display= "grid";

    }

  };
});

// window.onclick = function(event) {
//   if(event.target == counsellingConfirmation)
//   counsellingConfirmation.style.display = "none";
// };


Object.entries(logInButton).map((object) => {
  object[1].onclick = function() {
    registerModal.style.display= "block";
    signUpModal.style.display= "none";
    logInModal.style.display= "grid";

  };
});

Object.entries(signUpButton).map((object) => {
  object[1].onclick = function() {
    registerModal.style.display= "block";
    logInModal.style.display= "none";
    signUpModal.style.display= "grid";
    
  };
});

Object.entries(closeRegisterModal).map((object) => {
  object[1].onclick = function() {
    registerModal.style.display= "none";

  };
});

window.onclick = function(event) {
  if(event.target == registerModal)
  registerModal.style.display = "none";
  if(event.target == counsellingConfirmation)
  counsellingConfirmation.style.display = "none";
};

// Log In prompt for Resource Buttons i.e. Brochures, Bookmark, Apply to College etc
var cardBrochureDownloadButtons = document.querySelectorAll('.card_college .link-primary_lined, .card_exam .link-primary_lined, .card_course .link-primary_lined');
var pageHeaderResourceButtons = document.querySelectorAll('.header-buttons button');
var pageContentResourceButtons = document.querySelectorAll('.main-content-cta button');
var allResourceButtons = [cardBrochureDownloadButtons, pageHeaderResourceButtons, pageContentResourceButtons]
for(var i = 0; i < allResourceButtons.length; i++ ){
  Object.entries(allResourceButtons[i]).map((object) =>{
    object[1].onclick = function(e) {
      if(navbar.classList.contains("logged-in"))
      return true;
    else{
      e.preventDefault();
      registerModal.style.display= "block";
      signUpModal.style.display= "none";
      logInModal.style.display= "grid";
    }
    };
  });


}

//Password Visisbility
var eyeIconHide = document.querySelectorAll("#pwd-hide");
var eyeIconShow = document.querySelectorAll("#pwd-show");
var passwordInput = document.querySelectorAll('input[type="password"]');

Object.entries(eyeIconHide).map((object) => {
  object[1].onclick = function() {
    object[1].style.display = "none"; 
    for (var i = 0; i<eyeIconHide.length; i++) {
      eyeIconHide[i].style.display = "none"; 
    }

    Object.entries(passwordInput).map((object) => {
      if (object[1].type === "password") {
        object[1].type = "text";
      } else {
        object[1].type = "password";
      }
    });

    Object.entries(eyeIconShow).map((object) => {
      object[1].style.display = "block";
    });
  };
});

Object.entries(eyeIconShow).map((object) => {
  object[1].onclick = function() {
    object[1].style.display = "none";
    for (var i = 0; i<eyeIconShow.length; i++) {
      eyeIconShow[i].style.display = "none"; 
    }

    Object.entries(passwordInput).map((object) => {
      if (object[1].type === "password") {
        object[1].type = "text";
      } else {
        object[1].type = "password";
      }
    });
    Object.entries(eyeIconHide).map((object) => {
      object[1].style.display = "block";
    });
  };
});


// Read More Toggle
var readMoreToggle = document.querySelectorAll("#individual-page-content .main-content-card-button")

var cardContent = document.querySelectorAll(".main-content-card-content");
function checkCardHeight() {
  Object.entries(cardContent).map((object) => {
    var readMoreToggle = object[1].nextElementSibling;
    if(object[1].offsetHeight < 180)
    {
      // console.log(object[1].offsetHeight);
      object[1].classList.toggle("unclamped");
      readMoreToggle.style.display = "none"
    }
  });
}

checkCardHeight();

Object.entries(readMoreToggle).map((object) => {
  object[1].onclick = function() {
    var spanContent = object[1].querySelector(".link-primary_lined");
    var arrowIcon = object[1].querySelector(".icon");
    var cardContent = object[1].previousElementSibling;
    
    cardContent.classList.toggle("unclamped");

    if (spanContent.innerHTML.toLowerCase().includes("more")) {
      spanContent.innerHTML = "Read Less";
      arrowIcon.style.transform = "rotate(180deg)";

    } else {
      spanContent.innerHTML = "Read More";
      arrowIcon.style.transform = "rotate(0deg)";
    }
    
  };
  
});



//Add New Javascript Here

