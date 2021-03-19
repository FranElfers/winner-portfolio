export default function Stars({width}) {
	const list = Array.apply(null, Array(15)).map(()=>{});
	
	return <>
		{list.map(() => <div className="star" style={{
			left: Math.random() * width,
			top: Math.random() * width,
			fontSize: Math.random() * 10 + 5
		}}>•</div>)}
	</>
}