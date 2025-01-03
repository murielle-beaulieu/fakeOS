export const createEl = (el, text, parent, addClass="") => {
  const element = document.createElement(el);
  element.innerText = text;
  if (addClass != "") {element.classList.add(addClass)};
  const par = document.querySelector(parent);
  par.appendChild(element);
}

export const deleteChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}

// export const createImg = (el, src, alt, parent) => {
//   const el = document.create
// }
