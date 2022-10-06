import React from 'react';
import FeatureImg from '../../../assets/images/FeatureImg.png';
import FeatureImg2 from '../../../assets/images/FeatureImg2.png';
import Button from '../../atoms/Button/Button';

const Feature = () => {
    return (
        <div id='feature' className='feature'>
            {/* First container item info  */}
            <div className='containerItemFirst'>
                {/* container content */}
                <div className='containerContentFirstContainer'>
                    <h4>It started with a small idea</h4>
                    <br/>
                    <p>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                    <Button
                        content= 'View collection'
                        radius={0}
                        color='#FFFFFF'
                        fontSize={16}
                        borderColor='transparent'
                        backgroundColor='rgba(249, 249, 249, 0.15)'
                        className = 'btnViewCollection'
                    ></Button>
                </div>
                <img 
                    className='imgFirstContainer'
                    alt="First Img Description"
                    src={FeatureImg}></img>
            </div>

            {/* Second container item info */}
            <div className='containerItemSecond'>
                <img 
                    className='imgSecondContainer'
                    alt="Second Img Description"
                    src={FeatureImg2}></img>

                    {/* container content */}
                <div className='containerContentSecond'>
                    <h4>Our service isn't just personal, it's actually hyper personally exquisite</h4>
                    <p
                        className='paragraphFirst'
                    >When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                    <br/>
                    <p
                        className='paragraphSecond'
                    >Handmade, and lovingly crafted furniture and homeware is what we live, breath and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    <Button
                        content='Get in touch'
                        backgroundColor='#FFFFFF'
                        color='#2A254B'
                        fontSize={16}
                        borderColor='transparent'
                    ></Button>
                    
                </div>
            </div>
        </div>
    );
}

export default Feature;