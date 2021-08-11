import React from 'react';
import { useState, useEffect } from 'react';
import getGifs from '../../services/getGifs';
import Gif from './Gif';

export default function ListOfGifs({ keyword, loading, setLoading }) {
	const [ gifs, setGifs ] = useState([]);
	
  // Esto se ejecuta cada vez que el componente se renderiza
  useEffect(() => {
		setLoading(true);
		getGifs(keyword).then(res => {
			setGifs(res);
			setLoading(false);
		});
  }, [keyword]);
	// El segundo parametro es la dependencia

	if (loading) return <span className="loading">⏳</span>
	
	return gifs.map(({ id, title, url}) => 
		<Gif title={title} url={url} key={id} id={id} />
	)
}