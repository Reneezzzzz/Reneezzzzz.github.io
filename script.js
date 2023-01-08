document.querySelectorAll(".nav-link-scroll").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

const about = document.querySelector(".about");
const initalCoords = about.getBoundingClientRect();
const nav = document.querySelector(".nav-right");
console.log(nav);
window.addEventListener("scroll", function () {
  if (window.scrollY > initalCoords.top - 100) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});
AOS.init();
