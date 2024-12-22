import { currTime } from "./modules/clock.js";
import { deleteChild } from "./modules/dom.js";
import { createEl } from "./modules/dom.js";

window.addEventListener("load",(e) => {
  createEl("p",`${currTime()}`,"#clock");
  const now = document.querySelector("p");
  setInterval(() => {
    now.innerText = `${currTime()}`;
  },1000);
});
