import MovingIconsBackground from '../MovingIconsBackground/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAt, faMapMarkedAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import './Resume.css'

function Snippet({title, children}) {
	return <div className="snippet">
	<div className="left">
		<div className="bar"></div>
		<div className="left-content">
			<svg>
				<rect/>
			</svg>
			<div>{title}</div>
		</div>
	</div>
	<div className="right">
		{children}
	</div>
</div>
}

export default function Resume() {
	return <>
		<MovingIconsBackground />
		<div id="Resume">
			<div className="header">
				<h1>Francisco <b>Elfers</b></h1>
				<h2>Fron-end Developer</h2>				
				<pre><FontAwesomeIcon icon={faMobileAlt} /> +5491131988960</pre>
				<pre><FontAwesomeIcon icon={faAt} /> franelfers@gmail.com</pre>
				<pre><FontAwesomeIcon icon={faLinkedinIn} /> <a target="_blank" href="https://www.linkedin.com/in/franciscoelfers">linkedin.com/in/franciscoelfers</a></pre>
				<pre><FontAwesomeIcon icon={faMapMarkedAlt} /> Buenos Aires, Argentina</pre>
			</div>

			<p style={{textAlign: 'justify'}}>IT professional with over 10 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strenght is business awareness, which enables me to permanently streamline infrastructure and applications. Seeking to leverage my skills at SanCorp Inc.</p>
			<div className="body">
				<Snippet title="Educación" >
					<p>Escuela Secundaria Técnica Florentino Ameghino <br/>
					<small>Marzo 2005 - Diciembre 2019, 138 3556 Berazategui, Buenos Aires</small>
						<ul>
							<li>Estudios terminados: Tecnicatura en informática profesional y personal.</li>
							<li>185 horas en prácticas profesionalizantes (Django Dev)</li>
						</ul>
					</p>

						<p>Actualmente cursando ReactJs en Coderhouse <br/>
							<small>25 febrero 2021 - 15 abril 2021, <a href="https://www.coderhouse.com/">coderhouse.com</a></small>
							<ul>
								<li>Components, lifecycles, props, Synthetic events</li>
								<li>Rest APIs, Promises</li>
								<li>Routing</li>
								<li>Firebase, Firestore</li>
								<li>Git, sourcetree, markdown</li>
							</ul>
						</p>
					
				</Snippet>
				<Snippet title="Diseño Gráfico" >
					<p>Adobe Premiere Pro (3 años)</p>
					<p>Adobe After Effects (3 años)</p>
					<p>Adobe Photoshop (6 años)</p>
					<p>Adobe Lightroom</p>
					<p>Adobe Illustrator</p>
				</Snippet>
				<Snippet title="Desarrollo Web Front-end" >
					<p>200 horas en desarrollo web con python.</p>
					<p>Buen nivel en diseño web; conocimientos en lenguajes (Javascript, Python, HTML y CSS).</p>
					<p>10 horas como profesor particular de python.</p>
					<p>Conocimientos en frameworks:</p>
					<p>P5.js: Matemática en visuales interactivos.</p>
					<p>Django: Python para base de datos y sitios web.</p>
					<p>jQuery: Frontend dev.</p>
				</Snippet>
				<Snippet title="Servicio Técnico" >
					<p>Conocimientos en mantenimiento de equipos informáticos y reparación de equipos.</p>
					<p>Conocimientos en compra, armado e instalación de computadoras de escritorio.</p>
					<p>Experiencia en Linux, paquetes y derivados.</p>
				</Snippet>
				<Snippet title="Habilidades" >
					<p>Nivel avanzado en lectura, escritura y escucha en inglés.</p>
					<p>Nivel básico en conversación en inglés.</p>
					<p>Mentalidad adaptativa de programador.</p>
				</Snippet>
				<Snippet title="Metas">
					<p>"MERN" Full Stack developer</p>
				</Snippet>
			</div>
		</div>
	</>
}