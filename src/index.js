import "./nav.css";
import "./general.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
import { createContact } from "./contact.js";

createHome();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const contactButton =  document.querySelector("#contact");
const content = document.querySelector("#content");

homeButton.addEventListener("click", () => {
    content.textContent = "";
    createHome();
});

menuButton.addEventListener("click", () => {
    content.textContent = "";
    createMenu();
});

aboutButton.addEventListener("click", () => {
    content.textContent = "";
    createAbout();
});

contactButton.addEventListener("click", () => {
    content.textContent = "";
    createContact();
});