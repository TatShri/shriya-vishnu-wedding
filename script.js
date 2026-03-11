const hero = document.querySelector(".hero");
const button = document.querySelector(".enter");

button.addEventListener("click", () => {

  // open the doors
  hero.classList.add("open");

  // when animation finishes, go to home page
  const door = document.querySelector(".left");

  door.addEventListener("transitionend", () => {
      document.body.classList.add("fade-out");

      setTimeout(() => {
          window.location.href = "home.html";
      }, 500);
  }, { once: true });

});