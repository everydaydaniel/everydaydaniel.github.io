//setting up the goody variables

var ball1 = [];
var listOfColors;
var selectedColor;
var backGroundColor;

//defines the goody color of the goody balls relative to the goody background color

var colors = {
	0: 'black',
	1: 'black',
	2: 'black'
}

// function windowResized(){
//   // resizeCanvas(windowWidth,windowHeight);
// }

//create a responsive window and define quantity of the goody balls
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  for (var i = 0; i < 9; i++) {
    ball1 [i] = new Ball();
  }

  //defining the goody background colors and how to randomly select one

  listOfColors = [color('#ff0000'), color('#0000ff'), color('#00ff00')];
  selectedColor = int(random(0, listOfColors.length));
	backGroundColor = listOfColors[selectedColor];
}

//resizing the draw window when you resize the browser window

function windowResized(){
	resizeCanvas (window.innerWidth, window.innerHeight);
}

//defining the goody ball size and position

function Ball() {
  this.rd = 0;
  this.x = random(this.rd*2,width - this.rd*2);
  this.y = random(this.rd*2,height - this.rd*2);

//defining the speed of the movement

  this.spx = random(-2, 2);
  this.spy = random(-1, 1);

//defining the goody ball movement and the bounce physics

  this.move = function() {
    this.x += this.spx;
    this.y += this.spy;


    if (this.x > width-this.rd*2 || this.x < this.rd*2) {
      this.spx *= -1;
    }

    if (this.y > height-this.rd*2 || this.y < this.rd*2) {
      this.spy *= -1;
    }
  }

//defining the style of the goody balls

  this.cria = function() {

    noStroke();
    fill(colors[selectedColor]);
    ellipse(this.x, this.y, (window.innerWidth/6), (window.innerWidth/6));
  }
}

function draw(){

	background(backGroundColor);
	for (var i = 0; i < ball1.length; i++) {
		ball1[i].cria();
		ball1[i].move();
	}
}
