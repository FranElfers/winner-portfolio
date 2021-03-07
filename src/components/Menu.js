import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const caps = [
	{
		name: 'CSS',
		to: '#',
		icon: 'https://svgur.com/i/Uie.svg'
	},
	{
		name: 'Giphy API',
		to: '/gifs',
		icon: 'https://cdn.worldvectorlogo.com/logos/giphy-logo-1.svg'
	},
	{
		name: 'JavaScript',
		to: '#',
		icon: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg'
	},
	
	// {name: 'API on React',href: '#',icon: 'api.svg'},
	// {name: 'Firebase',href: '#',icon: 'firebase.svg'},
];
const links = [
	{
		name: 'SocialStore',
		href: 'https://www.socialstore.com.ar/',
		icon: 'https://svgur.com/i/UkC.svg'
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/franciscoelfers/',
		icon: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg'
	},
	{
		name: 'Github',
		href: 'https://github.com/FranElfers',
		icon: 'https://svgur.com/i/UkG.svg'
	}
]

export default function Menu() {
	const [ stars, setStars ] = useState([]);

	useEffect(() => {
		const amount = 15;
		const width = document.getElementsByClassName('cap')[0].getBoundingClientRect().width;
		// deberia agarrar el actual width del cap
		const tempArray = [];

		for (let i = 0; i < amount; i++) {
			tempArray.push({
				left: Math.random() * width,
				top: Math.random() * width,
				fontSize: Math.random() * 10 + 5
			})
		}
		
		setStars(tempArray);
	}, [])
	// acordarse del segundo parametro del useEffect, porque el setStars actualiza el componente
	// tengo que aleatorizar las estrellas de cada cap y ahora mismo no me da la cabeza

	return <div className="App-center">
		<div className="cap-container width1000">
			{caps.map(({name,to,icon},i) => 
				<Link to={to} className='cap' key={i}>
					<div className="cap">
						<figure>
							<div className='canvas'>
								{stars.map(style=><div className="star" style={style}>•</div>)}
							</div>
							<img src={icon} />
							<figcaption>{name}</figcaption>
						</figure>
					</div>
				</Link>
			)}
			{links.map(({name,href,icon}) => 
				<a href={href} target="_blank">
					<div className="cap">
						<figure>
							<div className='canvas'>
								{stars.map(style=><div className="star" style={style}>•</div>)}
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