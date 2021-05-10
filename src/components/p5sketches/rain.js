import React from 'react';
import Sketch from "react-p5";

export default function Rain(props) {
	let drop = [];

	const setup = (p5,canvasParentRef) => {
		p5.canvas = p5.createCanvas(props.width,props.width).parent(canvasParentRef);
		for (var i = 0; i < 200; i++) {
			drop[i] = new Water(p5);
		}
	}

	const draw = p5 => {
		p5.background(100,0,100);
		for (var i = 0; i < 200; i++){
			drop[i].update();
			drop[i].show();
		}
	}	

	const Water = function(p5) {
		this.z = p5.random(1,5);
		this.x = p5.random(0,800);
		this.y = p5.random(0,-100);
		this.speed = p5.random(0.1,4);
		this.len = 5;
	
		this.update = function() {
			this.speed = this.speed + 0.05;
			this.y += this.speed;
			this.len = this.len + 0.1;
	
			if (this.y > p5.height) {
				this.y = p5.random(-100,-200);
				this.speed = p5.random(0.1,4);
				this.len = 5;
			}
		}
	
		this.show = function(){
			p5.noStroke();
			p5.fill(100,100,255);
			p5.rect(this.x,this.y,2,this.len);
		}
	}
	const styles = {
		width: '100%'
	}
	return <Sketch setup={setup} draw={draw} style={styles} />
}