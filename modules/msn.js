import { deleteChild } from "./dom.js";
import { createEl } from "./dom.js";


const dialog = document.querySelector("#msn");

const button = document.querySelector("#open-pgrm")

button.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.hasAttribute("open") ? dialog.close() : dialog.show();
})

const msnLoginBtn = document.querySelector("#login");
const msnWindow = document.querySelector('#msn-login');
const msnProgram = document.querySelector('#msn');

const createContacts = async () => {
  const response = await fetch("https://randomuser.me/api/?results=15&nat=gb,us,es,ca,fr");
  console.log(response);
  const data = await response.json();
  console.log(data);

  let i = 0;

  const contactNames = [];
  while (i < 15) {
    contactNames.push(data.results[i].name.first);
    i++;
  }
  console.log(contactNames);

  contactNames.forEach((contact) => {
    const contactList = createEl('div', contact, "#msn","contact");
    msnProgram.appendChild(document.createElement('img')).src='./assets/online.png';
  })
}

msnLoginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("msn logged in");
  deleteChild(msnWindow);
  createContacts();
})

// export const createEl = (el, text, parent) => {
//   const element = document.createElement(el);
//   element.innerText = text;
//   const par = document.querySelector(parent);
//   par.appendChild(element);
// }
