
'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const btn = document.getElementById("clear");


color.addEventListener('input', () => ctx.strokeStyle = color.value);
lineWidth.addEventListener('input', () => {
  lineWidth.value = lineWidth.value.replace(/\D/, '');
  if (lineWidth.value > 0 && lineWidth.value <= 10) {
    ctx.lineWidth = lineWidth.value;
  } else if (lineWidth.value > 10) {
    ctx.lineWidth = 10;
  }
});
canvas.addEventListener('mousemove', (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  const mx = event.movementX;
  const my = event.movementY;
  if (event.buttons > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - mx, y - my);
    ctx.stroke();
    ctx.closePath();
  }


});
btn.addEventListener("click", () => {
  console.log("hello");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
