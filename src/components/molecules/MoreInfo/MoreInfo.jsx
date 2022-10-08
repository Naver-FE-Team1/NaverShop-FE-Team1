import React from 'react'
import FeatureCard from '../../atoms/FeatureCard/FeatureCard';
import DeliveryIcon from '../../../assets/icons/DeliveryIcon.png';
import PurchaseIcon from '../../../assets/icons/PurchaseIcon.png';
import SproutIcon from '../../../assets/icons/SproutIcon.png';
import CheckoutIcon from '../../../assets/icons/CheckmarkOutlineIcon.png';

const MoreInfo = () => {
    return(
        <div className='MoreInfo' id='MoreInfo'>
            <h4>
                What make our brand different
            </h4>
            <div>
                <FeatureCard
                    iconSrc={DeliveryIcon}
                    titleText='Next day as standard'
                    detailText='Order before 3pm and get your order the next day as standard'
                ></FeatureCard>
                <FeatureCard
                    iconSrc={CheckoutIcon}
                    titleText='Made by true artists'
                    detailText='Handmade crafted goods made with real passion and craftmanship'
                ></FeatureCard>
                <FeatureCard
                    iconSrc={PurchaseIcon}
                    titleText='Unbeatable prices'
                    detailText="For our materials and quality you won't find better prices anywhere"
                ></FeatureCard>
                <FeatureCard
                    iconSrc={SproutIcon}
                    titleText='Recycled packaging'
                    detailText='We use 100% recycled to ensure that our footprint is more manageable'
                ></FeatureCard>
            </div>
        </div>

    );
}
export default MoreInfo;