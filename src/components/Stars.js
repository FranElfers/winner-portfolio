export default function Stars() {
	const list = Array(...Array(15)).map(()=>{});
	const random = () => Math.random() * 85 + 5;

	return (
		<div className="stars">
			{list.map((e,i) => <div key={i} className="star" style={{
				left: `${random()}%`,
				top: `${random()}%`,
				fontSize: Math.random() * 10 + 2
			}}>•</div>)}
		</div>
	);
}