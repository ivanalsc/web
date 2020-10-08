import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';



export const Footer = () => {
    return (
        <footer id='footer'>
        
            <FontAwesomeIcon icon={faInstagram} size='2x'/>
            <FontAwesomeIcon icon={faTwitter} size='2x'/>

            
        </footer>
    )
}
