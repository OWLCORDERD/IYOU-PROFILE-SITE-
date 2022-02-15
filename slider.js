var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");

var currentSlide = 1;

var menualNav = function (menual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[menual].classList.add("active");
  btns[menual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    menualNav(i);
    currentSlide = i;
  });
});
