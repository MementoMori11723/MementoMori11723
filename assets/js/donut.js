let A = 0,
  B = 0,
  M = Math;
const asciiframe = () => {
    let $ = [],
      t = [];
    (A += 0.05), (B += 0.07);
    let e = M.cos(A),
      n = M.sin(A),
      o = M.cos(B),
      s = M.sin(B);
    for (let i = 0; i < 1760; i++)
      ($[i] = i % 80 == 79 ? "\n" : " "), (t[i] = 0);
    for (let l = 0; l < 6.28; l += 0.07) {
      let c = M.cos(l),
        r = M.sin(l);
      for (let a = 0; a < 6.28; a += 0.02) {
        let f = M.sin(a),
          _ = M.cos(a),
          d = c + 2,
          m = 1 / (f * d * n + r * e + 5),
          I = f * d * e - r * n,
          g = (40 + 30 * m * (_ * d * o - I * s)) | 0,
          j = (12 + 15 * m * (_ * d * s + I * o)) | 0,
          u = g + 80 * j,
          v =
            (8 * ((r * n - f * c * e) * o - f * c * n - r * e - _ * c * s)) | 0;
        j < 22 &&
          j >= 0 &&
          g >= 0 &&
          g < 79 &&
          m > t[u] &&
          ((t[u] = m), ($[u] = ".,-~:;=!*#$@"[v > 0 ? v : 0]));
      }
    }
    document.getElementById("donut").textContent = $.join("");
  },
  intervalId = setInterval(asciiframe, 50);
