const hero = document.querySelector(".hero");
const button = document.querySelector(".enter");

button.addEventListener("click", () => {

hero.classList.add("open");

/* wait for doors */

setTimeout(()=>{

document.body.classList.add("fade-out");

/* after fade go to next page */

setTimeout(()=>{
window.location.href = "home.html";
},1000);

},1600);

});