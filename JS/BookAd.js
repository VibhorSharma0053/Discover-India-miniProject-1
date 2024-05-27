console.log("open");
let flights = document.querySelector("#flights");
flights.addEventListener("click", function () {
  front.style.transform = "rotateY(180deg)";
  back.style.transform = "rotateY(360deg)";
  back.style.zIndex = "4";
});
let hotels = document.querySelector("#hotels");
hotels.addEventListener("click", function () {
  front.style.transform = "rotateY(0deg)";
  back.style.transform = "rotateY(180deg)";
  back.style.zIndex = "3";
});
