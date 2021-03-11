import './P5.css';
import Back from './Back';
import Rain from './p5sketches/rain';
import Moon from './p5sketches/moon';
import Bouncyball from './p5sketches/bouncyball';
import Particle from './p5sketches/particle';
import Flappy from './p5sketches/flappy';
import Snake from './p5sketches/snake';

export default function P5(props) {
	const width = 300;

	return <>
		<Back to="/" />
		<Back to="/" />
		<Back to="/" />
		<Back to="/" />
		<Back to="/" />
		<Back to="/" />
		<Back to="/" />
		<Back to="/" />
		<div className="p5grid">
			<Moon width={width} />
			<Rain width={width} />
			<Bouncyball width={width} />
			<Particle width={width} init={true} />
			<Flappy width={width} init={true} />
			{/* <Snake width={width} /> */}
		</div>
	</>
}