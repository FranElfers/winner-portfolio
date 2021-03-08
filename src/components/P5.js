import React, { useEffect } from 'react';
import Rain from './p5sketches/rain';
import Moon from './p5sketches/moon';

export default function P5(props) {
	return <div className="p5grid">
		<Moon />
		<Rain />
	</div>
}