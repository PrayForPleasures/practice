const style = document.querySelector(".img_about_company");

style.addEventListener("mouseover", (e) => {
  (e.target.style.filter = "contrast(200%)"),
    (e.target.style.transition = "0.4s ease-in");
});
style.addEventListener("mouseout", (e) => {
  (e.target.style.filter = "contrast(100%)"),
    (e.target.style.transition = "0.4s ease-out");
});

const happy = document.querySelector(".happy");

happy.addEventListener("mouseover", (e) => {
  (e.target.style.filter = "contrast(200%)"),
    (e.target.style.transition = "0.4s ease-in");
});
happy.addEventListener("mouseout", (e) => {
  (e.target.style.filter = "contrast(100%)"),
    (e.target.style.transition = "0.4s ease-out");
});

const lightDiv = document.querySelectorAll(".light_div");

lightDiv.forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    elem.style.opacity = "1";
  });
});

lightDiv.forEach((elem) => {
  elem.addEventListener("mouseout", () => {
    elem.style.opacity = "0.85";
  });
});

const showLight = document.querySelector(".show_light");

showLight.addEventListener("mouseover", (e) => {
  e.target.style.opacity = "1";
});
showLight.addEventListener("mouseout", (e) => {
  e.target.style.opacity = "0.85";
});

const buttonCompany = document.querySelectorAll(".button_company");

buttonCompany.forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    elem.style.opacity = "1";
  });
  elem.addEventListener("mouseout", () => {
    elem.style.opacity = "0.85";
  });
});

const liStyle = document.querySelectorAll(".li_style");

liStyle.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.fontWeight = "bold";
    e.style.color = "whitesmoke";
  });
  e.addEventListener("mouseout", () => {
    e.style.fontWeight = "normal";
  });
});
