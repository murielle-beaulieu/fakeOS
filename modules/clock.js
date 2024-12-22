import { createEl } from "./dom.js";

export const currTime = () => {
  const today = new Date();

  const hours = today.getHours();

  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let seconds = today.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${hours}:${minutes}: ${seconds} `
}

window.addEventListener("load",(e) => {
  createEl("p",`${currTime()}`,"#clock");
  const now = document.querySelector("#clock p");
  setInterval(() => {
    now.innerText = `${currTime()}`;
  },1000);
});
