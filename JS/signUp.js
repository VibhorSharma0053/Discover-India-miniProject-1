let signIn = document.querySelector("#formUp p a");
let signUp = document.querySelector("#formIn p a");
let front = document.querySelector("#front");
let back = document.querySelector("#back");
signIn.addEventListener("click", function () {
  front.style.transform = "rotateY(180deg)";
  back.style.transform = "rotateY(360deg)";
  back.style.zIndex = "4";
});
signUp.addEventListener("click", function () {
  front.style.transform = "rotateY(0deg)";
  back.style.transform = "rotateY(180deg)";
  back.style.zIndex = "3";
});

