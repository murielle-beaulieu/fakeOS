import { deleteChild } from "./dom.js";
import { createChat } from "./msn-chat.js";


// opening msn from the toolbar

const dialog = document.querySelector("#msn");
const button = document.querySelector("#open-pgrm")

button.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.hasAttribute("open") ? dialog.close() : dialog.show();
})

// closing the toolbar when program is open

const closePgrm = document.querySelector("#close-pgrm");

closePgrm.addEventListener('click', e => {
  e.preventDefault();
  dialog.close();
  }
)

// login and create a list of contact
// - API call to randomly generate users

const msnLoginBtn = document.querySelector("#login");
const msnLoginWindow = document.querySelector('#msn-login');
const msnProgram = document.querySelector('#msn');
const desktop = document.querySelector('#desktop');


const createContacts = async () => {
  const response = await fetch("https://randomuser.me/api/?results=15&nat=gb,us,es,ca,fr");
  const data = await response.json();

  let i = 0;
  const contactNames = [];
  while (i < 15) {
    contactNames.push(data.results[i].name.first);
    i++;
  }


  contactNames.forEach((contact) => {
    const img = document.createElement('img');
    img.src = './assets/msn/online.png';
    const contactList = document.createElement('button');
    contactList.appendChild(img);
    contactList.classList.add('contact')
    const name = document.createElement("p");
    name.setAttribute('class','open-chat')
    name.textContent = contact;
    contactList.appendChild(name);
    msnProgram.appendChild(contactList);

    contactList.addEventListener('click', (e) => {
      e.preventDefault();
      createChat(contact);
      // contactList.toggleAttribute('disabled');
    })
  })

}

// -remove the login form and display contact list

msnLoginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("msn logged in");
  deleteChild(msnLoginWindow);
  createContacts();
})
