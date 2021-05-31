import React from 'react'
import { Link } from 'react-router-dom'
import VanillaTilt from 'vanilla-tilt'
import Stars from './Stars'
import ConfigContext from '../context/config'

export default function MenuCard({ link, progress, children }) {
	const { performance } = React.useContext(ConfigContext)
	const cardRef = React.useRef()

	const setProgress = (self, percent) => {
		const radius = self.r.baseVal.value
		const circumference = radius * 2 * Math.PI
	
		self.style.strokeDasharray = `${circumference} ${circumference}`
		self.style.strokeDashoffset = `${circumference}`
		self.style.strokeDashoffset = circumference - percent / 100 * circumference
	}

	React.useEffect(() => {
		const options = { max: 10, speed: 400 }

		VanillaTilt.init(cardRef.current, options)

		performance && cardRef.current.vanillaTilt.destroy()

		// si progress es 0, no llama a la funcion
		progress && setProgress(cardRef.current.children[1]?.children[0],progress)

	}, [performance])


	if (link?.startsWith('https')) return <a href={link} target="_blank" className="cap" ref={cardRef}>
		<Stars />
		{children}
	</a>
	

	if (link) return <Link to={link} className="cap" ref={cardRef}>
		<Stars />
		{children}
	</Link>


	return <div className="cap" ref={cardRef}>
		<Stars />
		{children}
	</div>
}