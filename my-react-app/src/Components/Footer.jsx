import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as solidEnvelope, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';

// Adding brand icons to the library
library.add(fab, faCcVisa, faCcMastercard, faCcPaypal);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="payment-icons">
                    
                    <p>Payment Method </p>
                    
                    <FontAwesomeIcon icon={faCreditCard} />
                    <FontAwesomeIcon icon={['fab', 'cc-visa']} />
                    <FontAwesomeIcon icon={['fab', 'cc-mastercard']} />
                    <FontAwesomeIcon icon={['fab', 'cc-paypal']} />
                    
                </div>
                <div className="contact-info">
                   
                </div>
                <div className="social-icons">
                <p className="social">Contact Us</p>
                   
                    <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="mailto:contact@example.com"><FontAwesomeIcon icon={solidEnvelope} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;