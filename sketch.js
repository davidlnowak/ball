var ball = {
    x: 20,
    y: 200,
    size: 30,
    speed: { x: 2, y: 2 },
    display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword this
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.move();
    this.checkForBounce();
  },

  move: function () {
    this.x += this.speed.x;
    this.y += this.speed.y;
  },

  checkForBounce: function () {
    if (this.x > width - this.size / 2) {
      this.speed.x = this.getRandomSpeed(this.speed.x);
      this.x = width - this.size / 2;
    } else if (this.x < 0 + this.size / 2) {
      this.speed.x = this.getRandomSpeed(this.speed.x);
      this.x = 0 + this.size / 2;
    } else if (this.y > height - this.size / 2) {
      this.speed.y = this.getRandomSpeed(this.speed.y);
      this.y = height - this.size / 2;
    } else if (this.y < 0 + this.size / 2) {
      this.speed.y = this.getRandomSpeed(this.speed.y);
      this.y = 0 + this.size / 2;
    }
  },

  getRandomSpeed: function (currentValue) {
    var randomSpeed = random(1.5, 5.5);
    if (currentValue >= 0) randomSpeed = -randomSpeed;

    return randomSpeed;
  }
};

var setup = function() { // setup is called only when the sketch starts
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(100);
  ball.display();
  ball.update();
};
