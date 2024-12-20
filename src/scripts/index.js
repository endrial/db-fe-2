import "regenerator-runtime";
import "../styles/main.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import "./components/index.js";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  content: document.getElementById("main-content"),
  button: document.getElementById("hamburger-menu"),
  navList: document.getElementById("nav-list"),
  navMenu: document.getElementById("nav-menu"),
  links: document.querySelectorAll(".nav-link a"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("DOMContentLoaded", () => {
  app.renderPage();
  swRegister();
});
