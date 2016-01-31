var ball = {
  x: 300,
  y: 380,
  size: 15,
  incrementStep: -1,

  display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword this
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.y += this.incrementStep; // this line is the same as: this.x = this.x + 1;
  },

  checkForBounce: function () {
    if (this.y > height - this.size / 2) this.bounce();
    if (this.y < 0 + this.size / 2) this.bounce();
  },

  bounce: function () {
    // change direction of the ball when either edge of the canvas has been detected.
    this.incrementStep *= -1;
  }
};

var setup = function() { // setup is called only when the sketch starts
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(100); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
};
