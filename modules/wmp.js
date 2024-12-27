const dialog = document.querySelector("#wmp");

const button = document.querySelector("#open-pgrm")

button.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.toggleAttribute("open");
})
