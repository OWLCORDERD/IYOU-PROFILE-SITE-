function animated() {
  let container = document.querySelector(".NEWS-icons");
  let windowHeight = window.innerHeight;
  let item = container.getBoundingClientRect().top;
  let item_value = 300;
  console.log(item);

  if (item < windowHeight - 200) {
    container.classList.add("active");
  } else {
    container.classList.remove("active");
  }
}
window.addEventListener("scroll", animated);
