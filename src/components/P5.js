import React, { useEffect } from 'react';
import './P5.css';
import Rain from './p5sketches/rain';
import Moon from './p5sketches/moon';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function P5(props) {
	const width = 300;

	return <>
		<Link to={'/'}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
		<div className="p5grid">
			<Moon width={width} />
			<Rain width={width} />
		</div>
	</>
}