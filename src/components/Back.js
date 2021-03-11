import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Back({to}) {
	return <Link to={to} id="back">
		<FontAwesomeIcon icon={faArrowLeft} />
	</Link>
}