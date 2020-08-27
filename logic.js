const start = document.querySelector(`.start`);
const body = document.querySelector(`body`);

start.addEventListener(`click` ,function (event) {
  console.log(`click`);
  body.firstElementChild.remove();
})


