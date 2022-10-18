import React from 'react'
import FacebookIcon from '../../../assets/icons/FacebookIcon.png';
import InstagramIcon from '../../../assets/icons/InstagramIcon.png';
import LinkedinIcon from '../../../assets/icons/LinkedinIcon.png';
import PinterestIcon from '../../../assets/icons/PinterestIcon.png';
import SkypeIcon from '../../../assets/icons/SkypeIcon.png';
import TwitterIcon from '../../../assets/icons/TwitterIcon.png';

const Footer = () => {
    return (
        <div
            className='footer'
            id='footer'
        >
            <div>
                {/* container Info and SocialLinks*/}
                <div className='containerInfoAndSocialLinks'>
                    {/* container Company Info */}
                    <div className='containerFooterInfo'>
                        <h3>Avion</h3>
                        <p>21 New York Street</p>
                        <p>New York City</p>
                        <p>United States of America</p>
                        <p>432 34</p>
                    </div>

                    {/* container Social links */}
                    <div className='containerSocialLinks'>
                        <h5>Social links</h5>
                        <div>
                            <div className='containerIconSocialLinks1'>
                                <img
                                    alt='Linkedin Icon'
                                    className='iconIn'
                                    src={LinkedinIcon}
                                ></img>
                                <img
                                    alt='Facebook Icon'
                                    className='iconFb'
                                    src={FacebookIcon}
                                ></img>
                                <img
                                    alt='Instagram Icon'
                                    className='iconIg'
                                    src={InstagramIcon}
                                ></img>
                            </div>
                            <div className='containerIconSocialLinks2'>
                                <img
                                    alt='Skype Icon'
                                    className='iconSkype'
                                    src={SkypeIcon}
                                ></img>
                                <img
                                    alt='Twitter Icon'
                                    className='iconTwitter'
                                    src={TwitterIcon}
                                ></img>
                                <img
                                    alt='Pinterest Icon'
                                    className='iconPinterest'
                                    src={PinterestIcon}
                                ></img>
                            </div>
                        </div>
                        
                    </div>
                </div>


                {/* container Menu, Categories, Our Company */}
                <div className='containerMenuCategoriesOurCompany'>
                    {/* container Footer Our Company */}
                    <div className='containerOurCompany'>
                        <h5>Our Company</h5>
                        <p>About us</p>
                        <p>Vacancies</p>
                        <p>Contact us</p>
                        <p>Privacy</p>
                        <p>Returns policy</p>
                    </div>

                    {/* container Footer Menu */}
                    <div className='containerFooterMenu'>
                        <h5>Menu</h5>
                        <p>New arrivals</p>
                        <p>Best sellers</p>
                        <p>Recently viewed</p>
                        <p>Popular this week</p>
                        <p>All products</p>
                    </div>

                    {/* container Categories */}
                    <div className='containerFooterCategories'>
                        <h5>Categories</h5>
                        <p>Crockery</p>
                        <p>Furniture</p>
                        <p>Homeware</p>
                        <p>Plant pots</p>
                        <p>Chairs</p>
                        <p>Crockery</p>
                    </div>
                </div>
            </div>

            {/*----- container with Line devide -----*/}
            <div className='containerLineDevide'>
                <div></div>
                <p>Copyright 2022 Avion LTD</p>
            </div>
        </div>
    );
}

export default Footer;