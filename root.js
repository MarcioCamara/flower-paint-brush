class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 7 + 5;
    this.size = Math.random() * 1 + 2;
    this.sizeSpeed = Math.random() * 0.2 + 0.05;
    this.angleX = Math.random() * 6.2;
    this.angleXSpeed = Math.random() * 0.6 - 0.3;
    this.angleY = Math.random() * 6.2;
    this.angleYSpeed = Math.random() * 0.6 - 0.3;
    this.lightness = 10;
  }

  update() {
    this.x += this.speedX + Math.sin(this.angleX);
    this.y += this.speedY + Math.sin(this.angleY);
    this.size += this.sizeSpeed;
    this.angleX += this.angleXSpeed;
    this.angleY += this.angleYSpeed;

    if (this.lightness < 70) {
      this.lightness += 0.25;
    }

    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(140, 100%, ${this.lightness}%)`;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    } else {
      const flower = new Flower(this.x, this.y, this.size);
      flower.grow();

    }
  }
}