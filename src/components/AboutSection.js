import './styles/AboutSection.css'

export default function AboutSection({children}) {
	// h1 for title, h3 for subtitle, p for content
	return <div id="about" className="width1000">
		<div>{children}</div>
	</div>
}