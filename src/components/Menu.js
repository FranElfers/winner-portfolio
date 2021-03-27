import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import getMenuItems from '../services/getMenuItems';
import AboutSection from './AboutSection/';
import './Menu.css';
import Stars from './Stars';
import ConfigContext from '../context/config';

export default function Menu() {
	const { caps, links } = getMenuItems();
	const { betterPerformance, toggleBetterPerformance } = useContext(ConfigContext);
	const capClass = 'cap' + (betterPerformance ? ' light' : '');

	return <>
		<div className="cap-container width1000">
			{caps.map(({name,to,icon},i) => 
				<Link to={to} key={'cap'+i}>
					<div className={capClass}>
						<figure>
							<Stars />
							<img src={icon} />
							<figcaption>{name}</figcaption>
						</figure>
					</div>
				</Link>
			)}
			{links.map(({name,href,icon},i) => 
				<a href={href} target="_blank" key={'link'+i}>
					<div className={capClass}>
						<figure>
							<Stars />
							<img src={icon} />
							<figcaption>{name}</figcaption>
						</figure>
					</div>
				</a>
			)}
		</div>

		<AboutSection>
			<h3>My portfolio</h3>
			<p>This is my portfolio made with React, including modules and APIs like Giphy API, P5js module, font-awesome icons.</p>
		</AboutSection>
		<AboutSection>
			<div className="option">
				<label htmlFor="performance">Better performance</label>
				<input className="switch" id="performance" type="checkbox" checked={betterPerformance} onChange={toggleBetterPerformance} />
			</div>
		</AboutSection>
	</>
}