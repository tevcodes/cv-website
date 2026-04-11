/** @format */

import "./style.css";

const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menu.classList.remove("is-active");
  });
});

document.querySelectorAll("button[data-url]").forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.dataset.url;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
