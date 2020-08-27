const start = document.querySelector(`.start`);
const body = document.querySelector(`body`);

start.addEventListener(`click` ,function (event) {
  console.log(`click`);
  body.firstElementChild.remove();
})


checkbox.addEventListener("change", function (event) {
  if (this.checked) {
    img.classList.toggle(`image`);
    console.log(`hihih`);
  } else {
    img.classList.toggle(`image`);
  }
});