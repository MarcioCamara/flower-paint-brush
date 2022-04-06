class Flower {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.sizeSpeed = Math.random() + 0.3 + 0.2;
    this.maxSize = this.size + Math.random() * 100;
    this.image = new Image();
    this.image.src = 'img/flowers.png';
    this.frameSize = 100;
    this.frameY = Math.floor(Math.random() * 3);
    this.frameX = Math.floor(Math.random() * 3);
    this.willFlower = this.size > 11.5;
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.05 - 0.025;
  }

  grow() {
    if (this.size < this.maxSize && this.willFlower) {
      this.size += this.sizeSpeed;
      this.angle += this.angleSpeed;

      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.drawImage(this.image, this.frameSize * this.frameX, this.frameSize * this.frameY, this.frameSize, this.frameSize, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
      ctx.restore();

      requestAnimationFrame(this.grow.bind(this));
    }
  }
}