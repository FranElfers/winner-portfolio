import React from 'react';
import AboutSection from './AboutSection';
import './styles/Menu.css';
import ConfigContext from '../context/config'
import MenuCard from './MenuCard';

const SvgProgress = ({ title, first, last, shine }) => {
	const style = {
		filter: `drop-shadow(0px 0px 3px #${shine})`,
		background: `-webkit-linear-gradient(270deg, #${first} 0%, #${last} 100%)`,
		WebkitBackgroundClip: "text"
	}

	return <>
		<svg width="140" height="140">
			<circle r="50" stroke={`url(#${first+last})`} style={style} />
			<defs>
				<linearGradient id={first+last} >
					<stop offset="0%" stopColor={'#' + first} />
					<stop offset="100%" stopColor={'#' + last} />
				</linearGradient>
			</defs>
		</svg>
	</>
}

const ShinyTitle = ({ children, shine="FFFFFF", first="FFFFFF", last="FFFFFF", button = true }) => {
	const style = {
		filter: `drop-shadow(0px 0px 3px #${shine})`,
		background: `-webkit-linear-gradient(270deg, #${first} 0%, #${last} 100%)`,
		WebkitBackgroundClip: "text"
	}

	return <>
		<h1 style={style}>{children}</h1>
		{ button && <button>View more</button>}
	</>
}

