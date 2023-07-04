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

// const imgLink = document.querySelector(".img_link");
// for (let index = 1; index < 111; index++) {
//   imgLink.insertAdjacentHTML(
//     "beforeend",
//     `
//   <a href="#">${index}</a>
//   `
//   );
// }
