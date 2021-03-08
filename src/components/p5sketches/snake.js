let s;
let escala = 10;
let grid = {
	x: 80,
	y: 50
}
let manzana = {
	x: 0,
	y: 0
}

function setup(){
	createCanvas(grid.x * escala, grid.y * escala);
	crearManzana(true);
	frameRate(15);
	s = new Serpiente();
}

function draw(){
	background(200);
	crearManzana(false);
	if ((s.x[0] == manzana.x) && (s.y[0] == manzana.y)) {
		s.longitud++;
		crearManzana(true);
	};
	s.update();
	s.show();
	text('points: ' + s.longitud, 10, 10);
}

function Serpiente(){
	this.x = [2];
	this.y = [2];
	this.vx = 1;
	this.vy = 0;
	this.longitud = 1;

	this.update = function(){
		this.x.unshift(this.x[0] + this.vx);
		this.y.unshift(this.y[0] + this.vy);
		if (this.longitud < this.x.length) {
			this.x.pop();
			this.y.pop();
		}
		// for (var i = this.x.length - 1; i > 0; i--) {
		// 	if ((this.x[i] == this.x[0]) && (this.y[i] == this.y[0])) alert("game over")
		// }
		this.x.map(i => {
			if ((this.x[i] == this.x[0]) && (this.y[i] == this.y[0])) alert("game over")
		})
	}

	this.show = function(){
		// for (var i = this.x.length - 1; i >= 0; i--) {
		// 	rect(this.x[i] * escala, this.y[i] * escala, escala, escala);
		// }
		this.x.map(i => rect(this.x[i] * escala, this.y[i] * escala, escala, escala))
	}
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		s.vy = -1;
		s.vx = 0;
	}
	if (keyCode == DOWN_ARROW){
		s.vy = 1;
		s.vx = 0;
	}
	if (keyCode == LEFT_ARROW){
		s.vx = -1;
		s.vy = 0;
	}
	if (keyCode == RIGHT_ARROW){
		s.vx = 1;
		s.vy = 0;
	}
}

function crearManzana(a){
	if (a){
		manzana.x = Math.floor(Math.random() * grid.x);
		manzana.y = Math.floor(Math.random() * grid.y);
		a = false;
	}
	push();
	fill(255,0,0);
	rect(manzana.x * escala, manzana.y * escala, escala, escala);
	pop();
}