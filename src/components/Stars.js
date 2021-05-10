export default function Stars() {
	const { random } = Math
	
	return <div className="stars">
		{[...Array(15)].map((e,i) => <div key={i} className="star" style={{
			left: random() * 88 + 6 + '%',
			top: random() * 55 + 5 + '%',
			fontSize: random() * 4 + 15 + 'px'
		}}>.</div>)}
	</div>
}