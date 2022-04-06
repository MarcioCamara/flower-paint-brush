/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const simultaneousRoots = 3;
let drawing = false;
let canDraw = false;

ctx.font = 0.05 * window.innerWidth + "px Arial";
ctx.fillText('click and drag (or touch) anywhere', 30, 0.15 * window.innerWidth);
ctx.fillText('on the screen to start drawing (:', 30, 0.20 * window.innerWidth);

const rect = {
  x: 30,
  y: 0.25 * window.innerWidth - 0.034 * window.innerWidth,
  w: 0.1 * window.innerWidth,
  h: 0.05 * window.innerWidth,
};

// begin ok button
ctx.fillText('OK', rect.x + 0.013 * window.innerWidth, rect.y + 0.044 * window.innerWidth);
ctx.lineWidth = 0.0045 * window.innerWidth;
ctx.rect(rect.x, rect.y, rect.w, rect.h);
ctx.stroke();

canvas.addEventListener('click', checkStart, false);

go = false;
function checkStart(e) {
  const p = getMousePos(e);

  if (isInsideRange(p)) {
    go = !go;
    if (go) {
      hideText();
    }
  }
}

function getMousePos(e) {
  const r = canvas.getBoundingClientRect();
  return {
    x: e.clientX - r.left,
    y: e.clientY - r.top
  };
}

function isInsideRange(p) {
  return (p.x >= rect.x && p.x <= rect.x + rect.w &&
    p.y >= rect.y && p.y <= rect.y + rect.h);
}

function hideText() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canDraw = true;
}
// end ok button

ctx.lineWidth = 0.4;

window.addEventListener('mousemove', function (event) {
  if (drawing) {
    for (let i = 0; i < simultaneousRoots; i++) {
      const root = new Root(event.x, event.y);
      root.update();
    }
  }
});

window.addEventListener('mousedown', function (event) {
  if (!canDraw) {
    return;
  }

  drawing = true;

  for (let i = 0; i < simultaneousRoots * 3; i++) {
    const root = new Root(event.x, event.y);
    root.update();
  }
});

window.addEventListener('mouseup', function () {
  drawing = false;
});