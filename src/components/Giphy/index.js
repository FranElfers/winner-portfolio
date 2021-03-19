import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ListOfGifs from "./ListOfGifs";
import './Gif.css';
import Back from '../Back';


export default function GifAPI() {
	const [ keyword, setKeyword ] = useState('');
  const history = useHistory();

  // // se ejecuta cada vez que se envie el formulario
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   history.push(`/gifs/${keyword}`);
  //   console.log(keyword);
  // }
  let task;
  const handleChange = e => {
    clearTimeout(task);
    task = setTimeout(() => {
      // ejecutar busqueda
      history.push(`/gifs/${keyword}`);
      setKeyword(e.target.value);
    }, 2000)
  }

	return <>
    <Back to="/" />
		<form>
      <input onChange={handleChange} type="text" placeholder="Buscar"/>
		</form>

		<div id="listOfGifs">
			<ListOfGifs keyword={keyword} />
		</div>
	</>
}