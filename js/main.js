const navMenu = document.querySelector(".nav_menu");
const menuItems = navMenu.querySelectorAll(".menu-item");
const allSubMenu = document.querySelectorAll(".submenu");
const mobHamburger = document.querySelector(".mob-hamburger");

// show/close menu-additional
if (window.innerWidth > 991) {
  menuItems.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      el.classList.add("active");
    });
  });
  navMenu.addEventListener("mouseleave", () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  });
} else {
  menuItems.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.classList.contains("active")) {
        menuItems.forEach((item) => {
          item.classList.remove("active");
        });
      } else {
        menuItems.forEach((item) => {
          item.classList.remove("active");
        });
        el.classList.add("active");
      }
    });
  });
  mobHamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  });
}

//scrolltop
const scrolltop = document.querySelector(".scrolltop");
if (window.innerWidth > 767) {
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || window.scrollY;
    scrollTop > 200 ? scrolltop.classList.add("active") : scrolltop.classList.remove("active");
  });
  scrolltop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// show/close mobile menu
// navButtonsMobile.addEventListener("click", () => {
//   navMenuMobile.classList.toggle("active");

//   document.addEventListener("click", (e) => {
//     const isClickInsideMobileMenu = navMenuMobile.contains(e.target);
//     console.log(isClickInsideMobileMenu);

//     const isClickInsideMenu = navMenuMobile.contains(e.target);
//     const isClickInsideNavButtons = navButtonsMobile.contains(e.target);

//     if (!isClickInsideMenu && !isClickInsideNavButtons) {
//       navMenuMobile.classList.remove("active");
//     }
//   });
// });

// //accordions PC
// let accordionHeaders = document.querySelectorAll(".accordion-header");
// if (accordionHeaders) {
//   accordionHeaders.forEach(function (header) {
//     header.addEventListener("click", function () {
//       // Получаем блок с содержанием, следующий непосредственно за заголовком
//       this.classList.toggle("active");
//       this.nextElementSibling.classList.toggle("active");
//     });
//   });
// }

// //accordion mobile menu
// let mobileAccordionHeaders = document.querySelectorAll(".menu-accordion-header");
// // let mobileAccordionContent = document.querySelectorAll(".menu-accordion-content");
// if (mobileAccordionHeaders) {
//   mobileAccordionHeaders.forEach(function (header) {
//     header.addEventListener("click", function () {
//       mobileAccordionHeaders.forEach(function (item) {
//         if (item !== header) {
//           item.classList.remove("active");
//           item.nextElementSibling.classList.remove("active");
//         }
//       });
//       this.classList.toggle("active");
//       this.nextElementSibling.classList.toggle("active");
//     });
//   });
// }

// //rating
// const rating = document.getElementById("rating");
// if (rating) {
//   rating.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (e.target.closest("label")) {
//       const label = e.target.closest("label");
//       const name = "." + label.getAttribute("for");
//       this.querySelector(name).checked = true;
//       const selectedRating = name[6];

//       console.log("block has value ", selectedRating);
//     }
//   });
// }

// // feedback, required fields
// const fields = document.querySelectorAll(".feedback-input");
// const errorMessage = document.querySelector(".error-message");
// const sendData = document.getElementById("send-data");
// if (sendData) {
//   sendData.addEventListener("click", (e) => {
//     let isAllFieldFilled = true;

//     e.preventDefault();
//     fields.forEach((f) => {
//       if (!f.value) {
//         f.classList.add("error");
//         errorMessage.classList.add("error");
//         isAllFieldFilled = false;
//       }
//     });
//     if (isAllFieldFilled) {
//       console.log(document.getElementById("name").value);
//       console.log(document.getElementById("email").value);
//       console.log(document.getElementById("subject").value);
//       console.log(document.getElementById("message").value);
//       console.log(document.getElementById("code").value);
//     }
//   });

//   fields.forEach((f) => {
//     f.addEventListener("input", () => {
//       if (f.value) {
//         f.classList.remove("error");
//         errorMessage.classList.remove("error");
//       }
//     });
//   });
// }

// // filter exercises
// const input = document.getElementById("regular-search_input");

// if (input) {
//   function filterList() {
//     let items = document.querySelectorAll(".exercises-content a");
//     let filter = input.value.toUpperCase();

//     for (let i = 0; i < items.length; i++) {
//       let text = items[i].innerText.toUpperCase();
//       if (text.indexOf(filter) > -1) {
//         items[i].style.display = "";
//         items[i].childNodes[1].style.display = "";
//       } else {
//         items[i].style.display = "none";
//         items[i].childNodes[1].style.display = "none";
//       }
//     }
//   }
//   input.addEventListener("input", filterList);
// }

// // filter esse
// const inputEsse = document.getElementById("esse-search_input");

// if (inputEsse) {
//   function filterListEsse() {
//     let items = document.querySelectorAll(".part-content a");
//     let filter = inputEsse.value.toUpperCase();

//     for (let i = 0; i < items.length; i++) {
//       let text = items[i].childNodes[1].innerText.toUpperCase();

//       if (text.indexOf(filter) > -1) {
//         items[i].style.display = "";
//       } else {
//         items[i].style.display = "none";
//       }
//     }
//   }
//   inputEsse.addEventListener("input", filterListEsse);
// }
