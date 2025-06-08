document.addEventListener("scroll", () => {
  let l = document.querySelector("nav");
  window.scrollY > 0
    ? l.classList.add("scrolled")
    : l.classList.remove("scrolled");
});

document.addEventListener("DOMContentLoaded", () => {
  const gearIcon = document.querySelector(".gear");
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector("main");
  
  gearIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  main.addEventListener("click", () => {
    sidebar.classList.remove("active");
  })
});
