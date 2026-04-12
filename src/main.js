/** @format */

import "./style.css";

const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const textElement = document.querySelector(".typing-text");
const phrases = ["npm install coffee", "npm install granola", "npm install sport"];

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

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 2000;
    isDeleting = true;
  }

  else if (isDeleting && charIndex === 0) {
    isDeleting = false;

    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed)
}

type();