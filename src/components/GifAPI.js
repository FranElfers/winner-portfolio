import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ListOfGifs from "./ListOfGifs";
import './Gif.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


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
      <Link to={'/'}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      
			<input onChange={handleChange} type="text" value={keyword} placeholder="Buscar"/>
      <div></div>
		</form>

		<div id="listOfGifs">
			<ListOfGifs params={{keyword}} />
		</div>
	</>
}