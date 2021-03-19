export default function AboutSection({title,body}) {
	return <div id="about" className="width1000">
		<div>
			<h1>{title}</h1>
			{body.map(({subtitle,content}) => <>
				<h3 key={subtitle}>{subtitle}</h3>
				<p>{content}</p>
			</>)}
		</div>
	</div>
}