//JS Menu
const mainHeader = document.getElementById("header-main");
const btnMenu = document.getElementById("bars-menu");
const nav = document.getElementById("nav");
const itemMenu = document.querySelector(".main-menu__item--icon");
const iconSearch = document.getElementById("btn-search");
const search = document.getElementById("search");

console.log(btnMenu);

// btnMenu.addEventListener("click", () => {
//   nav.classList.add("header__nav--show");
//   mainHeader.classList.add("header__main--show");
// });

// mainHeader.addEventListener("click", (e) => {
//   if (e.target.id == "header-main") {
//     nav.classList.remove("header__nav--show");
//     search.classList.remove("search--show");
//     search.nombre.blur();
//     mainHeader.classList.remove("header__main--show");
//   }
// });

// const mql = matchMedia("(min-width: 1280px)");
// const applyMatchMedia = (mql) => {
//   if (!mql.matches) {
//     itemMenu.addEventListener("click", () => {
//       itemMenu.nextElementSibling.classList.toggle("main-menu__submenu--show");
//       itemMenu.lastElementChild.classList.toggle("icon-drop--show");
//     });
//   }
// };
// addEventListener("resize", () => {
//   applyMatchMedia(mql);
// });
// addEventListener("DOMContentLoaded", () => {
//   applyMatchMedia(mql);
// });

// iconSearch.addEventListener("click", () => {
//   search.classList.add("search--show");
//   search.nombre.focus();
//   mainHeader.classList.add("header__main--show");
// });

// search.firstElementChild.firstElementChild.addEventListener("click", () => {
//   search.classList.remove("search--show");
//   mainHeader.classList.remove("header__main--show");
// });
