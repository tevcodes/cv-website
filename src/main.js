/** @format */

import "./style.css";

document.querySelectorAll("button[data-url]").forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.dataset.url;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