export default function Menu() {
	const { performance, togglePerformance } = React.useContext(ConfigContext)


	return <>
		<h1>Francisco Elfers</h1>
		<div className="cap-container width1000">
			<MenuCard link="/gifs" >
				<img src="https://cdn.worldvectorlogo.com/logos/giphy-logo-1.svg" alt="giphy logo" />
				<ShinyTitle>Giphy API</ShinyTitle>
			</MenuCard>

			<MenuCard link="/p5js" >
				<img src="https://blindedcyclops.neocities.org/p5js-icons/p5-sq-reverse-filled.png" alt="p5js logo" />
				<ShinyTitle>P5js</ShinyTitle>
			</MenuCard>

			<MenuCard link="/resume" >
				<img src="https://www.svgrepo.com/show/301120/resume.svg" alt="resume logo" />
				<ShinyTitle>Resume</ShinyTitle>
			</MenuCard>

			<MenuCard link="/canban">
				<img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase logo" />
				<ShinyTitle>Canban with firebase</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://www.socialstore.com.ar/" target="_blank" >
				<img src="https://svgur.com/i/UkC.svg" />
				<ShinyTitle>SocialStore</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://www.linkedin.com/in/franciscoelfers/" target="_blank" >
				<img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" />
				<ShinyTitle>LinkedIn</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://github.com/FranElfers" target="_blank" >
				<img src="https://svgur.com/i/UkG.svg" />
				<ShinyTitle>Github</ShinyTitle>
			</MenuCard>

			<MenuCard progress={60} shine="74E7CB">
				<SvgProgress first="74A2E7" last="74E7CB" shine="74E7CB" title="CSS" />
				<ShinyTitle first="74A2E7" last="74E7CB" shine="74E7CB" button={false} >CSS</ShinyTitle>
			</MenuCard>

			<MenuCard progress={50} shine="E7AB74">
				<SvgProgress first="E6DB74" last="E7AB74" shine="E7AB74" title="JavaScript" />
				<ShinyTitle first="E6DB74" last="E7AB74" shine="E7AB74" button={false} >JavaScript</ShinyTitle>
			</MenuCard>

			<MenuCard progress={70} shine="E7AB74">
				<SvgProgress first="61DAFB" last="74B0E7" shine="74E7CB" title="React" />
				<ShinyTitle first="61DAFB" last="74B0E7" shine="74E7CB" button={false} >React</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://www.codewars.com/users/FranElfers" shine="E7AB74">
				<svg xmlns="http://www.w3.org/2000/svg" width="122" height="93" viewBox="0 0 165 93" fill="none">
					<g filter="url(#filter0_d)">
						<path d="M34.075 11L12.1833 46.7958L34.075 82H131.7L153 46.7958L131.108 11H34.075Z" stroke="url(#paint0_linear)" strokeWidth="10"/>
					</g>
					<g filter="url(#filter1_d)">
						<path d="M51.2331 44.7263L50.3831 45.7803C50.8591 45.5423 51.3691 45.361 51.9131 45.2363C52.4685 45.1003 53.0635 45.0323 53.6981 45.0323C54.6275 45.0323 55.5285 45.1853 56.4011 45.4913C57.2851 45.7973 58.0615 46.262 58.7301 46.8853C59.3988 47.4973 59.9371 48.2623 60.3451 49.1803C60.7531 50.0983 60.9571 51.1693 60.9571 52.3933C60.9571 53.538 60.7475 54.6147 60.3281 55.6233C59.9088 56.6207 59.3195 57.4933 58.5601 58.2413C57.8008 58.9893 56.8828 59.5787 55.8061 60.0093C54.7408 60.44 53.5621 60.6553 52.2701 60.6553C50.9555 60.6553 49.7768 60.4457 48.7341 60.0263C47.6915 59.607 46.8018 59.0233 46.0651 58.2753C45.3285 57.516 44.7618 56.6093 44.3651 55.5553C43.9798 54.49 43.7871 53.3113 43.7871 52.0193C43.7871 50.8633 44.0195 49.679 44.4841 48.4663C44.9601 47.2423 45.6911 45.973 46.6771 44.6583L52.5421 36.7873C52.7461 36.5153 53.0408 36.283 53.4261 36.0903C53.8228 35.8977 54.2761 35.8013 54.7861 35.8013H58.5261L51.2331 44.7263ZM52.1851 57.2213C52.8538 57.2213 53.4658 57.108 54.0211 56.8813C54.5878 56.6547 55.0695 56.3373 55.4661 55.9293C55.8741 55.5213 56.1915 55.0453 56.4181 54.5013C56.6448 53.946 56.7581 53.3453 56.7581 52.6993C56.7581 51.9967 56.6505 51.3677 56.4351 50.8123C56.2198 50.2457 55.9138 49.7697 55.5171 49.3843C55.1205 48.9877 54.6445 48.6873 54.0891 48.4833C53.5338 48.2793 52.9218 48.1773 52.2531 48.1773C51.5845 48.1773 50.9781 48.2907 50.4341 48.5173C49.8901 48.744 49.4255 49.0613 49.0401 49.4693C48.6548 49.866 48.3545 50.342 48.1391 50.8973C47.9238 51.4413 47.8161 52.0307 47.8161 52.6653C47.8161 53.3453 47.9068 53.9687 48.0881 54.5353C48.2808 55.0907 48.5585 55.5667 48.9211 55.9633C49.2951 56.36 49.7541 56.6717 50.2981 56.8983C50.8421 57.1137 51.4711 57.2213 52.1851 57.2213ZM74.9224 35.1213V49.5883H75.7044C75.9877 49.5883 76.2087 49.5543 76.3674 49.4863C76.5374 49.407 76.7074 49.254 76.8774 49.0273L81.2124 43.6723C81.3937 43.4343 81.592 43.253 81.8074 43.1283C82.034 43.0037 82.323 42.9413 82.6744 42.9413H86.5164L81.0934 49.4183C80.708 49.9283 80.2887 50.3193 79.8354 50.5913C80.0734 50.7613 80.283 50.9597 80.4644 51.1863C80.657 51.413 80.8384 51.6567 81.0084 51.9173L86.8224 60.3833H83.0314C82.7027 60.3833 82.4194 60.3323 82.1814 60.2303C81.9434 60.117 81.745 59.9187 81.5864 59.6353L77.1324 53.0223C76.9737 52.7617 76.8094 52.5917 76.6394 52.5123C76.4694 52.433 76.2144 52.3933 75.8744 52.3933H74.9224V60.3833H70.7234V35.1213H74.9224ZM103.879 42.9413L94.3765 65.1773C94.2518 65.472 94.0875 65.693 93.8835 65.8403C93.6908 65.999 93.3905 66.0783 92.9825 66.0783H89.8545L93.1185 59.0743L86.0635 42.9413H89.7525C90.0811 42.9413 90.3361 43.0207 90.5175 43.1793C90.7101 43.338 90.8518 43.5193 90.9425 43.7233L94.6485 52.7673C94.7731 53.0733 94.8751 53.3793 94.9545 53.6853C95.0451 53.9913 95.1301 54.303 95.2095 54.6203C95.3115 54.303 95.4135 53.9913 95.5155 53.6853C95.6175 53.368 95.7308 53.0563 95.8555 52.7503L99.3575 43.7233C99.4481 43.4967 99.5955 43.3097 99.7995 43.1623C100.015 43.015 100.253 42.9413 100.513 42.9413H103.879ZM120.143 42.9413V60.3833H117.576C117.021 60.3833 116.67 60.1283 116.522 59.6183L116.233 58.2243C115.519 58.9497 114.732 59.539 113.87 59.9923C113.009 60.4343 111.995 60.6553 110.827 60.6553C109.875 60.6553 109.031 60.4967 108.294 60.1793C107.569 59.8507 106.957 59.3917 106.458 58.8023C105.96 58.213 105.58 57.516 105.319 56.7113C105.07 55.8953 104.945 55 104.945 54.0253V42.9413H109.144V54.0253C109.144 55.0907 109.388 55.918 109.875 56.5073C110.374 57.0853 111.116 57.3743 112.102 57.3743C112.828 57.3743 113.508 57.2157 114.142 56.8983C114.777 56.5697 115.378 56.122 115.944 55.5553V42.9413H120.143Z" fill="#ECB613"/>
					</g>
					<defs>
						<filter id="filter0_d" x="0.309021" y="0" width="164.543" height="93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
							<feOffset/>
							<feGaussianBlur stdDeviation="3"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.713726 0 0 0 0 0.0745098 0 0 0 1 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
						</filter>
						<filter id="filter1_d" x="37.7871" y="29.1213" width="88.356" height="42.957" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
							<feOffset/>
							<feGaussianBlur stdDeviation="3"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.713726 0 0 0 0 0.0745098 0 0 0 1 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
						</filter>
						<linearGradient id="paint0_linear" x1="82.5917" y1="11" x2="82.5917" y2="82" gradientUnits="userSpaceOnUse">
						<stop stopColor="#ECB613"/>
						<stop offset="1" stopColor="#C0971A"/>
						</linearGradient>
					</defs>
				</svg>
				<ShinyTitle first="E6DB74" last="E7AB74" shine="E7AB74" >Codewars</ShinyTitle>
			</MenuCard>

			<MenuCard link="https://codepen.io/franelfers" >
				<img src="https://cpwebassets.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg" alt="codepen logo" />
				<ShinyTitle>Codepen</ShinyTitle>
			</MenuCard>
					
		</div>

		<AboutSection>
			<h3>My portfolio</h3>
			<p>This is my portfolio made with React, including modules and APIs like Giphy API, P5js module, font-awesome icons.</p>
		</AboutSection>
		<AboutSection>
			<div className="option">
				<label htmlFor="performance">Better performance</label>
				<input className="switch" id="performance" type="checkbox" checked={performance} onChange={togglePerformance} />
			</div>
		</AboutSection>
	</>
}
