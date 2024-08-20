const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menuList");

hamburger.addEventListener("click", () => {
  menuList.classList.toggle("show");
});


let slideIndex = 1;
showSlide(slideIndex);

function nextslide(n) {
  showSlide((slideIndex += n));
}
function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("content-slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";

}