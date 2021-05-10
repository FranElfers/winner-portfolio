import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon, faAmazon, faApple, faBitcoin, faBluetooth, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { 
	faAddressBook,
	faBath,
	faShower,
	faThermometerHalf,
	faBalanceScale,
	faBell,
	faBicycle,
	faBolt,
	faBullhorn,
	faComments,
	faEnvelope,
	faGift,
	faGlassMartini,
	faGlobe,
	faGraduationCap,
	faHeart,
	faHourglassEnd,
	faCommentDots,
	faAlignCenter,
	faBatteryFull,
	faBirthdayCake,
	faBomb,
	faBrain
} from '@fortawesome/free-solid-svg-icons';
import './styles/MovingIconsBackground.css';

const icons = [faAddressBook,faBath,faShower,faThermometerHalf,faBalanceScale,faBell,faBicycle,faBolt,faBullhorn,faComments,faEnvelope,faGift,faGlassMartini,faGlobe,	faGraduationCap,faHeart,faHourglassEnd,faCommentDots,faAlignCenter,faBatteryFull,faBirthdayCake,faBomb,faBrain,faAccessibleIcon, faAmazon, faApple, faBitcoin, faBluetooth, faTwitter];
// Seguro que se puede resumir sin tener que importar todo fontawesome de una

export default function MovingIconsBackground() {
	const iconRow = () => icons
		.sort((a,b)=>.5-Math.random()) // Aleatorizar orden
		.map(icon=> <FontAwesomeIcon key={icon.iconName} icon={icon} />)

	return <section id="moving-icons">
		{[...Array(20)].map((e,i) => 
			<div key={i} className="row">
				<div>{iconRow()}</div>
				<div>{iconRow()}</div>
			</div>
		)}
	</section>
}