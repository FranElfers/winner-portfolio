import Sketch from 'react-p5';

export default function Bouncyball({width}) {
	let topaltura = [], ball, mouseDown;
	
	const setup = function(p5,parent){
		p5.canvas = p5.createCanvas(width,width).parent(parent);
		ball = new Ball();
	}
	
	const draw = function(p5){
		p5.background(150);
		ball.update(p5);
		ball.draw(p5);
	
		let altura = p5.int((ball.y - 460) *(-1));
		let velocidad = 'Velocidad: ' + p5.int(ball.yspeed * (-1));
		
		if (p5.int(ball.yspeed) === 0){
			topaltura.push(altura);
		}
		if (topaltura.length > 3){
			topaltura.splice(topaltura.indexOf(p5.min(topaltura)),1);
		}
		p5.text('Altura: ' + altura, 20, 20);
		p5.text(velocidad, 20, 40);
		p5.text('Altura maxima: ' + p5.max(topaltura), 20,60);

		document.body.onmousedown = () => mouseDown = true;
		document.body.onmouseup = () => mouseDown = false;
		document.body.ontouchstart = () => mouseDown = true;
		document.body.ontouchend = () => mouseDown = false;
	}
	
	const Ball = function(p5){
		this.x = width/2;
		this.y = width/2;
		this.yspeed = 1;
	
		this.update = function(p5){
			if (this.y < width-40){
				this.yspeed += 1/10; 
			} else {
				// Lo que sucede cuando toca el piso
				this.yspeed = this.yspeed * (-1);
				this.yspeed = this.yspeed + 1;
			}
			this.y += this.yspeed;
		}
	
		this.draw = function(p5) {
			if (this.y >= width-40){this.y = width-40;};
			if (mouseDown) this.yspeed++;

			p5.fill(255);
			p5.ellipse(this.x,this.y,80,80);
		}
	}

	return <Sketch setup={setup} draw={draw} />
}