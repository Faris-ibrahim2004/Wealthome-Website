"use strict";

// Create Object To Add Property
// const propertyes = [
//   {
//     imgPath: "../images/property-1.jpg",
//     price: "$710.68",
//   },
// ];
// document.querySelector(".img-cover").src = `${propertyes[0].imgPath}`;
/**
 * NavBar Toggle In Mobile
 */

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

// Header Scroll State

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", (e) => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/*
 ** Add To Favorite Button Toggle
 */
const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });
});
