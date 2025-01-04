import { createEl } from "./dom.js";

const start = document.querySelector("#start-btn");
const menu = document.querySelector("#start-menu");

start.addEventListener('click', (e) => {
  e.preventDefault;
  console.log('connected');
  menu.classList.toggle("invisible");
})

const menuMsn = document.querySelector("#open-msn");
const navMsn = document.querySelector("#open-pgrm");
const dialog = document.querySelector("#msn");

menuMsn.addEventListener('click', (e) => {
  console.log('working');
  menu.classList.toggle("invisible");
  navMsn.classList.remove("invisible");
  setTimeout(() => {
    dialog.show();
  }, '200');
})
