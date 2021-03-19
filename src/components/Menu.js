import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getMenuItems from '../services/getMenuItems';
import './Menu.css';
import Stars from './Stars';

export default function Menu() {
	const [ width, setWidth ] = useState(180);
	const { caps, links } = getMenuItems();

	useEffect(() => {
		setWidth(document.getElementsByClassName('cap')[0].getBoundingClientRect().width);
	}, [])

	return <div className="App-center">
		<div className="cap-container width1000">
			{caps.map(({name,to,icon},i) => 
				<Link to={to} className='cap' key={'cap'+i}>
					<div className="cap">
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
					<div className="cap">
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
	</div>
}