var slideIndex = 0;
var currentIndex = 0;
currentIndex = slideIndex;
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var slides = document.querySelectorAll(".col");
var dot = document.querySelectorAll(".dot");

nextBtn.addEventListener("click", () => {
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  // console.log(slideIndex);
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
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  dot[slideIndex].className += " active";
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  setTimeout(makeSlideshowauto, 5000);
}
makeSlideshowauto(slideIndex);
