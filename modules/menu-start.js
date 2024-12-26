const start = document.querySelector("#start-btn");
const menu = document.querySelector("#start-menu");

start.addEventListener('click', (e) => {
  e.preventDefault;
  console.log('connected');
  menu.classList.toggle("invisible");
})
