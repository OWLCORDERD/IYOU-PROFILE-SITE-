function animated() {
  let container = document.querySelector(".NEWS-container");
  let windowHeight = window.innerHeight;
  let item = container.getBoundingClientRect().top;

  if (item < windowHeight - 600) {
    container.classList.add("active");
  } else {
    container.classList.remove("active");
  }
}
window.addEventListener("scroll", animated);
