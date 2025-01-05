/* this creates a window each time,  */

export const createChat = (contactSelected) => {
  const msnChat = document.createElement("dialog");
  msnChat.classList.add("chat-window");

  if (!msnChat.hasAttribute("open")) {
    msnChat.show();
  } else {
    msnChat.close();
  }
  msnChat.textContent = contactSelected;
  desktop.appendChild(msnChat);

  createChatAvatar(msnChat);
  createChatContent(msnChat);
}

const createChatAvatar = (chatWindow) => {
  const contactAvatar = document.createElement("img");
  contactAvatar.src = "./assets/msn/msn-avatar.png";
  contactAvatar.classList.add("chat-avatar");

  const yourAvatar = document.createElement("img");
  yourAvatar.src = "./assets/msn/frog.webp";
  yourAvatar.classList.add("chat-avatar");

  chatWindow.appendChild(contactAvatar);
  chatWindow.appendChild(yourAvatar);
}

const createChatContent = (chatWindow) => {
  const chatNavBar = document.createElement("div");
  chatNavBar.classList.add("chat-nav");
  chatWindow.appendChild(chatNavBar);

  const chatHistory = document.createElement('div');
  chatHistory.classList.add("chat-history");
  chatWindow.appendChild(chatHistory);

  const chatSend = document.createElement("div");
  chatSend.classList.add("chat-send");

  const sendChatBtn = document.createElement("button");
  sendChatBtn.classList.add("btn-send");
  sendChatBtn.textContent ="send";
  chatSend.appendChild(sendChatBtn);


  const chatTextField = document.createElement("textarea");
  chatTextField.classList.add("chat-textfield");
  chatSend.appendChild(chatTextField);

  chatWindow.appendChild(chatSend);

  chatSend.addEventListener('click', e => {
    e.preventDefault();
    let newMessage = document.createElement("p");
    newMessage.innerText = chatTextField.value;
    chatHistory.appendChild(newMessage);
    chatTextField.value = "";
  })
}
