var sketch = function(p) {
	p.topaltura = [];
	
	p.setup = function(){
		p.canvas = p.createCanvas(500,500).parent('bouncyball');
		p.ball = new p.Ball();
	}
	
	p.draw = function(){
		p.background(150);
		p.ball.update();
		p.ball.draw();
	
		p.altura = p.int((p.ball.y - 460) *(-1));
		p.velocidad = 'Velocidad: ' + p.int(p.ball.yspeed * (-1));
		
		if (p.int(p.ball.yspeed) === 0){
			p.append(p.topaltura, p.altura);
		}
		if (p.topaltura.length > 3){
			p.a = p.topaltura.indexOf(p.min(p.topaltura));
			p.topaltura.splice(p.a,1);
		}
		p.text('Altura: ' + p.altura, 20, 20);
		p.text(p.velocidad, 20, 40);
		p.text('Altura maxima: ' + p.max(p.topaltura), 20,60);
	}
	
	p.Ball = function(){
		this.x = p.width/2;
		this.y = p.height/2;
		this.yspeed = 1;
	
		this.update = function(){
			if (this.y < p.height-40){
				this.yspeed += 1/10; 
			} else {
				// Lo que sucede cuando toca el piso
				this.yspeed = this.yspeed * (-1);
				this.yspeed = this.yspeed + 1;
			}
			this.y += this.yspeed;
		}
	
		this.draw = function() {
			if (this.y >= p.height-40){this.y = p.height-40;};
			if (p.mouseIsPressed){this.yspeed += 1};
	
			p.fill(255);
			p.ellipse(this.x,this.y,80,80);
		}
	}
}

var bouncyball = new p5(sketch);