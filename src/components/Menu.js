import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getMenuItems from '../services/getMenuItems';
import AboutSection from './AboutSection/';
import './Menu.css';
import Stars from './Stars';

export default function Menu() {
	const [ width, setWidth ] = useState(180);
	const { caps, links } = getMenuItems();

	const togglePerformance = className => {
		const caps = document.getElementsByClassName(className);
		for (let i = 0; i < caps.length; i++) {
			caps[i].classList.toggle('light')
		}
	}

	useEffect(() => {
		setWidth(document.getElementsByClassName('cap')[0].getBoundingClientRect().width);
	}, [])
	

	return <>
		<div className="cap-container width1000">
			{caps.map(({name,to,icon},i) => 
				<Link to={to} key={'cap'+i}>
					<div className="cap light">
						<figure>
							<div className='canvas'>
								<Stars width={width} />
							</div>
							<img src={icon} />
							<figcaption>{name}</figcaption>
						</figure>
					</div>
				</Link>
			)}
			{links.map(({name,href,icon},i) => 
				<a href={href} target="_blank" key={'link'+i}>
					<div className="cap light">
						<figure>
							<div className='canvas'>
								<Stars width={width} />
							</div>
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
				<input className="switch" id="performance" type="checkbox" onChange={()=>togglePerformance('cap')} />
			</div>
		</AboutSection>
	</>
}