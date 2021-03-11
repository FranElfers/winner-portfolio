import Sketch from 'react-p5';

export default function Snake({width}) {
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
	
	function setup(p5,parent){
		p5.createCanvas(grid.x * escala, grid.y * escala).parent(parent);
		crearManzana(true);
		p5.frameRate(15);
		s = new Serpiente(p5);
	}
	
	function draw(p5){
		p5.background(200);
		crearManzana(false);
		if ((s.x[0] == manzana.x) && (s.y[0] == manzana.y)) {
			s.longitud++;
			crearManzana(true);
		};
		s.update(p5);
		s.show(p5);
		p5.text('points: ' + s.longitud, 10, 10);
	}
	
	function Serpiente(p5){
		this.x = [2];
		this.y = [2];
		this.vx = 1;
		this.vy = 0;
		this.longitud = 1;
	
		this.update = function(p5){
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
	
		this.show = function(p5){
			// for (var i = this.x.length - 1; i >= 0; i--) {
			// 	rect(this.x[i] * escala, this.y[i] * escala, escala, escala);
			// }
			this.x.map(i => p5.rect(this.x[i] * escala, this.y[i] * escala, escala, escala))
		}
	}
	
	function keyPressed(p5){
		if (p5.keyCode == p5.UP_ARROW){
			s.vy = -1;
			s.vx = 0;
		}
		if (p5.keyCode == p5.DOWN_ARROW){
			s.vy = 1;
			s.vx = 0;
		}
		if (p5.keyCode == p5.LEFT_ARROW){
			s.vx = -1;
			s.vy = 0;
		}
		if (p5.keyCode == p5.RIGHT_ARROW){
			s.vx = 1;
			s.vy = 0;
		}
	}
	
	function crearManzana(a,p5){
		if (a){
			manzana.x = Math.floor(Math.random() * grid.x);
			manzana.y = Math.floor(Math.random() * grid.y);
			a = false;
		}
		p5.push();
		p5.fill(255,0,0);
		p5.rect(manzana.x * escala, manzana.y * escala, escala, escala);
		p5.pop();
	}

	return <Snake setup={setup} draw={draw} keyPressed={keyPressed} />
}
