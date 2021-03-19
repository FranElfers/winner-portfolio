import React from 'react';

export default function Gif ({id, title, url}) {
	return <a href={'#'+id} className="gif">
		<h3>{ title }</h3>
		<img src={ url } alt={ title } />
	</a>
}

// En el href