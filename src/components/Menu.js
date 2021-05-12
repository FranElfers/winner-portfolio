import React from 'react';
import getMenuItems from '../services/getMenuItems';
import AboutSection from './AboutSection';
import './styles/Menu.css';
import ConfigContext from '../context/config'
import MenuCard from './MenuCard';

const SvgProgress = ({ first, last }) => {
	return <svg width="140" height="140">
		<circle r="50" stroke={`url(#${first+last})`} />
		<defs>
			<linearGradient id={first+last} >
				<stop offset="0%" stopColor={'#' + first} />
				<stop offset="100%" stopColor={'#' + last} />
			</linearGradient>
		</defs>
	</svg>
}

export default function Menu() {
	const { caps, links } = getMenuItems();
	const { performance, togglePerformance } = React.useContext(ConfigContext)
	const capClass = 'cap' + (performance ? ' light' : '');


	return <>
		<h1>Francisco Elfers</h1>
		<div className="cap-container width1000">
			{caps.map(({name,to,icon},i) => 
				<MenuCard key={'cap'+i} link={to} title={name} className={capClass} >
					<img src={icon} />
				</MenuCard>
			)}

			{links.map(({name,href,icon},i) => 
				<MenuCard link={href} target="_blank" key={'link'+i} title={name} className={capClass}>
					<img src={icon} />
				</MenuCard>
			)}

			<MenuCard progress={100} title="CSS">
				<SvgProgress first="74A2E7" last="74E7CB" />
			</MenuCard>

			<MenuCard progress={80} title="JavaScript" >
				<SvgProgress first="74A2E8" last="74E7CB" />
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
