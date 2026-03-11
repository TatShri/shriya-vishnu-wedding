const hero = document.querySelector(".hero");
const button = document.querySelector(".enter");

button.addEventListener("click", () => {

hero.classList.add("open");

/* wait for doors to open */

setTimeout(()=>{

document.body.classList.add("fade-out");

/* wait for fade */

setTimeout(()=>{
window.location.href="home.html";
},1800);

},3200);

});