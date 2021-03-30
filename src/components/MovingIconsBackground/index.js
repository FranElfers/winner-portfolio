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
import './MovingIconsBackground.css';

const icons = [faAddressBook,faBath,faShower,faThermometerHalf,faBalanceScale,faBell,faBicycle,faBolt,faBullhorn,faComments,faEnvelope,faGift,faGlassMartini,faGlobe,	faGraduationCap,faHeart,faHourglassEnd,faCommentDots,faAlignCenter,faBatteryFull,faBirthdayCake,faBomb,faBrain,faAccessibleIcon, faAmazon, faApple, faBitcoin, faBluetooth, faTwitter];
// Seguro que se puede resumir sin tener que importar todo fontawesome de una

export default function MovingIconsBackground() {
	return <section>
		{[...Array(20)].map((i) => 
			<div key={i} className="row">
				{[1,2].map(e => <div key={e}>
					{icons
						.sort((a,b)=>.5-Math.random()) // Aleatorizar orden
						.map(icon=><FontAwesomeIcon key={icon.name} icon={icon} />)
					}
				</div>)}
			</div>
		)}
	</section>
}