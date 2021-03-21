export default function Stars({width}) {
	const list = Array.apply(null, Array(15)).map(()=>{});
	
	return <>
		{list.map((e,i) => <div key={i} className="star" style={{
			left: Math.random() * width,
			top: Math.random() * width,
			fontSize: Math.random() * 10 + 2
		}}>•</div>)}
	</>
}