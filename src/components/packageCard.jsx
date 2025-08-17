import '../styles/packageCard.css';
import formatPrice from '../utils/formatPrice.jsx';

export default function PackageCard (props) {
   return (
        <div className="package-container">
            <p className="package-header">{props.header}</p>
            <p className="package-description">
                {props.description}
            </p>
            <p className="package-price">{formatPrice(props.priceCents)}</p>
            <p className="package-per-month">Per month</p>
            <button className="choose-plan-button">Choose this plan</button>
            <div>
                <ul className='benefit-list'>
                    {props.benefit}
                </ul>
            </div>
        </div>
   )           
}
