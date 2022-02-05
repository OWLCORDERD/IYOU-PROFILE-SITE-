let btn = document.querySelector(".close-btn");
let sidebar = document.querySelector("aside");
let section = document.querySelector("section");

btn.onclick = function () {
  sidebar.classList.toggle("active");
  section.classList.toggle("active");
};
