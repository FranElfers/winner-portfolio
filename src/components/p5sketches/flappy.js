var sketch = function(p){
	let player;
	let obs = [];		// Lista de obstaculos
	p.best = [];
	p.puntos = 0;
	p.cero = 0;
	p.f = 0;
	p.bgpos = 800;
	p.pausa = false;
	p.inicio = true;
	p.modo = false;
	
	p.preload = () =>	p.bg = p.loadImage('bg.png');
	
	p.setup = function() {
		p.canvas = p.createCanvas(500,500).parent('flappy');
		p.modoFacil = p.createCheckbox('Modo fasssil');
		p.textFont('Arial');
		player = new p.Bird();
	}
	
	p.draw = function() {
		p.background(150,150,255);
		p.animatedBG();
	
		if (p.inicio) { p.juegoInicio() } 
		else if (p.pausa) { p.juegoPausado() } 
		else { p.juego() }
	}
	
	p.animatedBG = function(){	
		p.image(p.bg, p.bgpos, 0, p.width, p.height);
		p.image(p.bg, p.bgpos - p.width, 0, p.width, p.height);
		if (p.bgpos <= 0) p.bgpos = p.width;
		p.bgpos--;
	}
	
	p.juegoInicio = function(){
		p.fill(100,255,100);
		p.rect(0,0,p.width,p.height);
		p.push();
			p.rectMode(p.CENTER);
			p.fill(200);
			p.rect(p.width/2,p.height/2,400,40);
		p.pop();
		p.fill(0);
		p.textAlign(p.CENTER);
		p.textSize(30);
		p.text('Click to start, "S" key to jump',p.width/2,p.height/2+10);
	
		if (p.mouseIsPressed) p.inicio = false;
	}
	
	p.juego = function(){
		p.cero = 0;
	
		// Modo juego, si toca algun borde o alguna pared, pasa a modo pausa //
		player.update();
		player.show();
	
		if (p.frameCount % 80 == 0) obs.push(new p.Wall());	// Coloca un obstaculo cada 80 frames	
	
		for (var i = obs.length-1; i >= 0; i--){
			if (p.modoFacil.checked()){
				player.h = 30;
				obs[i].th = 20;
			} else {
				player.h = 50;
				obs[i].th = 50;
			}
			obs[i].move();
			obs[i].show();
			if (obs[i].left < -70 ){
				p.puntos += 1;			// Agrega un punto
				obs.splice(i, 1);		// Elimina el obstaculo al sobrepasar la pantalla
			}

			// Comprobacion de muerte
			let xizq = player.x + 10 >= obs[0].left; 					// derecha del player mayor a izq del obstaculo
			let xder = player.x <= obs[0].left + obs[0].th;		// izq del player menor a der del obstaculo
			let colisionX = xizq && xder;

			let yarr = player.y > obs[0].uppergap;						// top del player mayor a uppergap
			let yaba = player.y + player.h < obs[0].uppergap + obs[0].gap;	// bottom del player menor a lowergap
			let enGap =  yarr && yaba;

			let piso = player.y < player.floor;	// top del player mayor al piso
			let techo = player.y > -40;						// bottom del player menor al techo
			let enArea = piso && techo;

			if ((colisionX && !enGap) || !enArea){
				p.pausa = true;			// Pausa el juego
				p.f = p.frameCount;
			}
		}
	
		p.fill(0);
		p.textSize(30)
		p.text(p.puntos,30,40);				// Puntuacion actual
		////////////////////////////////////////////////////////////
	}
	
	p.juegoPausado = function(){
		p.append(p.best, p.puntos);
	
		if (p.best.length > 3){
			p.a = p.best.indexOf(p.min(p.best));
			p.best.splice(p.a,1);
		}
	
		// Modo pausa, muestra el score y reinicia la partida //
		p.fill(100,255,100);
		p.rect(0,0,p.width,p.height); 			// Fondo del modo pausa
	
		p.cooldown();
	
		p.fill(0);
		p.textAlign(p.CENTER);
		p.textSize(100);
		p.text(p.puntos, p.width/2, p.height/2); 	// Puntuacion final
	
		p.fill(255,255,0);
		p.textSize(60);
		p.text('Best: '+p.max(p.best), p.width/2, p.height/2+100)
	
	
		if (p.frameCount > p.f + 120){	// Luego de unos segundos
			p.pausa = false; 		// Pasa a modo juego
			player.y = 200;		// Coloca al jugador en la posicion inicial
			player.speed = 0;	// Resetea la velocidad
			obs = [];			// Remueve los obstaculos
			p.puntos = 0;			// Resetea los puntos
		}
	}
	
	p.cooldown = function(){
		p.fill(200,200,200,200);
		p.x = p.map(p.cero, 0, 120, 0, p.TWO_PI);
		p.x -= p.HALF_PI-0.01;
		p.cero++;
		p.arc(p.width/2, p.height/2, 300, 300, -p.HALF_PI, p.x);
	}
	
	document.addEventListener('keydown', e => {
		if (e.keyCode == '83') {
			player.jump();
		}
	});

	p.Bird = function() {
		this.h = 50; 						// Altura
		this.x = 100; 					// Posicion x
		this.y = p.height/2; 			// Posicion y
		this.floor = p.height-20; // Altura del piso
		this.jumpForce = 3; 		// Fuerza del salto
		this.gravity = 0.1; 		// Gravedad
	
		this.speed = 0;	
		this.jump = () => this.speed -= this.jumpForce;
	
		this.update = function() {
			this.speed += this.gravity;
			this.y += this.speed;
		}
	
		this.show = function() {
			p.fill(100);
			p.rect(this.x, this.y, 10, this.h);
		}
	}
	
	p.Wall = function(){	
		this.th = 50 		// Anchura de la pared
		this.speed = 3; // Velocidad
		this.gap = 100; // Abertura
		
		this.left = p.width;
		this.uppergap = p.random(100,300);
	
		this.move = () => this.left -= this.speed;
	
		this.show = function() {
			p.fill(255,255,0);
			p.rect(this.left, 0, this.th, this.uppergap);
			p.rect(this.left, this.uppergap + this.gap, this.th, p.height);
		}
	}
}

var flappy = new p5(sketch);