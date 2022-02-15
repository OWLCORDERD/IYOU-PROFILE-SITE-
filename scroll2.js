function YOUTUBE() {
  let YOUTUBE_container = document.querySelector(".YOUTUBE-container");
  let windowHeight = window.innerHeight;
  let scrollTop = YOUTUBE_container.getBoundingClientRect().top;

  if (scrollTop < windowHeight - 200) {
    YOUTUBE_container.classList.add("active");
  } else {
    YOUTUBE_container.classList.remove("active");
  }
}

function INSTAGRAM() {
  let YOUTUBE_container = document.querySelector(".YOUTUBE-container");
  let windowHeight = window.innerHeight;
  let scrollTop = YOUTUBE_container.getBoundingClientRect().top;

  if (scrollTop < windowHeight - 200) {
    YOUTUBE_container.classList.add("active");
  } else {
    YOUTUBE_container.classList.remove("active");
  }
}

window.addEventListener("scroll", YOUTUBE);
