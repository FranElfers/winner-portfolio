import './styles/P5.css';
import Rain from './p5sketches/rain';
import Moon from './p5sketches/moon';
import Bouncyball from './p5sketches/bouncyball';
import Particle from './p5sketches/particle';
import Flappy from './p5sketches/flappy';
import Back from './Back';
// import Snake from './p5sketches/snake';

export default function P5(props) {
	const width = 300;
	const style = {margin:0};

	return <>
		<Back to="/" />
		<h2 style={style}>Scripts de alto consumo</h2>
		<p style={style}>Pueden no correr en todos los dispositivos</p>
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