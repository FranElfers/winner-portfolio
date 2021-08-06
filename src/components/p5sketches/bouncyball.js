import Sketch from 'react-p5';

export default function Bouncyball({width}) {
	let topaltura = [], ball, mouseDown;
	let zone = document.querySelector('#defaultCanvas2');
	
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

		// Si el canvas cargo en el html, activa los eventos, sino sigue intentando obtener el canvas
		if (zone) {
			zone.onmousedown = () => mouseDown = true;
			zone.onmouseup = () => mouseDown = false;
			zone.ontouchstart = e => {
				if(e.cancelable) e.preventDefault()
				mouseDown = true;
			}
			zone.ontouchend = e => {
				if(e.cancelable) e.preventDefault()
				mouseDown = false;
			}
		} else {
			zone = document.querySelector('#defaultCanvas2')
		}
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