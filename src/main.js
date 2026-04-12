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

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });

      const path = targetId.replace('#', '');
      window.history.pushState(null, '', `/${path}`);

      navLinks.classList.remove('active');
      menu.classList.remove('is-active');
    }
  });
});