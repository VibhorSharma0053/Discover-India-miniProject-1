
var tl = gsap.timeline();

// function timer(){
//     document.querySelector("#loader").innerHTML = "";
//     let a = "<h1>🛕</h1>";
//     let b = "<h1>🚍</h1>";
//     let c = "<h1>🚄</h1>";
//     let i = 0;
//     setInterval(function () {
//         if(i < 5){
//             // if (i==0){
//             //     document.querySelector("#loader").innerHTML = a;
//             // }else if(i==1){
//             //     document.querySelector("#loader").innerHTML = a + a;
//             // }else if(i==2){
//             //     document.querySelector("#loader").innerHTML =a + a + a;
//             // }
//             // else{
//             //     document.querySelector("#loader").innerHTML += a ;
//             // }
//             document.querySelector("#loader").innerHTML += a;
//         }
//         i++;

//     }, 300);

// }
// tl.to("#loader h1", {
//     delay:0.5,
//     duration: 1.5,
//     onStart: timer()
// })

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
