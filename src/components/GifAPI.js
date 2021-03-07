import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ListOfGifs from "./ListOfGifs";
import './Gif.css';


export default function GifAPI() {
  // const { params } = match;
	const [ keyword, setKeyword ] = useState('');
  const history = useHistory();

  // // se ejecuta cada vez que se envie el formulario
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   history.push(`/gifs/${keyword}`);
  //   console.log(keyword);
  // }
  
  // se ejecuta cada vez que hay un cambio en el formulario
  const handleChange = e => {
    history.push(`/gifs/${keyword}`);
    setKeyword(e.target.value);
  }

	return <>
		<form>
      <Link to={'/'}>🏠</Link>
			<input onChange={handleChange} type="text" value={keyword} />
		</form>

		<div id="listOfGifs">
			<ListOfGifs params={{keyword}} />
		</div>
	</>
}