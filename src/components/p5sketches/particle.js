// resolver el problema del mouse en instance mode
var sketch = function(p) {
	p.par = [];
	p.parCantidad = 20;
	
	p.setup = () => p.canvas = p.createCanvas(500,500).parent('particle');

	p.draw = function() {
		p.background(200,0,0);
		if (p.par.length < p.parCantidad) {
			p.par.push(new p.Dot());
		}
		
		for (var i = p.par.length - 1; i >= 0; i--) {
			p.distancia = 0;
			p.mapeo = 0;
			for (var j = p.par.length - 1; j >= 0; j--) {
				p.distancia = p.dist(p.par[j].x,p.par[j].y,p.par[i].x,p.par[i].y);
				p.mapeo = p.map(p.mouseX,0,p.width,50,300);
				if (p.distancia < p.mapeo){				
					p.stroke(255,255,255,p.map(p.distancia,0,p.mapeo,255,0));
					p.line(p.par[j].x,p.par[j].y,p.par[i].x,p.par[i].y);
				}
			}
			
			p.par[i].show();
			// Limite
			if (p.par[i].x < 0 ||
				p.par[i].x > p.width ||
				p.par[i].y < 0 ||
				p.par[i].y > p.height){
				p.par.splice(i,1);
			}
		}
		
		p.fill(0);
		p.noStroke();
		p.textSize(20);
		p.text('Mouse arriba y abajo para velocidad', 10, 20);
		p.text('Mouse a los costados para la longitud de las uniones', 10, 40);
	}
	
	p.Dot = function() {
		this.x = p.random(p.width);
		this.y = p.random(p.height);
		this.dirx = p.random(-1,1);
		this.diry = p.random(-1,1);
		
		this.show = function() {
			this.vel = p.map(p.mouseY,0,p.height,1,15);
			// Direccionamiento
			this.x += this.dirx/this.vel;
			this.y -= this.diry/this.vel;
			p.fill(255);
			p.ellipse(this.x, this.y, 5,5);
		}
	}
}

var particle = new p5(sketch);