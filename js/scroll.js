function ICONS_animated() {
  let ICONS = document.querySelector(".NEWS-icons");
  let windowHeight = window.innerHeight;
  let item = ICONS.getBoundingClientRect().top;

  if (item < windowHeight - 500) {
    ICONS.classList.add("active");
  } else {
    ICONS.classList.remove("active");
  }
}

function TITLE_animated() {
  let title = document.querySelector(".NEWS-title");
  let windowHeight = window.innerHeight;
  let item2 = title.getBoundingClientRect().top;

  if (item2 < windowHeight - 400) {
    title.classList.add("active");
  } else {
    title.classList.remove("active");
  }
}

function ITEMS_animated() {
  let ITEMS = document.querySelector(".NEWS-items");
  let windowHeight = window.innerHeight;
  let item3 = ITEMS.getBoundingClientRect().top;

  if (item3 < windowHeight - 400) {
    ITEMS.classList.add("active");
  } else {
    ITEMS.classList.remove("active");
  }
}

function INSTAGRAM_animated() {
  let I_container = document.querySelector(".INSTAGRAM_profile");
  let windowHeight = window.innerHeight;
  let item4 = I_container.getBoundingClientRect().top;

  if (item4 < windowHeight - 300) {
    I_container.classList.add("active");
  } else {
    I_container.classList.remove("active");
  }
}

function YOUTUBE_animated() {
  let Y_container = document.querySelector(".YOUTUBE-container");
  let windowHeight = window.innerHeight;
  let item5 = Y_container.getBoundingClientRect().top;

  if (item5 < windowHeight - 300) {
    Y_container.classList.add("active");
  } else {
    Y_container.classList.remove("active");
  }
}

function PART_ANIMATED() {
  let container = document.querySelector(".PART");
  let windowHeight = window.innerHeight;
  let item1 = container.getBoundingClientRect().top;

  if (item1 < windowHeight - 400) {
    container.classList.add("active");
  } else {
    container.classList.remove("active");
  }
}

window.addEventListener("scroll", PART_ANIMATED);
window.addEventListener("scroll", ICONS_animated);
window.addEventListener("scroll", TITLE_animated);
window.addEventListener("scroll", ITEMS_animated);
window.addEventListener("scroll", INSTAGRAM_animated);
window.addEventListener("scroll", YOUTUBE_animated);
