let slideIndex = 0;
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let slides = document.querySelectorAll(".col");
let dot = document.querySelectorAll(".dot");
const AUTO_TIME = 5000;

nextBtn.addEventListener("click", () => {
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  makeSlideshow(slideIndex);
});

prevBtn.addEventListener("click", () => {
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  makeSlideshow(slideIndex);
});
function makeSlideshow(index) {
  slides.forEach((item) => {
    item.style.display = "none";
  });
  slides[index].style.display = "block";
  dot.forEach((dots) => {
    dots.className = dots.className.replace(" active", "");
  });
  slideIndex = index;
  dot[index].className += " active";
}
function makeSlideshowauto() {
  makeSlideshow(slideIndex);
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
}
setInterval(makeSlideshowauto, AUTO_TIME);
makeSlideshow(0);
