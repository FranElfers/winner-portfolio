import Back from './Back'
import React, { useRef, useEffect } from 'react';
import './styles/Resume.css'


const imagesUrl = [
	"https://svgshare.com/i/XAv.svg",
	"https://svgshare.com/i/XBU.svg",
	"https://svgshare.com/i/Wf9.svg",
	"https://svgshare.com/i/XBZ.svg"
]


const Interactive = () => {
	const [ selected, setSelected ] = React.useState(0)
	const cssRoot = document.documentElement.style
	const info = useRef()

	const data = [
		{element: useRef(), text: 'fransozzan@gmail.com', color: '#64B2FF'},
		{element: useRef(), text: 'Buenos Aires, Argentina', color: '#ea4335'},
		{element: useRef(), text: '+5491131988960', color: '#00d81b'},
		{element: useRef(), text: 'linkedin / franciscoelfers', color: '#0b86ca'}
	]

	const move = () => {
		const x = data[selected]
		cssRoot.setProperty('--tip-top',info.current.offsetTop - 10 + 'px')
		cssRoot.setProperty('--tip-left',x.element.current.offsetLeft + 15 + 'px')
		info.current.style.background = x.color
		info.current.innerText = x.text
	}

	useEffect(() => {
		window.onload = move
		window.onresize = move
		return () => {
			window.onload = null
			window.onresize = null
		}
	}, [])

	useEffect(move, [selected])

	return <div className="interactive">
		<div className="icons">
			{imagesUrl.map((url,i) => <img 
				key={url} 
				src={url} 
				ref={data[i].element} 
				onClick={() => setSelected(i)} 
			/> )}
		</div>
			
		<div className="info" ref={info} >
			fransozzan@gmail.com
		</div>
	</div>
}


export default function Resume() {
	const ball1 = useRef()
	const ball2 = useRef()

	const dropdown = e => e.target.classList.toggle('active')

	const scrollOrbs = () => {
		ball1.current.style.top = `${-window.scrollY*.2+100}px`
		ball2.current.style.top = `${-window.scrollY*.2+700}px`
	}

	useEffect(() => {
		scrollOrbs()
		window.onscroll = scrollOrbs
		return () => {
			window.onscroll = null
		}
	}, [])
	

	return <div id="Resume" className="dark">
		<Back to="/" />
		<div className="balls">
			<div className="ball1" ref={ball1}></div>
			<div className="ball2" ref={ball2}></div>
		</div>
		<div className="content">
			<svg height="0">
				<defs>
					<linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%" >
						<stop offset="0%" stopColor="#00D1FF" />
						<stop offset="100%" stopColor="#00FF94" />
					</linearGradient>
				</defs>
			</svg>
			<div className="title">
				<h1>Francisco Elfers</h1>
				<h4>Front-end Developer</h4>
			</div>
			<Interactive />


			<hr />


			<h2>Resumen</h2>
			<p>React trainee con 1 año de experiencia de Frontend, usando React, Vue.js, Figma, Vanilla CSS y JS. Actualmente cumpliendo el rol de tutor en el curso de "ReactJs" en CoderHouse. Buscando convertirme en MERN fullstack developer. Apasionado por la optimización.</p>


			<hr />

			<h2>Educacion</h2>
			<h3>ReactJs</h3>
			<p>Curso completo de ReactJs en Coderhouse.com</p>
			<p>Febrero 2021 - mayo 2021 | <a target="_blank" href="https://www.coderhouse.com/certificados/60987ca796ee55000f382bd9">Certificado</a></p>
			<div className="dropdown" onClick={dropdown}>
				<svg viewBox="0 0 448 512"><path fill="url(#linear)" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path>
				</svg>Más información
				<ul>
					<li>Components, lifecycles, props, Synthetic events</li>
					<li>Rest APIs, Promises</li>
					<li>Routing</li>
					<li>Firebase, Firestore</li>
					<li>Git, sourcetree, markdown</li>
				</ul>
			</div>

			<h3>Tecnicatura en informática personal y profesional</h3>
			<p>Escuela Secundaria Técnica Florentino Ameghino</p>
			<p>138 3556 Berazategui, Buenos Aires</p>
			<p>2005 -  2019</p>


			<hr />


			<h2>Experiencia</h2>
			<h3>Co-fundador de socialstore.com.ar</h3>
			<p>E-Commerce con VueJs y vanilla CSS; </p>
			<h3>Tutor en Coderhouse.com</h3>
			<p>En el curso de ReactJs</p>
			<h3>185 horas en desarrollo web con Python</h3>
			<p>Django, Bootstrap, DataTables, adminLTE, jQuery</p>
			<h3>Profesor particular de python</h3>
			
			
			<hr />


			<h2>Habilidades</h2>
			<h3>Nivel avanzado en lectura, escritura y escucha en inglés.</h3>
			<h3>Conversación informal en inglés</h3>


			<hr />


			<h2>Metas</h2>
			<h3>"MERN" Full Stack Developer</h3>
			<h3>TypeScript</h3>
			<h3>Docker</h3>
			<h3>NextJs</h3>
			<h3>GraphQL, MongoDB, Redis & Postgres</h3>


			<hr />


			<h2>Servicio Técnico</h2>
			<h3>Computadoras de escritorio</h3>
			<p>Compra, armado e instalación</p>
			<p>Mantenimiento de software y hardware</p>
			<p>Reparación de software</p>
			<h3>Experiencia en Linux, paquetes y derivados</h3>

		</div>
	</div>
}
