import React from 'react';

export default function Gif ({id, title, url}) {
	return <a href={'#'+id} className="gif">
		<img src={url} alt={title} title={title} />
	</a>
}