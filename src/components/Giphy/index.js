import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ListOfGifs from "./ListOfGifs";
import './Gif.css';
import Back from '../Back';
import useDebounce from "../../hooks/useDebounce";


export default function GifAPI() {
	const [ keyword, setKeyword ] = useState('');
	const [ loading, setLoading ] = useState(false);
  const history = useHistory();
  const lastKeyword = useDebounce(keyword, 1000);

  const handleChange = event => {
    setLoading(true)
    // ejecutar busqueda
    history.push(`/gifs/${lastKeyword}`);
    setKeyword(event.target.value);
  }

	return <>
    <Back to="/" />
		<form>
      <input onChange={handleChange} type="text" placeholder="Buscar"/>
		</form>

		<div id="listOfGifs">
			<ListOfGifs keyword={lastKeyword} loading={loading} setLoading={setLoading} />
		</div>
	</>
}