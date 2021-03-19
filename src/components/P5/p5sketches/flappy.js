import Sketch from 'react-p5';
import Imagen from './bg.png';

export default function({width, init}){
	let player, bg, modoFacil, canvas;
	let obs = [];
	let best = [];
	let puntos = 0;
	let cero = 0;
	let f = 0;
	let bgpos = width;
	let inicio = true;
	let pausa = false;
	let modo = false;
	
	const preload = p5 => p5.loadImage(Imagen, img => bg = img);
	
	const setup = function(p5,parent) {
		p5.canvas = p5.createCanvas(width,width).parent(parent);
		modoFacil = p5.createCheckbox('Easy mode').parent(parent);
		p5.textFont('Arial');
		player = new Bird(p5);
	}
	
	const draw = function(p5) {
		p5.background(150,150,255);
		animatedBG(p5);
	
		if (inicio) { juegoInicio(p5) } 
		else if (pausa) { juegoPausado(p5) } 
		else { juego(p5) }

		if (!init && p5.frameCount > 30) p5.frameRate(0)
	}
	
	const animatedBG = function(p5){
		p5.image(bg, bgpos - width, 0, width, width); // primera foto
		p5.image(bg, bgpos, 0, width, width); // segunda foto
		if (bgpos <= 0) bgpos = width;
		bgpos--;
	}
	
	const juegoInicio = function(p5){
		p5.fill(100,255,100);
		p5.rect(0,0,width,width);
		p5.push();
			p5.rectMode(p5.CENTER);
			p5.fill(200);
			p5.rect(width/2,width/2,400,40);
		p5.pop();
		p5.fill(0);
		p5.textAlign(p5.CENTER);
		p5.textSize(30);
		p5.text('Click to start, "S" key to jump',width/2,width/2+10);
	
		if (p5.mouseIsPressed) inicio = false;
	}
	
	const juego = function(p5){
		cero = 0;
	
		// Modo juego, si toca algun borde o alguna pared, pasa a modo pausa //
		player.update(p5);
		player.show(p5);
	
		if (p5.frameCount % 80 == 0) obs.push(new Wall(p5));	// Coloca un obstaculo cada 80 frames	
	
		for (var i = obs.length-1; i >= 0; i--){
			if (modoFacil.checked()){
				player.h = 30;
				obs[i].th = 20;
			} else {
				player.h = 50;
				obs[i].th = 50;
			}
			obs[i].move();
			obs[i].show(p5);
			if (obs[i].left < -70 ){
				puntos += 1;			// Agrega un punto
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
				pausa = true;			// Pausa el juego
				f = p5.frameCount;
			}
		}
	
		p5.fill(0);
		p5.textSize(30)
		p5.text(puntos,30,40);				// Puntuacion actual
		////////////////////////////////////////////////////////////
	}
	
	const juegoPausado = function(p5){
		p5.append(best, puntos);
	
		if (best.length > 3){
			best.splice(best.indexOf(p5.min(best)),1);
		}
	
		// Modo pausa, muestra el score y reinicia la partida //
		p5.fill(100,255,100);
		p5.rect(0,0,width,width); 			// Fondo del modo pausa
	
		cooldown(p5);
	
		p5.fill(0);
		p5.textAlign(p5.CENTER);
		p5.textSize(100);
		p5.text(puntos, width/2, width/2); 	// Puntuacion final
	
		p5.fill(255,255,0);
		p5.textSize(60);
		p5.text('Best: '+p5.max(best), width/2, width/2+100)
	
	
		if (p5.frameCount > f + 120){	// Luego de unos segundos
			pausa = false; 		// Pasa a modo juego
			player.y = 200;		// Coloca al jugador en la posicion inicial
			player.speed = 0;	// Resetea la velocidad
			obs = [];			// Remueve los obstaculos
			puntos = 0;			// Resetea los puntos
		}
	}
	
	const cooldown = function(p5){
		p5.fill(200,200,200,200);
		p5.x = p5.map(cero, 0, 120, 0, p5.TWO_PI);
		p5.x -= p5.HALF_PI-0.01;
		cero++;
		p5.noFill();
		p5.arc(width/2, width/2, 300, 300, -p5.HALF_PI, p5.x);
	}
	
	document.addEventListener('keydown', e => {
		if (player) return e.keyCode == '83' ? player.jump() : ''
	})
	document.addEventListener('touchstart', () => {
		if (player) player.jump()
	})

	const Bird = function(p5) {
		this.h = 50; 						// Altura
		this.x = 100; 					// Posicion x
		this.y = width/2; 			// Posicion y
		this.floor = width-20; // Altura del piso
		this.jumpForce = 3; 		// Fuerza del salto
		this.gravity = 0.1; 		// Gravedad
	
		this.speed = 0;	
		this.jump = () => this.speed -= this.jumpForce;
	
		this.update = function(p5) {
			this.speed += this.gravity;
			this.y += this.speed;
		}
	
		this.show = function(p5) {
			p5.fill(100);
			p5.rect(this.x, this.y, 10, this.h);
		}
	}
	
	const Wall = function(p5){
		this.th = 50 		// Anchura de la pared
		this.speed = 3; // Velocidad
		this.gap = 100; // Abertura
		
		this.left = width;
		this.uppergap = p5.random(0,width-this.gap);
	
		this.move = () => this.left -= this.speed;
	
		this.show = function(p5) {
			p5.fill(255,255,0);
			p5.rect(this.left, 0, this.th, this.uppergap);
			p5.rect(this.left, this.uppergap + this.gap, this.th, width);
		}
	}
	return <Sketch setup={setup} draw={draw} preload={preload} />
}
