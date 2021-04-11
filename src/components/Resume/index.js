import MovingIconsBackground from '../MovingIconsBackground/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAt, faMapMarkedAlt, faMobileAlt, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import Back from '../Back'
import './Resume.css'

const faGraduationCapPro = <svg className="icon svg-inline--fa fa-graduation-cap fa-w-20 fa-7x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
	<path fill="currentColor" d="M612.16 153.99l-265-85.68c-17.81-5.75-36.5-5.75-54.31 0l-265 85.68C10.94 159.46 0 174.38 0 192s10.94 32.54 27.84 38.01l29.71 9.6c-3.3 6.18-5.74 12.83-7.33 19.8C39.53 264.59 32 275.32 32 288c0 12.73 7.57 23.52 18.33 28.67L32.28 428.53C30.67 438.52 36.19 448 43.62 448h40.75c7.43 0 12.96-9.48 11.34-19.47L77.67 316.67C88.43 311.52 96 300.73 96 288c0-10.6-5.49-19.54-13.43-25.37 1.49-4.66 3.8-8.86 6.57-12.81l53.47 17.29L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.61-116.89L612.16 230c16.9-5.46 27.84-20.38 27.84-38s-10.94-32.54-27.84-38.01zM479.48 381.86C468.72 393.19 414.04 416 320 416c-94.04 0-148.72-22.81-159.48-34.14l13.09-104.73 119.24 38.55c2.6.84 25.72 9.23 54.31 0l119.24-38.55 13.08 104.73zm122.8-182.28l-265 85.68c-11.31 3.66-23.25 3.66-34.56 0l-175.67-56.8 195.89-36.74c8.69-1.62 14.41-9.98 12.78-18.67-1.62-8.7-10.16-14.39-18.66-12.77l-203.78 38.2c-12.4 2.32-23.51 7.65-33.08 14.83l-42.49-13.74c-7.85-2.55-7.46-12.74 0-15.15l265-85.68c15.1-4.88 27.84-2.17 34.56 0l265 85.68c7.39 2.39 7.91 12.6.01 15.16z"></path>
</svg>

const faBriefcasePro = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon svg-inline--fa fa-briefcase fa-w-16 fa-7x"><path fill="currentColor" d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z"></path></svg>

const faPuzzlePiecePro = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="puzzle-piece" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icon svg-inline--fa fa-puzzle-piece fa-w-18 fa-7x"><path fill="currentColor" d="M506.584 256c-52.307 0-72.012 46.513-87.263 27.506-20.125-25.082-2.028-107.233 3.475-131.942-34.229 6.371-137.243 24.274-163.836 2.178-16.619-13.81 31.313-43.496 31.313-86.443C290.272 26.025 256.447 0 214.842 0c-43.559 0-84.792 25.609-84.792 68.824 0 53.02 45.898 71.605 24.351 88.606C125.985 179.846 35.346 160.524 0 152.041v345.313c33.315 8.012 70.681 14.649 106.163 14.646 42.28 0 85.837-11.839 85.837-54.125 0-29.344-32-40.832-32-73.875 0-24.437 22.534-32 46.978-32C245.675 352 256 372.114 256 384c0 28.783-34.272 36.348-34.272 76.58 0 13.748 5.013 25.445 14.498 33.828 35.153 31.069 106.717 6.319 187.085 6.285-.958-3.426-26.807-86.724-7.702-111.907 16.715-22.023 48.578 29.106 92.52 29.106C550.227 417.893 576 377.616 576 336c0-42.835-26.227-80-69.416-80zm1.544 129.893c-30.002 0-41.364-33.893-81.513-33.893-53.566 0-54.841 64.979-44.272 117.816-36.396 3.424-107.025 16.434-124.926.614C237.293 452.645 288 428.279 288 384c0-37.683-33.317-64-81.022-64-74.981 0-102.885 59.829-56.167 122.037 4.726 6.293 9.189 12.237 9.189 15.838 0 33.69-94.005 20.629-128 13.925V191.971c63.255 11.657 160 18.136 160-46.505 0-28.567-29.95-42.982-29.95-76.642C162.05 44.146 190.265 32 214.842 32c20.035 0 43.43 9.244 43.43 35.298 0 29.426-34.272 40.752-34.272 80.61 0 57.828 100.845 50.931 158.22 43.093C374.142 245.294 373.959 320 429.086 320c29.143 0 43.674-32 77.498-32C531.543 288 544 311.301 544 336c0 34.413-20.977 49.893-35.872 49.893z"></path></svg>

const faTools = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="tools" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon"><path fill="currentColor" d="M502.6 389.5L378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4 0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480L287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9 0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8 0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9 0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7 0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2 0-17.1-17.1-17.1-45.1 0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8 0 107.5C36.5 504.1 55.6 512 75.9 512c20.3 0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z"></path></svg>

