const dialog = document.querySelector("#msn");

const button = document.querySelector("#open-pgrm")

button.addEventListener('click', (e) => {
  e.preventDefault();
  // dialog.toggleAttribute("open");
  // says it's not reccomended on MDN >:(
  // if (dialog.classList.contains("opened")){
  //   dialog.classList.remove("opened");
  //   dialog.close();
  // } else {
  //   dialog.classList.add("opened");
  //   dialog.show();
  // }
  dialog.hasAttribute("open") ? dialog.close() : dialog.show();
})
