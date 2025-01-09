const letters = "abcdefghijklmnopqrstuvwxyz";
function devAnimation(e) {
  let t = 0,
    n = setInterval(() => {
      (e.target.innerText = e.target.innerText
        .split("")
        .map((n, r) =>
          r < t
            ? e.target.dataset.value[r]
            : letters[Math.floor(Math.random() * letters.length)],
        )
        .join("")),
        t >= e.target.dataset.value.length && clearInterval(n),
        (t += 0.45);
    }, 35);
}
(document.querySelector(".developer").onmouseover = (e) => devAnimation(e)),
  (document.querySelector(".developer").onclick = (e) => devAnimation(e));