const faChartLine = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon"><path fill="currentColor" d="M504 416H32V72c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v360c0 8.84 7.16 16 16 16h488c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM98.34 263.03c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0l72.69-72.01 84.69 84.69c6.25 6.25 16.38 6.25 22.63 0l93.53-93.53 44.04 44.04c4.95 4.95 11.03 7.16 17 7.16 12.48 0 24.46-9.7 24.46-24.34V112.19c0-8.94-7.25-16.19-16.19-16.19H344.34c-21.64 0-32.47 26.16-17.17 41.46l44.71 44.71-82.22 82.22-84.63-84.63c-6.23-6.23-16.32-6.25-22.57-.05l-84.12 83.32zM362.96 128H448v85.04L362.96 128z"></path></svg>

const faPaintBrushPro = <FontAwesomeIcon icon={faPaintBrush} className="icon" />

function Snippet({title, icon, children}) {
	return <div className="snippet">
	<div className="left">
		<div className="bar"></div>
		<div className="left-content">
			<svg>
				<rect/>
			</svg>
			{icon}
			{/* <FontAwesomeIcon icon={icon} /> */}
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
		<Back to="/" />
		<MovingIconsBackground />
		<div id="Resume">
			<div className="header">
				<h1>Francisco <b>Elfers</b></h1>
				<h2>Fron-end Developer</h2>				
				<pre><FontAwesomeIcon icon={faMobileAlt} /> +5491131988960</pre>
				<pre><FontAwesomeIcon icon={faAt} /> franelfers@hotmail.com</pre>
				<pre><FontAwesomeIcon icon={faLinkedinIn} /> <a target="_blank" href="https://www.linkedin.com/in/franciscoelfers">linkedin / franciscoelfers</a></pre>
				<pre><FontAwesomeIcon icon={faMapMarkedAlt} /> Buenos Aires, Argentina</pre>
			</div>

			<p>React trainee con 1 año de experiencia de Frontend, usando React, Vue.js, Figma, Vanilla CSS y JS. Actualmente cursando "ReactJs" en CoderHouse. Buscando convertirme en MERN fullstack developer.</p>
			<div className="body">
				<Snippet title="Educación" icon={faGraduationCapPro}>
					<article>
						<p>Escuela Secundaria Técnica Florentino Ameghino <br/>
						<small>Marzo 2005 - Diciembre 2019, 138 3556 Berazategui, Buenos Aires</small></p>
						<ul>
							<li>Estudios terminados: Tecnicatura en informática profesional y personal.</li>
							<li>185 horas en prácticas profesionalizantes (Django Dev)</li>
						</ul>
					</article>

					<article>
						<p>Actualmente cursando ReactJs en Coderhouse <br/>
						<small>25 febrero 2021 - 15 abril 2021, <a target="_blank" href="https://www.coderhouse.com/">coderhouse.com</a></small></p>
						<ul>
							<li>Components, lifecycles, props, Synthetic events</li>
							<li>Rest APIs, Promises</li>
							<li>Routing</li>
							<li>Firebase, Firestore</li>
							<li>Git, sourcetree, markdown</li>
						</ul>
					</article>
					
				</Snippet>
				<Snippet title="Experiencia en Front-end" icon={faBriefcasePro}>
					<p>Co-fundador de <a target="_blank" href="https://www.socialstore.com.ar/">socialstore.com.ar</a><br/>
					<small>Storepage con VueJs y Vanilla CSS; Landingpage con </small></p>
					<p>185 horas en desarrollo web con python. <br/>
					<small>Django, Bootstrap, DataTables, adminLTE, jQuery</small></p>
					<p>Javascript, Python, HTML y CSS.</p>
					<p>Profesor particular de python <small>10 horas</small></p>
					<article>
						<p>Frameworks y librerías</p>
						<ul>
							<li>P5.js: Matemática en visuales interactivos.</li>
							<li>Django: Python para base de datos y sitios web.</li>
							<li>jQuery: Frontend dev.</li>
						</ul>
					</article>
				</Snippet>
				<Snippet title="Diseño Gráfico" icon={faPaintBrushPro}>
					<article>
						<p>Adobe</p>
						<ul>
							<li>Figma</li>
							<li>Premiere Pro </li>
							<li>Photoshop</li>
						</ul>
					</article>
				</Snippet>
				<Snippet title="Servicio Técnico" icon={faTools}>
					<article>
						<p>Computadoras de escritorio.</p>
						<ul>
							<li>Compra, armado e instalación</li>
							<li>Mantenimiento de software y hardware</li>
							<li>Reparación de software</li>
						</ul>

					</article>
					<p>Experiencia en Linux, paquetes y derivados.</p>
				</Snippet>
				<Snippet title="Habilidades" icon={faPuzzlePiecePro}>
					<p>Nivel avanzado en lectura, escritura y escucha en inglés.</p>
					<p>Conversación informal en inglés.</p>
					<p>Mentalidad adaptativa de programador.</p>
				</Snippet>
				<Snippet title="Metas" icon={faChartLine}>
					<p>"MERN" Full Stack developer</p>
					<p>Typescript</p>
					<p>Docker</p>
					<p>NextJs</p>
					<p>GraphQL, MongoDB, Redis and Postgres</p>
				</Snippet>
			</div>
		</div>
	</>
}