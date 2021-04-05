export default function Stars() {
	const list = [...Array(15)].map(()=>{});
	const random = () => Math.random() * 85 + 5;
	
	// Ese className deberia ser 'canvas'
	// No es 'canvas' porque a canvas no le estoy pasando ningun estilo :)
	// El width facilmente reemplazable por % :)))))
	return <div className="stars">
		{list.map((e,i) => <div key={i} className="star" style={{
			left: random() + '%',
			top: random() + '%',
			fontSize: Math.random() * 10 + 2
		}}>•</div>)}
	</div>
}