const letters = "abcdefghijklmnopqrstuvwxyz";
function devAnimation(event) {
  let count = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < count) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    if (count >= event.target.dataset.value.length) {
      clearInterval(interval);
    }
    count += 1 / 2;
  }, 35);
}

document.querySelector(".developer").onmouseover = (event) => devAnimation(event);
document.querySelector(".developer").onclick = (event) => devAnimation(event);
