// untuk menghandle scroll header nav
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 80); // menambahkan element sticky pada tag header
});

// handle menu list
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// handle scroll reveal
const sr = ScrollReveal({
  distance: "70px",
  duration: 2050,
  delay: 200,
  reset: true,
});

sr.reveal(".hero-text", { origin: "top" });
sr.reveal(".about-img, .service-item, .about-text", { origin: "bottom" });
sr.reveal(".about-text h2, .text-center, .right-contact h2", { origin: "top" });
sr.reveal(".left-contact", { origin: "left" });
sr.reveal(".right-contact", { origin: "right" });
sr.reveal(".end-section", { origin: "top" });

