import React from 'react';
import Sketch from 'react-p5';

export default function Moon(props){
	let a = 0;
	let earth, moon;

	const setup = function(p5, parent) {
		p5.canvas = p5.createCanvas(400,400).parent(parent);
		earth = new Planet(p5);
		moon = new Moon(p5);
	}
	
	const draw = function(p5) {
		p5.background(0);
		p5.stroke(255);
		p5.line(earth.x, earth.y, moon.x, moon.y);
		earth.show();
		moon.show(a);
		a = a + 0.001;
	}
	
	const Planet = function(p5){
		this.x = p5.width/2;
		this.y = p5.height/2;	
	
		this.show = function(){
			p5.noStroke()
			p5.fill(100,255,100);
			p5.ellipse(this.x, this.y,100,100);
		}
	}
	
	const Moon = function(p5){
		this.x = 0;
		this.y = 0;
		this.r = 200;	
	
		this.show = function(num){
			this.x = this.r * p5.cos(a) + p5.width/2;
			this.y = this.r * p5.sin(a) + p5.height/2;
			p5.noStroke()
			p5.fill(255);
			p5.ellipse(this.x,this.y,50,50);
		}
	}
	
	return <Sketch setup={setup} draw={draw} />
}
