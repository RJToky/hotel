const loading = document.querySelector(".loading");
const container = document.querySelector(".container");
window.addEventListener("load", () => {
  loading.classList.add("load");
  setTimeout(() => {
    loading.remove();
  }, 2000);
});

const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    nav.style.transition = "transform 0.5s";
  } else {
    nav.style.transition = "none";
  }
});

const titres = document.querySelectorAll(".container > main > div > h1");
var i = 0;
setInterval(() => {
  titres.forEach((titre) => {
    titre.classList.remove("active");
  });
  i++;
  if (i >= titres.length) i = 0;
  titres[i].classList.add("active");
}, 5000);

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle(
    "scrolled",
    window.scrollY > window.innerHeight - 440
  );
});
