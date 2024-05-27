
var tl = gsap.timeline();



tl.to("#loader", {
  opacity: 0,
  scale: 0,
  delay: 4,
  duration: 0.7,
});
function mySlider() {
  const slider = document.getElementById("slider");
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
  }

  function updateSlider() {
    const transformValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + transformValue + ")";
  }

  setInterval(nextSlide, 4000); // Change slide every 5 seconds
}
mySlider();

function sliderCon(){
  gsap.from(".slide .slide-con p", {
    opacity:0,
    duration:2,
  })
}
function sliderCon2(){
  gsap.to(".slide .slide-con p", {
    opacity:0,
    duration:2,
  })
}
function myFind(){
  let search = document.querySelector('[name="search"]').value;

  search.toLowerCase();
  if(search == "destinations"){
    let target = document.getElementById("slider-head");
    target.scrollIntoView();
  } else if(search == "experiences") {
    let target = document.getElementsByClassName("experiences");
    target.scrollIntoView();
  } else if(search == "discover india"){
    let target = document.getElementById("discover-india");
    target.scrollIntoView();
  } else{
    alert("Keyword Not Found !");
    let target = document.getElementById("main");
    target.scrollIntoView();
  }
}
