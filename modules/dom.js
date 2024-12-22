export const createEl = (el, text, parent) => {
  const element = document.createElement(el);
  element.innerText = text;
  const par = document.querySelector(parent);
  par.appendChild(element);
}

export const deleteChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}
