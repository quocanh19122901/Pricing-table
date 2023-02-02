let slideIndex = 0;
let currentIndex = 0;
currentIndex = slideIndex;
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let slides = document.querySelectorAll(".col");
let dot = document.querySelectorAll(".dot");
const auto_time = 5000;

nextBtn.addEventListener("click", () => {
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  makeSlideshow(currentIndex);
});

prevBtn.addEventListener("click", () => {
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  makeSlideshow(currentIndex);
});

function currentSlide(n) {
  makeSlideshow((slideIndex = n));
}
function makeSlideshow() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  dot[slideIndex].className += " active";
}
function makeSlideshowauto() {
  // console.log(`${slideIndex} auto `);
  makeSlideshow();
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
}
setInterval(makeSlideshowauto, auto_time);
makeSlideshow(slideIndex);
