/* this creates a window each time,  */

import { createChatEl } from "./dom.js";

export const createChat = (contactSelected) => {
  const msnChat = document.createElement("dialog");
  msnChat.classList.add("chat-window");

  if (!msnChat.hasAttribute("open")) {
    msnChat.show();
  } else {
    msnChat.close();
  }
  // msnChat.textContent = contactSelected;
  desktop.appendChild(msnChat);

  // create the navbar
  const chatNavBar = document.createElement("div");
  chatNavBar.classList.add("chat-nav");
  chatNavBar.textContent = contactSelected;
  msnChat.appendChild(chatNavBar);

  createChatContent(msnChat,contactSelected);
  createChatAvatar(msnChat);
}

const createChatAvatar = (chatWindow) => {
  const displayAvatars = document.createElement("div");
  displayAvatars.classList.add("display-avatar");

  const contactAvatar = document.createElement("img");
  contactAvatar.src = "./assets/msn/msn-avatar.png";
  contactAvatar.classList.add("chat-avatar");
  displayAvatars.appendChild(contactAvatar);

  const yourAvatar = document.createElement("img");
  yourAvatar.src = "./assets/msn/frog.webp";
  yourAvatar.classList.add("chat-avatar");
  displayAvatars.appendChild(yourAvatar);

  chatWindow.appendChild(displayAvatars);
}

const createChatContent = (chatWindow, contactSelected) => {

  // create the sending section, with the text area field
  const chatSend = document.createElement("div");
  chatSend.classList.add("chat-send");

  // create the chat history, where message are posted
  const chatHistory = document.createElement('div');
  chatHistory.classList.add("chat-history");
  chatSend.appendChild(chatHistory);

  const chatTextField = document.createElement("textarea");
  chatTextField.classList.add("chat-textfield");
  chatSend.appendChild(chatTextField);

  const sendChatBtn = document.createElement("button");
  sendChatBtn.classList.add("btn-send");
  sendChatBtn.textContent ="send";
  chatSend.appendChild(sendChatBtn);

  chatWindow.appendChild(chatSend);

  // when pressing send button, the message gets added to the chat history
  chatSend.addEventListener('click', e => {
    e.preventDefault();
    let newMessage = document.createElement("p");
    newMessage.innerText = `you said: ${chatTextField.value}`;
    chatHistory.appendChild(newMessage);
    chatTextField.value = "";
  })
}
