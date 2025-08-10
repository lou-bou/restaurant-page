import "./nav.css";
import "./general.css";
import "./home.css";
import "./menu.css";
import "./about.css";
import "./contact.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
import { createContact } from "./contact.js";

createHome();

const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const aboutButton = document.querySelector("#aboutButton");
const contactButton =  document.querySelector("#contactButton");
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