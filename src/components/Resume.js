import Back from './Back'
import React, { useRef, useEffect } from 'react';
import './styles/Resume.css'


const imagesUrl = ["https://s3-alpha-sig.figma.com/img/feda/c742/1f2ad22228bc81ec6bc57cbb8e4eb9c7?Expires=1620604800&Signature=VpD01VBiidjpzMjKyM2nSVLNa6E~5evq4wcRdyux9FQ-HI7oUGJsvUrO9qQv6QdGm7PqEnBrFCtvmUtgBq8atxs0KpuWRmQD1GrsiOzVY4nNH2exwC3Cim~ZjPfzcOKTTxjHO8IqzR~UWstUvK5NmuiRtoDyIwwJ3I7ScpIGERXnywVM7pfrvKVTjpkv16IRed7mzvtV5AqCOtuGVou6akiz-7d-iV2kedNNyNepFVXBx00qV5OnhOOBxIt~rlUQSjUAHq3DEn6J4zW6ACUM0SfeoFVZmQctY~7k6KzkjAqvOI773buLc3LJbuklx4mdaeQ38IADy5hm47jWuIqZWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://s3-alpha-sig.figma.com/img/224a/dcb3/9518960f0cba6df5ceebfdf75bada0a9?Expires=1620604800&Signature=b097ZGC~u5yTyy1bKZuUk~I0IxLevPik-OBiOqN6w5TQO8ir5JkqpbAVl3k70ag9GDPNb5cvjGwyL~q7KRNA4leC0ydEQeY7Ud-4mdnphMXYM25eK93D2w0MCCVPGeTIY6UsP6u5I6P7tf2J~Eay1tvhMtw18f-CR2obE7DPcW4WL14hBVr70D6~OjrI~TFg8qv276LkYMWpxTO2OI8pjbhgiMa0zDSod5L-5GbKU7pRTjescVw75bZxzt0GciEclA37jIdYN4l~H9~vzT~XylJImofPXDhAICS2U7CAtG3D51fy~TGONGZSgGy3ItCkQTeQcsc3A4pr1PJorol~Ug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA","https://svgshare.com/i/Wf9.svg","https://s3-alpha-sig.figma.com/img/0921/aa25/63759f9b561769c04ecb034de1087ed4?Expires=1620604800&Signature=IG2k4~908IKTuATF1ijTU8aNDhLTfW0KCFXX-r~QkRz24~EOf6jr~Bv0tHTmQEZfq~oDRHGS0AK8TReKaFB1hquTSJanULRcjBWumZgvVdZ7rDJfFI9yZGxD2Xk6fN~5TlLj1NFErFtRt~1YS1Q7Tyb2aq5nBBVZEBl5mEePgYq2eo426sI-Slmmi4SIrcg6cnzKScxdQdEoGrgARr4qCGlcpUnOZmENdKlhyBZWn3gDfZuWS-osZR61V9grQszltm3jqoBG3WClDnZBX3l~iqtfJRHRxvTI8dUJxQg3Vswhw6mNhpt0YBvnYJXUvwxRDCsO5VK2-9YPVkf6Mb8yHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"]


const Interactive = () => {
	const [ selected, setSelected ] = React.useState(0)
	const cssRoot = document.documentElement.style
	const info = useRef()

	const data = [
		{element: useRef(), text: 'fransozzan@gmail.com', color: '#64B2FF'},
		{element: useRef(), text: 'Buenos Aires, Argentina', color: '#1ba260'},
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
			<p>React trainee con 1 año de experiencia de Frontend, usando React, Vue.js, Figma, Vanilla CSS y JS. Actualmente cursando "ReactJs" en CoderHouse. Buscando convertirme en MERN fullstack developer. Apasionado por la optimización.</p>


			<hr />

			<h2>Educacion</h2>
			<h3>ReactJs</h3>
			<p>Actualmente cursando ReactJs en Coderhouse.com</p>
			<p>Febrero 2021 - mayo 2021</p>
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