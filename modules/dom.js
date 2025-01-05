// text element
export const createEl = (el, text, parent, addClass="") => {
  const element = document.createElement(el);
  element.innerText = text;
  if (addClass != "") {element.classList.add(addClass)};
  const par = document.querySelector(parent);
  par.appendChild(element);
  return element;
}

// msn chat elements
export const createChatEl = (el, addClass, parent) => {
  const chatEl = document.createElement(el);
  chatEl.classList.add(addClass);
  parent.appendChild(chatEl);
}

export const deleteChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}
