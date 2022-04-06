/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const simultaneousRoots = 3;
let drawing = false;

ctx.lineWidth = 0.4;

ctx.font = 0.05 * window.innerWidth + "px Arial";
console.log(window.innerWidth);
ctx.fillText('click and drag (or touch) anywhere', 30, 0.15 * window.innerWidth);
ctx.fillText('on the screen to start drawing (:', 30, 0.20 * window.innerWidth);

window.addEventListener('mousemove', function (event) {
  if (drawing) {
    for (let i = 0; i < simultaneousRoots; i++) {
      const root = new Root(event.x, event.y);
      root.update();
    }
  }
});

window.addEventListener('mousedown', function (event) {
  drawing = true;

  for (let i = 0; i < simultaneousRoots * 3; i++) {
    const root = new Root(event.x, event.y);
    root.update();
  }
});

window.addEventListener('mouseup', function () {
  drawing = false;
});