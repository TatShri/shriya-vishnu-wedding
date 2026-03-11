const hero = document.querySelector(".hero");
const button = document.querySelector(".enter");

button.addEventListener("click", () => {

hero.classList.add("open");

/* wait for door animation */

setTimeout(()=>{
window.location.href = "home.html";
},1800);

});