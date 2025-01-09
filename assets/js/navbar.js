document.addEventListener("scroll", () => {
  let l = document.querySelector("nav");
  window.scrollY > 0
    ? l.classList.add("scrolled")
    : l.classList.remove("scrolled");
});
