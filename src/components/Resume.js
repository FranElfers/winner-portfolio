import Back from './Back'
import React, { useRef, useEffect } from 'react';
import './styles/Resume.css'

// const imagesUrl = [
// 	"https://svgshare.com/i/XAv.svg",
// 	"https://svgshare.com/i/XBU.svg",
// 	"https://svgshare.com/i/Wf9.svg",
// 	"https://svgshare.com/i/XBZ.svg"
// ]

const Interactive = () => {
	const [ selected, setSelected ] = React.useState(0)
	const cssRoot = document.documentElement.style
	const info = useRef()
	const logo = x => `${process.env.PUBLIC_URL}/logos/${x}.svg`
	
	const data = [
		{element: useRef(), img: logo('iosmail'), text: 'fransozzan@gmail.com', color: '#64B2FF'},
		{element: useRef(), img: logo('iosmaps'), text: 'Buenos Aires, Argentina', color: '#ea4335'},
		{element: useRef(), img: logo('iosphone'), text: '+5491131988960', color: '#00d81b'},
		{element: useRef(), img: logo('ioslinkedin'), text: '<a href="https://www.linkedin.com/in/franciscoelfers" target="_blank">linkedin / franciscoelfers ↗</a>', color: '#0b86ca'}
	]
	
	const move = () => {
		const x = data[selected]
		cssRoot.setProperty('--tip-top',info.current.offsetTop - 10 + 'px')
		cssRoot.setProperty('--tip-left',x.element.current.offsetLeft + 15 + 'px')
		info.current.style.background = x.color
		info.current.innerHTML = x.text
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
			{data.map(({ img, element }, i) => <img 
				key={img} 
				src={img} 
				ref={element} 
				onClick={() => setSelected(i)} 
				/> )}
		</div>
			
		<div className="info" ref={info}>
			fransozzan@gmail.com
		</div>
	</div>
}


export default function Resume() {
	const [ english, setEnglish ] = React.useState(true)
	const ball1 = useRef()
	const ball2 = useRef()
	
	const dropdown = e => e.target.classList.toggle('active')
	
	const scrollOrbs = () => {
		const v1 = `translateY(${-window.scrollY * .2 + 100}px)`
		const v2 = `translateY(${-window.scrollY * .2 + 700}px)`
		
		ball1.current.style.transform = v1
		ball1.current.style.webkitTransform = v1
		ball1.current.style.mozTransform = v1

		ball2.current.style.transform = v2
		ball2.current.style.webkitTransform = v2
		ball2.current.style.mozTransform = v2
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
				<button onClick={()=>setEnglish(p=>!p)}>{english ? 'Cambiar a español' : 'Change to English'}</button>
				<div>
					<a className="PDF" href='/FranciscoElfers-en.pdf' target="_blank">PDF (en)</a>&nbsp;
					<a className="PDF" href='/FranciscoElfers-es.pdf' target="_blank">PDF (es)</a>
				</div>
			</div>


			<Interactive />


			<hr />

			{!english ? <>

			<h2>Resumen</h2>
			<p>Front End Developer con 2 años de experiencia y 1 año en React, con conocimientos en NodeJs, Vue.js, Firebase, Figma, Vanilla CSS y ES6. Calificación 10 en el curso "ReactJs" de CoderHouse y actualmente tutor del mismo. Buscando convertirme en MERN fullstack developer. Apasionado por la optimización.</p>


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
			<p>E-Commerce con VueJs y vanilla CSS (4 meses)</p>
			<h3>Tutor en Coderhouse.com</h3>
			<p>En el curso de ReactJs (3 meses)</p>
			<h3>Desarrollo web con Python</h3>
			<p>Django, Bootstrap, DataTables, adminLTE, jQuery (200 hs)</p>
			<h3>Profesor particular de python</h3>
			
			
			<hr />


			<h2>Habilidades</h2>
			<h3>Vanilla</h3>
			<p>JavaScript ES6, CSS3, Git</p>
			<h3>Front-end</h3>
			<p>React, Firebase, Nextjs, Figma</p>
			<h3>Back-end</h3>
			<p>Nodejs, Express, MongoDB</p>			
			<h3>Nivel avanzado en lectura, escritura y escucha en inglés.</h3>
			<h3>Conversación informal en inglés</h3>
			<h3>Entorno de trabajo completo en GNU/Linux</h3>


			<hr />


			<h2>Metas</h2>
			<h3>"MERN" Full Stack Developer</h3>
			<h3>Docker</h3>
			<h3>TypeScript, Webpack, React Native</h3>
			<h3>GraphQL, MongoDB, Redis</h3>


			<hr />


			<h2>Servicio Técnico</h2>
			<h3>Computadoras de escritorio</h3>
			<p>Compra, armado e instalación</p>
			<p>Mantenimiento de software y hardware</p>
			<p>Reparación de software</p>
			<h3>Experiencia en Linux, paquetes y derivados</h3>

			</> : <>

			<h2>Briefing</h2>
			<p>Front End Developer with 2 years of experience, 1 year with React, +3 with Javascript and CSS, and knowledge in Nodejs, Vue.js, Firebase, Figma & Docker. Perfect score on the "ReactJs" course of CoderHouse and currently working as tutor of it. Looking forward to becoming a MERN full-stack developer. Passionate about optimization and automatization.</p>


			<hr />

			<h2>Education</h2>
			<h3>ReactJs</h3>
			<p>ReactJs complete course on Coderhouse.com</p>
			<p>February 2021 - May 2021 | <a target="_blank" href="https://www.coderhouse.com/certificados/60987ca796ee55000f382bd9">Certificate</a></p>
			<div className="dropdown" onClick={dropdown}>
				<svg viewBox="0 0 448 512"><path fill="url(#linear)" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path>
				</svg>More info
				<ul>
					<li>Components, lifecycles, props, Synthetic events</li>
					<li>Rest APIs, Promises</li>
					<li>Routing</li>
					<li>Firebase, Firestore</li>
					<li>Git, sourcetree, markdown</li>
				</ul>
			</div>

			<h3>Technical degree in personal and professional informatics</h3>
			<p>Florentino Ameghino technical high school</p>
			<p>138 3556 Berazategui, Buenos Aires</p>
			<p>2005 - 2019</p>


			<hr />


			<h2>Experience</h2>
			<h3>socialstore.com.ar co-founder</h3>
			<p>E-Commerce made with VueJs & vanilla CSS (4 months)</p>
			<h3>Coderhouse.com tutor</h3>
			<p>On ReactJs course (3 months)</p>
			<h3>Python Web Development</h3>
			<p>Django, Bootstrap, DataTables, adminLTE, jQuery (200 hs)</p>
			<h3>Python Tutor</h3>
			
			
			<hr />


			<h2>Skills</h2>
			<h3>Vanilla</h3>
			<p>JavaScript ES6, CSS3, Git</p>
			<h3>Front-end</h3>
			<p>React, Firebase, Nextjs, Figma</p>
			<h3>Back-end</h3>
			<p>Nodejs, Express, MongoDB</p>			
			<h3>Advanced english writing, reading & listening</h3>
			<h3>Informal English conversation</h3>
			<h3>GNU/Linux complete work environment.</h3>


			<hr />


			<h2>Goals</h2>
			<h3>"MERN" Full Stack Developer</h3>
			<h3>Docker</h3>
			<h3>TypeScript, Webpack, React Native</h3>
			<h3>GraphQL, MongoDB, Redis</h3>


			<hr />


			<h2>Technical service</h2>
			<h3>Desktop PCs</h3>
			<p>Buying, assembling, and installation</p>
			<p>Software and hardware maintenance</p>
			<p>Software repairment</p>

			</>}

		</div>
	</div>
}
