const menuBody = document.querySelector(".menu");
const menuCont = document.querySelector(".menu_cont");
document.addEventListener("DOMContentLoaded", visible);
menuBody.addEventListener("click", visible);

function visible() {
  if (menuCont.style.display == "none") {
    menuCont.style.display = "flex";
  } else menuCont.style.display = "none";
}
