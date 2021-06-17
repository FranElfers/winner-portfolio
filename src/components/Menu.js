import React from 'react';
import AboutSection from './AboutSection';
import './styles/Menu.css';
import ConfigContext from '../context/config'
import MenuCard from './MenuCard';

const SvgProgress = ({ first, last, shine }) => {
	const style = {
		filter: `drop-shadow(0px 0px 3px #${shine})`,
		background: `-webkit-linear-gradient(270deg, #${first} 0%, #${last} 100%)`,
		WebkitBackgroundClip: "text"
	}

	return <>
		<svg width="140" height="140">
			<circle r="50" stroke={`url(#${first+last})`} style={style} />
			<defs>
				<linearGradient id={first+last} >
					<stop offset="0%" stopColor={'#' + first} />
					<stop offset="100%" stopColor={'#' + last} />
				</linearGradient>
			</defs>
		</svg>
	</>
}

const ShinyTitle = ({ children, shine="FFFFFF", first="FFFFFF", last="FFFFFF", button=true, out=false }) => {
	const style = {
		filter: `drop-shadow(0px 0px 3px #${shine})`,
		background: `-webkit-linear-gradient(270deg, #${first} 0%, #${last} 100%)`,
		WebkitBackgroundClip: "text"
	}

	return <>
		<h1 style={style}>{children}</h1>
		{button && <button>{ out ? 'Visit ⨠' : 'View more'}</button>}
	</>
}

export default function Menu() {
	const { performance, togglePerformance } = React.useContext(ConfigContext)
	const logos = process.env.PUBLIC_URL + '/logos/'

	return <>
		<h1>Francisco Elfers</h1>
		<div className="cap-container width1000">
			<MenuCard link="/gifs" >
				<img src={logos + '/giphy.svg'} alt="giphy logo" />
				<ShinyTitle>Giphy API</ShinyTitle>
			</MenuCard>

			<MenuCard link="/p5js" >
				<img src={logos + 'p5js.png'} alt="p5js logo" />
				<ShinyTitle>P5js</ShinyTitle>
			</MenuCard>

			<MenuCard link="/resume" >
				<img src={logos + 'resume.svg'} alt="resume logo" />
				<ShinyTitle>Resume</ShinyTitle>
			</MenuCard>

			<MenuCard link="/canban">
				<img src={logos + 'firebase.svg'} alt="firebase logo" />
				<ShinyTitle first="FFCA28" last="FFA000" shine="FFCA28">Canban</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://www.socialstore.com.ar/" target="_blank" >
				<img src={logos + 'socialstore.svg'} />
				<ShinyTitle out={true}>SocialStore</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://www.linkedin.com/in/franciscoelfers/" target="_blank" >
				<img src={logos + 'linkedin.svg'} />
				<ShinyTitle first="ffffff" last="0099cc" shine="006699" out={true}>LinkedIn</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://github.com/FranElfers" target="_blank" >
				<img src={logos + 'github.svg'} />
				<ShinyTitle out={true}>Github</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://www.codewars.com/users/FranElfers" shine="E7AB74">
				<img style={{'width': '122px'}} src={logos + 'codewars.svg'} />				
				<ShinyTitle first="E6DB74" last="E7AB74" shine="E7AB74" out={true} >Codewars</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://codepen.io/franelfers" >
				<img src={logos + 'codepen.svg'} alt="codepen logo" />
				<ShinyTitle out={true}>Codepen</ShinyTitle>
			</MenuCard>

			<MenuCard progress={60} shine="74E7CB">
				<SvgProgress first="74A2E7" last="74E7CB" shine="74E7CB" title="CSS" />
				<ShinyTitle first="74A2E7" last="74E7CB" shine="74E7CB" button={false} >CSS</ShinyTitle>
			</MenuCard>

			<MenuCard progress={50} shine="E7AB74">
				<SvgProgress first="E6DB74" last="E7AB74" shine="E7AB74" title="JavaScript" />
				<ShinyTitle first="E6DB74" last="E7AB74" shine="E7AB74" button={false} >JavaScript</ShinyTitle>
			</MenuCard>

			<MenuCard progress={70} shine="E7AB74">
				<SvgProgress first="61DAFB" last="74B0E7" shine="74E7CB" title="React" />
				<ShinyTitle first="61DAFB" last="74B0E7" shine="74E7CB" button={false} >React</ShinyTitle>
			</MenuCard>
					
		</div>

		<AboutSection>
			<h3>My portfolio</h3>
			<p>This is my portfolio made with React, including modules and APIs like Giphy API, P5js module, font-awesome icons.</p>
		</AboutSection>
		<AboutSection>
			<div className="option">
				<label htmlFor="performance">Better performance</label>
				<input className="switch" id="performance" type="checkbox" checked={performance} onChange={togglePerformance} />
			</div>
		</AboutSection>
	</>
}
