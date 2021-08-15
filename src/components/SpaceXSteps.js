import React from 'react';
import './styles/SpaceXSteps.css'

const randomColor = () => {
	const random = () => Math.floor(Math.random() * 10)
	return `#${random()}${random()}${random()}9`
}

export default () => {
	let article = React.useRef(0).current
	
	const scrollToArticle = n => {
		const element = document.querySelectorAll('article')
		if (n >= 0 && n < element.length) {
			console.log(n)
			window.scrollTo(0,(n+1)*element[n].scrollHeight)
			// element[n].scrollIntoView({behavior: 'smooth'})
			console.log({element:element[n]});
			article = n
		}
	}

	React.useEffect(() => {
		// document.addEventListener('mousewheel', e => { 
		// 	scrollToArticle(e.deltaY > 0 ? article+1 : article-1) 
		// })
	}, [])

	return <div id="SpaceXSteps">
		<article style={{background: randomColor(), alignItems: 'center'}}>
			<h1>SpaceX's 5-step design & manufacturing process</h1>
			<ul>
				<li>Make the requirement less dumb</li>
				<li>Try to delete part of the process</li>
				<li>Simplify or optimize</li>
				<li>Accelerate cycle time</li>
				<li>Automate</li>
			</ul>
		</article>
		<article style={{background: randomColor()}}>
			<h1>Make the requirement less dumb</h1>
			<p>"The requirements are definitely dumb; it does not matter who gave them to you. It's particularly dangerous when they come from an intelligent person, as you may not question them enough.</p>
			<p>Everyone's wrong. No matter who you are, everyone is wrong some of the time. All designs are wrong, it's just a matter of how wrong."</p>
		</article>
		<article style={{background: randomColor()}}>
			<h1>Try to delete part of the process</h1>
			<p>"If parts are not being added back into the design at least 10% of the time, [it means that] not enough parts are beign deleted. The bias tends to be very strongly toward 'let's add this part or process step in case we need it'.</p>
			<p>But you can basically make an 'in case' argument for so many things. And for a rocket that is truing to be the first fully reusable rocket you really need to run tight margins.</p>
			<p>Because if you don't run tight margins, you're gonna get nothing to orbit"</p>
		</article>
		<article style={{background: randomColor()}}>
			<h1>Simplify or optimize</h1>
			<p>"Simplify and optimize the design. The reason this is the third step and not the first step is because the most common error of a smart engineer is to optimize something that should simply not exist.</p>
			<p>Why would people do that? Well, everyone's been trained in high school and college that you gotta answer the question. If you tell a professor 'your question is dumb', you will get a bad grade.</p>
			<p>You have to ask the question whether something should exist. So everyone's basically got, without knowing it, like a mental straight jacket on. They'll work on optimizing the thing that should simply not exist."</p>
		</article>
		<article style={{background: randomColor()}}>
			<h1>Accelerate cycle time</h1>
			<p>"You're mobing too slowly, go faster! But don't go faster until you've worked on the other three things first.</p>
			<p>Make sure you have the first three things done properly because if you're digging your grave, you don't want to dig faster. You want to stop digging your grave."</p>
		</article>
		<article style={{background: randomColor()}}>
			<h1>Automate</h1>
			<p>"Then the final step is automate it. Now, I have personally made the mistake of going backwards on all five steps multiple time.</p>
			<p>On the [Tesla] Model 3, I automated, accelerated, simplified and then deleted."</p>
		</article>
	</div>
}