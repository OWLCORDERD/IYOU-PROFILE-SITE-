let slideTexts = document.querySelector(".PART_content");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("ScrollY", value);

  if (value > 1300) {
    slideTexts.style.animation = "disappear 1s ease-out forwards";
  } else {
    slideTexts.style.animation = "slideText 1s ease-in";
  }
});
