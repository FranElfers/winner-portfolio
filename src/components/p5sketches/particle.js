import Sketch from 'react-p5';

export default function({width, init}) {
	let par = [], parCantidad = 20, distancia, mapeo;
	
	const setup = (p5,parent) => p5.canvas = p5.createCanvas(width,width).parent(parent);

	const draw = function(p5) {
		p5.background(200,0,0);
		if (par.length < parCantidad) {
			par.push(new Dot(p5));
		}
		
		for (var i = par.length - 1; i >= 0; i--) {
			distancia = 0;
			mapeo = 0;
			for (var j = par.length - 1; j >= 0; j--) {
				distancia = p5.dist(par[j].x,par[j].y,par[i].x,par[i].y);
				mapeo = p5.map(p5.mouseX,0,width,50,300);
				if (distancia < mapeo){				
					p5.stroke(255,255,255,p5.map(distancia,0,mapeo,255,0));
					p5.line(par[j].x,par[j].y,par[i].x,par[i].y);
				}
			}
			
			par[i].show(p5);
			// Limite
			if (par[i].x < 0 ||
				par[i].x > width ||
				par[i].y < 0 ||
				par[i].y > width){
				par.splice(i,1);
			}
		}
		
		p5.fill(0);
		p5.noStroke();
		p5.textSize(20);
		p5.text('Mouse arriba y abajo para velocidad', 10, 20);
		p5.text('Mouse a los costados para la longitud de las uniones', 10, 40);

		if (!init && p5.frameCount > 30) p5.frameRate(0)
	}
	
	const Dot = function(p5) {
		this.x = p5.random(width);
		this.y = p5.random(width);
		this.dirx = p5.random(-1,1);
		this.diry = p5.random(-1,1);
		
		this.show = function(p5) {
			this.vel = p5.map(p5.mouseY,0,width,1,15);
			// Direccionamiento
			this.x += this.dirx/this.vel;
			this.y -= this.diry/this.vel;
			p5.fill(255);
			p5.ellipse(this.x, this.y, 5,5);
		}
	}

	return <Sketch setup={setup} draw={draw} />
}